import Drawer from "../components/drawer/Drawer";
import MenuItem from "../components/drawer/MenuItem";
import {IoPeopleCircleSharp,IoHomeSharp} from 'react-icons/io5'


import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="app">
      <Drawer>
        <MenuItem to={'/'} icon={IoHomeSharp}>Главная</MenuItem>
        <MenuItem to={'/about'} icon={IoPeopleCircleSharp}>О нас</MenuItem>
      </Drawer>
      <div className="wrapper">
      <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
