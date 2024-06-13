import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Routes } from "./Routes";
import { NavLink } from "react-router-dom";

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () => setOpen(false));

    return (
        <div ref={ref} className="md:hidden relative">
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} color='white' />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-[-3.5rem] top-[3.6rem]  z-[10000] bg-primary-color rounded-xl"
                    >
                        <ul className="grid gap-2">
                            {Routes.map((route, idx) => {
                                const { href, title, Icon } = route;

                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        key={title}
                                        className="w-full p-[0.08rem] rounded-xl "
                                    >
                                        <NavLink
                                            onClick={() => setOpen((prev) => !prev)}
                                            className={
                                                "flex items-center justify-between w-full p-3 rounded-xl bg-[#f86b33] no-underline"
                                            }
                                            to={href}
                                        >
                                            <Icon className="text-white text-xl " />
                                            <span className="flex gap-1 text-lg text-white">{title}</span>
                                        </NavLink>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HamburgerMenu