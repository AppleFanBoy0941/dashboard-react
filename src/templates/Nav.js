import FeatherIcon from "feather-icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import NavLinkItem from "../components/subcomponents/NavLinkItem";
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
    <nav className="fixed flex flex-col justify-between items-center w-screen bg-slate-50">
      <div className="flex justify-between items-center w-screen py-2 bg-slate-50">
        <ul className="flex pl-4">
          <li className="flex justify-center items-center text-slate-800 bg-slate-100 p-4  rounded-full">
            <FeatherIcon icon="plus" />
          </li>
          <li className="flex justify-center items-center text-slate-800 bg-slate-100 p-4  rounded-full ½">
            <FeatherIcon icon="minus" />
          </li>
          <li className="flex justify-center items-center text-slate-800 bg-slate-100 p-4  rounded-full ">
            <FeatherIcon icon="edit" />
          </li>
          <li className="flex justify-center items-center text-slate-800 bg-slate-100 p-4  rounded-full ">
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
      </div>
      <nav className="self-start pl-6">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              transition={{ duration: 0.25 }}
              initial={{
                opacity: 0,
                height: 0,
                paddingBottom: 0,
                paddingTop: 0,
              }}
              animate={{
                opacity: 1,
                height: "100vh",
                paddingBottom: 20,
                paddingTop: 10,
              }}
              exit={{
                opacity: 0,
                height: 0,
                paddingBottom: 0,
                paddingTop: 0,
              }}
            >
              <section className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-slate-400 mr-3"></div>
                <div>
                  <h3>Lærevenlige Slåmidler</h3>
                  <p>laervenligeslaamidler@slag.dk</p>
                </div>
              </section>
              <section>
                <ul className="flex flex-col gap-4">
                  <li>
                    <NavLinkItem link="/" icon="home" content="Hjem" />
                  </li>
                  <li>
                    <NavLinkItem
                      link="/bestillinger"
                      icon="inbox"
                      content="Bestillinger"
                    />
                  </li>
                  <li>
                    <NavLinkItem link="/varer" icon="box" content="Varer" />
                  </li>
                  <li>
                    <NavLinkItem link="/kunder" icon="users" content="Kunder" />
                  </li>
                </ul>
              </section>
              <section className="mt-12">
                <span className="text-slate-400">Du er logget ind som</span>
                <div className="flex items-center mt-2">
                  <div className="w-10 h-10 rounded-full bg-slate-400"></div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-slate-700">
                      Placeholder
                    </h4>
                    <p className="text-slate-400">placeholder noget</p>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </nav>
  );
};

export default Nav;
