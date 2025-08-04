import { Header } from '@/components/layout/Header';
import { CreatePost } from '@/components/feed/CreatePost';
import { PostCard } from '@/components/feed/PostCard';

const mockPosts = [
  {
    author: {
      name: "Sarah Chen",
      bio: "Product Designer at TechCorp",
      initials: "SC"
    },
    content: "Just shipped a new feature that improves user engagement by 40%! The key was focusing on micro-interactions and understanding user pain points. Design is not just about how it looks, but how it works. 🎨✨",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 8
  },
  {
    author: {
      name: "Alex Rodriguez",
      bio: "Full Stack Developer",
      initials: "AR"
    },
    content: "Exploring the new React 19 features and I'm blown away by the performance improvements. The new compiler optimizations are game-changing for large applications. What are your thoughts on the latest updates?",
    timestamp: "4 hours ago",
    likes: 32,
    comments: 12
  },
  {
    author: {
      name: "Emily Johnson",
      bio: "UX Researcher",
      initials: "EJ"
    },
    content: "Just finished conducting user interviews for our upcoming mobile app. The insights we gathered will completely reshape our design approach. Always remember: assumptions are the enemy of good design! 📱💡",
    timestamp: "6 hours ago",
    likes: 18,
    comments: 5
  }
];

const Feed = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="space-y-6">
          <CreatePost />
          
          <div className="space-y-4">
            {mockPosts.map((post, index) => (
              <PostCard key={index} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Feed;