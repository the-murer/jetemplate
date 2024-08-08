/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ChevronRight, FileJson, Trash } from "lucide-react";
import { storedFile } from "./tab_file_uploader";

type Props = {
  files: storedFile[];
  savedCodes: any[];
  setFiles: (files: storedFile[]) => void;
  setSavedCodes: (savedCodes: any[]) => void;
  setCode: any;
};

const FileListener = ({
  files,
  savedCodes,
  setFiles,
  setSavedCodes,
  setCode,
}: Props) => {
  const [showUploaded, setShowUploaded] = useState(true);
  const [showSaved, setShowSaved] = useState(false);

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const removeSavedCode = (index: number) => {
    const newSavedCodes = [...savedCodes];
    newSavedCodes.splice(index, 1);
    setSavedCodes(newSavedCodes);
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
            {files.map((item, index: number) => (
              <div key={item.name}>
                <div className="file">
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={() => setCode(item)}>
                    <FileJson style={{ position: "relative", top: "10px" }} />
                    <p>{item.name}</p>
                  </div>
                  <button style={{ marginLeft: "auto" }} onClick={() => removeFile(index)} >
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
            {savedCodes.map((item: any, index: number) => (
              <div key={item.name}>
                <div className="file">
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }} onClick={() => setCode(item)}>
                    <FileJson style={{ position: "relative", top: "10px" }} />
                      <p>{item.name}</p>
                    </div>
                    <button onClick={() => removeSavedCode(index)}>
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
