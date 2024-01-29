import { useState, useEffect } from 'react';
import ItemCard from './cards/Itemcard';
import axios from 'axios'


const BestSelling = () => {

    const [products, setProducts] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4);

    // Fetching Data From API
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <section className="w-full px-[60px] mt-10">
            <div className="flex justify-start items-center gap-1">
                <div className="w-[20px] h-[40px] bg-secondary rounded" />
                <h1 className="text-secondary text-[16px] font-[600] leading-[20px]">This Month</h1>
            </div>
            <div className="flex justify-between items-center my-4">
                <h1 className='text-black text-[36px] font-bold font-poppins leading-[48px] tracking-[1.44px] '>BEST SELLING PRODUCTS</h1>
                <div className='flex gap-4'>
                    <button className='w-[140px] h-[46px] bg-secondary text-white rounded mr-[44px]'>View All</button>
                </div>
            </div>
            <div className=" w-full overflow-x-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  transition-transform ease-in-out duration-300 transform">
                {products.slice(0, visibleCards).map((card) => (
                    <ItemCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
}

export default BestSelling;

