import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { GithubProvider } from "./Context/Github/GithubContext";
import { AlertProvider } from "./Context/Alert/AlertContext";

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex h-screen flex-col justify-between">
                        <Navbar />
                        <main className="container mx-auto px-3 pb-12">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/notfound"
                                    element={<NotFound />}
                                />
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    );
}

export default App;
