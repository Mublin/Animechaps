'use client';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Avatar } from '@/components/common/Avatar';
import { Button } from '@/components/common/Button';
import { 
  Phone, 
  Video, 
  MoreVertical, 
  Send, 
  Paperclip, 
  Smile,
  ChevronLeft,
  User
} from 'lucide-react';

const MOCK_CONVERSATIONS = [
  { id: 1, name: 'Sarah Wilson', avatar: '', lastMessage: 'See you tomorrow!', time: '2m', unread: 2, online: true },
  { id: 2, name: 'Tech Team', avatar: '', lastMessage: 'Great work everyone 🎉', time: '1h', unread: 0, online: false, isGroup: true },
  { id: 3, name: 'Mike Johnson', avatar: '', lastMessage: 'Thanks for the update', time: '3h', unread: 0, online: false },
  { id: 4, name: 'Emma Davis', avatar: '', lastMessage: 'Did you see the new reels?', time: '5h', unread: 1, online: true },
];

const MOCK_MESSAGES = [
  { id: 1, text: 'Hey! How are you?', sender: 'other', time: '10:30 AM', type: 'text' },
  { id: 2, text: "I'm great! Just working on the new project", sender: 'me', time: '10:32 AM', type: 'text' },
  { id: 3, text: 'That sounds exciting! Tell me more about it', sender: 'other', time: '10:33 AM', type: 'text' },
  { id: 4, text: "It's a social media app with video calls and reels", sender: 'me', time: '10:35 AM', type: 'text' },
  { id: 5, text: 'Voice message', sender: 'other', time: '10:36 AM', type: 'voice', duration: '0:15' },
];

export default function IndividualChat() {
  const params = useParams();
  const navigate = useRouter();
  const [message, setMessage] = useState('');
  
  const chatId = parseInt(params.id as string);
  const selectedChat = MOCK_CONVERSATIONS.find(conv => conv.id === chatId) || MOCK_CONVERSATIONS[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    console.log('Sending:', message);
    setMessage('');
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Chat Header */}
      <div className="h-16 px-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="h-9 w-9 p-0 md:hidden"
            onClick={() => navigate.push('/chats')}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <button
            onClick={() => navigate.push(`/profile/${selectedChat.id}`)}
            className="flex items-center gap-3 hover:bg-muted rounded-lg p-2 -ml-2"
          >
            <Avatar size="md" fallback={selectedChat.name[0]} status={selectedChat.online ? 'online' : 'offline'} />
            <div className="text-left">
              <h2 className="font-semibold">{selectedChat.name}</h2>
              <p className="text-xs text-muted-foreground">
                {selectedChat.online ? 'Active now' : 'Last seen recently'}
              </p>
            </div>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
            <Phone className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {MOCK_MESSAGES.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${msg.sender === 'me' ? 'order-2' : ''}`}>
              <div
                className={`rounded-2xl px-4 py-2 ${
                  msg.sender === 'me'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                {msg.type === 'voice' ? (
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                    <div className="flex-1 h-1 bg-current opacity-30 rounded"></div>
                    <span className="text-xs">{msg.duration}</span>
                  </div>
                ) : (
                  <p>{msg.text}</p>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1 px-2">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Button variant="ghost" size="sm" type="button" className="h-10 w-10 p-0">
            <Paperclip className="h-5 w-5" />
          </Button>
          
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 h-11 px-4 rounded-xl bg-muted border-none focus:outline-none focus:ring-2 focus:ring-ring"
          />
          
          <Button variant="ghost" size="sm" type="button" className="h-10 w-10 p-0">
            <Smile className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="sm" type="button" className="h-10 w-10 p-0">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </Button>
          
          <Button variant="primary" size="sm" type="submit" className="h-10 w-10 p-0">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}