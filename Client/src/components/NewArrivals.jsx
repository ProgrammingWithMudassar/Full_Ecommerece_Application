import playstation from '../assets/ps5.png'
import girlbg from '../assets/girlbg.png'
import speakerset from '../assets/speakerset.png'
import oud from '../assets/guccioud.png'


const NewArrivals = () => {
    return (
        <section className="w-full px-[60px] my-10 grid grid-cols-2">
            {/* Right Side Image */}
            <div className="relative w-[570px] h-[600px] bg-black">
                <img src={playstation} alt="playstation" className='z-0 object-contain w-full h-full' />
                <div className=" absolute bottom-0 left-0 z-2 text-white p-8">
                    <h1 className='text-white font-semibold text-[24px] leading-[24px] tracking-[0.72px] mb-[16px]'>PlayStation 5</h1>
                    <p className='text-white text-[16px] font-[400] leading-[21px] mb-[16px] '>Black and White version of the PS5 <br /> coming out on sale.</p>
                    <button className='text-[#FFF] font-[500px] leading-[24px] underline'>Shop Now</button>
                </div>
            </div>
            {/* Left side Conatiner */}
            <div className='w-full h-full z-6'>
                {/* top Image */}
                <div className=" h-[286px] bg-[#0f0f0f] relative mb-[32px]">
                    <img src={girlbg} alt="girlbg" className="w-full h-full border-none object-contain ml-46" />
                    <div className="absolute left-2 bottom-0 z-2 text-white p-8">
                        <h1 className="text-white font-semibold text-[24px] leading-[24px] mb-[16px]">Women’s Collections</h1>
                        <p className="text-white text-[16px] font-normal leading-[21px] mb-[16px]">Featured woman collections that <br /> give you another vibe.  </p>
                        <button className='text-[#FFF] font-[500px] leading-[24px] underline'>Shop Now</button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="relative h-[284px] bg-black">
                        <img src={speakerset} alt="speakerset" className="w-full h-full object-cover pt-[18px] mt-10" />
                        <div className="absolute bottom-0 left-0 z- text-white p-8">
                            <h1 className="text-white font-semibold text-[24px] leading-[24px] tracking-[0.72px] mb-4">Speakers</h1>
                            <p className="text-white text-[16px] font-normal leading-[21px] mb-4">Amazon wireless speakers</p>
                            <button className="text-white font-semibold text-[24px] leading-[24px] underline">Shop Now</button>
                        </div>
                    </div>
                    <div className="relative h-[284px] bg-black">
                        <img src={oud} alt="oud" className="w-full h-full object-cover" />
                        <div className="absolute bottom-0 left-0 z-2 text-white p-8">
                            <h1 className="text-white font-semibold text-[24px] leading-[24px] tracking-[0.72px] mb-4">Perfume</h1>
                            <p className="text-white text-[16px] font-normal leading-[21px] mb-4">GUCCI INTENSE OUD EDP</p>
                            <button className="text-white font-semibold text-[24px] leading-[24px] underline">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewArrivals;
