import BookingPage from "./pages/BookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <BookingPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
