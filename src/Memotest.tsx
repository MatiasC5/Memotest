import { useEffect, useState } from "react";

const ELEMENTS: string[] = [
  "https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/c-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
  "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => 0.5 - Math.random());

export const MemoTestApp = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [guessed, setGuessed] = useState<string[]>([]);

  useEffect(() => {
    const [first, second] = selected;
    if (selected.length === 2) {
      if (first.slice(2) === second.slice(2)) {
        setGuessed((prevState) => [...prevState, first, second]);
        setSelected([]);
      } else {
        setTimeout(() => {
          setSelected([]);
        }, 500);
      }
    }
  }, [selected, guessed]);

  const handleClick = (image: string): void => {
    if (selected.length < 2 && !guessed.includes(image)) {
      setSelected((prevState) => [...prevState, image]);
    }
  };

  const resetGame = () => {
    setSelected([]);
    setGuessed([]);
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center bg-gray-800">
      <h3 className="text-2xl text-white mb-4">
        Score: <span className="text-red-400">{guessed.length / 2}</span>
      </h3>
      <section className="grid grid-cols-3 gap-4 ">
        {ELEMENTS.map((image) => {
          const url = image.slice(2);
          return selected.includes(image) || guessed.includes(image) ? (
            <img
              src={url}
              alt={image}
              key={image}
              className="border-2 bg-yellow-500 gap-2 cursor-pointer"
            />
          ) : (
            <img
              src="https://icongr.am/clarity/search.svg?size=128&color=currentColor"
              alt={image}
              key={image}
              onClick={() => handleClick(image)}
              className="border-2 border-white bg-yellow-500  cursor-pointer"
            />
          );
        })}
      </section>

      {guessed.length === ELEMENTS.length ? (
        <h3 className="text-3xl text-white font-bold mt-4">You Win!!</h3>
      ) : (
        ""
      )}
      <button
        className="bg-blue-400 h-14 w-44 rounded-xl mt-4 font-bold"
        onClick={resetGame}
      >
        RESET
      </button>
    </main>
  );
};
