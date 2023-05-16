import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

const App = () => {
  return (
    <div style={{ height: "2500px", backgroundColor: "grey" }}>
      <Canvas style={{ position: "fixed" }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default App;
