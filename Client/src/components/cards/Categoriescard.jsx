import React from 'react'

const CategoriesCard = ({ img, content }) => {
    return (
        <div className="w-[170px] h-[145px] flex justify-center items-center bg-[#f5f5f5] border outline-1 cursor-pointer rounded mt-[60px] hover:bg-[#DB4444]">
            <div className="flex flex-col items-center justify-center gap-[14px]">
                <img src={img} alt="category_image" className="w-[56px] h-[56px] object-contain" />
                <p className="font-poppins text-[16px] font-[400] text-[#000] leading-[24px] ">
                    {content}
                </p>
            </div>
        </div>
    );
}

export default CategoriesCard;





