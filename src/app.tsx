import { useState } from 'react'

import './css/app.css'
import FileManager from './components/files'
import CodeEditor from './components/code'
import { storedFile } from './components/files/tab_file_uploader'

function App() {
  const [activeCode, setActiveCode] = useState<string>('')
  const [files, setFiles] = useState([] as storedFile[])
  const [activeFile, setActiveFile] = useState<string>('')
  const [openedFiles] = useState<string[]>([])

  const handleActiveFile = (file: string | null) => {
    if (file) {
      setActiveFile(file)
    } else {
      setFiles([...files, { name: `newFile`, content: '' }])
      setActiveFile('newFile')
    }
  }


  return (
    <div style={{ backgroundColor: 'black', width: '100vw', maxHeight: '100vh' }}>
      <div className='row'>
        <FileManager 
          files={files} 
          setFiles={setFiles} 
          setActiveFile={handleActiveFile}
          setActiveCode={(code: string) => setActiveCode(code)} 
        />
        <CodeEditor 
          code={activeCode} 
          setCode={(code: string) => setActiveCode(code)} 
          activeFile={activeFile}
          setActiveFile={handleActiveFile}
          openedFiles={openedFiles}
          closeFile={(name) => console.log(name)}
        />
      </div>
    </div>
  )
}

export default App
