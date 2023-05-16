import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useState } from "react";
import { LittleCar } from "./LittleCar";

type Props = {
  setColors: (colors: string[]) => void;
};

export const CarCard = (props: Props) => {
  const { setColors } = props;

  const [color, setColor] = useState<string>("rosso_corsa"); // Gialo Modena, Rosso Corsa, Rosso Barchetta, argento nurburgring, nero daytona

  return (
    <div className="w-full max-w-5xl bg-white rounded-md shadow-lg mx-4 lg:mx-0">
      <div className="flex flex-col gap-4 p-8 md:flex-row">
        <div className="flex-1 lg:w-1/2">
          <div className="bg-gray-200 aspect-square rounded-md">
            <Canvas>
              <PerspectiveCamera
                  makeDefault
                  position={[0, 2, 7]}
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
              <LittleCar color={color} />
            </Canvas>
          </div>
        </div>
        <div className="flex-1 lg:w-1/2 flex flex-col">
          <div className="border-b border-gray-200 pb-4 mb-4">
            <h1 className="uppercase text-4xl text-gray-900 font-black mb-8">
              Ferrari F50 1995
            </h1>
            <p className="text-gray-500 text-sm">
              Découvrez la puissance ultime de la légendaire Ferrari F50, un
              bijou de performance et de sophistication pour les amateurs de
              sensations fortes. Vivez l'essence de la vitesse et de l'élégance
              avec ce chef-d'œuvre automobile intemporel.
            </p>
          </div>
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-4 mb-4">
            <div className="flex">
              <div className="flex-1 text-left">
                <strong>Puissance</strong>
              </div>
              <div className="flex-1 text-right">
                <span>520 ch</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 text-left">
                <strong>Poids</strong>
              </div>
              <div className="flex-1 text-right">
                <span>1 230 kg</span>
              </div>
            </div>
            <div className="flex">
              <div className="flex-1 text-left">
                <strong>Vitesse de pointe</strong>
              </div>
              <div className="flex-1 text-right">
                <span>325 km/h</span>
              </div>
            </div>
          </div>
          <div className="flex gap-x-4 w-full pb-4 mb-4">
            <div
              className={`flex-1 text-center ${
                color === "rosso_corsa" ? "border-b-2 border-red-500" : ""
              }`}
            >
              <button
                className="flex-1 bg-red-500 w-4 h-4 rounded-full"
                onClick={() => {
                  setColors(["from-red-300", "to-red-100"]),
                    setColor("rosso_corsa");
                }}
              ></button>
            </div>
            <div
              className={`flex-1 text-center ${
                color === "rosso_barchetta" ? "border-b-2 border-red-500" : ""
              }`}
            >
              <button
                className="flex-1 bg-red-800 w-4 h-4 rounded-full"
                onClick={() => {
                  setColors(["from-red-500", "to-red-300"]),
                  setColor("rosso_barchetta");
                }}
              ></button>
            </div>
            <div
              className={`flex-1 text-center ${
                color === "giallo_modena" ? "border-b-2 border-yellow-500" : ""
              }`}
            >
              <button
                className="flex-1 bg-yellow-500 w-4 h-4 rounded-full"
                onClick={() => {
                  setColors(["from-yellow-300", "to-yellow-100"]),
                  setColor("giallo_modena");
                }}
              ></button>
            </div>
            <div
              className={`flex-1 text-center ${
                color === "argento_nurburgring"
                  ? "border-b-2 border-gray-500"
                  : ""
              }`}
            >
              <button
                className="flex-1 bg-gray-500 w-4 h-4 rounded-full"
                onClick={() => {
                  setColors(["from-gray-300", "to-gray-100"]),
                  setColor("argento_nurburgring");
                }}
              ></button>
            </div>
            <div
              className={`flex-1 text-center ${
                color === "nero_daytona" ? "border-b-2 border-gray-900" : ""
              }`}
            >
              <button
                className="flex-1 bg-gray-900 w-4 h-4 rounded-full"
                onClick={() => {
                  setColors(["from-gray-900", "to-gray-700"]),
                  setColor("nero_daytona");
                }}
              ></button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row mt-auto justify-between items-center">
            <div className="font-bold text-2xl">
              <span>10,000</span>
              <span>€</span>
            </div>
            <button className="uppercase rounded-md bg-red-500 px-4 py-2 text-white font-bold">Réserver un essai</button>
          </div>
        </div>
      </div>
    </div>
  );
};
