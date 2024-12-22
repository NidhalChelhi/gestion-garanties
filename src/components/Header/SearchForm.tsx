import { Search } from "lucide-react";

const SearchForm = () => {
  return (
    <>
      <li className="hidden lg:block">
        <form action="https://formbold.com/s/unique_form_id" method="POST">
          <div className="relative w-full max-w-[300px]">
            <button className="absolute left-5 top-1/2 -translate-y-1/2 text-dark hover:text-primary dark:text-dark-6 dark:hover:text-primary">
              <Search size={20} />
            </button>

            <input
              type="text"
              placeholder="Rechercher"
              className="w-full rounded-full border border-stroke bg-gray-2 py-3 pl-13.5 pr-5 text-dark focus:border-primary focus:outline-none dark:border-dark-4 dark:bg-dark-3 dark:text-white dark:focus:border-primary xl:w-[300px]"
            />
          </div>
        </form>
      </li>
    </>
  );
};

export default SearchForm;
