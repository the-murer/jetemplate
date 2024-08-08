import { X } from "lucide-react";
import "../../css/files.css";
import { storedFile } from "../files/tab_file_uploader";


interface Props {
  editingFiles: string[];
  files: storedFile[];
  setActiveFile: (file: string | null) => void;
  activeFile: string;
  closeFile: (file: string) => void;
}

const ActiveCodeTab = ({ files, editingFiles, setActiveFile, activeFile, closeFile }: Props) => {
  return (
    <div className="row">
      {editingFiles.map((fileId: string, index: number) => {
          const file: storedFile = files.find((f) => f.id === fileId) || { id: null, name: 'newFile' };
          return (
            <div onClick={() => setActiveFile(file.id)} className="row">
              {file.name}
              <button key={index} onClick={() => closeFile(file.id)} className={activeFile === file ? "active-tab" : "tab"}>
                <X size={20} color="white" />
              </button>
            </div>
          );
        })}
      <button onClick={() => setActiveFile(null)}> 
        Add
        <button onClick={() => setActiveFile(null)}>
          <X size={20} color="white" />
        </button>
      </button>
      
    </div>
  );
};

export default ActiveCodeTab;