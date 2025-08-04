import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Users, MessageCircle, TrendingUp, Zap } from 'lucide-react';
import floatingRing from '@/assets/floating-ring.png';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-ring top-1/4 right-1/3"></div>
        <div className="floating-ring bottom-1/4 left-1/4"></div>
        <div className="floating-ring top-1/2 right-1/4"></div>
      </div>
      
      {/* Floating 3D Ring Image */}
      <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 animate-glow-pulse">
        <img 
          src={floatingRing} 
          alt="Floating Ring" 
          className="w-96 h-96 opacity-20 animate-spin"
          style={{ animationDuration: '30s' }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground mb-6 leading-tight">
            Connect, Share,{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inspire
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our vibrant community of professionals, creators, and innovators. 
            Share your journey, discover opportunities, and build meaningful connections.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => navigate('/auth')}
              className="glow-button text-primary-foreground font-semibold px-8 py-3 text-lg"
            >
              Get Started
            </Button>
            <Button 
              onClick={() => navigate('/feed')}
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-muted/50 px-8 py-3 text-lg"
            >
              Explore Feed
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Users,
              title: "Connect",
              description: "Build your professional network with like-minded individuals"
            },
            {
              icon: MessageCircle,
              title: "Share",
              description: "Post your thoughts, ideas, and achievements with the community"
            },
            {
              icon: TrendingUp,
              title: "Grow",
              description: "Discover opportunities and advance your career"
            },
            {
              icon: Zap,
              title: "Innovate",
              description: "Collaborate on projects and bring ideas to life"
            }
          ].map((feature, index) => (
            <Card key={index} className="glass-card border-border/50 animate-scale-in hover:border-border/70 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glass-card border-border/50 max-w-2xl mx-auto animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-muted-foreground mb-6">
                Start your journey today and connect with thousands of professionals worldwide.
              </p>
              <Button 
                onClick={() => navigate('/auth')}
                className="glow-button text-primary-foreground font-semibold px-8 py-3"
              >
                Create Your Account
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
    </div>
  );
};

export default Index;
