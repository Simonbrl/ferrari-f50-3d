import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";

const App = () => {
  const pages = 5
  const height = window.innerHeight * pages;
  return (
    <div className="radial-gradient" style={{height: height}}>
      <Canvas style={{ position: "fixed" }}>
        <Scene />
      </Canvas>
      <span className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl">
        <i className="fal fa-mouse-alt"></i>
      </span>
    </div>
  );
};

export default App;
