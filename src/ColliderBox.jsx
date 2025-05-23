import { useBox } from "@react-three/cannon";

const debug = true;

export function ColliderBox({position, scale}){
    useBox(()=>({
        args: scale,
        position,
        type: "Static"
    }))

    return (
        debug && (
            <mesh position={position}>
                <boxGeometry args={scale}/>
                <meshBasicMaterial visible={false}/>
            </mesh>
        )
    )
}