import Database from 'better-sqlite3';

const db = new Database('movies.db');

// Create movies table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    release_date TEXT NOT NULL,
    opening_crawl TEXT NOT NULL
  )
`);

export default db; 