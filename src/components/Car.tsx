import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Shadow } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {
  color: string;
};

interface RotatingGLBProps {
  src: string;
}

const RotatingGLB: React.FC<RotatingGLBProps> = ({ src }) => {
  const glbRef = useRef<any>();
  const [model, setModel] = useState<any>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(src, setModel);
  }, [src]);

  useFrame(() => {
    if (model && glbRef.current) {
      const rotation = window.scrollY * 0.05;
      glbRef.current.rotation.y = rotation;
    }
  });

  return (
    <mesh ref={glbRef}>{model && <primitive object={model.scene} />}</mesh>
  );
};

const Car = (props: Props) => {
  const { color } = props;
  const glbRef = useRef<any>();
  const gltf: any = useGLTF("/ferrari_f50_1995.glb");
  const glbUrl = "/ferrari_f50_1995.glb";
  const [model, setModel] = useState<any>(null);

  const colors = {
    giallo_modena: "#eed23c", // eed23c
    rosso_corsa: "#d40000", // c90301
    rosso_barchetta: "#c00000", // 830717
    argento_nurburgring: "#a5a5a5", // a5a5a5
    nero_daytona: "#1c1c1c", // 1c1c1c
  };

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(glbUrl, setModel);
  }, [glbUrl]);

  useFrame(() => {
    if (model && glbRef.current) {
      const rotation = window.scrollY * 0.005;
      glbRef.current.rotation.y = rotation;
    }
  });

  useFrame(() => {
    // gltf.scene.rotation.y += 0.005;

    const hex = colors[color as keyof typeof colors].replace("#", "");
    gltf.materials.Ferrari_F50_1995_by_Alex_Ka.color.setHex(`0x${hex}`);
  });

  return (
    <>
      <mesh ref={glbRef}>{model && <primitive object={model.scene} />}</mesh>
      <Shadow position={[0, 0, 0]} scale={[5, 10, 0]} opacity={2} />
    </>
  );
};

export default Car;
