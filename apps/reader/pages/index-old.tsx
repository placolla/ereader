import ePub from 'epubjs'
import { useEffect, useState } from 'react'
// @ts-ignore

type Book = {
  title: string
  file: string
}

export default function Reader() {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    fetch('/api/books')
      .then((res) => res.json())
      .then((data: Book[]) => setBooks(data))
  }, [])

  useEffect(() => {
    books.forEach((book, index) => {
      const viewerId = `viewer-${index}`
      const container = document.getElementById(viewerId)
      if (!container) return

      container.innerHTML = '' // clear previous renders

      const bookInstance = ePub(book.file)
      const rendition = bookInstance.renderTo(container, {
        width: '100%',
        height: 600,
        spread: 'always',
      })

      rendition.display()
    })
  }, [books])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem' }}>📚 Available Books</h1>
      {books.map((book, index) => (
        <div key={book.file} style={{ marginBottom: '3rem' }}>
          <h2>{book.title}</h2>
          <div
            id={`viewer-${index}`}
            style={{
              border: '1px solid #ccc',
              height: '600px',
              width: '100%',
              overflow: 'hidden',
            }}
          />
        </div>
      ))}
    </div>
  )
}
