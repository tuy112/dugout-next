import { notFound } from 'next/navigation';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
import ChoiceButtons from '@/app/components/game/choiceButtons/index';
import { getScenario } from '@/data';

import styles from './style.module.css';

// interface Props {
//   params: { gameId: string };
// }
type Props = {
  params: Promise<{ gameId: string }>;
};

export default async function GamePage({ params }: Props) {
  const { gameId } = await params;
  const scenario = getScenario(gameId);
  if (!scenario) notFound();

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
          <div className={styles.questionTeam}>🔵 기아 덕아웃!</div>
          <div className={styles.questionSituation}>{scenario.situation}</div>
          <div className={styles.questionMain}>코칭스태프!<br />어떤 결정을 하실껀가요?</div>
        </div>

        {/* main - batter card */}
        <div className={styles.cardSection}>
          <div className={styles.sectionHeader + ' ' + styles.away}>
            <p>🔴 두산 공격</p>
          </div>

          <div className={styles.batterCard}>
            <div className={styles.batterTitle}>
              🎯 라모스 (우타)
              <span className={styles.badge}>4번 · 3타석째</span>
            </div>
            <div className={styles.todayRecord}>오늘: 플라이 → 안타 → ?</div>
            <div className={styles.statRow}>시즌 <strong>.295</strong> · vs좌 <strong>.267</strong> · vs우 <strong>.312</strong></div>
            <div className={styles.statRow}>1·2루 <strong>.322</strong> · 만루 <strong>.375</strong></div>
          </div>

          <div className={styles.lineup}>
            <div className={styles.lineupTitle}>두산 타순 · 대타</div>

            <div className={styles.playerRow}>
              <div className={styles.playerNum}>5</div>
              <div className={styles.playerInfo}>
                <div className={styles.name}>김재환 (좌타)</div>
                <div className={styles.stats}>.283 · vs좌 .241 · vs우 .295 · 만루 .312</div>
              </div>
            </div>

            <div className={styles.playerRow}>
              <div className={styles.playerNum}>6</div>
              <div className={styles.playerInfo}>
                <div className={styles.name}>양의지 (우타)</div>
                <div className={styles.stats}>.276 · vs좌 .291 · vs우 .268 · 만루 .345</div>
              </div>
            </div>

            <div className={styles.playerRow}>
              <div className={`${styles.playerNum} ${styles.pinch}`}>PH</div>
              <div className={styles.playerInfo}>
                <div className={styles.name}>헨리 (우타) <span className={styles.warn}>⚠</span></div>
                <div className={styles.stats}>대타 .310 · 만루 <strong style={{ color: '#dc2626' }}>.400</strong></div>
              </div>
            </div>

            <div className={styles.playerRow}>
              <div className={`${styles.playerNum} ${styles.pinch}`}>PH</div>
              <div className={styles.playerInfo}>
                <div className={styles.name}>안재석 (좌타)</div>
                <div className={styles.stats}>대타 .268 · 만루 .310</div>
              </div>
            </div>

            <div className={styles.playerRow}>
              <div className={`${styles.playerNum} ${styles.pinch}`}>PH</div>
              <div className={styles.playerInfo}>
                <div className={styles.name}>김재호 (우타)</div>
                <div className={styles.stats}>대타 .258 · 만루 .290</div>
              </div>
            </div>
          </div>
        </div>

        {/* main - pitcher card */}
        <div className={styles.cardSection}>
          <div className={styles.sectionHeader + ' ' + styles.home}>
            <p>🔵 KIA 수비</p>
          </div>

          <div className={styles.pitcherCard}>
            <div className={styles.pitcherName}>🎯 이준영 (좌완)</div>
            <div className={styles.pitcherStatus}>
              6회 1사 등판, 12구<br />
              플라이(김재환,좌) → 안타(양석환,우) → 볼넷(강승호,우){' '}
              <span className={styles.warn}>⚠ 흔들림</span>
            </div>
            <div className={styles.statRow}>ERA <strong>3.42</strong> · 12홀드 · vs좌 <strong>.198</strong> · vs우 <strong>.278</strong></div>
            <div className={styles.statRow}>1·2루 <strong>.295</strong> · 만루 <strong>.312</strong></div>
          </div>

          <div className={styles.lineup}>
            <div className={styles.lineupTitle}>KIA 투수진 (상대 타자 vs 전적)</div>
            <table className={styles.bullpenTable}>
              <thead>
                <tr>
                  <th>투수</th>
                  <th>라모스</th>
                  <th>김재환</th>
                  <th>양의지</th>
                  <th>헨리</th>
                  <th>만루ERA</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.current}>
                  <td>이준영(좌)</td>
                  <td>.333</td>
                  <td>.250</td>
                  <td>.312</td>
                  <td>.333</td>
                  <td>3.12</td>
                </tr>
                <tr>
                  <td>최지민(좌)</td>
                  <td>.333</td>
                  <td className={styles.star}>.143⭐</td>
                  <td>.267</td>
                  <td>.500</td>
                  <td>2.84</td>
                </tr>
                <tr>
                  <td>전상현(우)</td>
                  <td className={styles.warn}>.375</td>
                  <td className={styles.warn}>.400</td>
                  <td>.289</td>
                  <td>.500</td>
                  <td className={styles.warn}>4.12</td>
                </tr>
                <tr>
                  <td>곽도규(우)</td>
                  <td className={styles.warn}>.500</td>
                  <td>.333</td>
                  <td>.250</td>
                  <td>.333</td>
                  <td>3.45</td>
                </tr>
                <tr>
                  <td>정해영(우)</td>
                  <td>.300</td>
                  <td>.250</td>
                  <td>.200</td>
                  <td>.200</td>
                  <td>2.10</td>
                </tr>
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