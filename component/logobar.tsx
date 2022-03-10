import react from "react";
import Image from "next/image";
import mainBarData from "../data/mainBarData";
import Link from "next/link";
import { BiMap } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Logobar = () => {
  return (
    <nav className="navbar navbar-light ">
      <div className="container-fluid">
        <Link href="/">
          <a>
            <Image
              src="/001.png"
              alt=""
              width="140"
              height="40"
              className="d-inline-block align-text-top"
            />
          </a>
        </Link>

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="https://m.facebook.com/CentrodeGastroSCJ/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebookSquare id="icon"></FaFacebookSquare>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/centrogastro_sagradocorazon/?hl=es"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram id="icon"></FaInstagram>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.google.com/maps/place/Centro+de+Gastroenterolog%C3%ADa+Sagrado+Coraz%C3%B3n+De+Jes%C3%BAs/@-34.7243935,-58.2501319,19z/data=!4m5!3m4!1s0x95a32e44312de28b:0xe2227fff848c9c04!8m2!3d-34.7244368!4d-58.2496164"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BiMap id="icon"></BiMap>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Logobar;
