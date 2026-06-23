import { ScenarioData } from '../../types';

export const game700101: ScenarioData = {
  // intro
  id: '700101',
  gameDate: '1970.01.01',
  title: 'ㅇㅇ구장 · 0회초',
  homeTeam: 'ㅇㅇ',
  awayTeam: 'ㅁㅁ',
  score: {
    home: 0,
    away: 0,
  },
  inning: 'ㅇ회초',
  outs: '무사',
  situation: '무사 ㅇ·ㅇ루입니다',

  // intro - 승률
  winProb: {
    home: 78,   // 홈팀 승률
    away: 22,   // 원정팀 승률
  },


  // batter card
  batterCard: {
    name: '선수명 (좌/우타)',
    badge: '번 · 타석째',
    todayRecord: '오늘기록 : → → ',
    seasonStats: '시즌 .000 · vs좌 .000 · vs우 .000',
    situationStats: '1·2루 .000 · 만루 .000',
  },
  
  // 타순 / 대타 목록
  lineup: [
    { name: '선수명 (좌/우타)', stats: '.000 · vs좌 .000 · vs우 .000 · 만루 .000' },
    { name: '선수명 (좌/우타)', stats: '.000 · vs좌 .000 · vs우 .000 · 만루 .000' },
    { name: '선수명 (좌/우타)', stats: '대타 .000 · 만루 .000', isPinchHitter: true },
    { name: '선수명 (좌/우타)', stats: '대타 .000 · 만루 .000', isPinchHitter: true },
    { name: '선수명 (좌/우타)', stats: '대타 .000 · 만루 .000', isPinchHitter: true },
  ],

  // pitcher card
  pitcherCard: {
    name: '선수명 (좌/우완)',
    status: '0회 0사 등판, 0구\n결과 → 결과 → 결과',
    hasWarning: false,
    seasonStats: 'ERA 0.00 · 0홀드 · vs좌 .000 · vs우 .000',
    situationStats: '1·2루 .000 · 만루 .000',
    bullpenHeaders: ['투수', '타자1', '타자2', '타자3', '타자4', '만루ERA'],
    bullpen: [
      { name: '선수명(좌/우)', isCurrent: true,  stats: ['.000', '.000', '.000', '.000', '0.00'] },
      { name: '선수명(좌/우)',                    stats: ['.000', '.000', '.000', '.000', '0.00'] },
      { name: '선수명(좌/우)',                    stats: ['.000', '.000', '.000', '.000', '0.00'] },
      { name: '선수명(좌/우)',                    stats: ['.000', '.000', '.000', '.000', '0.00'] },
      { name: '선수명(좌/우)',                    stats: ['.000', '.000', '.000', '.000', '0.00'] },
    ],
  },
  
  // mainChoices
  mainChoices: [
    { id: 'A', text: 'A 선택지' },
    { id: 'B', text: 'B 선택지' },
    { id: 'C', text: 'C 선택지' },
    { id: 'D', text: 'D 선택지' },
  ],

  subChoices: {
    A: {
      title: '[A] A 선택지',
      options: [
        { id: 'A-1', text: 'A-1 선택지', desc: 'A-1 설명' },
        { id: 'A-2', text: 'A-2 선택지', desc: 'A-2 설명' },
        { id: 'A-3', text: 'A-3 선택지', desc: 'A-3 설명' },
      ],
    },
    B: {
      title: '[B] B 선택지',
      options: [
        { id: 'B-1', text: 'B-1 선택지', desc: 'B-1 설명' },
        { id: 'B-2', text: 'B-2 선택지', desc: 'B-2 설명' },
        { id: 'B-3', text: 'B-3 선택지', desc: 'B-3 설명' },
      ],
    },
    C: {
      title: '[C] C 선택지',
      options: [
        { id: 'C-1', text: 'C-1 선택지', desc: 'C-1 설명' },
        { id: 'C-2', text: 'C-2 선택지', desc: 'C-2 설명' },
      ],
    },
    D: {
      title: '[D] D 선택지',
      options: [
        { id: 'D-1', text: 'D-1 선택지', desc: 'D-1 설명' },
        { id: 'D-2', text: 'D-2 선택지', desc: 'D-2 설명' },
        { id: 'D-3', text: 'D-3 선택지', desc: 'D-3 설명' },
      ],
    },
  },

  results: {
    'A-1': { choice: '[A-1] A-1 설명', result: '→ -실점 (실제 결과와 동일)', points: '65/100' },
    'A-2': { choice: '[A-2] A-2 설명', result: '→ -실점, 위기 탈출', points: '72/100' },
    'A-3': { choice: '[A-3] A-3 설명', result: '→ -실점', points: '60/100' },
    'B-1': { choice: '[B-1] B-1 설명', result: '→ -실점, 위기 탈출', points: '88/100' },
    'B-2': { choice: '[B-2] B-2 설명', result: '→ -실점', points: '38/100' },
    'B-3': { choice: '[B-3] B-3 설명', result: '→ -실점', points: '32/100' },
    'C-1': { choice: '[C-1] C-1 설명', result: '→ -실점', points: '48/100' },
    'C-2': { choice: '[C-2] C-2 설명', result: '→ -실점', points: '35/100' },
    'D-1': { choice: '[D-1] D-1 설명', result: '→ -실점', points: '78/100' },
    'D-2': { choice: '[D-2] D-2 설명', result: '→ -실점', points: '42/100' },
    'D-3': { choice: '[D-3] D-3 설명', result: '→ -실점', points: '38/100' },
  },
};