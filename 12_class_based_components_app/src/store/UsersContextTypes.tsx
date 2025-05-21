// UsersContextTypes.ts

export interface User {
  id: number;
  name: string;
}

export interface UsersContextType {
  showUsers: boolean;
  searchTerm: string;
  users: User[];
  updateSearchTerm: (term: string) => void;
}
