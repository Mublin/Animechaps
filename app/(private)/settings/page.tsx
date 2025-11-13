'use client';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { ChevronLeft, Sun, Moon, Monitor } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export default function Settings() {
  const navigate = useRouter();
  const { theme, setTheme } = useTheme();

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Monitor },
  ] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="h-16 px-4 border-b border-border flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate.push('/chats')}
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back
        </Button>
        <h1 className="text-xl font-bold ml-4">Settings</h1>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-4 md:space-y-6">
        {/* Theme Settings */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Appearance</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Choose how ChatRate looks to you
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {themeOptions.map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setTheme(value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  theme === value
                    ? 'border-primary bg-primary/10'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Icon className={`h-6 w-6 mx-auto mb-2 ${
                  theme === value ? 'text-primary' : 'text-muted-foreground'
                }`} />
                <p className={`text-sm font-medium ${
                  theme === value ? 'text-primary' : 'text-foreground'
                }`}>
                  {label}
                </p>
              </button>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Message notifications</p>
                <p className="text-sm text-muted-foreground">Get notified about new messages</p>
              </div>
              <button className="h-6 w-11 rounded-full bg-primary relative">
                <span className="absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white" />
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Call notifications</p>
                <p className="text-sm text-muted-foreground">Get notified about incoming calls</p>
              </div>
              <button className="h-6 w-11 rounded-full bg-primary relative">
                <span className="absolute right-1 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white" />
              </button>
            </div>
          </div>
        </Card>

        {/* Privacy */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Privacy</h3>
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Blocked accounts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Who can message me
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Who can call me
            </Button>
          </div>
        </Card>

        {/* Account */}
        <Card className="p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold mb-4">Account</h3>
          <div className="space-y-3">
            <Button variant="ghost" className="w-full justify-start">
              Change password
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive">
              Delete account
            </Button>
          </div>
        </Card>

        {/* About */}
        <Card className="p-4 md:p-6 text-center">
          <p className="text-sm text-muted-foreground">ChatRate v1.0.0</p>
          <p className="text-xs text-muted-foreground mt-2">
            Made with ❤️ for connecting people
          </p>
        </Card>
      </div>
    </div>
  );
}
