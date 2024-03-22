import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookmark } from 'react-icons/fa';
import './Bookmark.css'; 

const BookmarksButton = () => {
  return (
    <div className="bookmarks-button">
      <Link to="/bookmarks">
        <FaBookmark />
      </Link>
    </div>
  );
};

export default BookmarksButton;
