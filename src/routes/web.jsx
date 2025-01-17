import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/home";
import About from "../pages/about";
import ArticleSummary from "../pages/articleSummary";
import Contact from "../pages/contact";

export default function Web() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/article-summary/php" element={<ArticleSummary />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}
