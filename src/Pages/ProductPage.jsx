import React from "react";
import NavBar from "./NavBar";
import { FaArrowRight } from "react-icons/fa6";

function ProductPage() {
  return (
    <div>
      <NavBar />
      <HeroSection1 />
      <Card />
     
    </div>
  );
}

export default ProductPage;

function HeroSection1() {
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
            <h1 className="mb-5 text-5xl font-bold">Our Coffee Products</h1>
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

function Card() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\americano.jpg" alt="Americano" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Americano</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\cappuccino.jpg" alt="Cappuccino" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cappuccino</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\espresso.jpg" alt="Espresso" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Espresso</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\dalgona2.jpg" alt="Dalgona Coffee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Matcha Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\cappuccino.jpg" alt="Cappuccino" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Cappuccino</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-lg m-5 mt-7">
          <figure>
            <img src="src\assets\espresso.jpg" alt="Espresso" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Espresso</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
