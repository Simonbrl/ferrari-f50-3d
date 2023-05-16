import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import "./carStyle.css";

type Props = { color: string };

export const LittleCar = (props: Props) => {
  const { color } = props;

  const gltf = useGLTF("/ferrari_f50_1995_card.glb");

  const colors = {
    giallo_modena: "#eed23c", // eed23c
    rosso_corsa: "#d40000", // c90301
    rosso_barchetta: "#c00000", // 830717
    argento_nurburgring: "#a5a5a5", // a5a5a5
    nero_daytona: "#1c1c1c", // 1c1c1c
  };

  useFrame(() => {
    gltf.scene.rotation.y += 0.005;

    const hex = colors[color as keyof typeof colors].replace("#", "");
    gltf.materials.Ferrari_F50_1995_by_Alex_Ka.color.setHex(`0x${hex}`);
  });

  return <primitive object={gltf.scene} />;
};
