import { useState } from 'react'

import './css/app.css'
import FileManager from './components/files'
import CodeEditor from './components/code'
import { storedFile } from './components/files/tab_file_uploader'

const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

function App() {
  const [activeCode, setActiveCode] = useState<string>('')
  const [files, setFiles] = useState([] as storedFile[])
  const [activeFile, setActiveFile] = useState<string>('')
  const [openedFiles, setOpenedFiles] = useState<string[]>([])

  const handleActiveFile = (id: string | null) => {
    console.log('🚀 ~ id:', id);
    if (id) {
      setActiveFile(id)
      setOpenedFiles([...openedFiles, id])
    } else {
      const newId = generateId()
      setFiles([...files, { 
        id: newId,
        name: `newFile`, 
        content: '', 
        uploaded: false 
      }])
      setActiveFile(newId)
    }
  }

  const handleCloseFile = (id: string) => {
    setOpenedFiles(openedFiles.filter((f) => f !== id))
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
          files={files}
          closeFile={handleCloseFile}
        />
      </div>
    </div>
  )
}

export default App
