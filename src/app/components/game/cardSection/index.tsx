'use client';

import { useState } from 'react';

import { ScenarioData } from '@/data/types';
import styles from './style.module.css';

interface Props {
  scenario: ScenarioData;
}

export default function CardSection({ scenario }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'batter' | 'pitcher'>('batter');
    const { batterCard, lineup, pitcherCard } = scenario;

    return (
        <>
            {/* batter section */}
            <button className={styles.btnData} onClick={() => setIsOpen(true)}>
                📊 감독실 데이터 보기
            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.panel} onClick={e => e.stopPropagation()}>

                        <div className={styles.panelHeader}>
                        <span className={styles.panelTitle}>감독실 데이터</span>
                        <button className={styles.panelClose} onClick={() => setIsOpen(false)}>✕</button>
                        </div>

                        <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'batter' ? styles.active : ''}`}
                            onClick={() => setActiveTab('batter')}
                        >
                            타자 · {batterCard.name.split(' ')[0]}
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'pitcher' ? styles.active : ''}`}
                            onClick={() => setActiveTab('pitcher')}
                        >
                            투수 · {pitcherCard.name.split(' ')[0]}
                        </button>
                        </div>

                        <div className={styles.panelBody}>

                        {activeTab === 'batter' && (
                            <>
                            {/* 타자 카드 */}
                            <div className={styles.mainCard}>
                                <div className={styles.batterHeader}>
                                <div className={styles.batterIcon}>🎯</div>
                                <div>
                                    <div className={styles.batterName}>
                                    {batterCard.name}
                                    <span className={styles.batterBadge}>{batterCard.badge}</span>
                                    </div>
                                    <div className={styles.batterSub}>현재 타석</div>
                                </div>
                                </div>
                                <div className={styles.todayChip}>{batterCard.todayRecord}</div>
                                <div className={styles.statBlock}>
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>시즌</span>
                                    {batterCard.seasonStats}
                                </div>
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>득점권</span>
                                    {batterCard.situationStats}
                                </div>
                                </div>
                                <div className={styles.cardDivider} />
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
                            </>
                        )}

                        {activeTab === 'pitcher' && (
                            <>
                            {/* 투수 카드 */}
                            <div className={styles.mainCard}>
                                <div className={styles.pitcherHeader}>
                                <div className={styles.pitcherIcon}>🎯</div>
                                <div>
                                    <div className={styles.pitcherName}>{pitcherCard.name}</div>
                                    <div className={styles.pitcherSub}>현재 등판 중</div>
                                </div>
                                </div>
                                <div className={styles.statusChip}>
                                {pitcherCard.status}
                                {pitcherCard.hasWarning && <span className={styles.statusWarn}> ⚠ 흔들림</span>}
                                </div>
                                <div className={styles.statBlock}>
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>시즌</span>
                                    {pitcherCard.seasonStats}
                                </div>
                                <div className={styles.statRow}>
                                    <span className={styles.statLabel}>득점권</span>
                                    {pitcherCard.situationStats}
                                </div>
                                </div>
                            </div>

                            {/* 불펜 테이블 */}
                            <div className={styles.bullpenWrap}>
                                <div className={styles.bullpenTitle}>{scenario.awayTeam} 투수진 (상대 타자 vs 전적)</div>
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
                                            row.warnCols?.includes(si) ? styles.warnCol
                                            : row.starCols?.includes(si) ? styles.starCol
                                            : ''
                                            }
                                        >
                                            {stat}{row.starCols?.includes(si) ? ' ☆' : ''}
                                        </td>
                                        ))}
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                            </div>
                            </>
                        )}

                        </div>
                    </div>
                </div>
            )}
        </>
    );
}