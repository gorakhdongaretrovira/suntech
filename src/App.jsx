import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Loader from "./components/Loader/Loader";
import Applications from "./pages/Applications";
import Media from "./pages/Media";
import Video from "./pages/Videos";
import Contact from "./pages/Contact";

import Home from "./pages/Home";
import About from "./pages/About";
import MachinePage from "./pages/MachinePage";
import ProductDetail from "./pages/ProductDetail";
import Solutions from "./pages/Solutions";
import Projects from "./pages/Projects";
import Brochure from "./pages/Brochure";
import FAQ from "./pages/FAQ";
import WhatsAppButton from "./components/common/WhatsAppButton";

const Services = () => (
  <div className="text-white text-3xl text-center mt-20">Services Page</div>
);



const NotFound = () => (
  <div className="text-white text-3xl text-center mt-20">404 – Page Not Found</div>
);

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <div className="bg-[#111827] min-h-screen flex flex-col">
          <Navbar />

          <div className="pt-20 flex-1">
            <Routes>
              <Route path="/"                   element={<Home />} />
              <Route path="/about"              element={<About />} />
              <Route path="/services"           element={<Services />} />
              <Route path="/solutions"          element={<Solutions />} />
              <Route path="/media"              element={<Media />} />
              <Route path="/media/videos"       element={<Video />} />
              <Route path="/contact"            element={<Contact />} />

              {/* Machine category pages */}
              <Route path="/machines/:type"     element={<MachinePage />} />

              {/* Product detail page */}
              <Route path="/product/:name"      element={<ProductDetail />} />

              {/* Applications page — query param: ?type=Namkeen */}
              <Route path="/applications"       element={<Applications />} />


<Route path="/solutions" element={<Solutions />} />

<Route path="/projects" element={<Projects />} />
<Route path="/brochure" element={<Brochure />} />
<Route path="/faq" element={<FAQ />} />

              <Route path="*"                   element={<NotFound />} />
            </Routes>
          </div>

          <Footer />

          <WhatsAppButton />
        </div>
      )}
    </>
  );
}