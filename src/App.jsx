import { useState } from "react"
import Sidebar from "./components/Sidebar"

function App() {

  const [isConnected, setIsConnected] = useState(true);

  return (
    <>
      <Sidebar isConnected={isConnected}></Sidebar>
    </>
  )
}

export default App
