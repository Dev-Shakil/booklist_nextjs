"use client";

import { useState, useEffect } from "react";
import { getBooks, Book } from "../actions/books";
import SearchBooks from "./SearchBooks";

export default function GetBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      const fetchedBooks: Book[] = await getBooks();
      setBooks(fetchedBooks);
    }
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) => {
    const publishedDate = new Date(book.publishedAt).toLocaleDateString();
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      publishedDate.includes(searchTerm)
    );
  });

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Book List</h1>
        <SearchBooks searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <ul className="space-y-3">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id} className="p-3 border rounded-md shadow">
              <h2 className="text-lg font-semibold">{book.title}</h2>
              <p className="text-gray-700">Author: {book.author}</p>
              <p className="text-gray-500">Genre: {book.genre}</p>
              <p className="text-gray-400 text-sm">
                Published: {new Date(book.publishedAt).toLocaleDateString()}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </ul>
    </div>
  );
}