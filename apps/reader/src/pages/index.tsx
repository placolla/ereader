import ePub from 'epubjs'
import { useEffect, useState } from 'react'

type Book = {
  title: string
  file: string
}

export default function Reader() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
  }, [])

  useEffect(() => {
    books.forEach((book, index) => {
      const epub = ePub(book.file)
      const rendition = epub.renderTo(`viewer-${index}`, {
        width: '100%',
        height: '500px',
      })
      rendition.display()
    })
  }, [books])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>📚 Available Books</h1>
      {books.map((book, index) => (
        <div key={book.file} style={{ marginBottom: '3rem' }}>
          <h2>{book.title}</h2>
          <div
            id={`viewer-${index}`}
            style={{ border: '1px solid #ccc', height: '500px' }}
          />
        </div>
      ))}
    </div>
  )
}
