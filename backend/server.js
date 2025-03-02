//Note : Don't log the sensitive information like Apikey's while the server is running..

import express from 'express';
import multer from 'multer';
import CloudConvert from 'cloudconvert';
import fs from 'fs';
import axios from 'axios';
import path from 'path';
import cors from 'cors';


const app = express();
const upload = multer({ dest: 'uploads/' });   // Temporary storage for uploaded files


app.use(cors());



const apikey = process.env.CLOUDC_APIK;         //Env varible for storing Cloud convert APIKEY

// console.log('API Key:', apikey);             // Debug the API key..

const cloudConvert = new CloudConvert(apikey);       

// File upload and conversion's Handling.. 
app.post('/convert', upload.single('file'), async (req, res) => {
    try {
        //console.log('Uploaded file:', req.file);    // Debug the uploaded file..

        const inputFilePath = req.file.path;
        const outputFormat = req.body.outputFormat;

    // Step 1 : Implemented cloud convert v2 jobs according to CLOUDCONVERT API DOCUMENTATION.. 
        const job = await cloudConvert.jobs.create({
            tasks: {
                'import-upload': {
                    operation: 'import/upload'
                },
                'convert-file': {
                    operation: 'convert',
                    input: ['import-upload'],
                    output_format: outputFormat,   
                    engine: 'libreoffice' // You can use various other engines mentioned in cloud convert API Doc.. 
                },
                'export-url': {
                    operation: 'export/url',
                    input: ['convert-file']
                }
            }
        });

        console.log('CloudConvert Job Created:', job); 

        // Step 2: Uploading the input file
        const uploadTask = job.tasks.find(task => task.name === 'import-upload');
        const readStream = fs.createReadStream(inputFilePath);
        await cloudConvert.tasks.upload(uploadTask, readStream, req.file.originalname);

        console.log('File uploaded to CloudConvert');     // Debugging the uploaded file..

        // Step 3: Waiting for the job to complete the conversion task..
        const completedJob = await cloudConvert.jobs.wait(job.id);

        console.log('CloudConvert Job Completed:', completedJob); // Logging the completed job

        // Step 4: Get the export task result
        const exportTask = completedJob.tasks.find(task => task.name === 'export-url');
        const downloadUrl = exportTask.result.files[0].url;

        // console.log('Download URL:', downloadUrl); // Logging the download URL..

        // Step 5: Sending the download URL to the frontend in json format..
        res.json({ downloadUrl });

        // Deleting the temporary uploaded files to server..
        fs.unlinkSync(inputFilePath);

    } catch (error) {
        console.error('Error during conversion:', error.response?.data || error.message || error); // Log detailed error
        res.status(500).json({ error: 'Conversion failed', details: error.message });
    }
});

// Log a message when a file is downloaded
app.get('/download', (req, res) => {
    const fileUrl = req.query.url; // Get the download URL from the query parameters
    console.log(`File downloaded: ${fileUrl}`); 

    res.redirect(fileUrl);
});



// Start of server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});





