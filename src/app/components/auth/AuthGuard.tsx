'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user && pathname !== '/login') {
      router.replace('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}