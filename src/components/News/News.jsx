import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./NewsApp.css";
import ScrollToTopButton from "../Scroll/Scroll";
import logo from "../Assets/logo.png";
import Bookmark from "../Bookmark/Bookmark";
import defaultImage from "../Assets/default.png";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const bottomBoundaryRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=2cd73e01c88d486395a8347cfd26d603`
        );
        const result = await response.json();
        if (result.articles && Array.isArray(result.articles)) {
          setArticles((prevArticles) => [...prevArticles, ...result.articles]);
        } else {
          console.error("Articles data is not an array:", result.articles);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handleSeeNews = (url) => window.open(url, "_blank");

  const handleImageClick = (url) => window.open(url, "_blank");

  const renderArticles = () => {
    return articles.map((article, index) => (
      <div className="article-card" key={index}>
        <Bookmark article={article} />
        <h2>{article.title}</h2>
        <div className="article-card-content">
          <img
            src={article.urlToImage || defaultImage}
            alt={article.title || "Default"}
            onClick={() => handleImageClick(article.url)}
            className="article-image"
          />
          <p>{article.description}</p>
        </div>
        <div className="card-action">
          <button
            className="news-button"
            onClick={() => handleSeeNews(article.url)}
          >
            Read More
          </button>
        </div>
        <div className="published-info">
          <p>
            <strong>Published:</strong>{" "}
            <span className="highlight">
              {new Date(article.publishedAt).toLocaleString()}
            </span>
          </p>
          <p>
            <strong>Publisher:</strong> {article.author}
          </p>
        </div>
      </div>
    ));
  };

  const handleScroll = useCallback(() => {
    if (
      bottomBoundaryRef.current &&
      bottomBoundaryRef.current.getBoundingClientRect().top <=
        window.innerHeight
    ) {
      if (!loading) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    }
  }, [bottomBoundaryRef, loading]);

  useEffect(() => {
    const scrollHandler = () => handleScroll();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  return (
    <div className="container">
      <header className="heading">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1>Latest Tech News</h1>
      </header>

      <div className="articles-grid">
        {articles.length > 0 ? (
          renderArticles()
        ) : loading ? (
          <p>Loading...</p>
        ) : (
          <p>No articles available</p>
        )}
      </div>
      <div ref={bottomBoundaryRef}></div>

      <ScrollToTopButton />
    </div>
  );
};

export default News;
