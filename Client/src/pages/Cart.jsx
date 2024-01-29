import { Appbar, Navbar } from "../components";
import { useCart } from '../components/Cartcontext';

const Cart = () => {

    const { cartState } = useCart();

    console.log(cartState.items);
    return (
        <>
            <Navbar />
            <Appbar />
            <div className="px-16 bg-[#FAFAFA] justify-evenly">
                <div className="w-full h-auto flex justify-between items-start content-center rounded-[4px] bg-[#FAFAFA] shadow-md p-4">
                    <h1 className="text-[16px] font-[400] leading-[24px] font-poppins">Product</h1>
                    <h1 className="text-[16px] font-[400] leading-[24px] font-poppins">Price</h1>
                    <h1 className="text-[16px] font-[400] leading-[24px] font-poppins">Quantity</h1>
                    <h1 className="text-[16px] font-[400] leading-[24px] font-poppins">Subtotal</h1>
                </div>
                <div className="text-black pt-4 shadow-md">
                    {cartState.items.map((item, index) => (
                        <div key={index} className="w-full flex justify-between items-center">
                            <div className="flex items-center">
                                <img src={item.images[0]} alt="image" className="w-[50px] h-[50px]" />
                                <p className="ml-2">{item.title}</p>
                            </div>
                            <p>${item.price}</p>
                            <p>{item.quantity}</p>
                            <p>${item.price * item.quantity}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Cart;
