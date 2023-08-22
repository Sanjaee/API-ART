import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label className="L">Cari Template</label>
        <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1  shadow-sm "
          value={term}
          onChange={handleChange}
          placeholder="Search..."
        />
        <label className="mt-2 font-bold font-sans">My Contact :</label>
        <div className="justify-center flex mt-5">
          <a className="" href="https://www.linkedin.com/in/ahmad-afriza-ez4-ab9173276/">
            <img className="w-8 h-8 text-gray-500" src="/img/linkedin.png" alt="" />
          </a>
          <a className="ml-6" href="https://www.instagram.com/ahmdfrizza/?hl=en">
            <img className="w-8 h-8 text-gray-500 " src="/img/instagram.png" alt="" />
          </a>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
