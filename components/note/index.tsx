interface props {
  text: string;
  title?: string;
}

const Note: React.FC<props> = ({ text, title }) => {
  return (
    <div className="w-full sm:w-80 mt-4 bg-lime-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
      <h2 className="text-white p-3 px-4 text-2xl font-bold" id="#elixir">
        {title}
      </h2>
      <div className="text-white px-4 mb-6">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
