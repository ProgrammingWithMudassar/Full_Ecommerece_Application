import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Appbar, Navbar, Footer } from "../components";
import ReactStars from "react-rating-stars-component";
import heart from '../assets/hearticon.svg'


const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);


  useEffect(() => {

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }





  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleaddQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleremoveQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <Appbar />
      <section className='w-full h-auto grid grid-cols-2 px-[60px] pt-10 gap-16'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <img src={product.images[1]} alt="images" />
            <img src={product.images[2]} alt="images" />
            <img src={product.images[3]} alt="images" />
          </div>
          <img src={product.images[0]} alt="images" />
        </div>
        <div>
          <h2 className='text-black text-[24px] font-poppins font-[600] leading-[24px] tracking-[0.72px]'>{product.title}</h2>
          <p>
            <ReactStars
              count={5}
              value={product.rating}
              size={20}
              activeColor="#ffad33"
              edit={false}
            />
          </p>
          <p className='text-[#0f6]'>In Stock: {product.stock}</p>
          <p className='text-black font-poppins text-[24px] font-[400] leading-[24px] tracking-[0.72px] py-2'> ${product.price}</p>
          <h2 className='font-poppins font-[500]'>Description: {product.description}</h2>
          <p className='font-poppins'> Brand: {product.brand}</p>
          {/* Select Size */}
          <div className='flex items-center content-center gap-12 py-2'>
            <p className='font-poppins text-[20px] font-[400] leading-[20px] tracking-[0.6px]'>Size:</p>
            {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
              <button
                key={size}
                className={`w-[32px] h-[32px] px-[7px] py-[6px] border rounded-[4px] ${selectedSize === size ? 'bg-secondary text-white' : 'hover:bg-secondary hover:text-white'
                  }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          {/* Quantity Buttons */}
          <div className='flex gap-8 py-2'>
            <p className='font-poppins text-[20px] font-[400] leading-[20px] tracking-[0.6px]'>Quantity:</p>
            <button className="w-[32px] h-[32px] px-[7px] border rounded-[4px] bg-secondary text-white text-[20px]" onClick={handleremoveQuantity}> - </button>
            <p className="w-[32px] h-[32px] px-[7px] py-[6px] border rounded-[4px]">{quantity}</p>
            <button className="w-[32px] h-[32px] px-[7px] border rounded-[4px] bg-secondary text-white text-[20px]" onClick={handleaddQuantity}> + </button>
            <button className="w-[165px] h-[44px] px-[48px] py-[10px] border rounded-[4px] bg-secondary text-white" onClick={handleaddQuantity}> Buy Now </button>
            <img className="w-[34px] h-[34px] rounded-full bg-white cursor-pointer" src={heart} alt="heart" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;
