'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AppLogo } from '@/components/ui/app-logo';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: 'Passwords do not match',
        description: 'Your new password and confirmation password do not match.',
        variant: 'destructive',
      });
      return;
    }
    
    if (!token) {
      toast({
        title: 'Invalid reset link',
        description: 'The password reset link is invalid or has expired.',
        variant: 'destructive',
      });
      return;
    }
    
    setIsLoading(true);
    
    // In a real application, you would call an API to reset the password using the token
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: 'Password reset successful',
        description: 'Your password has been reset successfully.',
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
              {isSubmitted ? 'Password Reset Complete' : 'Reset Your Password'}
            </h1>
            <p className="text-[#9CA3AF] text-center">
              {isSubmitted
                ? 'Your password has been reset successfully.'
                : 'Create a new password for your account.'}
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#F3F4F6]">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12 pr-12"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-accent transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[#F3F4F6]">
                  Confirm New Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm new password"
                    className="bg-[#F3F4F6]/5 border-[#F3F4F6]/20 text-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-xl h-12 pr-12"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9CA3AF] hover:text-accent transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          ) : (
            <div className="space-y-6">
              <Button
                className="w-full bg-[#4B3D8C] hover:bg-[#4B3D8C]/80 text-white rounded-xl h-12 font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                onClick={() => router.push('/login')}
              >
                Go to Login
              </Button>
            </div>
          )}

          {!isSubmitted && (
            <div className="mt-8 text-center">
              <Link
                href="/login"
                className="text-[#9CA3AF] hover:text-[#F3F4F6] inline-flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}