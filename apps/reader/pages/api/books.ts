import fs from 'fs'
import path from 'path'

import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const booksDir = path.join(process.cwd(), 'public', 'books')

  if (!fs.existsSync(booksDir)) {
    return res.status(404).json({ error: 'Books folder not found.' })
  }

  const files = fs.readdirSync(booksDir).filter((f) => f.endsWith('.epub'))
  const bookList = files.map((f) => ({
    title: f.replace(/\.epub$/, ''),
    file: `/books/${f}`,
  }))

  res.status(200).json(bookList)
}
