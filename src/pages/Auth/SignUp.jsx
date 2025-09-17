import React from "react";
import Slider from "react-slick";
import { FaGoogle, FaApple } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SignUp = () => {
  const images = [
    "/a.svg",
    "/b.svg",
    "/c.svg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="flex min-h-screen text-white m-10" style={{ backgroundColor: "#1f1b2e" }}>
      {/* Left - Slideshow */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 relative bg-[#53449F] rounded-3xl">
        <div className="text-8xl font-bold mb-8 z-10">AdmPT</div>
        <div className="w-full max-w-md z-10">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-[340px] object-contain"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right - Form */}
      <div className="w-1/2 bg-[#2B2738] text-white flex flex-col justify-center p-10">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Create an account</h2>
          <p className="text-sm text-gray-400 mb-6">
            Already have an account?{" "}
            <a href="/signin" className="text-purple-400 hover:underline">
              Log in
            </a>
          </p>

          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 bg-[#3B364C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 bg-[#3B364C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
              />
            </div>

            <input
              type="text"
              placeholder="Username"
              className="w-full bg-[#3B364C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#3B364C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
            />

            <input
              type="text"
              placeholder="Phone numbers"
              className="w-full bg-[#3B364C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full bg-[#2C2C2C] text-white px-4 py-2 rounded-md outline-none border border-gray-600"
            />

            <div className="flex items-start space-x-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <p>
                I agree to the{" "}
                <a href="#" className="text-purple-400 underline">
                  Terms & Conditions
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#6941C6] py-2 rounded-md hover:bg-purple-700 transition"
            >
              Create account
            </button>
          </form>

          <div className="text-center text-sm text-gray-400 mt-6">Or register with</div>

          <div className="flex gap-4 mt-4">
            <button className="flex-1 flex items-center justify-center border border-gray-600 py-2 rounded-md hover:bg-[#2c2c2c]">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex-1 flex items-center justify-center border border-gray-600 py-2 rounded-md hover:bg-[#2c2c2c]">
              <FaApple className="mr-2" /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
