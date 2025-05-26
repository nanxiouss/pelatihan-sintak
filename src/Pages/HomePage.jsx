import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa6";


function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[450px]"
        style={{
          backgroundImage: "url(src/assets/kopi-bg.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Nan's Coff</h1>
            <p className="mb-5 text-xl font-bold">
              Premium Indonesian Coffee Beans for Global Markets
            </p>
            <button className="btn btn-neutral bg-amber-800 text-white">
              View Coffee Catalog <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src\assets\kopi2.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-amber-800 text-white">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

