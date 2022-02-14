import { motion } from "framer-motion";
import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import styles from "./Drawer.module.css";

const MenuButton = ({isMenuOpen,handler}) => {
  const [isHovered, setHovered] = useState(false);

  const itemsVariants = {
    default: {
      borderRadius: 5,
    },
    hover: {
      backgroundColor: "var(--menu-gradient)",
      borderRadius: 15,
    },
  };
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial='default'
      animate={isHovered ? "hover" : "default"}
      variants={itemsVariants}
      className={styles.menu__button}
      onClick={handler}
    >
      <div className={styles.menu__icon}>
        {isMenuOpen ? <IoCloseSharp size='100%' /> : <IoMenuSharp size='100%' />}
      </div>
      {isMenuOpen && <p>Закрыть</p>}
    </motion.div>
  );
};

export default MenuButton;
