import { ReactNode } from 'react';
import floatingRing from '@/assets/floating-ring.png';

interface AuthLayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
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
          className="w-64 h-64 opacity-30 animate-spin"
          style={{ animationDuration: '20s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

      {/* Additional Glow Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
    </div>
  );
};