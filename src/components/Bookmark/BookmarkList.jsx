import React, { useState, useEffect } from 'react';
import { getBookmarks } from './bookmarkUtils';
import './BookmarkList.css'; 

const BookmarkPage = () => {
  const [bookmarkedUrls, setBookmarkedUrls] = useState([]);

  useEffect(() => {
    const bookmarks = getBookmarks();
    console.log('Fetched Bookmarks:', bookmarks); 
    setBookmarkedUrls(bookmarks);
  }, []);

  console.log('Rendered Bookmarks:', bookmarkedUrls); 

  return (
    <div className="bookmark-page">
      <h1>Bookmarks</h1>
      {bookmarkedUrls.length === 0 ? (
        <p>No bookmarks found.</p>
      ) : (
        <ul className="article-list">
          {bookmarkedUrls.map((url, index) => (
            <li key={index} className="article-item">
              <a href={url} className="article-link" target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookmarkPage;
