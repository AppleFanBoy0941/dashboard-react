import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import BurgerMenu from "../components/BurgerMenu";
import NavLinkItem from "../components/subcomponents/NavLinkItem";
import QuickActions from "./subTemplates/QuickActions";
import logo from "../assets/images/X-ray.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsOpen(window.innerWidth >= 768);
    });
  }, []);

  return (
    <nav className="fixed md:static flex flex-col justify-between items-center px-4 py-4 md:px-6 md:py-12 w-screen bg-slate-50 md:left-0 md:max-w-sm">
      <div className="flex justify-between items-center w-full bg-slate-50">
        <QuickActions screen="mobile" />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <nav className="w-full">
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
                height: "calc(100vh - 6rem)",
                paddingBottom: 24,
                paddingTop: 24,
              }}
              exit={{
                opacity: 0,
                height: 0,
                paddingBottom: 0,
                paddingTop: 0,
              }}
              className="flex flex-col justify-start items-start gap-12 w-full"
            >
              <section className="flex items-center w-full gap-4">
                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-slate-400">
                  <img src={logo} alt="site icon" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">
                    Lærevenlige Slåmidler
                  </h3>
                  <p className="text-sm font-normal text-slate-500">
                    laervenligeslaamidler@slag.dk
                  </p>
                </div>
              </section>
              <QuickActions />
              <section className="w-full">
                <ul className="flex flex-col gap-4 w-full">
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
              <section className="mt-auto">
                <span className="text-slate-400 text-sm">
                  Du er logget ind som
                </span>
                <div className="flex items-center mt-2 gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-400 shadow-lg shadow-slate-300"></div>
                  <div className="">
                    <h4 className="font-semibold text-slate-700">Admin</h4>
                    <p className="text-slate-400 text-sm">jens</p>
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
