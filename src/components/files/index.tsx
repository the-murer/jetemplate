import { useState } from "react";

import ActiveTab from "./active_tab";
import Config from "./tab_config";
import FileUploader, { storedFile } from "./tab_file_uploader";
import FileListener from "./tab_file_listener";
import '../../css/files.css';
import CodeTab from "./tab_code";

interface Props {
  setCode: (code: string) => void;
  attachFiles: (files: File[]) => void;
}

const FileManager = ({ setCode, attachFiles }: Props) => {
  const [tab, setTab] = useState('list');
  const [files, setFiles] = useState<storedFile[]>([]);

  return (
    <div style={{ width: "20vw", display: 'flex', flexDirection: 'column' }}>
      <ActiveTab tab={tab} setTab={setTab} />

      {tab === 'list' && 
      <FileListener 
        files={files} 
        savedCodes={[]} 
        setFiles={setFiles} 
        setSavedCodes={setFiles}
        setCode={(item: storedFile) => setCode(item.content)}
      />}
      {tab === 'upload' && <FileUploader setUploadedFiles={setFiles} />}
      {tab === 'config' && <Config />}
      {tab === 'code' && <CodeTab />}
      
    </div>
  );
};

export default FileManager;
