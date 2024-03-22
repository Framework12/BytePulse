import React, { useState, useEffect } from 'react';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { addBookmark, removeBookmark, getBookmarks } from './bookmarkUtils';
import './Bookmark.css'; 

const Bookmark = ({ article }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = getBookmarks();
    setIsBookmarked(bookmarks.includes(article.url));
  }, [article.url]);

  const toggleBookmark = () => {
    const url = article.url;
    if (isBookmarked) {
      removeBookmark(url);
    } else {
      addBookmark(url);
    }
    setIsBookmarked(prevState => !prevState);
  };

  return (
    <div className="Bookmark">
      <div className="bookmark-button">
        <button onClick={toggleBookmark}>
          {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};

export default Bookmark;
