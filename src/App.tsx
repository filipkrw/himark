import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "@/components/ui/button";

function App() {
  const [greetMsg, setGreetMsg] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name: "Himark" }));
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Button onClick={greet}>Hi</Button>
      <p>{greetMsg}</p>
    </div >
  );
}

export default App;
