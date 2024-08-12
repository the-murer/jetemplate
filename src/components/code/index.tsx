import { Editor } from "@monaco-editor/react";

import "../../css/code.css";
import ActiveCodeTab from "./current_file";
import { storedFile } from "../files/tab_file_uploader";

type Props = {
    activeFile: string;
    openedFiles: string[];
    files: storedFile[];
    setActiveFile: (file: string | null) => void;
    closeFile: (id: string) => void;
    code: string;
    setCode: (code: string) => void;
}

const CodeEditor = ({ code, setCode, openedFiles, setActiveFile, activeFile, closeFile, files }: Props) => {

  return (                        
    <div className="code-editor" style={{ marginLeft: '5px' }}>
      <ActiveCodeTab 
        editingFiles={openedFiles} 
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        closeFile={closeFile}
        files={files}
      />
      <Editor
        height="90vh"
        width="40vw"
        language="javascript"
        value={code}
        onChange={(value) => setCode(value || '')}
        options={{
          minimap: {
            enabled: false,
          },
          scrollbar: {
            verticalScrollbarSize: 0,
            horizontalScrollbarSize: 0,
          },
          fontSize: 14,
          wordWrap: 'on',
          lineNumbers: 'on',
          lineNumbersMinChars: 3,
          tabSize: 2,
          readOnly: false,
        }}
      />
    </div>
  );
};      

export default CodeEditor;