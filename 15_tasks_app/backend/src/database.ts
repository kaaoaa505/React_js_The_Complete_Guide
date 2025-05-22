import sqlite3 from 'sqlite3';
import { Database } from 'sqlite3';

const db = new sqlite3.Database('./tasks.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    createTables();
  }
});

function createTables() {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating tables:', err);
    } else {
      console.log('Tables created or already exist');
    }
  });
}

export interface Task {
  id: string;
  text: string;
  created_at?: string;
}

export const getAllTasks = (): Promise<Task[]> => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM tasks ORDER BY created_at DESC', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows as Task[]);
      }
    });
  });
};

export const addTask = (task: Task): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO tasks (id, text) VALUES (?, ?)', [task.id, task.text], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const deleteTask = (id: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM tasks WHERE id = ?', [id], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export default db; 