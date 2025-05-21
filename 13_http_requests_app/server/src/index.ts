import express, { Request, Response, RequestHandler } from 'express';
import cors from 'cors';
import db from './db';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Get all movies
const getMovies: RequestHandler = (req, res) => {
  try {
    const movies = db.prepare('SELECT * FROM movies').all();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};
app.get('/api/movies', getMovies);

// Create a new movie
const createMovie: RequestHandler = (req, res) => {
  try {
    const { title, release_date, opening_crawl } = req.body;

    if (!title || !release_date || !opening_crawl) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const result = db.prepare(
      'INSERT INTO movies (title, release_date, opening_crawl) VALUES (?, ?, ?)'
    ).run(title, release_date, opening_crawl);

    const newMovie = db.prepare('SELECT * FROM movies WHERE id = ?').get(result.lastInsertRowid);
    res.status(201).json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create movie' });
  }
};
app.post('/api/movies', createMovie);

// Delete a movie
const deleteMovie: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const movieToDelete = db.prepare('SELECT * FROM movies WHERE id = ?').get(id);

    if (!movieToDelete) {
      res.status(404).json({ error: 'Movie not found' });
      return;
    }

    db.prepare('DELETE FROM movies WHERE id = ?').run(id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete movie' });
  }
};
app.delete('/api/movies/:id', deleteMovie);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
