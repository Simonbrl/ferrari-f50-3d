import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import { useEffect, useState } from "react";
import { CarCard } from "./components/CarCard/CarCard";

const App = () => {
  const [colors, setColors] = useState<string[]>([
    "from-red-300",
    "to-red-100",
  ]);
  const pages = 5;
  const height = window.innerHeight * pages;
  const maxHeight = window.innerHeight * (pages - 1);
  console.log(maxHeight);

  const [isVisible, setIsVisible] = useState(true);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > maxHeight) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollPosition]);

  console.log(isVisible);

  return (
    <div>
      <div className="radial-gradient" style={{ height: height }}>
        <Canvas
          style={{
            position: isVisible ? "fixed" : "",
            display: isVisible ? "" : "none",
          }}
        >
          <Scene />
        </Canvas>
        <span className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl">
          <i className="fal fa-mouse-alt"></i>
        </span>
      </div>
      <div
        className={`bg-gradient-to-tr ${colors[0]} ${colors[1]} w-full h-screen flex justify-center items-center`}
      >
        <CarCard setColors={setColors} />
      </div>
    </div>
  );
};

export default App;
