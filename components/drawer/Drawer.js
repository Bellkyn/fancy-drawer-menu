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
          position: "fixed",
          width: "100%",
          transition: {
            type: "tween",
            duration: 0.25,
            when: "beforeChildren",
            onTransitionEnd: {},
          },
        },
        closed: {
          position: "sticky",
          top: 0,
          flexDirection: "row",
          width: "100%",
          height: "50px",
          transition: { type: "linear", duration: 0.25, when: "afterChildren" },
        },
      }
    : {
        open: {
          position: "sticky",
          width: "220px",
          top: 0,
          transition: { type: "tween", duration: 0.25, when: "beforeChildren" },
        },
        closed: {
          position: "sticky",
          top: 0,
          width: "75px",
          transition: { type: "linear", duration: 0.25, when: "afterChildren" },
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
        layout
        initial='closed'
        className={className}
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <MenuButton handler={buttonHandler} isMenuOpen={isOpen} />
        {isSmall && isOpen && <div className={styles.menu__white__line} />}

        {childrenWithProps}
      </motion.div>
    </>
  );
};
export default Drawer;
