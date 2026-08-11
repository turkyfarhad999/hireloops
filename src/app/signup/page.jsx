'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '@/lib/auth-client';
import { toast } from 'sonner';

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seeker'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      role: formData.role,
      callbackURL: '/',
    }, {
      onRequest: () => setLoading(true),
      onSuccess: () => {
        setLoading(false);
        toast.success('Account created!', {
          description: `Welcome to HireLoop, ${formData.name}!`,
        });
        router.push('/signin');
      },
      onError: (ctx) => {
        setLoading(false);
        toast.error('Registration failed', {
          description: ctx.error.message || 'Could not create account.',
        });
      }
    });
  };

  return (
    <div className="relative min-h-screen bg-[#07090e] text-white flex items-center justify-center p-4 overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-md bg-neutral-900/70 border border-neutral-800/80 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block text-2xl font-bold tracking-tight text-white mb-2">
            hire<span className="text-orange-500">loop</span>
          </Link>
          <h2 className="text-xl font-semibold text-gray-200">Create an account</h2>
          <p className="text-xs text-gray-400 mt-1">Join thousands of job seekers and employers</p>
        </div>

        {/* Role Toggle Selector */}
        <div className="grid grid-cols-2 gap-1 bg-neutral-800/50 p-1 rounded-xl border border-neutral-700/50 mb-6">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: 'seeker' })}
            className={`py-2 text-xs font-medium rounded-lg transition ${
              formData.role === 'seeker'
                ? 'bg-neutral-700 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Job Seeker
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: 'employer' })}
            className={`py-2 text-xs font-medium rounded-lg transition ${
              formData.role === 'employer'
                ? 'bg-neutral-700 text-white shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Employer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name</label>
            <input 
              type="text" 
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-neutral-800/50 border border-neutral-700/60 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition"
            />
          </div>

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
              placeholder="Create a strong password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-neutral-800/50 border border-neutral-700/60 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-medium py-3 rounded-xl transition shadow-lg shadow-indigo-600/30 text-sm mt-2"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          Already have an account?{' '}
          <Link href="/signin" className="text-indigo-400 hover:text-indigo-300 font-medium transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;