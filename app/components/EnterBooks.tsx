'use client'
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { createBook } from '../actions/books';

const EnterBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publishedAt, setPublishedAt] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createBook({ title, author, genre, publishedAt });
    alert('Book Added!');
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-xl bg-white">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Enter Book Details</h1>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <Input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
            <Input 
              type="date" 
              value={publishedAt} 
              onChange={(e) => setPublishedAt(e.target.value)} 
            />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition">
              Add Book
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnterBooks;
