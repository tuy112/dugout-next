'use client';
import Link from 'next/link';
import { scenarios  } from '@/data';

import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';

import styles from './page.module.css';

export default function Home() {

  return (
    <div className={styles.wrap}>
      {/* header */}
      <Header />

      {/* main */}
      <main className={styles.main}>
        <h1 className={styles.title}>명경기 감독 시뮬레이션 게임</h1>
        <div className={styles.grid}>
          {scenarios.map(game => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className={styles.gameCard}
            >
              <div className={styles.gameDate}>{game.id}</div>
              <div className={styles.gameTitle}>{game.title}</div>
            </Link>
          ))}
        </div>
      </main>

      {/* footer */}
      <Footer />

    </div>
    
  );
}