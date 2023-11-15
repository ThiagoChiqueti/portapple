
interface props{
    children: React.ReactNode
}

const Block: React.FC<props> = ({children}: props) => {
  return (
    <div className="h-auto mt-4 w-full bg-neutral-800 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-600">
      {children}
    </div>
  );
};

export default Block;
