import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";


function App() {
  // const user = localStorage.getItem("user");
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        
        <Header />
        <main className="flex-grow">hello 2.0 this is ssr rendering</main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
