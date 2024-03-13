import React, { useState, useEffect } from "react";
import "./NewsApp.css";
import ScrollToTopButton from "./Scroll";
import logo from "./logo.png";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 15;
  const maxVisiblePages = 5;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=bb34979c0b6443a089b396b13b91d803"
        );
        const result = await response.json();
        setArticles(result.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleSeeNews = (url) => window.open(url, "_blank");

  const handleImageClick = (url) => window.open(url, "_blank");

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const renderPaginationButtons = () => {
    const visiblePageNumbers = Array.from(
      { length: Math.min(maxVisiblePages, totalPages) },
      (_, i) => currentPage - Math.floor(maxVisiblePages / 2) + i
    ).filter((pageNumber) => pageNumber > 0 && pageNumber <= totalPages);

    const paginationButtons = visiblePageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => paginate(number)}
        className={currentPage === number ? "active" : ""}
      >
        {number}
      </button>
    ));

    if (visiblePageNumbers.length > 0) {
      if (visiblePageNumbers[0] !== 1) {
        paginationButtons.unshift(
          <button key="first" onClick={() => paginate(1)}>
            {"<<"}
          </button>
        );
      }

      if (visiblePageNumbers[visiblePageNumbers.length - 1] !== totalPages) {
        paginationButtons.push(
          <button key="last" onClick={() => paginate(totalPages)}>
            {">>"}
          </button>
        );
      }
    }

    return paginationButtons;
  };

  return (
    <div className="container">
      <div className="heading">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Latest News</h1>
      </div>

      <div className="articles-grid">
        {currentArticles.map((article, index) => (
          <div className="article-card" key={index}>
            <div className="card-content">
              <h2>{article.title}</h2>
              {article.urlToImage && (
                <div
                  className="image-container"
                  onClick={() => handleImageClick(article.url)}
                >
                  <img src={article.urlToImage} alt={article.title} />
                </div>
              )}
              <p>{article.description}</p>
              <div className="card-action">
                <button
                  className="news-button"
                  onClick={() => handleSeeNews(article.url)}
                >
                  See News
                </button>
              </div>
              <p>
                <strong>Published:</strong>{" "}
                <span className="highlight">
                  {new Date(article.publishedAt).toLocaleString()}
                </span>
                <p className="publisher">
                  <strong>Publisher:</strong> {article.author}
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">{renderPaginationButtons()}</div>
      <ScrollToTopButton />
    </div>
  );
};

export default NewsApp;
