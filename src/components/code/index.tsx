import { Editor } from "@monaco-editor/react";

import "../../css/code.css";
import ActiveCodeTab from "./current_file";

type Props = {
    activeFile: string;
    openedFiles: string[];
    setActiveFile: (file: string | null) => void;
    closeFile: (file: string | null) => void;
    code: string;
    setCode: (code: string) => void;
}

const CodeEditor = ({ code, setCode, openedFiles, setActiveFile, activeFile, closeFile }: Props) => {

  return (                        
    <div className="code-editor">
      <ActiveCodeTab 
        editingFiles={openedFiles} 
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        closeFile={closeFile}
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