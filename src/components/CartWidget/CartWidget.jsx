// Importo mi img.SVG para poder mostrarla
import cart from './assets/cart.svg';

const CartWidget = () => {
    return (
        <div className='Cart'>
            <img src={cart} alt="Cart-WidGet"/>
            0 {/* numero fijo que representa la cantidad de elementos en el carrito */}
        </div>
    )
}

// Exporto mi componente
export default CartWidget