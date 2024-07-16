import { Link } from '@inertiajs/react';
import DropdownUser from './DropdownUser';


const Header = (props) => {
  return (
    <header className="sticky top-0  flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-end justify-end  gap-2 sm:gap-4 ">
          <Link className="block flex-shrink-0" to="/">
            <img src="/images/logo-dmptsp.png" alt="Logo" className="w-32"/>
          </Link>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- User Area --> */}
            <DropdownUser />
            {/* <!-- User Area --> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
