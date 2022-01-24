import './App.css';
import Category from './components/Category/Category';
import Easyandfast from './components/EasyandFast/Easyandfast';
import Emailcomponent from './components/Emailcomponent/Emailcomponent';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import NavFooter from './components/NavFooter/NavFooter';
import Topselling from './components/Topselling/Topselling';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Category/>
        <Topselling/>
        <Easyandfast/>
        <Emailcomponent/>
        <NavFooter/>
        <Footer/> 
    </div>
  );
}

export default App;
