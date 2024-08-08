/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ChevronRight, FileJson, Trash } from "lucide-react";
import { storedFile } from "./tab_file_uploader";

type Props = {
  savedCodes: any[];
  setSavedCodes: (savedCodes: any[]) => void;
  files: storedFile[];
  setFiles: (files: storedFile[]) => void;
  setActiveFile: (id: string) => void;
  setCode: any;
};

const FileListener = ({
  files,
  setFiles,
  setCode,
  setActiveFile,
}: Props) => {
  const [showUploaded, setShowUploaded] = useState(true);
  const [showSaved, setShowSaved] = useState(false);
  const uploadedFiles = files.filter((f) => f.uploaded);
  const savedFiles = files.filter((f) => !f.uploaded);


  const setFileAsActive = (item: storedFile) => {
    setActiveFile(item.id)
    setCode(item)
  }

  const removeFile = (id: string) => {
    const newFiles = [ ...files.filter((f) => f.id !== id)];
    setFiles(newFiles);
  };

  return (
    <div className="explorer">
      <p className="title">Explorer</p>
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="uploaded-checkbox"
          checked={showUploaded}
          onChange={() => setShowUploaded(!showUploaded)}
        />
        <label htmlFor="uploaded-checkbox" className="heading">
          <ChevronRight
            className="chevron"
            style={showUploaded ? { transform: "rotate(90deg)" } : {}}
          />
          Uploaded files
        </label>
        {showUploaded && (
          <div className="files">
            {uploadedFiles.map((item) => (
              <div key={`uploaded-saved-${item.id}`}>
                <div className="file">
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={() => setFileAsActive(item)}>
                    <FileJson style={{ position: "relative", top: "10px" }} />
                    <p>{item.name}</p>
                  </div>
                  <button style={{ marginLeft: "auto" }} onClick={() => removeFile(item.id)} >
                    <Trash size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="saved-checkbox"
          checked={showSaved}
          onChange={() => setShowSaved(!showSaved)}
        />
        <label htmlFor="saved-checkbox" className="heading">
          <ChevronRight
            className="chevron"
            style={showSaved ? { transform: "rotate(90deg)" } : {}}
          />
          Saved codes
        </label>
        {showSaved && (
          <div className="files">
            {savedFiles.map((item: any) => (
              <div key={`saved-${item.id}`}>
                <div className="file">
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={() => setFileAsActive(item)}>
                    <FileJson style={{ position: "relative", top: "10px" }} />
                      <p>{item.name}</p>
                    </div>
                    <button style={{ marginLeft: "auto" }} onClick={() => removeFile(item.id)}>
                      <Trash size={16} />
                    </button>
                  </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileListener;
