import styles from "./Drawer.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default ({ to, icon, children, isMenuOpen }) => {
  const variants = {
    default: {
      borderRadius: 5,
    },
    hover: {
      backgroundColor: "var(--menu-gradient)",
      borderRadius: 10,
      transition:{ type: "spring", stiffness: 150 }
    },
  };

  const [isHovered, setHovered] = useState(false);

  const Icon = icon;

  return (
    <Link href={to} passHref>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        variants={variants}
        initial='default'
        animate={isHovered ? "hover" : "default"}
        className={styles.menu__item}
      >
        <div className={styles.menu__icon}>
          <Icon size='35' />
        </div>
        {isMenuOpen && children}
      </motion.div>
    </Link>
  );
};
