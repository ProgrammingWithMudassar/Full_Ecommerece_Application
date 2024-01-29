import { useState, useEffect } from 'react'
import rightArrow from '../assets/rightarrow.png'
import leftarrow from '../assets/arrow-left.png'
import ItemCard from './cards/Itemcard'
import { ShopItems } from '../data/dummydata'
import axios from 'axios';

const Flashsales = () => {


    // Carousel for cards
    const [products, setProducts] = useState([]);
    const [visibleCards, setVisibleCards] = useState(4);

    console.log(products);

    const handleLeftArrowClick = () => {
        setVisibleCards((prevVisibleCards) =>
            prevVisibleCards > 4 ? prevVisibleCards - 1 : 4
        );
    };

    const handleRightArrowClick = () => {
        const totalCards = ShopItems.length;
        setVisibleCards((prevVisibleCards) =>
            prevVisibleCards < totalCards ? prevVisibleCards + 1 : totalCards
        );
    };


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
            <div className="flex  justify-start items-center gap-1">
                <div className="w-[20px] h-[40px] bg-secondary rounded" />
                <h1 className="text-secondary text-[16px] font-[600] leading-[20px]">Todays</h1>
            </div>
            <div className="flex justify-between items-center my-4">
                <h1 className='text-black text-[36px] font-bold uppercase font-poppins leading-[48px] tracking-[1.44px] '>Flash Sales</h1>
                <div className="flex flex-1 items-start ml-[87px] gap-[22px] ">
                    <div>
                        <p className="text-black text-[12px] font-normal leading-[18px]">Days</p>
                        <h1 className="text-black text-[32px] font-[700] leading-[30px] tracking-[1.28px]">01</h1>
                    </div>
                    <span className="text-secondary text-3xl mt-[10px]">:</span>
                    <div>
                        <p className="text-black text-[12px] font-normal leading-[18px]">Hours</p>
                        <h1 className="text-black text-[32px] font-[700] leading-[30px] tracking-[1.28px]">01</h1>
                    </div>
                    <span className="text-secondary text-3xl mt-[10px]">:</span>
                    <div>
                        <p className="text-black text-[12px] font-normal leading-[18px]">Minutes</p>
                        <h1 className="text-black text-[32px] font-[700] leading-[30px] tracking-[1.28px]">33</h1>
                    </div>
                    <span className="text-secondary text-3xl mt-[10px]">:</span>
                    <div>
                        <p className="text-black text-[12px] font-normal leading-[18px]">Seconds</p>
                        <h1 className="text-black text-[32px] font-[700] leading-[30px] tracking-[1.28px]">06</h1>
                    </div>
                </div>
            </div>
            <div className=" w-full h-[auto] overflow-x-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 transition-transform ease-in-out duration-300 transform">
                {products.slice(0, visibleCards).map((card) => (
                    <ItemCard key={card.id} {...card} />
                ))}
            </div>
            <button className='w-[180px] h-[50px] text-white font-[500] text-[16px] leading-[24px] rounded bg-secondary px-[20px] py-[10px] mr-[603px] ml-[603px] mb-[10px]'>View All Products</button>
        </section>
    );
}

export default Flashsales;
