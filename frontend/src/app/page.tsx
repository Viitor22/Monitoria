import Header from './components/header_home/header_home'
import Hero from './components/hero/hero'
import About from './components/about/about'
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
    </>
  );
}
