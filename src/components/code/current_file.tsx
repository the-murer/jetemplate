import { X } from "lucide-react";
import "../../css/files.css";


interface Props {
  editingFiles: string[];
  setActiveFile: (file: string | null) => void;
  activeFile: string;
  closeFile: (file: string) => void;
}

const ActiveCodeTab = ({ editingFiles, setActiveFile, activeFile, closeFile }: Props) => {
  return (
    <div className="row">
      {editingFiles.map((file: string, index: number) => {
          return (
            <div onClick={() => setActiveFile(file)} className="row">
              {file}
              <button key={index} onClick={() => closeFile(file)} className={activeFile === file ? "active-tab" : "tab"}>
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