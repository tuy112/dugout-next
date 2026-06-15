'use client';

// import Link from 'next/link';
import styles from './style.module.css';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isLogin = pathname.startsWith('/login');
  const color = isLogin ? '#fff' : '#000';
  
  return (
    <footer 
      className={styles.footer}
      style={{ color }}
    >
      <p>© 2026 YJ.SOFT. All rights reserved.</p>

      {/* <div className={styles.links}>
        <Link href="https://tuy112.github.io/">Jstory</Link>
        <Link href="/privacy">개인정보 처리방침</Link>
        <Link href="/contact">Contact Us</Link>
      </div> */}
    </footer>
  );
}