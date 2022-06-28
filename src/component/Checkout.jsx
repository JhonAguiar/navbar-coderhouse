import React , {useState, useContext} from 'react'
import { MiContexto } from '../context/CartContext';

function Checkout() {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [cel, setCel] = useState('');

    const [form, setForm]  = useState({});

    const {cart, totalInCart} = useContext(MiContexto);

    const total = totalInCart();

    const handleClick = () =>{
        const order = {
            buyer: {name: form.name, email: form.email,phone: form.phone},
            items: cart,
            total,
        };
        console.log(order)
    }

    const handleChange = (e) =>{
        setForm({
            ...form, [e.target.name]:e.target.value
        })
    }

    return (
        <div style={{paddingTop: '250px'}}>
            <h1>COMPETE PARA TERMINAR LA COMPRA</h1>
            <input type="text" name="name" placeholder='Ingrese su nombre' onChange={handleChange}/>
            <input type="text" name="phone" placeholder='Ingrese su telefono' onChange={handleChange}/>
            <input type="text"name="email" placeholder='Ingrese su email' onChange={handleChange}/>
            <button onClick={handleClick}>TERMINAR COMPRA</button>
        </div>
    )
}

export default Checkout