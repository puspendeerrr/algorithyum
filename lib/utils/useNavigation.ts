'use client';

import { useRouter, usePathname } from 'next/navigation';

export function useAppNavigation() {
  const pathname = usePathname() || '/';
  const router = useRouter();

  const navigate = (path: string) => {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      window.location.href = path;
    } else {
      router.push(path);
    }
  };

  return { pathname, navigate };
}
