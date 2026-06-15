'use client';

import { useRouter } from 'next/navigation';
import { ResultData } from '@/data/types';
import styles from './style.module.css';

interface Props {
  gameId: string;
  result: ResultData;
}

export default function ChoiceResultPage({ gameId, result }: Props) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => router.back()}>‹</button>
        <span className={styles.topTitle}>결과 확인</span>
      </div>

      <div className={styles.resultCard}>
        <div className={styles.resultLabel}>선택한 전략</div>
        <div className={styles.resultChoice}>{result.choice}</div>
        <div className={styles.resultText}>{result.result}</div>
        <span className={styles.pointBox}>점수 {result.points}</span>
      </div>

      <div className={styles.bottomButtons}>
        <button
          className={styles.primaryButton}
          onClick={() => router.push(`/games/${gameId}`)}
        >
          다른 선택 해보기
        </button>
        <button
          className={styles.backButton}
          onClick={() => router.push('/')}
        >
          홈으로
        </button>
      </div>
    </div>
  );
}