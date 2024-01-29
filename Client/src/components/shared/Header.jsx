// eslint-disable-next-line no-unused-vars
import React from 'react'
import { sideBarData } from "../../data/dummydata";
import logo from '../../assets/appleLogo.png';
import arrowRight from '../../assets/arrow-right.png';
import iphone from '../../assets/iphone.png';


const Header = () => {
    return (
        <div>
            <section className="flex flex-col ss:flex-row items-center mt-5 px-4 ss:px-20">
                {/* left side list */}
                <div className="w-full hidden md:block ss:w-[217px] border-r-2 border-gray-300 mr-10 ">
                    <ul className="list-none flex flex-col gap-4 md:gap-[16px]">
                        {sideBarData.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-[400] text-[16px] cursor-pointer  ss:hover:text-secondary md:text-base text-[#000]`}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Right side Box */}
                <div className="w-full w-full h-[480px] md:h-[344px] flex flex-col ss:flex-row justify-center items-center bg-[#000]">
                    <div className="md:mr-4">
                        <div className="flex items-center md:flex-row md:items-center gap-4 md:gap-[24px]">
                            <img className="w-[40px] h-[49px]" src={logo} alt="applelogo" />
                            <p className="text-center text-[16px] md:text-base font-[400] leading-[24px] text-[#FAFAFA]">iPhone 14 Series</p>
                        </div>
                        <h1 className="text-center md:text-left text-[32px] md:text-[48px] font-semibold leading-[40px] md:leading-[60px] tracking-[1.92px] text-[#FAFAFA]">Up to 10% <br /> off Voucher</h1>
                        <div className="flex md:flex-row items-center md:items-start">
                            <p className="text-center md:text-left text-[16px] font-[500] leading-[24px] text-white">Shop Now</p>
                            <img className="w-[24px] h-[24px] md:ml-2" src={arrowRight} alt="arrowRight" />
                        </div>
                    </div>
                    <div className="text-white mt-4 md:mt-0">
                        <img className="w-full md:w-auto" src={iphone} alt="iphone" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header