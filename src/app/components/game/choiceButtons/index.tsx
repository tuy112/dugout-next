'use client';

import { useRouter } from 'next/navigation';
import styles from './style.module.css';

interface ChoiceItem {
  id: string;
  text: string;
}

interface ChoiceButtonsProps {
  items: ChoiceItem[];
  basePath: string; // 클릭 시 이동할 기본 경로 (e.g. '/games/240817')
}

export default function ChoiceButtons({ items, basePath }: ChoiceButtonsProps) {
  const router = useRouter();

  return (
    <div className={styles.buttonArea}>
      {items.map((item) => (
        <button
          key={item.id}
          className={styles.choiceButton}
          onClick={() => router.push(`${basePath}/${item.id}`)}
        >
          <div className={styles.choiceLeft}>
            <div className={styles.choiceBadge}>{item.id}</div>
            <span className={styles.choiceText}>{item.text}</span>
          </div>
          <span className={styles.choiceArrow}>›</span>
        </button>
      ))}
    </div>
  );
}