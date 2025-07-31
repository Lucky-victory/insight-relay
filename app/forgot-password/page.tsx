'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AppLogo } from '@/components/ui/app-logo';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real application, you would call an API to send a password reset email
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: 'Reset email sent',
        description: 'Check your inbox for instructions to reset your password.',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0D0D11] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#F3F4F6]/5 backdrop-blur-md border border-[#F3F4F6]/10 rounded-2xl p-8 shadow-xl">
          <div className="flex flex-col items-center mb-8">
            <AppLogo className="mb-6" />
            <h1 className="text-2xl font-bold text-[#F3F4F6] mb-2">
              {isSubmitted ? 'Check Your Email' : 'Forgot Password'}
            </h1>
            <p className="text-[#9CA3AF] text-center">
              {isSubmitted
                ? `We've sent password reset instructions to ${email}`
                : 'Enter your email and we\'ll send you instructions to reset your password.'}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#F3F4F6]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Instructions'
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <Button
                className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                onClick={() => setIsSubmitted(false)}
              >
                Resend Email
              </Button>
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              href="/login"
              className="text-[#9CA3AF] hover:text-[#F3F4F6] inline-flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}