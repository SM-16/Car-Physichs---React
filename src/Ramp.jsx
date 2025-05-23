import { useTrimesh } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export function Ramp(){
    const result = useLoader(GLTFLoader,  ("https://car-physichs-react.vercel.app/models/ramp.glb"))
    const geometry = result.scene.children[0].geometry
    const vertices = geometry.attributes.position.array
    const indices = geometry.index.array

    const [ref] = useTrimesh(
        () => ({
            args:[vertices, indices],
            mass: 0,
            type: "Static",
        }),
        useRef(null)
    )
}