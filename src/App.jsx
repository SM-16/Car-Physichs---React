import { useState } from 'react'
import './App.css'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'

function App() {

  return (
    <Suspense>
      <Environment 
        files={    "http://localhost:5173/textures/envmap.hdr"}
        background={"both"}  
        loader={RGBELoader}
      />
      <PerspectiveCamera makeDefault position={[-6,3.9,6.21]} fov={40}/>
      <OrbitControls target={[-2.64, -0.71, 0.03]}/>
    </Suspense>
  )
}

export default App
