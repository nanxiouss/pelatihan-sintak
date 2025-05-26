import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function CardName() {
  return (
    <>
      <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-96 h-auto shadow-2xl rounded-xl bg-white p-4">
          <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\Pas Foto Square.png"
              alt=""
              className="w-30 rounded-full shadow-lg shadow-neutral-300"
            />

            <h1 className="text-xl font-bold mt-2">Anandari Pramadhanty</h1>
            <p>Mahasiswa</p>
          </div>

          <div className="m-2 mt-4 text-justify">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
              similique, laborum dolor iste ab maiores eligendi maxime quisquam
              beatae exercitationem qui temporibus officiis voluptatum nulla ad,
              consequuntur ipsa quas. Nulla?
            </p>
          </div>
          <LinkSocial
            text="Instagram"
            icon={<FaInstagram className="mr-2 text-red-400"/>}
            link="https://www.instagram.com/anandrp_?igsh=MTdxczdhcnR1czdwaA=="
          />
          <LinkSocial
            text="Twitter"
            icon={<FaTwitter className="mr-2 text-blue-400"/>}
            link="https://www.instagram.com/anandrp_?igsh=MTdxczdhcnR1czdwaA=="
          />
          <LinkSocial
            text="LinkedIn"
            icon={<FaLinkedin className="mr-2 text-indigo-900"/>}
            link="https://www.instagram.com/anandrp_?igsh=MTdxczdhcnR1czdwaA=="
          />

        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4 flex justify-center items-center">
        <a
          className=" bg-black text-white p-2 w-full rounded-lg text-center flex justify-center items-center"
          href="https://www.google.co.id/?hl=id"
          target="blank"
        >
          {props.icon} {props.text}
        </a>
      </div>
    </>
  );
}
