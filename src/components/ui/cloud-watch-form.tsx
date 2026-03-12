"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { motion, AnimatePresence } from "motion/react";

export default function CloudWatchForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [isTyping, setIsTyping] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [eyePos, setEyePos] = useState({ x: 0, y: 0 });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const offsetX = ((cursor.x / window.innerWidth) - 0.5) * 40;
    const offsetY = ((cursor.y / window.innerHeight) - 0.5) * 20;
    setEyePos({ x: offsetX, y: offsetY });
  }, [cursor]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-neutral-50">
      <motion.div 
        layout
        className="bg-white border border-neutral-200 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 w-full max-w-md overflow-hidden"
      >
        {/* Cartoon Face Section */}
        <div className="relative w-72 h-44 flex justify-center items-center">
          <img
            src="https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev/cloud.jpg"
            alt="cartoon"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />

          {["left", "right"].map((side, idx) => (
            <div
              key={side}
              className="absolute flex justify-center items-end overflow-hidden"
              style={{
                top: "42%",
                left: idx === 0 ? "32%" : "56%",
                width: 32,
                height: isTyping
                  ? 4 
                  : blink
                  ? 6 
                  : 44, 
                borderRadius: isTyping || blink ? "2px" : "50% / 60%",
                backgroundColor: isTyping ? "#171717" : "white",
                transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)",
                border: isTyping ? "none" : "1px solid #e5e5e5"
              }}
            >
              {!isTyping && (
                <div
                  className="bg-neutral-900"
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    marginBottom: 6,
                    transform: `translate(${eyePos.x}px, ${eyePos.y * 0.5}px)`,
                    transition: "all 0.1s ease-out",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <motion.h1 
            key={mode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-neutral-900"
          >
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </motion.h1>
          <p className="text-neutral-500 text-sm">
            {mode === "login" 
              ? "Enter your credentials to access your account" 
              : "Join us today and start your journey"}
          </p>
        </div>

        {/* Form Section */}
        <div className="w-full flex flex-col gap-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, x: mode === "login" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: mode === "login" ? 20 : -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-4"
            >
              {mode === "signup" && (
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
              )}
              
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>

              {mode === "signup" && (
                <div className="space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="johndoe123" />
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  onFocus={() => setIsTyping(true)}
                  onBlur={() => setIsTyping(false)}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <Button className="w-full h-11 text-base font-semibold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            {mode === "login" ? "Sign In" : "Get Started"}
          </Button>
        </div>

        {/* Toggle Mode */}
        <div className="pt-2">
          <button
            onClick={() => setMode(mode === "login" ? "signup" : "login")}
            className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
          >
            {mode === "login" 
              ? "Don't have an account? Sign up" 
              : "Already have an account? Log in"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
