import { useEffect, useState } from "react";

function useBookmarks() {
  let [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    let bookmarkString = localStorage.getItem("bookmarks") || "{}";
    let bookmarks = JSON.parse(bookmarkString);
    setBookmarks(Object.values(bookmarks));
  }, []);

  return bookmarks;
}

export default useBookmarks;
