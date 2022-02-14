import { motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Drawer.module.css";
import MenuButton from "./MenuButton";

export default ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const menuVariants = {
    open: {
      width: "200px",
    },
    closed: {
      width: "50px",
    },
  };

  const buttonHandler = () => {
    setOpen(!isOpen);
  };

  const className = `${styles.menu} ${
    isOpen ? styles["menu--open"] : styles["menu--close"]
  }`;

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { isMenuOpen: isOpen });
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
        <div className={styles.menu__white__line} />

        {childrenWithProps}
      </motion.div>
    </>
  );
};
