

const Tag_Powered: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center cursor-pointer duration-150 hover:scale-110 "

        >
            <a href="/Currículo Thiago Chiqueti.pdf" download>
                <div className="bg-slate-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-[0px_10px_15px_0px_#b9b9b9] flex flex-col items-start p-2 text-black font-bold ">
                    <p className="-mb-1 opacity-60 text-xs">Currículo</p>
                    <p className="text-lg ml-1">Thiago <span className="text-sky-500">Chiqueti</span></p>
                </div>
            </a>

        </div>
    );
};

export default Tag_Powered;
