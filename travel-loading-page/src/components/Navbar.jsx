import { Link } from "react-router-dom";
import { BiSearch, BiUser } from "react-icons/bi";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);

    const data = [
        { href: "/", label: "Home" },
        { href: "/", label: "Destinations" },
        { href: "/", label: "Travel" },
        { href: "/", label: "Destinations" },
        { href: "/", label: "Book" },
    ]

    const handleOpen = () => {
        setNav(!nav);
        setLogo(!logo)
    }

    return (
        <div className="flex w-full items-center justify-between h-20 px-4 lg:px-10 absolute z-10">
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

            <div onClick={handleOpen} className="md:hidden">
                {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </div>

            <div className={
                nav ?
                    "absolute left-0 top-0 w-full bg-black/20 backdrop-blur-lg px-4 py-7 flex-flex-col"
                    : "absolute left-[-100%]"
            }>
                <ul>
                    <h2 className="text-2xl font-bold mb-5">Travel-Landing</h2>

                    {data.map((item, index) => (
                        <li key={index} className="my-6">
                            <Link href={item.href} className="text-base font-medium no-underline">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="md:hidden flex flex-row items-center justify-center gap-5">
                    <BiSearch className="hover:text-blue-400 duration-300 cursor-pointer" size={20} />
                    <BiUser className="hover:text-blue-400 duration-300 cursor-pointer" size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar;