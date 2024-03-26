import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsApp from "./components/News/News";
import Footer from "./components/Footer/Footer";
import BookmarkList from "./components/Bookmark/BookmarkList.jsx";
import USNews from "./components/Us India Page/USnews.jsx";
import IndiaNews from "./components/Us India Page/IndiaNews.jsx";
import Sidebar from "./components/SideBar/Sidebar.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Navbar />
          <Routes>
            <Route path="/home" element={<NewsApp />} />
            <Route path="/bookmarks" element={<BookmarkList />} />
            <Route path="/us" element={<USNews />} />
            <Route path="/india" element={<IndiaNews />} />
          </Routes>
        </div>
      </div>
        <Footer />
    </Router>
  );
};

export default App;
