import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Gallery = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [message, setMessage] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("https://travel-x-408k.onrender.com/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function handleOauth() {
    window.location.href = "https://travel-x-408k.onrender.com/auths/google";
  }

  return (
    <div className="w-full h-[100%] text-amber-50 overflow-x-hidden">
      <Header />

      <div className="w-full h-full mt-30">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {[
            "/hero.jpg",
            "/gallery1.jpg",
            "/gallery2.jpg",
            "/gallery3.jpg",
            "/gallery4.jpg",
            "/gallery5.jpg",
            "/cdl2.png",
          ].map((src, idx) => (
            <div key={idx} className="w-full overflow-hidden rounded-lg">
              <img
                src={src}
                alt={`gallery-${idx}`}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full my-10 flex flex-col justify-center items-center mt-5">
        <h1 className="text-[20px] lg:text-[30px] py-5 font-bold text-center">
          Welcome to Dawit Freighters Transportation Service
        </h1>
        <h1 className="w-[80%] text-center text-[25px] text-gray-400">
          We are committed to supporting truck drivers and carriers at every
          stage of their careers. With our dedicated team and advanced
          technology, we ensure you get the best loads and the highest rates.
          Drive with us and experience the difference
        </h1>
        <button className="Button">Contact Us</button>
      </div>

      <Footer />
    </div>
  );
};
