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
        right: 100,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    };

    const exit = {
        opacity: 0,
        top: -100,
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    };

    useEffect(() => {
        setTimeout(() => setPages(Pages), 2000);
    }, []);
    

    return (
        pages.map((p: {id: number, content: string}, index: number) => (
            <motion.div key={index} className="absolute top-1/2 text-white uppercase -translate-y-1/2" initial={initial} animate={animate} exit={exit} style={{top: `${(window.innerHeight * index) + (window.innerHeight / 2)}px`}}>
                {p.id === 1 && <h1 className="font-black text-8xl">Ferrari F50</h1>}
                <p className={p.id === 1 ? 'text-right text-6xl' : 'text-center w-[500px] text-xl'}>{p.content}</p>
            </motion.div>
        ))
    );
};

export default Overlay;