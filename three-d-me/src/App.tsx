import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import "./styles.css";

function App() {
 
  return (
    <div className="App">
      <Canvas>
        <MyAnimatedBox />
        <ambientLight args={[0xff0000]} intensity={0.1} />
        <directionalLight position={[0, 0, 5]} intensity={0.5} />
      </Canvas>
    </div>
  );
}

function MyAnimatedBox() {
  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()
    console.log(`Elapsed time ${a}`);
  })
  return (
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="royalblue" />
    </mesh>
  )
}

export default App;
