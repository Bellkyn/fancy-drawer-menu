import styles from "./Drawer.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default ({ to, icon, children, isMenuOpen }) => {
  const itemVariants = {
    tap: {
      scale:  1,
      transition: { type: "spring", stiffness: 150 },
    },
    hover: {
      scale: 1.1,
      backgroundColor: "var(--menu-hover)",
      borderRadius: 15,
    },
  };

  const Icon = icon;

  return (
    <Link href={to} passHref>
      <motion.div
        variants={itemVariants}
        whileHover='hover'
        whileTap='tap'
        className={styles.menu__item}
      >
        <motion.div>
          <Icon size='100%' className={styles.menu__icon} />
        </motion.div>

        {isMenuOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.p>
        )}
      </motion.div>
    </Link>
  );
};
