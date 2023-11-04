import Image from "next/image";

interface props {
    src: string;
    alt: string;
    width: number;
    height: number;
}

const App_icon: React.FC<props> = ({src, alt, width, height}) => {
  return (
    <div className=" hover:-translate-y-6 hover:scale-110 transition-all duration-300 cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        title={alt}
        className="rounded"
      />
    </div>
  );
};

export default App_icon;
