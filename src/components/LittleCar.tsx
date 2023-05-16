import { Shadow, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

type Props = { color: string };

export const LittleCar = (props: Props) => {
  const { color } = props;

  const glbRef = useRef<any>();
  const glbModel = useGLTF("/ferrari_f50_1995_card.glb");

  const colors = {
    giallo_modena: "#eed23c",
    rosso_corsa: "#d40000",
    rosso_barchetta: "#c00000",
    argento_nurburgring: "#a5a5a5",
    nero_daytona: "#1c1c1c",
  };

  useFrame(() => {
    glbRef.current.rotation.y += 0.005;

    const hex = colors[color as keyof typeof colors].replace("#", "");
    (glbModel as any).materials.Ferrari_F50_1995_by_Alex_Ka.color.setHex(`0x${hex}`);
  });

  return (
    <group ref={glbRef}>
      <primitive object={glbModel.scene} />
      <Shadow position={[0, 0, 0]} scale={[4, 7, 0]} opacity={2} />
    </group>
  );
};
