import Image from 'next/image';
import {FaInstagramSquare, FaLinkedin, FaWhatsappSquare} from 'react-icons/fa'
const Navbar: React.FC = () => {
  return (
    <div className="w-full flex flex-row items-center justify-center fixed bottom-5">
      <div className="max-w-lg flex flex-row flex-1 items-center justify-center gap-4 p-3 bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-600 ">
        <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-200 cursor-pointer">
          <Image src='/linkedin.svg' alt='linkedin' width={60} height={60} title='Linkedin' className='rounded'/>
        </div>

        <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-200 cursor-pointer">
        <Image src='/whats.svg' alt='WhatsApp' width={60} height={60} title='Whatsapp' className='rounded'/>
        </div>

        <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-200 cursor-pointer">
        <Image src='/instagram.svg' alt='Instagram' width={65} height={65} title='Instagram' className='rounded'/>
        </div>

        <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-200 cursor-pointer">
        <Image src='/gmail.svg' alt='Gmail' width={60} height={60} title='Gmail' className='rounded'/>
        </div>

        <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-200 cursor-pointer">
        <Image src='/github.svg' alt='GitHub' width={60} height={60} title='GitHub' className='rounded'/>
        </div>
        

        
      </div>
    </div>
  );
};

export default Navbar;
