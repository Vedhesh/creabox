import { User } from '../types';

export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User | null): void => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const signUp = (name: string, email: string, password: string): User => {
  // In a real app, this would make an API call
  const user: User = {
    id: Date.now().toString(),
    name,
    email
  };
  
  setCurrentUser(user);
  return user;
};

export const signIn = (email: string, password: string): User | null => {
  // In a real app, this would validate credentials
  // For demo purposes, we'll create a user
  const user: User = {
    id: Date.now().toString(),
    name: email.split('@')[0],
    email
  };
  
  setCurrentUser(user);
  return user;
};

export const signOut = (): void => {
  setCurrentUser(null);
};