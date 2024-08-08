import { Bolt, Code, File, Upload } from "lucide-react";
import React from "react";

interface ActiveTabProps {
  tab: string;
  setTab: (tab: string) => void;
}

const ActiveTab: React.FC<ActiveTabProps> = ({ tab, setTab }) => {
  return (
    <div className="row">
      <button onClick={() => setTab('list')} className={tab ? "active-tab" : "tab"}> 
       <File />
        List
      </button>
      <button onClick={() => setTab('upload')} className={tab ? "active-tab" : "tab"}>
        <Upload />
        Upload
      </button>
      <button onClick={() => setTab('config')} className={tab ? "active-tab" : "tab"}>
        <Code />
        Code
      </button>
      <button onClick={() => setTab('config')} className={tab ? "active-tab" : "tab"}>
        <Bolt />
        Config
      </button>
    </div>
  );
};

export default ActiveTab;