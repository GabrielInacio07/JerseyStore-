import Nav from "./components/Nav";
import Header from "./components/Header";
import Jerseys from "./components/Jersey";
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <Jerseys />
      <Footer/>
    </main>
  );
}
