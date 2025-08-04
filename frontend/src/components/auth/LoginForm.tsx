import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: 'Login Successful!',
          description: 'Welcome back! Redirecting...',
        });

        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/home');
        }
      } else {
        toast({
          title: 'Login Failed',
          description: data.message || 'Invalid email or password.',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Try again later.',
      });
      console.error('Login Error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Card className="glass-card border-border/50 animate-fade-in">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold text-foreground">
          Welcome Back
        </CardTitle>
        <p className="text-muted-foreground mt-2">
          Sign in to your account
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="input-glow bg-muted/50 border-border/50 text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full glow-button text-primary-foreground font-semibold py-3 text-base"
          >
            Sign In
          </Button>
        </form>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <span className="text-primary cursor-pointer hover:text-accent transition-colors">
              Create account
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
