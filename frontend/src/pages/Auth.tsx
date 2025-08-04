import { useState } from 'react';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { LoginForm } from '@/components/auth/LoginForm';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <AuthLayout>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      
      <div className="text-center mt-6">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-primary hover:text-accent transition-colors text-sm"
        >
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
    </AuthLayout>
  );
};

export default Auth;