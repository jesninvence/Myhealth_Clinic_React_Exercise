import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import Feature from "./components/Feature";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <LandingPage></LandingPage>
    <Feature></Feature>
    <Services></Services>
    <About></About>
    <Doctors></Doctors>
    <Appointment></Appointment>
    <Footer></Footer>
    <Copyright></Copyright>
    </>
  );
}

export default App;
