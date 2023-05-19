import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Overlay from "./components/Overlay";
import { useState } from "react";
import { CarCard } from "./components/CarCard";

const App = () => {
  const pages = 6;
  const height = window.innerHeight * pages;

  const [colors, setColors] = useState<string[]>([
    "from-red-300",
    "to-red-100",
  ]);

  return (
    <div>
      <div className="radial-gradient" style={{ height: height }}>
        <Canvas style={{ position: "fixed" }}>
          <Scene />
        </Canvas>
        <Overlay />
        <span className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl">
          <i className="fal fa-mouse-alt"></i>
        </span>
      </div>
      <div className={`relative bg-gradient-to-tr ${colors[0]} ${colors[1]} w-full h-screen flex justify-center items-center`}>
        <CarCard setColors={setColors} />
      </div>
</div>
  );
};

export default App;
