import { footerLinks, socialMedia } from '../../data/dummydata'


const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((footerLink) => (
                    <div key={footerLink} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                        <h4 className='font-poppins font-medium  text-[18px] leading-[27px] text-white py-4'>{footerLink.title}</h4>
                        <ul className='list-none mt-1 '>
                            {footerLink.links.map((link, index) => (
                                <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex.col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
                    Copyright Rimel 2022. All right reserved.
                </p>
                <div className='flex flex-row md:mt-0 mt-6 mr-4 '>
                    {socialMedia.map((social, index) => (
                        <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer
          ${index !== socialMedia.length - 1 ? 'mr-8' : 'mr-0'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
