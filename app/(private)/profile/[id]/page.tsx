'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Avatar } from '@/components/common/Avatar';
import { Button } from '@/components/common/Button';
import { Card } from '@/components/common/Card';
import { ChevronLeft, MessageSquare, UserPlus, UserMinus } from 'lucide-react';
import { useUser } from '@/contexts/UserContext';

const MOCK_USERS = [
  { id: '1', username: 'sarah_wilson', displayName: 'Sarah Wilson', bio: 'Love photography and travel 📸✈️', followers: ['2', '3'], following: ['2'], createdAt: new Date() },
  { id: '2', username: 'tech_team', displayName: 'Tech Team', bio: 'Building amazing products together 🚀', followers: ['1'], following: ['1', '3'], createdAt: new Date() },
  { id: '3', username: 'mike_johnson', displayName: 'Mike Johnson', bio: 'Software developer and coffee enthusiast ☕', followers: ['1'], following: ['2'], createdAt: new Date() },
  { id: '4', username: 'emma_davis', displayName: 'Emma Davis', bio: 'Content creator and fitness lover 💪', followers: [], following: [], createdAt: new Date() },
];

export default function UserProfile() {
  const params = useParams();
  const navigate = useRouter();
  const { user: currentUser, followUser, unfollowUser } = useUser();
  
  const userId = params.id as string;
  const profileUser = MOCK_USERS.find(u => u.id === userId) || MOCK_USERS[0];
  const isOwnProfile = currentUser?.id === userId;
  const isFollowing = currentUser?.following.includes(userId) || false;

  const handleFollowToggle = () => {
    if (!currentUser) return;
    
    if (isFollowing) {
      unfollowUser(userId);
    } else {
      followUser(userId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate.back()}
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Profile</h1>
        <div className="w-20" />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Profile Header */}
        <Card className="p-4 md:p-6">
          <div className="flex flex-col items-center text-center">
            <Avatar size="xl" fallback={profileUser.displayName[0]} />
            <h2 className="text-xl md:text-2xl font-bold mt-4">{profileUser.displayName}</h2>
            <p className="text-muted-foreground">@{profileUser.username}</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-md">{profileUser.bio}</p>
            
            {!isOwnProfile && (
              <div className="flex gap-2 mt-4 w-full max-w-sm">
                <Button
                  variant={isFollowing ? "secondary" : "primary"}
                  className="flex-1"
                  onClick={handleFollowToggle}
                >
                  {isFollowing ? (
                    <>
                      <UserMinus className="h-4 w-4 mr-2" />
                      Unfollow
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Follow
                    </>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  className="flex-1"
                  onClick={() => navigate.push(`/chats/${userId}`)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </Button>
              </div>
            )}
          </div>
        </Card>

        {/* Stats */}
        <Card className="p-4 md:p-6">
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{profileUser.followers.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">{profileUser.following.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Following</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-secondary">12</p>
              <p className="text-xs md:text-sm text-muted-foreground">Posts</p>
            </div>
          </div>
        </Card>

        {/* Recent Posts */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No posts yet</p>
          </div>
        </Card>
      </div>
    </div>
  );
}