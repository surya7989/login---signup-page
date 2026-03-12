import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome, ShieldCheck } from 'lucide-react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center p-4 md:p-8 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="w-full max-w-[1000px] bg-white rounded-[2rem] shadow-2xl shadow-neutral-200/50 border border-neutral-100 overflow-hidden flex flex-col md:flex-row min-h-[640px]"
      >
        {/* Left Side: Photo & Animated Intro */}
        <motion.div 
          className="relative hidden md:flex md:w-[45%] bg-neutral-900 p-10 flex-col justify-between overflow-hidden"
          layout
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={isLogin ? 'login-bg' : 'signup-bg'}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.5, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
              src={
                isLogin 
                  ? "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  : "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop"
              } 
              alt="Background" 
            />
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-white"
            >
              <ShieldCheck className="w-8 h-8 text-neutral-100" />
              <span className="text-xl font-bold tracking-tight">AcmeSecure</span>
            </motion.div>
          </div>
          
          <div className="relative z-10 mt-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-text' : 'signup-text'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {isLogin ? 'Welcome back.' : 'Start your journey with us today.'}
                </h2>
                <p className="text-neutral-300 text-lg max-w-sm">
                  {isLogin 
                    ? 'Log in to access your personalized dashboard and manage your account.' 
                    : 'Create an account to unlock exclusive features and join our growing community.'}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Side: Form Content */}
        <div className="w-full md:w-[55%] flex flex-col pt-8 pb-8 px-6 md:px-12 lg:px-16 overflow-y-auto">
          <div className="flex justify-center mb-8 shrink-0">
            <div className="bg-neutral-100 p-1 rounded-2xl flex w-full max-w-[280px]">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${isLogin ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${!isLogin ? 'bg-white shadow-sm text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
                  }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          <div className="mb-6 shrink-0">
            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
              {isLogin ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="text-neutral-500 text-sm">
              {isLogin ? 'Enter your credentials to access your account' : 'Join us today and start your journey'}
            </p>
          </div>

          <form className="space-y-4 flex-grow" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-1.5 overflow-hidden"
                >
                  <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Surya"
                      className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all text-sm"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-700 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5 pointer-events-none" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all text-sm"
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
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5 pointer-events-none" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 transition-all text-sm"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-neutral-900 text-white py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-lg shadow-neutral-900/20 active:shadow-sm mt-4"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          <div className="relative my-8 shrink-0">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-neutral-400 tracking-widest font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 shrink-0">
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-700">
              <Chrome className="w-4 h-4" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all text-sm font-medium text-neutral-700">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>

          <div className="mt-8 text-center shrink-0">
            <p className="text-sm text-neutral-500">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
              <button
                onClick={toggleMode}
                className="text-neutral-900 font-semibold hover:underline underline-offset-4 transition-all"
              >
                {isLogin ? 'Sign up for free' : 'Log in here'}
              </button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
