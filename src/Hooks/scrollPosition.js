import { useEffect, useState } from "react";

//EXPORTA UNA FUNCION QUE DETECTA CUANDO UN USUARIO HACE SCROLL HACIA ABAJO, SE BUSCA CAMBIAR EL ESTILO DEL NAVBAR CUANDO SUCEDA
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};
