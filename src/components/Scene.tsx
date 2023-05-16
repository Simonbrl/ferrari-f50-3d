import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import Car from "./Car";

const Scene = () => {
  const { clock, camera } = useThree();
  const cameraPositionRef = useRef<Vector3>(new Vector3(0, 2, 0));
  const animationDuration = 30;
  const finalCameraPosition = new Vector3(0, 2, 6);

  useFrame(() => {
    const elapsedTime = clock.getElapsedTime();
    const t = Math.min(elapsedTime / animationDuration, 1); // Valeur t normalisée entre 0 et 1
    const cameraPosition = new Vector3().lerpVectors(
      cameraPositionRef.current,
      finalCameraPosition,
      t
    );

    cameraPositionRef.current.copy(cameraPosition);
    camera.position.copy(cameraPosition);

    if (t === 1) return;
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 2, 0]}
        rotation={[-0.3, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[0, 10, 0]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
      />
      <spotLight
        position={[0, 0, 10]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
      />
      <spotLight
        position={[0, 0, -10]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
      />
      <spotLight
        position={[10, 0, 0]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
      />
      <spotLight
        position={[-10, 0, 0]}
        intensity={1}
        angle={Math.PI / 4}
        penumbra={0.2}
      />
      <Car color={"rosso_corsa"} />
    </>
  );
};

export default Scene;
