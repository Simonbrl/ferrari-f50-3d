import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Vector3 } from "three";
import Car from "./Car";

const Scene = () => {
    const { clock, camera } = useThree();
    const cameraPositionRef = useRef<Vector3>(new Vector3(0, 2, 0));
    const animationDuration = 30;

    useEffect(() => {
       //scroll to top
         window.scrollTo(0, 0);
    }, []);

    useFrame(() => {
        const elapsedTime = clock.getElapsedTime();
        const t = Math.min(elapsedTime / animationDuration, .05);
        const cameraPosition = new Vector3().lerpVectors(cameraPositionRef.current, new Vector3(2, 2, 6), t);
        cameraPositionRef.current.copy(cameraPosition);
        camera.position.copy(cameraPosition);
    });

    useFrame(() => {
        if(window.scrollY >= 0 && window.scrollY < window.innerHeight){
            camera.position.x = 2 - (window.scrollY / window.innerHeight) * 6;
        }
        if(window.scrollY >= window.innerHeight && window.scrollY < window.innerHeight * 2){
            camera.position.x = -3 + ((window.scrollY - window.innerHeight) / window.innerHeight) * 6;
        }
        if(window.scrollY >= window.innerHeight * 2 && window.scrollY < window.innerHeight * 3){
            camera.position.x = 3 - ((window.scrollY - window.innerHeight * 2) / window.innerHeight) * 6;
        }
        if(window.scrollY >= window.innerHeight * 3 && window.scrollY < window.innerHeight * 4){
            camera.position.x = -3 + ((window.scrollY - window.innerHeight * 3) / window.innerHeight) * 6;
        }
        if(window.scrollY >= window.innerHeight * 4 && window.scrollY < window.innerHeight * 5){
            camera.position.x = 3 - ((window.scrollY - window.innerHeight * 4) / window.innerHeight) * 6;
        }
        if(window.scrollY >= window.innerHeight * 5 && window.scrollY < window.innerHeight * 6){
            camera.position.x = -3 + ((window.scrollY - window.innerHeight * 5) / window.innerHeight) * 6;
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 2, 0]} rotation={[-0.3, 0, 0]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[0, 10, 0]} intensity={1} angle={Math.PI / 4} penumbra={0.2} />
            <spotLight position={[0, 0, 10]} intensity={1} angle={Math.PI / 4} penumbra={0.2} />
            <spotLight position={[0, 0, -10]} intensity={1} angle={Math.PI / 4} penumbra={0.2} />
            <spotLight position={[10, 0, 0]} intensity={1} angle={Math.PI / 4} penumbra={0.2} />
            <spotLight position={[-10, 0, 0]} intensity={1} angle={Math.PI / 4} penumbra={0.2} />
            <Car />
        </>
    );
};

export default Scene;
