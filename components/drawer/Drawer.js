import { LayoutGroup, motion } from "framer-motion";
import React, { useState } from "react";
import styles from "./Drawer.module.css";
import MenuButton from "./MenuButton";

const Drawer = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const menuVariants = {
    open: {
      width: "225px",
      height: "100%",
      transition: { type: "tween", duration: 0.25, when: "beforeChildren" },
    },
    closed: {
      width: "75px",
      height: "100%",
      transition: { type: "tween", duration: 0.25, when: "afterChildren" },
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
        layout
        className={className}
        variants={menuVariants}
        animate={isOpen ? "open" : "closed"}
      >
        <LayoutGroup>
          <MenuButton handler={buttonHandler} isMenuOpen={isOpen} />
          <div className={styles.menu__white__line} />

          {childrenWithProps}
        </LayoutGroup>
      </motion.div>
    </>
  );
};
export default Drawer