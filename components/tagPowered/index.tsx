

const Tag_Powered: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center cursor-pointer duration-150 hover:scale-110 "

        >
            <a href="/Currículo Thiago Chiqueti.pdf" download>
                <div className="bg-black rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2) flex flex-col items-start p-2 text-white ">
                    <p className="-mb-1 opacity-60 text-xs">Currículo</p>
                    <p className="text-lg ml-1">Thiago <span className="text-sky-500">Chiqueti</span></p>
                </div>
            </a>

        </div>
    );
};

export default Tag_Powered;
