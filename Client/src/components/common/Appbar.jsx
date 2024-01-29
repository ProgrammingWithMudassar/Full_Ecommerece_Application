import { Link } from 'react-router-dom';
import { navLinks } from '../../data/dummydata';
import { CiShoppingCart, CiHeart } from "react-icons/ci";

const Appbar = () => {
    return (
        <div className="flex md:flex-row justify-between items-center gap-4 md:gap-8 px-4 md:px-16 py-[4px] md:py-[10px] border-b-2">
            <Link to={`/`}>
                <h1 className="text-black font-bold tracking-[0.72px] text-2xl md:text-3xl leading-24 cursor-pointer">
                    Exclusive
                </h1>
            </Link>
            <ul className="list-none md:flex hidden justify-center items-start gap-8">
                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer  ss:hover:text-secondary text-lg md:text-base text-black ${index === navLinks.length - 1 ? 'md:mr-0' : 'md:mr-10'
                            }`}
                    >
                        <Link to={`/${nav.id}`}>{nav.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="w-[400px] h-[38px] bg-[#F5F5F5] hidden md:flex items-center justify-start md:px-[7px] md:py-[7px] rounded-full" >
                <input className="w-full font-poppins font-[400] leading-[18px] text-[16px] bg-transparent focus:outline-none rounded-full pl-4 " type="text" placeholder="What are you looking for?" />
                <button className='bg-stone-950 text-white px-4 py-1 rounded-full'>search</button>
            </div>
            <div className="flex items-center gap-4 bg-white cursor-pointer">
                <Link to={`/favorite`}>
                    <CiHeart size={30} />
                </Link>
                <Link to={`/cart`}>
                    <CiShoppingCart size={30} />
                </Link>
                <Link>
                    <p>SignIn</p>
                </Link>
            </div>
        </div>
    );
};

export default Appbar;















