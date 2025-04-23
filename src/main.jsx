import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber"
import App from './App.jsx'
import Track from './track.jsx'
import Ground from './Ground.jsx'
import Car from './Car.jsx'
import { Physics } from '@react-three/cannon'
createRoot(document.getElementById('root')).render(
  <Canvas>
    <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>
      <App />
      <Car/>
      <Track/>
      <Ground/>
    </Physics>
</Canvas>,
)
