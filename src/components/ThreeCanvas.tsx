import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function ThreeCanvas() {
    return (
            <Canvas className="draw">
                <mesh>
                    <icosahedronGeometry args={[1,16]} />
                    <meshStandardMaterial color="white" roughness={0} metalness={1}/>
                </mesh>
                {/* <directionalLight position={[3, 3, 0]} color={"red"} />
                <directionalLight position={[-3, 3, 0]} color={"blue"} />
                <directionalLight position={[0, 0, 5]} color={"yellow"} /> */}
                <OrbitControls makeDefault />
                <Environment preset="city" background/>
        </Canvas>
    );
}