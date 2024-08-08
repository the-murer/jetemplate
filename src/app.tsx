import './css/app.css'
import FileManager from './components/files'
import { Editor } from '@monaco-editor/react'
import { useState } from 'react'

function App() {
  const [code, setCode] = useState('')

  return (
    <div style={{ backgroundColor: 'black', width: '100vw', maxHeight: '100vh' }}>
      <div className='row'>
        <FileManager setCode={(code: string) => setCode(code)} attachFiles={() => console.log(null)} />
        <Editor
          value={code}
          onChange={(value: string | undefined) => setCode(value || '')}
          height="90vh" 
          width="40vw" 
          defaultLanguage="javascript" 
          defaultValue="// some comment"
        />
      </div>
    </div>
  )
}

export default App
