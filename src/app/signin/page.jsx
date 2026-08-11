'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/auth-client';
import { toast } from 'sonner';

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [loading, setLoading] = useState(false);

  // Email & Password Sign In
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await signIn.email({
      email: formData.email,
      password: formData.password,
      callbackURL: '/',
    }, {
      onRequest: () => setLoading(true),
      onSuccess: () => {
        setLoading(false);
        toast.success('Welcome back!', {
          description: 'Successfully signed in to your account.',
        });
        router.push('/');
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error('Sign in failed', {
          description: ctx.error.message || 'Invalid email or password.',
        });
      }
    });
  };

  // Social Login (Google / GitHub)
  const handleSocialSignIn = async (provider) => {
    toast.loading(`Connecting with ${provider}...`);
    await signIn.social({
      provider,
      callbackURL: '/',
    });
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white flex items-center justify-center p-4 overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-md bg-neutral-900/70 border border-neutral-800/80 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block text-2xl font-bold tracking-tight text-white mb-2">
            hire<span className="text-orange-500">loop</span>
          </Link>
          <h2 className="text-xl font-semibold text-gray-200">Welcome back</h2>
          <p className="text-xs text-gray-400 mt-1">Please enter your details to sign in</p>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button 
            type="button" 
            onClick={() => handleSocialSignIn('google')}
            className="flex items-center justify-center gap-2 bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/60 rounded-xl py-2.5 text-xs font-medium transition"
          >
            Google
          </button>
          <button 
            type="button" 
            onClick={() => handleSocialSignIn('github')}
            className="flex items-center justify-center gap-2 bg-neutral-800/60 hover:bg-neutral-800 border border-neutral-700/60 rounded-xl py-2.5 text-xs font-medium transition"
          >
            GitHub
          </button>
        </div>

        <div className="relative flex items-center justify-center mb-6">
          <div className="w-full border-t border-neutral-800"></div>
          <span className="absolute bg-[#0b0e14] px-3 text-[11px] text-gray-500 uppercase tracking-wider">or continue with</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Email Address</label>
            <input 
              type="email" 
              required
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-neutral-800/50 border border-neutral-700/60 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Password</label>
            <input 
              type="password" 
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-neutral-800/50 border border-neutral-700/60  rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition"
            />
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-gray-300">
              <input 
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                className="w-4 h-4 rounded border-neutral-700 bg-neutral-800 text-indigo-600 accent-indigo-600"
              />
              Remember me
            </label>
            <Link href="/forgot-password" className="text-indigo-400 hover:text-indigo-300 transition">
              Forgot password?
            </Link>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full  bg-black cursor-pointer disabled:opacity-50 text-white font-medium py-3 rounded-xl transition shadow-lg  border-border-white text-sm mt-2"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Don't have an account?{' '}
          <Link href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;