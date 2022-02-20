import Drawer from "../components/drawer/Drawer";
import MenuItem from "../components/drawer/MenuItem";
import { IoPeopleCircleSharp, IoHomeSharp, IoCartSharp } from "react-icons/io5";

import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className='app'>
      <Drawer>
        <MenuItem to={"/"} icon={IoHomeSharp}>
          Главная
        </MenuItem>
        <MenuItem to={"/about"} icon={IoPeopleCircleSharp}>
          О нас
        </MenuItem>
        <MenuItem to={"/about"} icon={IoCartSharp}>
          Купить
        </MenuItem>
      </Drawer>

      <div className='wrapper'>
        <Component {...pageProps} key={router.pathname} />
      </div>
    </div>
  );
}

export default MyApp;
