import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-4 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-center mb-8">
            <div className="bg-neutral-100 p-1 rounded-2xl flex w-full">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isLogin ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${!isLogin ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="text-neutral-500 text-sm">
              {isLogin ? 'Enter your credentials to access your account' : 'Join us today and start your journey'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1.5"
                >
                  <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Surya"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all text-sm"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">Password</label>
                {isLogin && (
                  <button type="button" className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors">
                    Forgot?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 focus:border-neutral-900 transition-all text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-neutral-900 text-white py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all active:scale-[0.98] mt-4"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-neutral-400 tracking-widest">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-700">
              <Chrome className="w-4 h-4" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-700">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>
        </div>

        <div className="bg-neutral-50 p-6 text-center border-t border-neutral-100">
          <p className="text-sm text-neutral-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={toggleMode}
              className="text-neutral-900 font-semibold hover:underline underline-offset-4"
            >
              {isLogin ? 'Sign up for free' : 'Log in here'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
