import { Link } from "react-router-dom";
import { BiSearch, BiUser } from "react-icons/bi";

const Navbar = () => {
    const data = [
        { href: "/", label: "Home" },
        { href: "/", label: "Destinations" },
        { href: "/", label: "Travel" },
        { href: "/", label: "Destinations" },
        { href: "/", label: "Book" },
    ]

    return (
        <div className="flex w-full items-center justify-between h-20 px-4 absolute z-10">
            <div>
                <h2 className="font-bold text-3xl p-3">Travel-Landing</h2>
            </div>

            <ul className="hidden md:flex items-center justify-center">
                {data.map((item, index) => (
                    <li key={index} className="my-6 mx-[1.5rem]">
                        <Link href={item.href} className="relative text-base font-medium no-underline group">
                            {item.label}
                            <span className="absolute bottom-[-0.6rem] left-0 block w-8 h-[0.125rem] bg-blue-400 rounded-[0.5rem] opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex gap-10">
                <BiSearch className="hover:text-blue-400 duration-300 cursor-pointer" size={20} />
                <BiUser className="hover:text-blue-400 duration-300 cursor-pointer" size={20} />
            </div>
        </div>
    )
}

export default Navbar;