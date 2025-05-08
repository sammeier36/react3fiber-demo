import { Canvas } from '@react-three/fiber';

export default function ThreeCanvas() {
    return (
            <Canvas>
                <mesh>
                    <icosahedronGeometry args={[3,100]} />
                    <meshStandardMaterial color="white" />
                </mesh>
                <directionalLight position={[3, 3, 0]} color={"red"} />
                <directionalLight position={[-3, 3, 0]} color={"blue"} />
                <directionalLight position={[0, 0, 5]} color={"yellow"} />
        </Canvas>
    );
}