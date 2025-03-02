# DocSwitch

A MERN-based web application for converting files between different formats. Users can upload files and select the desired output format for conversion.

## Features
- Upload files for conversion
- Supports multiple file formats (Word to PDF, PDF to Word, etc.)
- Uses CloudConvert API for processing
- Dynamic frontend built with React and Vite
- Backend powered by Express and Multer for file handling

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript, Bootstrap, React.JS, Axios
- **Backend:** Node.js, Express, Multer, MongoDB
- **API:** Api_V2_CloudConvert
- **Storage:** Temporarily Strored in the backend and deleted after the file is converted(will implement cloud-based options in future versions)

## Installation
### Prerequisites
- Node.js and npm installed
- A CloudConvert API key (Path :- Profile->DashBoard->Authorization->API Keys->Click On Create New API Key)

### Steps to Run
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/file-converter.git
   cd file-converter
   ```
2. **Install dependencies:**
   ```sh
   # Install frontend dependencies
   cd endUser
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the `server` directory:
   ```sh
   CLOUDCONVERT_API_KEY=your_api_key_here
   ```
4. **Run the backend server:**
   ```sh
   cd server
   node index.js
   ```
5. **Run the frontend:**
   ```sh
   cd endUser
   npm run dev
   ```
6. **Access the app:**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
1. Upload a file
2. Select the desired output format Component
3. Click "Convert" to process the file
4. Click On Download button after the file is converted 

## Troubleshooting
- Ensure the API key is valid
- Debug/console logs for errors
- Restart the backend server if necessary

## Contribute
Feel free to fork this repository, submit issues, or contribute via pull requests.


