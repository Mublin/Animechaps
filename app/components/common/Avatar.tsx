import { forwardRef, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'away';
}

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  ({ className, size = 'md', fallback, status, alt, ...props }, ref) => {
    const sizes = {
      sm: 'h-8 w-8',
      md: 'h-10 w-10',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
    };
    
    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-accent',
    };
    
    return (
      <div className="relative inline-block">
        <div className={cn(
          'rounded-full overflow-hidden bg-muted flex items-center justify-center',
          sizes[size],
          className
        )}>
          {props.src ? (
            <img
              ref={ref}
              alt={alt || 'Avatar'}
              className="h-full w-full object-cover"
              {...props}
            />
          ) : (
            <span className="text-muted-foreground font-medium">
              {fallback || '?'}
            </span>
          )}
        </div>
        {status && (
          <span className={cn(
            'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background',
            statusColors[status]
          )} />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
