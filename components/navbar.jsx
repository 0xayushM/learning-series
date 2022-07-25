import Image from 'next/image';
import React from 'react'
import moon_Icon from '../public/navbar_icon/moon_icon.svg'
import sun_Icon from '../public/navbar_icon/sun_icon.svg'
import { useTheme } from 'next-themes';
import logo_light from '../public/navbar_icon/logo_light.png'
import logo_dark from '../public/navbar_icon/logo_dark.png'
import Link from 'next/link';

const Navbar = () => {
    const {theme,setTheme} = useTheme()

  return (
    <div>
      <div className="bg-gradient-to-r from-[#60009455] via-[#1f004b46] to-[#00000036]">
        <div className="flex items-start px-10 py-2 justify-between">
          <div className="p-2">
            <Image
              src={theme === "light" ? logo_light : logo_dark}
              height="40px"
              width="190px"
            />
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/#home">
              <h3 className="ml-10 text-md flex justify-center py-4 items-center hover:scale-110 ease-in duration-200">
                Home
              </h3>
            </Link>
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/learning">
              <h3 className="ml-10 text-md flex justify-center py-4 items-center hover:scale-110 ease-in duration-200">
                Start Learning
              </h3>
            </Link>
          </div>
          <div className="font-medium cursor-pointer">
            <Link href="/about">
              <h3 className="ml-10 text-md flex justify-center py-4 items-center hover:scale-110 ease-in duration-200">
                About Us
              </h3>
            </Link>
          </div>
          <div className="py-2">
            <button className="text-center py-3 rounded-3xl text-gray-900 font-bold text-sm px-5 cursor-pointer hover:scale-105 ease-in duration-200">
              Join Guild
            </button>
          </div>
          <div className="flex">
            <div className="visible">
              <Image
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="moon cursor-pointer"
                src={theme === "light" ? moon_Icon : sun_Icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar