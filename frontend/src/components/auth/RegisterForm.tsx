import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    bio: ''
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: 'Registration Successful!',
          description: 'Welcome to the community platform!',
        });

        // Redirect to login or home
        setTimeout(() => {
          navigate('/'); // redirect to login page
        }, 1000);
      } else {
        toast({
          title: 'Registration Failed',
          description: data.message || 'Something went wrong.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Unable to connect to server.',
      });
      console.error('Register Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="glass-card border-border/50 animate-fade-in">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-foreground">
          Create an Account
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Create a secure password"
              value={formData.password}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium text-muted-foreground">
              Bio
            </Label>
            <Textarea
              id="bio"
              name="bio"
              placeholder="Tell us about yourself (optional)"
              value={formData.bio}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground min-h-[100px] resize-none"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full glow-button text-primary-foreground font-semibold py-3 text-base"
          >
            Register
          </Button>
        </form>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <span
              className="text-primary cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate('/')}
            >
              Sign in
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
