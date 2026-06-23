import { notFound } from 'next/navigation';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import ChoiceButtons from '@/app/components/game/choiceButtons/index';
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
        <div className={styles.scoreSpace}>
          <div className={styles.scoreCard}>

            <div className={styles.scoreLeft}>
              <div className={styles.scoreRow}>
                <div className={styles.teamName}>
                  <span className={`${styles.teamDot} ${styles.red}`}></span>
                  {scenario.awayTeam}
                </div>
                <strong>{scenario.score.away}</strong>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.teamName}>
                  <span className={`${styles.teamDot} ${styles.blue}`}></span>
                  {scenario.homeTeam}
                </div>
                <strong>{scenario.score.home}</strong>
              </div>

              <div className={styles.inning}>
                {scenario.inning}
              </div>
            </div>

            <div className={styles.diamondContainer}>
              <div className={styles.diamond}></div>
              <div className={`${styles.base} ${styles.second} ${styles.runner}`}></div>
              <div className={`${styles.base} ${styles.third}`}></div>
              <div className={`${styles.base} ${styles.first} ${styles.runner}`}></div>
              <div className={`${styles.base} ${styles.home}`}></div>
            </div>
          </div>

          <div className={styles.outs}>
            <span className={styles.outCircles}>
              <span className={`${styles.outCircle} ${styles.on}`}></span>
              <span className={styles.outCircle}></span>
              <span className={styles.outCircle}></span>
            </span>
            {scenario.outs}
          </div>
        </div>

        {/* main - question box */}
        <div className={styles.questionPrompt}>
          <div className={styles.questionTeam}>🔵 {scenario.awayTeam} 덕아웃!</div>
          <div className={styles.questionSituation}>{scenario.situation}</div>
          <div className={styles.questionMain}>코칭스태프!<br />어떤 결정을 하실껀가요?</div>
        </div>

        {/* main - batter card */}
        <div className={styles.cardSection}>
          <div className={`${styles.sectionHeader} ${styles.away}`}>
            <p>🔴 {scenario.homeTeam} 공격</p>
          </div>

          <div className={styles.batterCard}>
            <div className={styles.batterTitle}>
              🎯 {batterCard.name}
              <span className={styles.badge}>{batterCard.badge}</span>
            </div>
            <div className={styles.todayRecord}>{batterCard.todayRecord}</div>
            <div className={styles.statRow}>{batterCard.seasonStats}</div>
            <div className={styles.statRow}>{batterCard.situationStats}</div>
          </div>

          <div className={styles.lineup}>
            <div className={styles.lineupTitle}>{scenario.homeTeam} 타순 · 대타</div>
            {lineup.map((player, i) => (
              <div key={i} className={styles.playerRow}>
                <div className={`${styles.playerNum} ${player.isPinchHitter ? styles.pinch : ''}`}>
                  {player.isPinchHitter ? 'PH' : i + 1}
                </div>
                <div className={styles.playerInfo}>
                  <div className={styles.name}>
                    {player.name}
                    {player.hasWarning && <span className={styles.warn}> ⚠</span>}
                  </div>
                  <div className={styles.stats}>{player.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* main - pitcher card */}
        <div className={styles.cardSection}>
          <div className={`${styles.sectionHeader} ${styles.home}`}>
            <p>🔵 {scenario.awayTeam} 수비</p>
          </div>

          <div className={styles.pitcherCard}>
            <div className={styles.pitcherName}>🎯 {pitcherCard.name}</div>
            <div className={styles.pitcherStatus}>
              {pitcherCard.status}
              {pitcherCard.hasWarning && <span className={styles.warn}> ⚠ 흔들림</span>}
            </div>
            <div className={styles.statRow}>{pitcherCard.seasonStats}</div>
            <div className={styles.statRow}>{pitcherCard.situationStats}</div>
          </div>

          <div className={styles.lineup}>
            <div className={styles.lineupTitle}>{scenario.awayTeam} 투수진 (상대 타자 vs 전적)</div>
            <table className={styles.bullpenTable}>
              <thead>
                <tr>
                  {pitcherCard.bullpenHeaders.map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pitcherCard.bullpen.map((row, ri) => (
                  <tr key={ri} className={row.isCurrent ? styles.current : ''}>
                    <td>{row.name}</td>
                    {row.stats.map((stat, si) => (
                      <td
                        key={si}
                        className={
                          row.warnCols?.includes(si) ? styles.warn
                          : row.starCols?.includes(si) ? styles.star
                          : ''
                        }
                      >
                        {stat}{row.starCols?.includes(si) ? '⭐' : ''}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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