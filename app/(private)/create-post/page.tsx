'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { ChevronLeft, Image, Video } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';
import { usePost } from '@/contexts/PostContext';

export default function CreatePost() {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter();
  const { user } = useUser();
  const { addPost } = usePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || !user) return;

    setIsLoading(true);
    
    addPost({
      userId: user.id,
      content: content.trim()
    });

    setIsLoading(false);
    navigate.push('/chats');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate.push('/chats')}
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Create Post</h1>
        <div className="w-20" />
      </div>

      <div className="max-w-2xl mx-auto p-4 md:p-6">
        <Card className="p-4 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's on your mind?"
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              required
            />

            <div className="flex items-center gap-2 md:gap-4 py-2">
              <Button variant="ghost" size="sm" type="button" className="flex-1 md:flex-none">
                <Image className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Photo</span>
              </Button>
              <Button variant="ghost" size="sm" type="button" className="flex-1 md:flex-none">
                <Video className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                <span className="text-xs md:text-sm">Video</span>
              </Button>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              isLoading={isLoading}
              disabled={!content.trim()}
            >
              Post
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}