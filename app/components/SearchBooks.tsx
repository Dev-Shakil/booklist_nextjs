"use client";

import { Input } from "@/components/ui/input";

interface SearchBooksProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const SearchBooks: React.FC<SearchBooksProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Input
      className="w-[300px]"
      placeholder="Search Books"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBooks;