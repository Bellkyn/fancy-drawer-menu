import { motion } from "framer-motion";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import styles from "./Drawer.module.css";

const MenuButton = ({ isMenuOpen, handler }) => {
  const itemVariants = {
    tap: {
      scale: 1,
      transition: { type: "spring", stiffness: 150 },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "var(--menu-hover)",
      borderRadius: 15,
    },
  };
  return (
    <motion.div
      layout
      whileHover='hover'
      whileTap='tap'
      variants={itemVariants}
      className={styles.menu__item}
      onClick={handler}
    >
      <motion.div layout>
        {isMenuOpen ? (
          <IoCloseSharp size='100%' className={styles.menu__icon} />
        ) : (
          <IoMenuSharp size='100%' className={styles.menu__icon} />
        )}
      </motion.div>

      {isMenuOpen && <motion.p>Закрыть</motion.p>}
    </motion.div>
  );
};

export default MenuButton;
