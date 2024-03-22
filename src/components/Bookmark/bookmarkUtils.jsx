export const addBookmark = (url) => {
  const bookmarks = getBookmarks();
  bookmarks.push(url);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

export const removeBookmark = (url) => {
  let bookmarks = getBookmarks();
  if (!bookmarks) {
    bookmarks=[]
  }
  bookmarks = bookmarks.filter(bookmark => bookmark !== url);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

export const getBookmarks = () => {
  const bookmarksString = localStorage.getItem('bookmarks');
  if (bookmarksString) {
    return bookmarksString ? JSON.parse(bookmarksString) : [];
  } else {
    console.log("No bookmarks");
    return [];
  }
};
