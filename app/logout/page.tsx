'use client';

import { useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { AuthLoading } from '@/components/auth/auth-loading';

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logout();
      } finally {
        // Always redirect to login page, even if logout fails
        router.push('/login');
      }
    };

    performLogout();
  }, [logout, router]);

  return <AuthLoading />;
}