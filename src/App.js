import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
        <Header />
        <Layout title='my title' desc='my desc' id='ID'/>
        <Footer/>
    </>
  );
}

export default App;
