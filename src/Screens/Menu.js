import React from 'react'
import { Link} from 'react-router-dom'

const links=[
    {
        name:"Home",
        href:"/home",
    },
    {
        name:"Historial",
        href:"/historial",
    },
];

export const Menu = () => {
  return (
    <div>
        {links.map((x)=>(
            <Link to={x.href} > {x.name} </Link>
        ))}
    </div>
  );
};
