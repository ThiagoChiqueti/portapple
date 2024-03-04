

const Tag_Powered: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center cursor-pointer"

        >
            <div className="bg-black rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2) flex flex-col items-start p-2 text-white ">
                <p className="-mb-1 opacity-60 text-xs">Powered By</p>
                <p className="text-lg ml-1">Thiago <span className="text-sky-500">Chiqueti</span></p>
            </div>

        </div>
    );
};

export default Tag_Powered;
