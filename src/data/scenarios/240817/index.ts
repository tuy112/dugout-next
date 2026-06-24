import { ScenarioData } from '../../types';

export const game240817: ScenarioData = {
  // intro
  id: '240817',
  gameDate: '2024.08.17',
  title: '잠실 · 6회말',
  homeTeam: 'LG',
  awayTeam: 'KIA',
  score: {
    home: 1,
    away: 3,
  },
  inning: '6회말',
  outs: '1사',
  situation: '1사 1·3루, 선발 임기영이 흔들리고 있습니다',

  winProb: {
    home: 28,
    away: 72,
  },

  // batter card — KIA 타자 (LG 입장에서 상대)
  batterCard: {
    name: '김도영 (우타)',
    badge: '3번 · 4타석째',
    todayRecord: '오늘 기록 : 안타 → 홈런 → 볼넷',
    seasonStats: '시즌 .320 · vs좌 .298 · vs우 .341',
    situationStats: '1·3루 .355 · 만루 .410',
  },

  // LG 불펜 / 대투수 옵션
  lineup: [
    { name: '나성범 (우타)', stats: '.285 · vs좌 .301 · vs우 .271 · 만루 .333' },
    { name: '최형우 (우타)', stats: '.271 · vs좌 .310 · vs우 .248 · 만루 .350' },
    { name: '소크라테스 (우타)', stats: '.259 · vs좌 .280 · vs우 .241 · 만루 .295' },
    { name: '이우성 (좌타)', stats: '.244 · vs좌 .201 · vs우 .265 · 만루 .280' },
  ],

  // pitcher card — LG 현재 투수 임기영
  pitcherCard: {
    name: '임기영 (우완)',
    status: '4회부터 등판, 오늘 66구\n안타(나성범) → 홈런(김도영) → 볼넷(최형우) → 현재 1사 1·3루',
    hasWarning: true,
    seasonStats: 'ERA 4.81 · vs좌 .298 · vs우 .261',
    situationStats: '1·3루 .341 · 만루 .412',
    bullpenHeaders: ['투수', '김도영', '나성범', '최형우', '소크라테스', '만루ERA'],
    bullpen: [
      { name: '임기영(우)', isCurrent: true, stats: ['.341', '.285', '.271', '.259', '4.12'] },
      { name: '이우찬(좌)',                  stats: ['.278', '.310', '.245', '.220', '3.45'], starCols: [1, 3] },
      { name: '박명근(우)',                  stats: ['.312', '.288', '.301', '.290', '4.88'], warnCols: [2, 4] },
      { name: '김유영(우)',                  stats: ['.265', '.271', '.258', '.244', '3.21'] },
      { name: '정우영(좌)',                  stats: ['.290', '.201', '.230', '.215', '3.67'], starCols: [1, 2] },
    ],
  },

  mainChoices: [
    { id: 'A', text: '임기영 계속 투구 (김도영 승부)' },
    { id: 'B', text: '투수 교체' },
    { id: 'C', text: '고의4구 → 만루 후 후속타자 승부' },
    { id: 'D', text: '수비 시프트 조정' },
  ],

  subChoices: {
    A: {
      title: '[A] 임기영 유지 - 어떻게 승부?',
      options: [
        { id: 'A-1', text: '정면 승부 (직구 위주)', desc: '김도영 vs우 .341 ⚠ — 위험 부담' },
        { id: 'A-2', text: '변화구 위주로 유인', desc: '제구 흔들린 상태, 볼넷 위험' },
        { id: 'A-3', text: '마운드 방문 후 임기영 유지', desc: '진정 효과, 시간 벌기' },
      ],
    },
    B: {
      title: '[B] 투수 교체 - 누구로?',
      options: [
        { id: 'B-1', text: '이우찬 (좌완)', desc: 'vs김도영 .278 · 만루 ERA 3.45⭐' },
        { id: 'B-2', text: '박명근 (우완)', desc: 'vs김도영 .312 · 만루 ERA 4.88 ⚠ 최근 부진' },
        { id: 'B-3', text: '정우영 (좌완)', desc: 'vs김도영 .290 · vs나성범 .201⭐ 필승조 아끼기 위험' },
      ],
    },
    C: {
      title: '[C] 고의4구 만루 → 후속 승부',
      options: [
        { id: 'C-1', text: '임기영 그대로 나성범 승부', desc: 'vs나성범 .285 · 만루 .333' },
        { id: 'C-2', text: '이우찬으로 교체 후 나성범', desc: 'vs나성범 .310⚠ 하지만 좌타자 뒤 소크라테스엔 강점' },
        { id: 'C-3', text: '정우영으로 교체 후 나성범', desc: 'vs나성범 .201⭐ — 이상적 매칭' },
      ],
    },
    D: {
      title: '[D] 수비 시프트 조정',
      options: [
        { id: 'D-1', text: '내야 전진 + 3루 주자 홈 저지', desc: '적시타 1점 차단, 병살 어려움' },
        { id: 'D-2', text: '인필드 백 — 병살 노림', desc: '3루 주자 홈 허용 각오, 빅이닝 차단 목표' },
        { id: 'D-3', text: '외야 깊게 — 장타 차단', desc: '1점은 내줄 수 있음, 2점 이상 막기' },
      ],
    },
  },

  results: {
    'A-1': { choice: '[A-1] 임기영 정면 승부', result: '→ 김도영 적시타 2실점, 빅이닝 시작 (실제 결과 근접)', points: '30/100' },
    'A-2': { choice: '[A-2] 임기영 변화구 유인', result: '→ 볼넷, 만루 후 추가 실점', points: '35/100' },
    'A-3': { choice: '[A-3] 마운드 방문 후 유지', result: '→ 일시적 안정, 하지만 결국 1실점', points: '50/100' },
    'B-1': { choice: '[B-1] 이우찬으로 교체', result: '→ 김도영 삼진, 위기 탈출', points: '82/100' },
    'B-2': { choice: '[B-2] 박명근으로 교체', result: '→ 만루 후 2실점', points: '38/100' },
    'B-3': { choice: '[B-3] 정우영으로 교체', result: '→ 무실점, 이닝 종료', points: '88/100' },
    'C-1': { choice: '[C-1] 고의4구 + 임기영', result: '→ 나성범 만루홈런, 4실점', points: '20/100' },
    'C-2': { choice: '[C-2] 고의4구 + 이우찬', result: '→ 1실점', points: '60/100' },
    'C-3': { choice: '[C-3] 고의4구 + 정우영', result: '→ 무실점', points: '80/100' },
    'D-1': { choice: '[D-1] 전진수비', result: '→ 홈 저지 성공, 하지만 후속 안타로 2실점', points: '42/100' },
    'D-2': { choice: '[D-2] 인필드 백 + 병살 노림', result: '→ 병살 성공, 1실점으로 마무리', points: '72/100' },
    'D-3': { choice: '[D-3] 외야 깊게', result: '→ 1실점, 하지만 빅이닝 방지', points: '55/100' },
  },

  youtubeUrl: 'https://www.youtube.com/watch?v=7eMNSEp0zd8',
};