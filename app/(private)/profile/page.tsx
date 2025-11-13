"use client";
import { useState } from 'react';
import { Avatar } from '../../components/common/Avatar';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { ChevronLeft, Camera, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/contexts/UserContext';

export default function Profile() {
  const navigate = useRouter();
  const { user, updateProfile } = useUser();
  const [username, setUsername] = useState(user?.username || 'johndoe');
  const [displayName, setDisplayName] = useState(user?.displayName || 'John Doe');
  const [bio, setBio] = useState(user?.bio || 'Love connecting with people 🌟');
  const [followers] = useState(user?.followers || []);
  const [following] = useState(user?.following || []);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    updateProfile({ username, displayName, bio });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate.push('/chats')}
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold">Profile</h1>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Avatar Section */}
        <Card className="p-4 md:p-6">
          <div className="flex flex-col items-center">
            <div className="relative">
              <Avatar size="xl" fallback={displayName[0]} />
              {isEditing && (
                <button className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                  <Camera className="h-5 w-5" />
                </button>
              )}
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-4">{displayName}</h2>
            <p className="text-muted-foreground">@{username}</p>
          </div>
        </Card>

        {/* Profile Info */}
        <Card className="p-4 md:p-6 space-y-4">
          <h3 className="text-base md:text-lg font-semibold">Profile Information</h3>
          
          <Input
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={!isEditing}
          />
          
          <Input
            label="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            disabled={!isEditing}
          />
          
          <div>
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
              rows={3}
              className="w-full px-4 py-2 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
          </div>

          {isEditing && (
            <Button variant="primary" className="w-full" onClick={handleSave}>
              Save Changes
            </Button>
          )}
        </Card>

        {/* Stats */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Your Stats</h3>
          <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-primary">{followers.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Followers</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-accent">{following.length}</p>
              <p className="text-xs md:text-sm text-muted-foreground">Following</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-secondary">42</p>
              <p className="text-xs md:text-sm text-muted-foreground">Posts</p>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <Card className="p-4 md:p-6 space-y-3">
          <Button
            variant="secondary"
            className="w-full"
            onClick={() => navigate.push('/settings')}
          >
            Settings & Privacy
          </Button>
          <Button
            variant="danger"
            className="w-full"
            onClick={() => navigate.push('/')}
          >
            Sign Out
          </Button>
        </Card>
      </div>
    </div>
  );
}
