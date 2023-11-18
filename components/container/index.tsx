interface props{
    children: React.ReactNode
}
const Container: React.FC<props> = ({children}: props) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center max-w-5xl">
        {children}
    </div>
  );
}

export default Container;