import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

//PARA ABRIR Y CERRAR EL NAVBAR
export const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  
  //PARA EL CAMBIO DE TAMANO DE LA VENTANA SE CAMBIA EL NAVBAR
  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  //DETECTA CUANDO EL ELEMENTO CAMBIA, ESTE SIENDO LA DIMENSION DE LA VENTANA
  useEffect(() => {
    window.addEventListener("resize", detectDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
      window.removeEventListener("resize", detectDimension);
    };
  }, [windowDimension]);

   //LOS LINKS DE NAVEGACION//
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Productos",
    },
    {
      id: 3,
      link: "Nosotros",
    },
    
    
  ];

  const scrollPosition = useScrollPosition();
  //AQUI SE BUSCA QUE EL ESTILO CAMBIE CUANDO SE HACE EL SCROLL HACIA ABAJO//
  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    > 
    
      {!navBarOpen && <p className={styles.logo}>MEDEVIAL STORE</p>} 
      {!navBarOpen && windowDimension.width < 800 ? (
        
       //PARA PODER ABRIR EL MENU Y CERRARLO EJECUTA UNA FUNCION PARA CAMBAIR EL ESTADO DEL USESTATE DE FALSO A VERDADERO Y DE VERDADERO A FALSO//

       <AiOutlineMenu
          color="#f1f1f1"
          onClick={() => setNavBarOpen(!navBarOpen)}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
            onClick={() => setNavBarOpen(!navBarOpen)}
            color="#f1f1f1"
            size={25}
          />
        )
      )}

      {navBarOpen && (

           //PASA PARAMETROS PARA ENTRAR AL LINK//

        <ul className={styles.linksContainer}>
          {links.map(({ id, link }) => (
            <div>
              <Link
                key={id}
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "SobreNosotros" ? "Sobre Nosotros" : link}
               
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
        </ul>
      )}
      {windowDimension.width > 800 && (
        <ul className={styles.linksContainer}>
          {links.map(({ link, id }) => (
            <div>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "SobreNosotros" ? "Sobre Nosotros" : link}
              </Link>
              <div className={styles.border}></div>
            </div>
          ))}
          <Link
            onClick={() => setNavBarOpen(false)}
            to={"Contact"}
            smooth
            duration={500}
            className={styles.contactLink}
          >
            Contact
          </Link>
        </ul>
      )}
    </div>
  );
};

