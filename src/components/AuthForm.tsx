import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Facebook, Twitter, Linkedin, Chrome } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  // Reusable Social Buttons component
  const SocialButtons = () => (
    <div className="flex gap-4 mt-6 justify-center">
      <button 
        type="button" 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 shadow-sm text-red-500 hover:bg-neutral-50 transition-colors"
      >
        <Chrome className="w-4 h-4" />
      </button>
      <button 
        type="button" 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 shadow-sm text-blue-600 hover:bg-neutral-50 transition-colors"
      >
        <Facebook className="w-4 h-4" />
      </button>
      <button 
        type="button" 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 shadow-sm text-sky-500 hover:bg-neutral-50 transition-colors"
      >
        <Twitter className="w-4 h-4" />
      </button>
      <button 
        type="button" 
        className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-200 shadow-sm text-blue-700 hover:bg-neutral-50 transition-colors"
      >
        <Linkedin className="w-4 h-4" />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden">
      
      {/* DESKTOP VIEW - Sliding Overlay Component */}
      <div className="hidden md:flex relative w-full max-w-[900px] h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Sign Up Form (Left Side) - Hidden when isLogin is true */}
        <motion.div
           className={cn(
             "absolute top-0 left-0 w-[50%] h-full flex flex-col justify-center items-center p-12 z-10",
             isLogin ? "pointer-events-none" : "pointer-events-auto"
           )}
           initial={false}
           animate={{
             opacity: isLogin ? 0 : 1,
             x: isLogin ? '20%' : '0%', 
           }}
           transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold text-neutral-800 mb-8">Sign up</h2>
          <form className="w-full flex flex-col gap-4 text-sm" onSubmit={e => e.preventDefault()}>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
              <input 
                type="text" 
                placeholder="Username" 
                className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-neutral-700" 
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-neutral-700" 
              />
            </div>
            <div className="relative block">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-neutral-700" 
              />
            </div>
            
            <button className="mx-auto mt-2 bg-indigo-500 text-white rounded-full px-12 py-3 font-semibold tracking-wide hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
              SIGN UP
            </button>
          </form>

          <div className="mt-8 text-xs text-neutral-500 uppercase tracking-wide text-center">
            Or sign up with social platforms
          </div>
          <SocialButtons />
        </motion.div>

        {/* Sign In Form (Right Side) - Hidden when isLogin is false */}
        <motion.div
           className={cn(
             "absolute top-0 right-0 w-[50%] h-full flex flex-col justify-center items-center p-12 z-10",
             isLogin ? "pointer-events-auto" : "pointer-events-none"
           )}
           initial={false}
           animate={{
             opacity: isLogin ? 1 : 0,
             x: isLogin ? '0%' : '-20%', 
           }}
           transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold text-neutral-800 mb-8">Sign in</h2>
          <form className="w-full flex flex-col gap-4 text-sm" onSubmit={e => e.preventDefault()}>
            <div className="relative block">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-neutral-700" 
              />
            </div>
            <div className="relative block">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-neutral-700" 
              />
            </div>
            
            <button className="mx-auto mt-2 bg-indigo-500 text-white rounded-full px-12 py-3 font-semibold tracking-wide hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
              LOGIN
            </button>
          </form>

          <div className="mt-8 text-xs text-neutral-500 uppercase tracking-wide text-center">
            Or sign in with social platforms
          </div>
          <SocialButtons />
        </motion.div>

        {/* The Sliding OVERLAY */}
         {/* The z-20 puts it above the forms. Overflow-hidden cuts off the text sliding inside. */}
        <motion.div
          className="absolute top-0 left-0 w-[50%] h-full z-20 flex overflow-hidden bg-gradient-to-br from-indigo-500 to-[#7863f4] shadow-[0_0_20px_rgba(0,0,0,0.1)] text-white"
          initial={false}
          animate={{
            x: isLogin ? '0%' : '100%',
            borderRadius: isLogin ? '0px 120px 120px 0px' : '120px 0px 0px 120px'
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          
          {/* Overlay Text for LOGIN state (Overlay is on Left) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-12 text-center"
            initial={false}
            animate={{
              opacity: isLogin ? 1 : 0,
              x: isLogin ? '0%' : '-50%' // Slides out left as the container moves right
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
             <h2 className="text-[2.2rem] leading-tight font-bold mb-4 drop-shadow-sm">New here?</h2>
             <p className="text-white/90 mb-8 max-w-[280px] font-medium leading-relaxed drop-shadow-sm">
               Join us today and discover a world of possibilities. Create your account in seconds!
             </p>
             <button
               onClick={() => setIsLogin(false)}
               className="border-2 border-white text-white rounded-full px-10 py-2.5 font-bold tracking-wider hover:bg-white hover:text-indigo-600 transition-colors"
             >
               SIGN UP
             </button>
          </motion.div>
          
          {/* Overlay Text for SIGN UP state (Overlay is on Right) */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-12 text-center"
            initial={false}
            animate={{
              opacity: isLogin ? 0 : 1,
              x: isLogin ? '50%' : '0%' // Slides in from right as the container moves right
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
             <h2 className="text-[2.2rem] leading-tight font-bold mb-4 drop-shadow-sm">One of us?</h2>
             <p className="text-white/90 mb-8 max-w-[280px] font-medium leading-relaxed drop-shadow-sm">
               Welcome back! Sign in to continue your journey with us.
             </p>
             <button
               onClick={() => setIsLogin(true)}
               className="border-2 border-white text-white rounded-full px-10 py-2.5 font-bold tracking-wider hover:bg-white hover:text-indigo-600 transition-colors"
             >
               SIGN IN
             </button>
          </motion.div>
        </motion.div>
      </div>


      {/* MOBILE VIEW - Fallback vertical setup since sliding overlay is tough on phones */}
      <div className="md:hidden flex flex-col w-full max-w-[400px] bg-white rounded-3xl shadow-xl overflow-hidden min-h-[500px] relative">
         {/* Top Header/Intro Area matches the 'overlay' color conditionally */}
         <AnimatePresence mode="wait">
           <motion.div
             key={isLogin ? 'login-header' : 'signup-header'}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="w-full bg-gradient-to-br from-indigo-500 to-[#7863f4] p-8 text-center text-white"
           >
             <h2 className="text-3xl font-bold mb-2">
               {isLogin ? 'Welcome Back!' : 'Join Us'}
             </h2>
             <p className="text-white/90 text-sm">
               {isLogin 
                 ? 'Sign in to continue your journey with us.' 
                 : 'Create your account in seconds!'}
             </p>
           </motion.div>
         </AnimatePresence>

         <div className="flex-grow p-8">
           <AnimatePresence mode="wait">
             <motion.div
               key={isLogin ? 'login-form' : 'signup-form'}
               initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
               transition={{ duration: 0.3 }}
               className="w-full"
             >
               <h2 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
                 {isLogin ? 'Sign in' : 'Sign up'}
               </h2>
               
               <form className="w-full flex flex-col gap-4 text-sm" onSubmit={e => e.preventDefault()}>
                 {!isLogin && (
                   <div className="relative">
                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
                     <input type="text" placeholder="Username" className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-neutral-700" />
                   </div>
                 )}
                 <div className="relative block">
                   <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-500" />
                   <input type="email" placeholder="Email" className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-neutral-700" />
                 </div>
                 <div className="relative block">
                   <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500" />
                   <input type="password" placeholder="Password" className="w-full bg-neutral-100/80 border-none rounded-full py-3.5 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium text-neutral-700" />
                 </div>
                 
                 <button className="w-full mt-2 bg-indigo-500 text-white rounded-full px-6 py-3.5 font-bold tracking-wide hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30">
                   {isLogin ? 'LOGIN' : 'SIGN UP'}
                 </button>
               </form>

               <div className="mt-8 text-xs text-neutral-500 uppercase tracking-wide text-center">
                 Or continue with
               </div>
               <SocialButtons />
               
               <div className="mt-8 text-center text-sm font-medium text-neutral-600">
                 {isLogin ? "New here? " : "One of us? "}
                 <button onClick={() => setIsLogin(!isLogin)} className="text-indigo-600 hover:text-indigo-700 font-bold underline underline-offset-4">
                   {isLogin ? "Sign up" : "Sign in"}
                 </button>
               </div>
             </motion.div>
           </AnimatePresence>
         </div>

      </div>

    </div>
  );
}
