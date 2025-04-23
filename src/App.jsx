import { useState } from 'react'
import './App.css'
import { Environment, OrbitControls, PerspectiveCamera, useEnvironment } from '@react-three/drei'
import { Suspense } from 'react'

function App() {
  const envMap = useEnvironment({ files: "http://localhost:5173/textures/envmap.hdr" || "https://car-physichs-react.vercel.app/textures/envmap.hdr" })

  return (
    <Suspense>
      <Environment map={envMap} background={"both"} />
      <PerspectiveCamera makeDefault position={[-6,3.9,6.21]} fov={40}/>
      <OrbitControls target={[-2.64, -0.71, 0.03]}/>
    </Suspense>
  )
}

export default App
