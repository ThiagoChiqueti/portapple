import Image from "next/image";
import Link from "next/link";
import { Url } from "url";

interface props {
  src: string;
  alt: string;
  width: number;
  height: number;
  name?: string;
  
}

const App_icon: React.FC<props> = ({ src, alt, width, height, name}) => {
  return (
    
      <div className="flex flex-col items-center hover:-translate-y-6 hover:scale-110 transition-all duration-300 cursor-pointer">
        <div className="bg-white rounded-xl">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            title={alt}
            className="rounded"
          />
        </div>
        <p className="text-white">{name}</p>
      </div>
  
  );
};

export default App_icon;
