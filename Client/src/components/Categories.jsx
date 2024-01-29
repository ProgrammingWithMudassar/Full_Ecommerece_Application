import rightArrow from '../assets/rightarrow.png'
import leftarrow from '../assets/arrow-left.png'
import Categoriescard from './cards/Categoriescard';
import { ItemCategories } from '../data/dummydata'


const CategoriesContainer = () => {
    return (
        <section className="w-full px-[60px] mt-10">
            <div className="flex justify-start items-center gap-1">
                <div className="w-[20px] h-[40px] bg-secondary rounded" />
                <h1 className="text-secondary text-[16px] font-[600] leading-[20px]">Categories</h1>
            </div>
            <div className="flex justify-between items-center my-4">
                <h1 className='text-black text-[36px] font-bold font-poppins uppercase leading-[48px] tracking-[1.44px] '>Browse By Category</h1>
                <div className='flex gap-4 mr-[44px]'>
                    <img className='w-[24px] h-[24px] cursor-pointer rounded hover:bg-slate-300' src={leftarrow} alt="leftarrow" />
                    <img className='w-[24px] h-[24px] cursor-pointer rounded hover:bg-slate-300' src={rightArrow} alt="rightArrow" />
                </div>
            </div>
            <div className=" w-full flex gap-16">
                {ItemCategories.map((card) => (
                    <Categoriescard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
}

export default CategoriesContainer;
