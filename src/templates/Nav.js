import FeatherIcon from "feather-icons-react";
import { motion } from "framer-motion";
import { useState } from "react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonVariant = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: 90,
    },
  };
  const spanVariant = {
    initial: {
      width: 24,
      height: 3,
    },
    animate: {
      width: 4,
      height: 4,
    },
  };
  return (
    <nav className="fixed flex justify-between items-center w-full pt-2">
      <ul className="flex pl-4">
        <li className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-full">
          <FeatherIcon icon="plus" />
        </li>
        <li className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-full ml-2">
          <FeatherIcon icon="minus" />
        </li>
        <li className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-full ml-2">
          <FeatherIcon icon="edit" />
        </li>
        <li className="flex justify-center items-center bg-slate-100 w-16 h-16 rounded-full ml-2">
          <FeatherIcon icon="search" />
        </li>
      </ul>
      <motion.button
        className="w-6 h-6 mr-4  flex flex-col justify-center items-center gap-1"
        variants={buttonVariant}
        animate={isOpen ? "animate" : "initial"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          className="bg-slate-800 block rounded-full"
          variants={spanVariant}
        ></motion.span>
        <motion.span
          className="bg-slate-800 block rounded-full"
          variants={spanVariant}
        ></motion.span>
        <motion.span
          className="bg-slate-800 block rounded-full"
          variants={spanVariant}
        ></motion.span>
      </motion.button>
    </nav>
  );
};

export default Nav;
