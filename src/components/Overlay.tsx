import { motion } from "framer-motion";
import { Pages } from "../data";
import { useEffect, useState } from "react";

const Overlay = () => {

    const [pages, setPages] = useState<any>([]);

    const initial = {
        opacity: 0,
        right: -100,
    };

    const animate = {
        opacity: 1,
        right: 0,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    };

    const exit = {
        opacity: 0,
        right: -100,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    };

    useEffect(() => {
        setTimeout(() => setPages(Pages), 2000);
    }, []);

    return (
        pages.map((p: {id: number, title: string, subtitle: string, content?: string}, index: number) => (
            <motion.div key={index} 
                className={`absolute top-1/2 text-white -translate-y-1/2 ${index % 2 === 0 ? "text-right right-0": "text-left left-0"} mx-32`} 
                initial={initial} animate={animate} exit={exit} 
                style={{top: `${(window.innerHeight * index) + (window.innerHeight / 2)}px`}}
            >
                <h1 className={`font-black ${p.content ? "text-4xl" : "text-8xl"} uppercase`}>{p.title}</h1>
                <h2 className={`${p.content ? "text-2xl" : "text-6xl"} uppercase`}>{p.subtitle}</h2>
                {p.content && <p className={`text-xl w-1/2 border-t border-gray-500 mt-2 pt-2${index % 2 === 0 ? " ml-auto" : ""}`}>{p.content}</p>}
            </motion.div>
        ))
    );
};

export default Overlay;