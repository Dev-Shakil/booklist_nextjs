'use server';

import { prisma } from "@/lib/prisma";

export async function createBook({ 
  title, 
  author, 
  genre, 
  publishedAt 
}: { 
  title: string; 
  author: string; 
  genre: string; 
  publishedAt: string; // Expecting an ISO date string
}) {
  try {
    const book = await prisma.book.create({
      data: { 
        title, 
        author, 
        genre, 
        publishedAt: new Date(publishedAt) // Convert string to Date
      },
    });

    return { success: true, book };
  } catch (error) {
    console.error('Error creating book:', error);
    return { success: false, message: 'Failed to create book' };
  }
}
export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedAt: string;
};

export async function getBooks() {
  try {
    if (!prisma.book) throw new Error("Prisma book model is undefined!");

    const books = await prisma.book.findMany();
    return books;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
}