"use client";
import { useState } from 'react';
import { Avatar } from '../../components/common/Avatar';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  Star,
  MoreVertical,
  ChevronLeft
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const MOCK_REELS = [
  {
    id: 1,
    author: 'Sarah Wilson',
    avatar: '',
    description: 'Beautiful sunset at the beach 🌅',
    videoUrl: '',
    rating: 4.5,
    ratingCount: 234,
    likes: 1200,
    comments: 89,
  },
  {
    id: 2,
    author: 'Mike Johnson',
    avatar: '',
    description: 'Cooking my favorite pasta recipe 🍝',
    videoUrl: '',
    rating: 4.8,
    ratingCount: 567,
    likes: 2400,
    comments: 156,
  },
];

export default function Reels() {
  const [currentReel, setCurrentReel] = useState(MOCK_REELS[0]);
  const [userRating, setUserRating] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const navigate = useRouter();

  const handleRate = (rating: number) => {
    setUserRating(rating);
    // TODO: Submit rating to backend
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate.push('/chats')}
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Chat
        </Button>
        <h1 className="text-xl font-bold">Reels</h1>
        <div className="w-20" />
      </div>

      {/* Reels Container */}
      <div className="flex-1 flex items-center justify-center p-2 md:p-4">
        <div className="relative w-full max-w-sm md:max-w-md aspect-[9/16] bg-muted rounded-2xl md:rounded-3xl overflow-hidden">
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <p className="text-muted-foreground">Video Player</p>
          </div>

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
            {/* Top Bar */}
            <div className="p-4 flex justify-end">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0 text-white">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
              {/* Author */}
              <div className="flex items-center gap-3 mb-3">
                <Avatar size="md" fallback={currentReel.author[0]} />
                <div className="flex-1">
                  <p className="font-semibold">{currentReel.author}</p>
                  <p className="text-sm opacity-90">{currentReel.description}</p>
                </div>
              </div>

              {/* Rating */}
              <Card className="p-3 md:p-4 mb-3 bg-card/90 backdrop-blur">
                <p className="text-xs md:text-sm font-medium mb-2 text-foreground">Rate this reel</p>
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRate(star)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-6 w-6 md:h-8 md:w-8 ${
                            star <= userRating
                              ? 'fill-accent text-accent'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{currentReel.rating}</span>
                    {' '}({currentReel.ratingCount})
                  </div>
                </div>
              </Card>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Button variant="ghost" className="flex-1 text-white hover:bg-white/20">
                  <Heart className="h-5 w-5 mr-2" />
                  {currentReel.likes}
                </Button>
                <Button 
                  variant="ghost" 
                  className="flex-1 text-white hover:bg-white/20"
                  onClick={() => setShowComments(!showComments)}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {currentReel.comments}
                </Button>
                <Button variant="ghost" className="flex-1 text-white hover:bg-white/20">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Modal (placeholder) */}
      {showComments && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end animate-fade-in">
          <Card className="w-full max-h-[70vh] rounded-t-3xl p-6 animate-slide-up">
            <h3 className="text-lg font-semibold mb-4">Comments</h3>
            <p className="text-muted-foreground">Comments will appear here...</p>
            <Button
              variant="ghost"
              className="mt-4 w-full"
              onClick={() => setShowComments(false)}
            >
              Close
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
}
