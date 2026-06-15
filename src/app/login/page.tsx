'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/app/components/footer/Footer';
import { loginUser } from '@/data/login';
import styles from './style.module.css';

export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e?: any) => {
    if (e) e.preventDefault();
    const user = loginUser.find(
      item => item.id === id && item.password === password
    );

    if (!user) {
      alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }

    sessionStorage.setItem('user', JSON.stringify(user));
    router.push('/');
    router.refresh();
  };

  return (
    <div className={styles.wrap}>
      <main className={styles.main}>
        <section className={styles.card}>
            <h1 className={styles.title}>로그인</h1>

            <p className={styles.desc}>
                소셜 로그인은 추후 지원 예정입니다.
            </p>

            <form className={styles.form} onSubmit={handleLogin}>
                <input
                type="text"
                placeholder="아이디"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className={styles.input}
                />

            <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
            />

            <button className={styles.submitButton} type="submit">로그인</button>
            <button className={styles.loginButton} disabled>소셜 로그인 준비중</button>
        </form>

        
        </section>
      </main>

      <Footer />
    </div>
  );
}