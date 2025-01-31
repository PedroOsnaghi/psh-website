"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarLinks } from "@/siteconfig/navBarLinks";
import { Escudo } from "@components/ui/Escudo";
import { useScrollContext } from "@/providers/ScrollContext";
import { LabelSection } from "./LabelSection";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isHeroLogoVisible } = useScrollContext();

  useEffect(() => {
    console.log(isHeroLogoVisible);
  }, [isHeroLogoVisible]);

  return (
    <nav
      className="w-full h-14 flex flex-col justify-center items-center fixed bg-dark-transparent z-40 backdrop-blur-xl inset-x-0 border-b border-white/10"
      aria-label="Menú principal"
    >
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <a href="#" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="flex items-center gap-4 w-48">
                <Escudo
                  className="nav-logo w-10 h-10 filter grayscale"
                  bw={isHeroLogoVisible}
                />
                <LabelSection text="Prevención SH" className="lg:text-lg" />
              </div>
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="hidden lg:flex h-full pb-2 justify-center items-center gap-6">
            {navbarLinks.map(({ href, label, ariaLabel }) => (
              <a
                className="text-white/80  text-sm/6  leading-6  cursor-pointer font-normal  hover:font-medium transition h-full pt-2"
                href={href}
                aria-label={ariaLabel}
                key={label}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end hidden lg:flex w-48">
            <a
              className="text-white border border-main-border rounded-xl
           bg-dark-2 hover:bg-dark-3  pl-6 pr-8 pt-2 pb-2 text-sm flex"
              href="#"
              target="_blank"
              aria-label="Ingresar a la Plataforma"
            >
              <span className="pt-px">Plataforma</span>
            </a>
          </div>
        </motion.div>
        <div
          className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-dark-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 "></div>
        </div>
      </div>
      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex flex-col mt-16 lg:hidden absolute top-4 left-0   z-50 w-full justify-center bg-dark-1
        items-center gap-10 pb-10 border-y border-solid border-dark-3 pt-10
        "
            >
              {navbarLinks.map(({ label, href, ariaLabel }) => (
                <a
                  key={href}
                  className="text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                  href={href}
                  onClick={() => setIsOpen(false)}
                  aria-label={ariaLabel}
                >
                  {label}
                </a>
              ))}
              <a
                className="text-white  rounded-xl bg-dark-2 hover:bg-dark-3 border border-main-border pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="#"
                target="_blank"
                aria-label="Ingresar a la Plataforma"
              >
                <span className="pt-px">Plataforma</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
