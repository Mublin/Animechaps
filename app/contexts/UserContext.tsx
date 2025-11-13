'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  avatar?: string;
  followers: string[];
  following: string[];
  createdAt: Date;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  followUser: (userId: string) => void;
  unfollowUser: (userId: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setUser(userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('chatrate-user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('chatrate-user');
    }
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem('chatrate-user', JSON.stringify(updatedUser));
      }
    }
  };

  const followUser = (userId: string) => {
    if (user && !user.following.includes(userId)) {
      const updatedUser = { ...user, following: [...user.following, userId] };
      setUser(updatedUser);
    }
  };

  const unfollowUser = (userId: string) => {
    if (user) {
      const updatedUser = { ...user, following: user.following.filter(id => id !== userId) };
      setUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      isAuthenticated: !!user,
      login,
      logout,
      updateProfile,
      followUser,
      unfollowUser
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}