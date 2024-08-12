import { useState } from "react";

import ActiveTab from "./active_tab";
import Config from "./tab_config";
import FileUploader, { storedFile } from "./tab_file_uploader";
import FileListener from "./tab_file_listener";
import '../../css/files.css';
import CodeTab from "./tab_code";

interface Props {
  setActiveCode: (code: string) => void;
  setActiveFile: (id: string) => void;
  setFiles: (files: storedFile[]) => void;
  files: storedFile[];
}

const FileManager = ({ setActiveCode, setActiveFile, files, setFiles }: Props) => {
  const [tab, setTab] = useState('list');

  const setCode = (item: storedFile) => {
    setActiveCode(item.content)
    setActiveFile(item.id)
  }

  const handleUploadedFiles = (uploadedFiles: storedFile[]) => {
    setFiles([...files, ...uploadedFiles])
  }

  return (
    <div style={{ width: "20vw", display: 'flex', flexDirection: 'column' }}>
      <ActiveTab tab={tab} setTab={setTab} />

      {tab === 'list' && 
      <FileListener 
        files={files} 
        savedCodes={[]} 
        setFiles={setFiles} 
        setSavedCodes={setFiles}
        setCode={setCode}
        setActiveFile={setActiveFile}
      />}
      {tab === 'upload' && <FileUploader setUploadedFiles={handleUploadedFiles} />}
      {tab === 'config' && <Config />}
      {tab === 'code' && <CodeTab />}
      
    </div>
  );
};

export default FileManager;
