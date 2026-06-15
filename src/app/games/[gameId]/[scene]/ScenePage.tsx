'use client';
 
import { useRouter } from 'next/navigation';
import { SubChoice } from '@/data/types';
import styles from './style.module.css';
 
interface Props {
  gameId: string;
  title: string;
  scene: string;
  subChoice: SubChoice;
}
 
export default function ScenePage({ gameId, title, scene, subChoice }: Props) {
  const router = useRouter();
 
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={() => router.back()}>‹</button>
        <span className={styles.topTitle}>{title}</span>
      </div>
 
      <div className={styles.sceneTitle}>{subChoice.title}</div>
 
      <div className={styles.buttonArea}>
        {subChoice.options.map((option) => (
          <button
            key={option.id}
            className={styles.subButton}
            onClick={() => router.push(`/games/${gameId}/${scene}/${option.id}`)}
          >
            <div className={styles.subLeft}>
              <div className={styles.subBadge}>{option.id}</div>
              <div className={styles.subTextBlock}>
                <span className={styles.subText}>{option.text}</span>
                <span className={styles.subDesc}>{option.desc}</span>
              </div>
            </div>
            <span className={styles.subArrow}>›</span>
          </button>
        ))}
      </div>
    </div>
  );
}