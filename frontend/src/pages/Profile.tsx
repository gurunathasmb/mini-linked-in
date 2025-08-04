import { Header } from '@/components/layout/Header';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PostCard } from '@/components/feed/PostCard';
import { MapPin, Calendar, Link as LinkIcon, Edit3 } from 'lucide-react';

const userPosts = [
  {
    author: {
      name: "John Doe",
      bio: "Software Engineer at Innovation Labs",
      initials: "JD"
    },
    content: "Building the future of web development, one component at a time. React 19 is absolutely revolutionary! The server components and improved hydration make development so much smoother.",
    timestamp: "1 day ago",
    likes: 45,
    comments: 15
  },
  {
    author: {
      name: "John Doe",
      bio: "Software Engineer at Innovation Labs",
      initials: "JD"
    },
    content: "Just completed a challenging project using TypeScript and Next.js. The type safety and developer experience improvements are incredible. Highly recommend for any serious web application.",
    timestamp: "3 days ago",
    likes: 28,
    comments: 9
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="glass-card border-border/50 mb-8 animate-fade-in">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                <Avatar className="w-32 h-32 border-4 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-3xl">
                    JD
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">John Doe</h1>
                      <p className="text-lg text-muted-foreground mb-3">Software Engineer at Innovation Labs</p>
                    </div>
                    <Button className="glow-button text-primary-foreground">
                      <Edit3 className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                  
                  <p className="text-foreground leading-relaxed mb-4">
                    Passionate about creating innovative web solutions and exploring cutting-edge technologies. 
                    Love working with React, TypeScript, and modern development tools to build exceptional user experiences.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      San Francisco, CA
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Joined March 2024
                    </div>
                    <div className="flex items-center">
                      <LinkIcon className="w-4 h-4 mr-1" />
                      johndoe.dev
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posts Section */}
          <Card className="glass-card border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">Posts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {userPosts.map((post, index) => (
                <PostCard key={index} {...post} />
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;