import ReactStars from "react-rating-stars-component";
import eye from '../../assets/Group.svg'
import heart from '../../assets/heart small.svg'
import { useCart } from '../Cartcontext';
import { Link } from 'react-router-dom'


const ItemCard = ({ title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images, id }) => {

    const discountedPrice = price - (price * (discountPercentage / 100));


    const { dispatch } = useCart();

    const handleAddToCart = () => {


        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                title,
                price,
                images,
                quantity: 1, // You can set the quantity as needed
            },
        });
    };


    return (
        <>
            <div className="w-full h-[500px]  flex flex-col justify-center items-start">
                {/* main container starts here */}
                <div className="w-[300px] h-[285px] bg-[#f5f5f5] relative group">
                    <div className="w-full flex justify-start gap-40">
                        <div className="pl-[12px] pt-[12px]">
                            <div className="w-[80px] h-[30px] text-[16px] text-white bg-secondary rounded-[4px] px-[14px] py-[2px] ">{discountPercentage}%</div>
                        </div>
                        <div className=" flex flex-col gap-[8px] pt-[12px] ">
                            <img className="w-[34px] h-[34px] rounded-full bg-white cursor-pointer" src={heart} alt="heart" />
                            <Link to={`/productDetail/${id}`}>
                                <img className="w-[34px] h-[34px] rounded-full bg-white cursor-pointer" src={eye} alt="eye" />
                            </Link>

                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={thumbnail} alt="product_thumbnail" className="w-[172px] h-[152px] object-contain mx-auto" />
                    </div>
                    <div className="w-full h-[45px] cursor-pointer bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={handleAddToCart}>
                        <p className="text-[16px] font-[500] leading-[24px] text-white px-[90px] pt-[8px]" >
                            Add To Cart
                        </p>
                    </div>
                </div>
                {/* After Image second part */}
                <p className="h-[100px] font-poppins text-[16px] font-[500] text-[#000] pt-[16px] leading-[24px] self-start">
                    {description}
                </p>
                <div className="flex gap-[36px]">
                    <p className="w-[37px] h-[24px] font-poppins font-normal text-secondary text-[16px] ">{`$${discountedPrice.toFixed(2)}`}</p>
                    <p className="w-[37px] h-[24px] font-poppins font-normal text-[#808080] line-through text-[16px]">{`$${price}`}</p>
                </div>
                <div className="flex items-center gap-[8px]">
                    <p>
                        <ReactStars
                            count={5}
                            value={rating}
                            size={20}
                            activeColor="#ffad33"
                            edit={false}
                        />
                    </p>
                    <p className="text-[#808080]">({stock} in stock)</p>
                </div>
            </div>
        </>
    )
}

export default ItemCard