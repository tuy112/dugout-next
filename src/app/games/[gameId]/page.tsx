import { notFound } from 'next/navigation';

import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import CardSection from '@/app/components/game/cardSection';
import ChoiceButtons from '@/app/components/game/choiceButtons';

import { getScenario } from '@/data';
import styles from './style.module.css';

type Props = {
  params: Promise<{ gameId: string }>;
};

export default async function GamePage({ params }: Props) {
  const { gameId } = await params;
  const scenario = getScenario(gameId);
  if (!scenario) notFound();

  const { batterCard, lineup, pitcherCard } = scenario;

  return (
    <div className={styles.wrap}>
      <Header />

      {/* main */}
      <main className={styles.container}>

        {/* main - mainHeader */}
        <div className={styles.mainHeader}>
          <div className={styles.mainHeaderTitle}>DUGOUT · 덕아웃 선택 #1</div>
          <h1 className={styles.mainHeaderTxt}>{scenario.gameDate} {scenario.title}</h1>
        </div>

        {/* main - score card */}
        <div className={styles.scoreBlock}>
          <div className={styles.scoreCard}>

            {/* 팀 스코어 */}
            <div className={styles.scoreLeft}>
              <div className={styles.scoreRow}>
                <div className={styles.teamName}>
                  <span className={`${styles.teamDot} ${styles.red}`} />
                  {scenario.awayTeam}
                </div>
                <strong>{scenario.score.away}</strong>
              </div>
              <div className={styles.scoreRow}>
                <div className={styles.teamName}>
                  <span className={`${styles.teamDot} ${styles.blue}`} />
                  {scenario.homeTeam}
                </div>
                <strong>{scenario.score.home}</strong>
              </div>
              <div>
                <span className={styles.inningTag}>▲ {scenario.inning}</span>
              </div>
            </div>

            {/* 다이아몬드 */}
            <div className={styles.diamondPanel}>
              <div className={styles.diamondContainer}>
                <div className={styles.diamond} />
                <div className={`${styles.base} ${styles.home}`} />
                <div className={`${styles.base} ${styles.first} ${styles.runner}`} />
                <div className={`${styles.base} ${styles.second} ${styles.runner}`} />
                <div className={`${styles.base} ${styles.third}`} />
              </div>
              <div className={styles.outsRow}>
                <span className={`${styles.outCircle} ${styles.on}`} />
                <span className={styles.outCircle} />
                <span className={styles.outCircle} />
                <span className={styles.outsLabel}></span>
              </div>
            </div>
          </div>
        </div>

        {/* main - situation bar */}
        <div className={styles.situationBar}>
          <span className={styles.sitChip}>{scenario.outs} · 1·2루</span>
          <span className={styles.sitText}>위기 상황</span>
        </div>

        {/* main - question box */}
        <div className={styles.questionPrompt}>
          <div className={styles.questionBadge}>
            <span className={styles.questionBadgeDot} />
            {scenario.homeTeam} 덕아웃
          </div>
          <div className={styles.questionSituation}>{scenario.situation}</div>
          <div className={styles.questionMain}>코칭스태프!<br />어떤 결정을 하실건가요?</div>
        </div>

        {/* main - win probability */}
        <div className={styles.winProb}>
          <div className={styles.probHeader}>AI 승리 예측</div>
          <div className={styles.probBarWrap}>
            <div className={styles.probFillLeft} style={{ flex: scenario.winProb.away }} />
            <div className={styles.probFillRight} style={{ flex: scenario.winProb.home }} />
          </div>
          <div className={styles.probLabels}>
            <div>
              <div className={styles.probTeam}>{scenario.awayTeam}</div>
              <div className={`${styles.probPct} ${styles.blue}`}>{scenario.winProb?.away}%</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className={styles.probTeam}>{scenario.homeTeam}</div>
              <div className={`${styles.probPct} ${styles.red}`}>{scenario.winProb?.home}%</div>
            </div>
          </div>
        </div>

        {/* main - 타자, 투수카드 */}
        <CardSection scenario={scenario} />

        {/* main - 선택지 */}
        <div className={styles.choiceHeader}>당신의 선택은?</div>
        <ChoiceButtons
          items={scenario.mainChoices}
          basePath={`/games/${gameId}`}
        />

      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}