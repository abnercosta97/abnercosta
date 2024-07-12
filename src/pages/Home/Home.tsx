import Hero from "./sections/Hero/Hero";
import Navbar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import { useMediaQuery } from "@mui/material";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBacground";
import theme from "../../Theme";

const Home = () => {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {isDesktop && <AnimatedBackground />}
      <Navbar />
      <Hero />
      <About />
    </>
  );
};

export default Home;
