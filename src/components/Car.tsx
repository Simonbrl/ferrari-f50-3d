import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Shadow } from "@react-three/drei";
import { useRef } from "react";

const Car = () => {
  const glbRef = useRef<any>();
  const glbModel: any = useGLTF("/ferrari_f50_1995.glb");

  useFrame(() => {
    if (glbModel && glbRef.current) {
      const rotation = window.scrollY * 0.005;
      glbRef.current.rotation.y = rotation;
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
