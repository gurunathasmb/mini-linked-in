import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Image, Video, Calendar, Send } from 'lucide-react';

export const CreatePost = () => {
  const [content, setContent] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      toast({
        title: "Post Created!",
        description: "Your post has been shared with the community. Connect Supabase to save posts.",
      });
      setContent('');
    }
  };

  return (
    <Card className="glass-card border-border/50 animate-fade-in">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind? Share your thoughts with the community..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="input-glow bg-muted/30 border-border/50 text-foreground placeholder:text-muted-foreground min-h-[120px] resize-none"
                rows={4}
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex items-center space-x-2">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-blue-400 transition-colors"
              >
                <Image className="w-4 h-4 mr-2" />
                Photo
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-green-400 transition-colors"
              >
                <Video className="w-4 h-4 mr-2" />
                Video
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-purple-400 transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Event
              </Button>
            </div>

            <Button
              type="submit"
              disabled={!content.trim()}
              className="glow-button text-primary-foreground font-medium px-6"
            >
              <Send className="w-4 h-4 mr-2" />
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};