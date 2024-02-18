import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./toggle.css"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/store/theme";

export const Toggle = () => {
  const [isOn, setIsOn] = useState(false);
  const {darkOn, darkOff} = useTheme();

  useEffect(() => {
    const theme = isOn ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isOn]);

  const toggleSwitch = () => {
    !isOn ? darkOn() : darkOff()
    setIsOn(!isOn);
  }

  return (
    <>
        <SunIcon className={`absolute z-10 w-5 h-5 right-20 top-10  ${!isOn ? "text-yellow-400" : "text-white"}`}/>
          <motion.div className="switch absolute z-10 right-10 top-10 bg-black/50 " data-ison={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring} />
          </motion.div>
        <MoonIcon className={`absolute z-10 w-5 h-5  right-5 top-10 ${!isOn ? "text-white" : "text-yellow-400"}`}/>
    </>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};