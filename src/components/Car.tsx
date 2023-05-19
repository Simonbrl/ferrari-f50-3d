import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Shadow } from "@react-three/drei";
import { useRef } from "react";

const Car = () => {
  const glbRef = useRef<any>();
  const glbModel: any = useGLTF("/ferrari_f50_1995.glb");

  useFrame(() => {
    glbRef.current.rotation.y = window.scrollY * 0.002;
    if(window.scrollY >= 0 && window.scrollY < window.innerHeight){
      glbRef.current.rotation.x = 0 + (window.scrollY / window.innerHeight) * 0.6;
    }
    if(window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight * 2){
      glbRef.current.rotation.x = 0.6 - ((window.scrollY - window.innerHeight) / window.innerHeight) * 0.6;
    }
    if(window.scrollY >= window.innerHeight * 2 && window.scrollY < window.innerHeight * 3){
      glbRef.current.rotation.x = 0 + ((window.scrollY - window.innerHeight * 2) / window.innerHeight) * 0.6;
    }
    if(window.scrollY >= window.innerHeight * 3 && window.scrollY < window.innerHeight * 4){
      glbRef.current.rotation.x = 0.6 - ((window.scrollY - window.innerHeight * 3) / window.innerHeight) * 0.6;
    }
    if(window.scrollY >= window.innerHeight * 4 && window.scrollY < window.innerHeight * 5){
      glbRef.current.rotation.x = 0 + ((window.scrollY - window.innerHeight * 4) / window.innerHeight) * 0.6;
    }
    if(window.scrollY >= window.innerHeight * 5 && window.scrollY < window.innerHeight * 6){
      glbRef.current.rotation.x = 0.6 - ((window.scrollY - window.innerHeight * 5) / window.innerHeight) * 0.6;
    }
  });

  return (
    <group ref={glbRef}>
      <primitive object={glbModel.scene} />
      <Shadow position={[0, 0, 0]} scale={[5, 10, 0]} opacity={2} />
    </group>
  );
};

export default Car;
