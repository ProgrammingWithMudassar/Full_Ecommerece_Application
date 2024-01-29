
const Navbar = () => {
    return (
        <div className="w-full h-[30px] flex justify-end items-center px-[12px] bg-black gap-[231px]" >
            <div className="flex items-center">
                <p className="w-[474px] h-[18px] hidden lg:block font-poppins text-[14px] text-white leading-[21px]">
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                </p>
                <p className="text-white text-bold text-[16px] underline leading-[24px]">ShopNow</p>
            </div>
            <div className=" flex items-center justify-center  px-[136px]">
                <p className="text-white text-[14px] font-[400] leading-[21px]">English</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}

export default Navbar;
