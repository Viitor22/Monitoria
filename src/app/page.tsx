import Header from './components/header_home/header_home.tsx'
import Hero from './components/hero/hero.tsx'
import About from './components/about/about.tsx'
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
