import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay";

const App = () => {
  const height = window.innerHeight * 6;

  return (
    <div className="radial-gradient" style={{height: height}}>
      <Canvas style={{ position: "fixed" }}>
        <Scene />
      </Canvas>
      <Overlay />
      <span className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl">
        <i className="fal fa-mouse-alt"></i>
      </span>
    </div>
  );
};

export default App;
