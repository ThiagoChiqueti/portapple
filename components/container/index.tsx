interface props{
    children: React.ReactNode
}
const Container: React.FC<props> = ({children}: props) => {
  return (
    <div className="w-full flex flex-col items-center max-w-4xl">
        {children}
    </div>
  );
}

export default Container;