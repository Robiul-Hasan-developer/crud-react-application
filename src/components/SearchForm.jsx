import { Search } from "lucide-react";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pb-5 flex justify-end">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex">
          <div className="relative md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-white px-4 py-2 pr-10 focus:outline-none rounded-lg border border-neutral-300 focus:border-neutral-400"
              placeholder="Search Task"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearch(e.target.value); 
              }}
              required
            />
            <button
              type="submit"
              className="absolute right-2 top-0 h-full rounded-e-lg text-black md:right-4 text-neutral-700 hover:text-blue-600"
            >
              <Search />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;

// import { Search } from "lucide-react";
// import { useState } from "react";

// const SearchForm = ({ onSearch }) => {

// 	const [searchTerm, setSearchTerm] = useState("");

// 	function handleSearchClick (event) {
// 		event.preventDefault();
// 		onSearch(searchTerm)
// 	}

//   return (
//     <div className="pb-5 flex justify-end">
//       <form>
//         <div className="flex">
//           <div className="relative md:min-w-[380px] lg:min-w-[440px]">
//             <input
//               type="search"
//               id="search-dropdown"
//               className="z-20 block w-full bg-white px-4 py-2 pr-10 focus:outline-none rounded-lg border border-neutral-300 focus:border-neutral-400"
//               placeholder="Search Task"
// 			  value={searchTerm}
// 			  onChange={(e) => setSearchTerm(e.target.value)}
//               required
//             />
//             <button
//               type="submit"
//               className="absolute right-2 top-0 h-full rounded-e-lg text-black md:right-4 text-neutral-700 hover:text-blue-600"
// 			  onClick={handleSearchClick}
//             >
//               <Search />
//               <span className="sr-only">Search</span>
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchForm;
