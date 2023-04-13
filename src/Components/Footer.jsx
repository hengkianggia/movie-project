import React from "react";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGooglePlay, BsApple } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full px-5 py-10 flex justify-between text-white bg-gray-800">
      {/* left */}
      <div className="flex flex-col w-[50%] gap-y-2">
        <ul className="flex gap-x-5">
          <li>
            <Link>Tentang PNGKY movie</Link>
          </li>
          <li>
            <Link>Enjoy the feature</Link>
          </li>
          <li>
            <Link>Masukan</Link>
          </li>
        </ul>
        <div>
          <h3>
            © 2023 PNGKY movie dan entitas-entitas terkaitnya. Hak Cipta
            Dilindungi Emak Saya. © 2023 Entitas-entitas pemberi lisensi PNGKY
            movie. Hak Cipta Dilindungi Emak Saya.
          </h3>
        </div>
      </div>

      {/* right */}
      <div className="flex justify-start gap-x-10 w-[30%]">
        <div className="space-y-2">
          <h2>Terhubunglah dengan saya hehe</h2>
          <div className="flex gap-x-3 items-center">
            <div className="flex text-[36px]">
              <AiFillInstagram />
            </div>
            <div className="flex text-[32px]">
              <IoLogoWhatsapp />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3>PNGKY APP</h3>
          <div className="flex gap-x-3 items-center">
            <div className="flex text-[32px]">
              <BsGooglePlay />
            </div>
            <div className="flex text-[32px]">
              <BsApple />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
