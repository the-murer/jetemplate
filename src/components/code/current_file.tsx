import { Plus, X } from "lucide-react";
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
    <div style={{ marginBottom: '5px' }} className="row">
      {editingFiles.map((fileId: string) => {
          const file: storedFile | undefined = files.find((f) => f.id === fileId);
          if (!file) return null;
          const active = activeFile === file.id 
          return (
            <div className={active ? "active-code-tab" : "code-tab"}>
              <div style={{ backgroundColor: '#ff00ff', marginTop: '2.5px' }} onClick={() => setActiveFile(file.id)} >
                {file.name}
              </div>
              <X 
                onClick={() => closeFile(file.id)} 
                size={20} 
                color="white"
                style={{ marginLeft: '5px', marginTop: '4px', backgroundColor: 'red' }}
              />
            </div>
          );
        })}
      <button onClick={() => setActiveFile(null)}>
        <p>
          New
        </p>
        <Plus size={20} color="white" />
      </button>
    </div>
  );
};

export default ActiveCodeTab;