import radio from '../assets/radio.png'


const Highlights = () => {
    return (
        <section className='w-full h-[500px] px-[60px] mt-10'>
            <div className="w-full h-[500px] flex flex-col ss:flex-row justify-center items-center bg-[#000] gap-16">
                <div className="md:mr-4">
                    <div className="flex items-center md:flex-row md:items-center gap-4 md:gap-[24px]">
                        <p className="text-center text-[16px] md:text-base font-[400] leading-[24px] text-[#00FF66]">Categories</p>
                    </div>
                    <h1 className="text-center md:text-left text-[32px] md:text-[48px] font-semibold leading-[40px] md:leading-[60px] tracking-[1.92px] text-[#FAFAFA]">Enhance Your <br /> Music Experience</h1>
                    <div className='flex gap-[24px] pt-[20px] items-center justify-start'>
                        <div className='w-[62px] h-[62px] rounded-full bg-white pt-[10px]' ><p className='text-center text-black text-[11px] font-[400] leading-[18px]'><strong className='text-[16px] font-[600px] leading-[20px]'>01</strong> <br />Hours</p></div>
                        <div className='w-[62px] h-[62px] rounded-full bg-white pt-[10px]'><p className='text-center text-black text-[11px] font-[400] leading-[18px]'><strong className='text-[16px] font-[600px] leading-[20px]'>12</strong><br />Days</p></div>
                        <div className='w-[62px] h-[62px] rounded-full bg-white pt-[10px]'><p className='text-center text-black text-[11px] font-[400] leading-[18px]'><strong className='text-[16px] font-[600px] leading-[20px]'>03</strong><br />Minutes</p></div>
                        <div className='w-[62px] h-[62px] rounded-full bg-white pt-[10px]'><p className='text-center text-black text-[11px] font-[400] leading-[18px]'><strong className='text-[16px] font-[600px] leading-[20px]'>44</strong><br />Seconds</p></div>
                    </div>
                    <div className='pt-[30px] mt-[10px]'>
                        <button className='w-[170px] h-[56px] px-[48px] py-[16px] bg-[#00FF66] text-white rounded'>Buy Now!</button>
                    </div>
                </div>
                <div className=" mt-4  ">
                    <img className="w-[568px] h-[450px] px-[16px] py-[45px] " src={radio} alt="radio" />
                </div>
            </div>
        </section>
    );
}

export default Highlights;


