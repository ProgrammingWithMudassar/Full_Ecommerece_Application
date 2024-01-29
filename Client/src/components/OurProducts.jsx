import rightArrow from '../assets/rightarrow.png'
import leftarrow from '../assets/arrow-left.png'
import { useEffect, useState } from 'react';
import ItemCard from './cards/Itemcard';
import axios from 'axios';


const OurProducts = () => {

  const [products, setProducts] = useState([]);
  const [visibleCards, setVisibleCards] = useState(8);

  // Fetching Data From API
  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=10&skip=10  ')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(products);




  return (
    <section className="w-full px-[60px] mt-10">
      <div className="flex justify-start items-center gap-1">
        <div className="w-[20px] h-[40px] bg-secondary rounded" />
        <h1 className="text-secondary text-[16px] font-[600] leading-[20px]">Our Products</h1>
      </div>
      <div className="flex justify-between items-center my-4">
        <h1 className='text-black text-[36px] font-bold uppercase font-poppins leading-[48px] tracking-[1.44px] '>Explore our Products</h1>
        <div className='flex gap-4 mr-[44px]'>
          <img className='w-[24px] h-[24px] cursor-pointer rounded hover:bg-slate-300' src={leftarrow} alt="leftarrow" />
          <img className='w-[24px] h-[24px] cursor-pointer rounded hover:bg-slate-300' src={rightArrow} alt="rightArrow" />
        </div>
      </div>
      <div className=" w-full overflow-x-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  transition-transform ease-in-out duration-300 transform">
        {products.slice(0, visibleCards).map((card) => (
          <ItemCard key={card.id} {...card} />
        ))}
      </div>
      <button className='w-[180px] h-[50px] text-white font-[500] text-[16px] leading-[24px] rounded bg-secondary px-[20px] py-[10px] mr-[603px] ml-[603px] mb-[10px]'>View All Products</button>
    </section>
  );
}

export default OurProducts;
