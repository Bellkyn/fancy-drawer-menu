import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { useMedia } from "../../hooks/useMedia";
import styles from "./Drawer.module.css";
import MenuButton from "./MenuButton";

const Drawer = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const isSmall = useMedia("(max-width: 425px)");
  const menuVariants = isSmall
    ? {
        open: {
          width: "100%",
          height: "100vh",
          transition: { type: "tween", duration: 0.1, when: "beforeChildren" },
        },
        closed: {
          width: "100%",
          height: "50px",
          transition: { type: "tween", duration: 0.1, when: "afterChildren" },
        },
      }
    : {
        open: {
          width: "220px",
          height: "100vh",
          transition: { type: "tween", duration: 0.25, when: "beforeChildren" },
        },
        closed: {
          width: "75px",
          height: "100vh",
          transition: { type: "tween", duration: 0.1, when: "afterChildren" },
        },
      };

  const buttonHandler = () => {
    setOpen(!isOpen);
  };

  const linkHandler = () => {
    setOpen(false);
  };

  const className = `${styles.menu} ${
    isOpen ? styles["menu--open"] : styles["menu--close"]
  }`;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuOpen: isOpen, clickHandler: linkHandler });
    }
    return child;
  });

  return (
    <>
      <motion.div
        className={className}
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuButton handler={buttonHandler} isMenuOpen={isOpen} />
        {(!isSmall || isOpen) && <div className={styles.menu__white__line} />}

        {childrenWithProps}
      </motion.div>
    </>
  );
};
export default Drawer;
