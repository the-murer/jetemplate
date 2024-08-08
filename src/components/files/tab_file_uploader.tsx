import { FileUp } from "lucide-react";
import React, { useState } from "react";


export type storedFile = {
  id: string;
  name: string;
  content: string;
  uploaded?: boolean
}

type Props = {
  setUploadedFiles: (files: storedFile[]) => void;
};

const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const FileUploader = ({ setUploadedFiles }: Props) => {
  const [files, setFiles] = useState<storedFile[]>([]);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    const fileData: storedFile[]  = [];
  
    const readFile = (file: File) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve({ 
          id: generateId(),
          name: file.name, 
          content: e?.target?.result || '', 
          uploaded: true 
        });
        reader.onerror = reject;
        reader.readAsText(file); // You can use readAsDataURL or other methods depending on file type
      });
    };
  
    const readAllFiles = async () => {
      try {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          const data = await readFile(file);
          if (data) {
            fileData.push(data as storedFile);
          }
        }
      } catch (error) { console.error('Error reading files:', error); }
    };
  
    await readAllFiles();
    console.log("🚀 ~ handleFileChange ~ fileData:", fileData)
    setFiles(fileData);
  };
  
    

  const handleFileUpload = () => {
    setUploadedFiles(files);
    setFiles([]);
  };

  console.log("🚀 ~ handleFileUpload ~ files:", files?.length)
  return (
    <div className="explorer">
      <p className="title">Upload Files</p>
      <input id="file-upload" type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
      <label htmlFor="file-upload" className="file-upload-label">
        <FileUp style={{ marginRight: '10px', marginBottom: '-5px' }} />
        Upload Files
      </label>
      {!!files.length && 
      <>
      <p className="title">Loaded Files:</p>
      <div>
        <ul>
          {files.map((item: storedFile) => (
            <div key={`uploaded-${item.id}`}>
              <div className="file">
                <FileUp />
                <p>{item.name}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
      <button onClick={handleFileUpload}>Upload Files</button>
      </>
      }

    </div>
  );
};

export default FileUploader;
