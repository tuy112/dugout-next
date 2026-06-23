import { ScenarioData } from '../../types';

export const game240817: ScenarioData = {
  // intro
  id: '240817',
  gameDate: '2024.08.17',
  title: '광주 · 7회초',
  homeTeam: 'KIA',
  awayTeam: '두산',
  score: {
    home: 3,
    away: 4,
  },
  inning: '7회초 ▲',
  outs: '1사 · 1·2루',
  situation: '1사 1·2루 위기입니다',

  // batter card
  batterCard: {
    name: '라모스 (우타)',
    badge: '4번 · 3타석째',
    todayRecord: '오늘: 플라이 → 안타 → ?',
    seasonStats: '시즌 .295 · vs좌 .267 · vs우 .312',
    situationStats: '1·2루 .322 · 만루 .375',
  },

  // 타순 / 대타 목록
  lineup: [
    { name: '김재환 (좌타)', stats: '.283 · vs좌 .241 · vs우 .295 · 만루 .312' },
    { name: '양의지 (우타)', stats: '.276 · vs좌 .291 · vs우 .268 · 만루 .345' },
    { name: '헨리 (우타)',   stats: '대타 .310 · 만루 .400', isPinchHitter: true, hasWarning: true },
    { name: '안재석 (좌타)', stats: '대타 .268 · 만루 .310', isPinchHitter: true },
    { name: '김재호 (우타)', stats: '대타 .258 · 만루 .290', isPinchHitter: true },
  ],

  // pitcher card
  pitcherCard: {
    name: '이준영 (좌완)',
    status: '6회 1사 등판, 12구\n플라이(김재환,좌) → 안타(양석환,우) → 볼넷(강승호,우)',
    hasWarning: true,
    seasonStats: 'ERA 3.42 · 12홀드 · vs좌 .198 · vs우 .278',
    situationStats: '1·2루 .295 · 만루 .312',
    bullpenHeaders: ['투수', '라모스', '김재환', '양의지', '헨리', '만루ERA'],
    bullpen: [
      { name: '이준영(좌)', isCurrent: true, stats: ['.333', '.250', '.312', '.333', '3.12'] },
      { name: '최지민(좌)',                  stats: ['.333', '.143', '.267', '.500', '2.84'], starCols: [1] },
      { name: '전상현(우)',                  stats: ['.375', '.400', '.289', '.500', '4.12'], warnCols: [0, 1, 4] },
      { name: '곽도규(우)',                  stats: ['.500', '.333', '.250', '.333', '3.45'], warnCols: [0] },
      { name: '정해영(우)',                  stats: ['.300', '.250', '.200', '.200', '2.10'] },
    ],
  },

  // mainChoices
  mainChoices: [
    { id: 'A', text: '마운드 방문 후 이준영 유지' },
    { id: 'B', text: '투수 교체' },
    { id: 'C', text: '고의4구 → 김재환 승부' },
    { id: 'D', text: '수비 강화' },
  ],

  subChoices: {
    A: {
      title: '[A] 마운드 방문 - 누가 갈까?',
      options: [
        { id: 'A-1', text: '포수만 올라감', desc: '사인 점검, 부담 적은 방문' },
        { id: 'A-2', text: '투수코치 마운드 방문', desc: '기술 조언 + 불펜 시간 확보' },
        { id: 'A-3', text: '감독이 직접 방문', desc: '강력한 메시지, 분위기 환기' },
      ],
    },
    B: {
      title: '[B] 투수 교체 - 누구로?',
      options: [
        { id: 'B-1', text: '최지민 (좌완)', desc: 'vs김재환 .143⭐ · 만루 ERA 2.84' },
        { id: 'B-2', text: '전상현 (우완)', desc: 'vs라모스 .375 · 만루 ERA 4.12 ⚠' },
        { id: 'B-3', text: '곽도규 (우완)', desc: '3연투 후 컨디션 우려 ⚠' },
      ],
    },
    C: {
      title: '[C] 고의4구 → 김재환 승부',
      options: [
        { id: 'C-1', text: '이준영 그대로 김재환', desc: 'vs김재환 .250 · 만루 .312' },
        { id: 'C-2', text: '최지민으로 교체', desc: 'vs김재환 .143⭐ · 헨리 대타 위험 ⚠' },
      ],
    },
    D: {
      title: '[D] 수비 강화',
      options: [
        { id: 'D-1', text: '내야 인필드 백', desc: '병살 노림' },
        { id: 'D-2', text: '내야 전진수비', desc: '적시타 차단' },
        { id: 'D-3', text: '외야 라인업', desc: '장타 차단' },
      ],
    },
  },

  results: {
    'A-1': { choice: '[A-1] 포수만 방문 + 이준영 유지', result: '→ 2실점 (실제 결과와 동일)', points: '65/100' },
    'A-2': { choice: '[A-2] 투수코치 방문 + 이준영 유지', result: '→ 무실점, 위기 탈출', points: '72/100' },
    'A-3': { choice: '[A-3] 감독 직접 방문 + 이준영 유지', result: '→ 1실점', points: '60/100' },
    'B-1': { choice: '[B-1] 최지민으로 교체', result: '→ 무실점, 위기 탈출', points: '88/100' },
    'B-2': { choice: '[B-2] 전상현으로 교체', result: '→ 2실점', points: '38/100' },
    'B-3': { choice: '[B-3] 곽도규로 교체', result: '→ 2실점', points: '32/100' },
    'C-1': { choice: '[C-1] 고의4구 + 이준영', result: '→ 2실점', points: '48/100' },
    'C-2': { choice: '[C-2] 고의4구 + 최지민', result: '→ 4실점', points: '35/100' },
    'D-1': { choice: '[D-1] 내야 인필드 백', result: '→ 무실점', points: '78/100' },
    'D-2': { choice: '[D-2] 내야 전진수비', result: '→ 2실점', points: '42/100' },
    'D-3': { choice: '[D-3] 외야 라인업', result: '→ 2실점', points: '38/100' },
  },
};