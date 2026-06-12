'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.css';

export default function Header() {
    const router = useRouter();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) return;
        const parsed = JSON.parse(user);
        setUserName(parsed.name);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/login');
        router.refresh();
    };

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>DUGOUT</Link>
            <nav className={styles.nav}>
                <p className={styles.welcomeTxt}><span>{userName}</span>님 환영합니다.</p>
                <button
                type="button"
                onClick={handleLogout}
                className={styles.logoutBtn}
                >
                LOGOUT
                </button>
            </nav>
        </header>
    );
}