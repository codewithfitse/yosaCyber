import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router";
import { Button } from "../components/Button";
import axios from "axios";

const Pricing = () => {
  return (
    <div className="w-full h-[100%] background text-amber-50">
      <Header />

      <Footer />
    </div>
  );
};

export default Pricing;
