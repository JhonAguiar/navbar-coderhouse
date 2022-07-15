import React from 'react'
import {useContext} from 'react';
import {MiContexto} from '../context/CartContext';
import './Footer.css'

export default function Footer() {

    const { darkMode } = useContext(MiContexto)
    const fecha = new Date().getFullYear()

    return (
        <div className='footer' style={{backgroundColor: darkMode === false ? "#fff" : "#333" , border: darkMode === false ? "solid #eee 1px" : "solid #333 1px" , color: darkMode === true ? "#fff" : "#333" ,}}>
            <div>&copy; {fecha}</div>
            <div>Tienda.inc</div>
            <div></div>
            <div></div>
        </div>
    )
}
