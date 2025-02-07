import { header } from "@/assets/images";
import { hamburger } from "@/assets/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="pr-2 bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] fixed w-[90%] max-sm:w-full z-50 rounded-full max-sm:rounded-none mx-auto left-1/2 -translate-x-1/2 top-10 max-sm:top-0">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img src={header} alt="Logo" width={200} height={29} />
        </a>

        {/* Search Bar */}
        <div className="relative flex-1 mx-8 ">
          <Search className="absolute right-4 top-2.5 text-black" size={20} />
          <Input
            style={{ height: "2.75rem" }}
            type="text"
            placeholder="Search your Dream University, Program, or Courses"
            className="pl-6 pr-12 py-2.5 rounded-full w-full border-none bg-pale-blue text-gray-700 placeholder:text-black focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 ">
          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 text-black max-lg:hidden"
            >
              Explore <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-lg rounded-2xl py-6 px-8 w-[80vw] max-w-6xl grid grid-cols-3 gap-8">
                {/* For Masters */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">For Masters</h3>
                  <div className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters (MS) in Electrical Engineering Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters in Economics Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters in Business Administration</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters in Telecommunication</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters in Journalism Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Masters (MS) in Accounting Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Pre-Depature</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2">View all</a>
                  </div>
                </div>

                {/* For Bachelors */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">For Bachelors</h3>
                  <div className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Mathematics Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Data Science Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Political Science Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Graphic Design Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Engineering Physics Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Finance Abroad</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Bachelors in Chemical Engineering Abroad</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2">View all</a>
                  </div>
                </div>

                {/* Universities */}
                <div>
                  <h3 className="font-semibold text-lg mb-4">Universities</h3>
                  <div className="flex flex-col space-y-3">
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in UK</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in USA</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in Canada</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in Australia</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in New Zealand</a>
                    <a href="#" className="text-gray-600 hover:text-blue-600">Universities in Germany</a>
                    <a href="#" className="text-blue-500 hover:text-blue-700 mt-2">View all</a>
                  </div>
                </div>

                
              </div>
            )}
          </div>

          <a href="#" className="text-black max-lg:hidden">
            Log in
          </a>

          <Button className="bg-coral-blue hover:bg-coral-blue text-white rounded-full max-lg:hidden">Sign up</Button>
        </div>

        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>

      </nav>
    </header>
  );
};

export default Nav;
