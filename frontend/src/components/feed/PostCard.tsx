import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  author: {
    name: string;
    bio: string;
    initials: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  comments: number;
}

export const PostCard = ({ author, content, timestamp, likes, comments }: PostCardProps) => {
  return (
    <Card className="glass-card border-border/50 animate-fade-in hover:border-border/70 transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                {author.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground hover:text-primary cursor-pointer transition-colors">
                {author.name}
              </h3>
              <p className="text-sm text-muted-foreground">{author.bio}</p>
              <p className="text-xs text-muted-foreground/70">{timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-foreground leading-relaxed mb-4">{content}</p>
        
        <div className="flex items-center justify-between pt-3 border-t border-border/30">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-400 transition-colors group">
              <Heart className="w-4 h-4 mr-2 group-hover:fill-current" />
              <span className="text-sm">{likes}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-400 transition-colors">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">{comments}</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-400 transition-colors">
              <Share className="w-4 h-4 mr-2" />
              <span className="text-sm">Share</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};