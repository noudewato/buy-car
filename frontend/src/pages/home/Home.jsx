import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar-component/Navbar";
import Trending from "../trending/Trending";
import Footer from "../../components/footer-component/Footer";
import HomeComponent from "../../components/home-component/Home.Component";
import Brand from "../../components/topBrand-component/Brand.Component";
import Auction from "../auction/Auction";
import Review from "../review/Review";
import AboutComponent from "../../components/about-component/About.Component";
import ServiceComponent from "../../components/service-component/Service.Component";
import ContactComponent from "../../components/contact.component/Contact.Component";
import SearchComponent from "../../components/search-component/Search.Component";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeComponent />
      <SearchComponent/>
      <AboutComponent />
      <Trending />
      <ServiceComponent />
      <Auction />
      <Brand />
      <Review />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Home;
