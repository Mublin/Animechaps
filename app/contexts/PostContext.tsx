'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  createdAt: Date;
  updatedAt?: Date;
  likes: string[];
  comments: Comment[];
  isEditable: boolean;
}

interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
}

interface PostContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'createdAt' | 'likes' | 'comments' | 'isEditable'>) => void;
  updatePost: (postId: string, content: string) => void;
  deletePost: (postId: string) => void;
  likePost: (postId: string, userId: string) => void;
  addComment: (postId: string, comment: Omit<Comment, 'id' | 'createdAt'>) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export function PostProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = (postData: Omit<Post, 'id' | 'createdAt' | 'likes' | 'comments' | 'isEditable'>) => {
    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      createdAt: new Date(),
      likes: [],
      comments: [],
      isEditable: true
    };
    setPosts(prev => [newPost, ...prev]);

    // Set edit timeout (10 minutes)
    setTimeout(() => {
      setPosts(prev => prev.map(post => 
        post.id === newPost.id ? { ...post, isEditable: false } : post
      ));
    }, 10 * 60 * 1000);
  };

  const updatePost = (postId: string, content: string) => {
    setPosts(prev => prev.map(post => 
      post.id === postId && post.isEditable 
        ? { ...post, content, updatedAt: new Date() }
        : post
    ));
  };

  const deletePost = (postId: string) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const likePost = (postId: string, userId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const likes = post.likes.includes(userId)
          ? post.likes.filter(id => id !== userId)
          : [...post.likes, userId];
        return { ...post, likes };
      }
      return post;
    }));
  };

  const addComment = (postId: string, commentData: Omit<Comment, 'id' | 'createdAt'>) => {
    const newComment: Comment = {
      ...commentData,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, comments: [...post.comments, newComment] }
        : post
    ));
  };

  return (
    <PostContext.Provider value={{
      posts,
      addPost,
      updatePost,
      deletePost,
      likePost,
      addComment
    }}>
      {children}
    </PostContext.Provider>
  );
}

export function usePost() {
  const context = useContext(PostContext);
  if (context === undefined) {
    throw new Error('usePost must be used within a PostProvider');
  }
  return context;
}