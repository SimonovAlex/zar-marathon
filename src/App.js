import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

import bgImg from "./assets/img/bg1.jpg";

function App() {
  return (
    <>
        <Header />
        <Layout title='my title' desc='my desc' id='ID' urlBg={bgImg} />
        <Layout title='my title' desc='my desc' id='ID' colorBg='red' />
        <Layout title='my title' desc='my desc' id='ID' urlBg={bgImg} />
        <Footer/>
    </>
  );
}

export default App;
