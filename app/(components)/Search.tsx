import Image from "next/image";

const Search = ({ className }: { className: string }) => {
  const isUnder = className !== "";
  className = className ? className : "search-input";

  return (
    <div className="search">
      <div
        className={`${
          isUnder ? "search-button-under" : "search-button"
        } rounded-l-xl `}
      >
        <Image
          src="/Search.svg"
          height={18}
          width={18}
          alt="Search"
          className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
        />
      </div>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search essentials, groceries and more..."
        className={className}
      />
      <div
        className={`${
          isUnder ? "search-button-under" : "search-button"
        } rounded-r-xl `}
      >
        <Image
          src="/list.svg"
          height={19}
          width={19}
          alt="list"
          className=" h-4 w-4 sm:h-5 sm:w-5 mr-1"
        />
      </div>
    </div>
  );
};

export default Search;
