import Drawer from "../components/drawer/Drawer";
import MenuItem from "../components/drawer/MenuItem";
import {IoPeopleCircleSharp,IoHomeSharp,IoCartSharp} from 'react-icons/io5'


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Drawer>
        <MenuItem to={'/'} icon={IoHomeSharp}>Главная</MenuItem>
        <MenuItem to={'/about'} icon={IoPeopleCircleSharp}>О нас</MenuItem>
        <MenuItem to={'/about'} icon={IoCartSharp}>Купить</MenuItem>
      </Drawer>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
