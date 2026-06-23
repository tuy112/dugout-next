// 선수 카드
export interface PlayerStat {
  name: string;        // '김재환 (좌타)'
  stats: string;       // '.283 · vs좌 .241 · vs우 .295 · 만루 .312'
  isPinchHitter?: boolean;
  hasWarning?: boolean;
}

export interface BatterCard {
  name: string;           // '라모스 (우타)'
  badge: string;          // '4번 · 3타석째'
  todayRecord: string;    // '오늘: 플라이 → 안타 → ?'
  seasonStats: string;    // '시즌 .295 · vs좌 .267 · vs우 .312'
  situationStats: string; // '1·2루 .322 · 만루 .375'
}

export interface BullpenRow {
  name: string;       // '이준영(좌)'
  isCurrent?: boolean;
  stats: string[];    // ['.333', '.250', '.312', '.333', '3.12']  — 순서는 bullpenHeaders 순
  warnCols?: number[]; // warn 스타일 적용할 열 인덱스
  starCols?: number[];
}

export interface PitcherCard {
  name: string;         // '이준영 (좌완)'
  status: string;       // '6회 1사 등판, 12구 ...'
  hasWarning?: boolean;
  seasonStats: string;  // 'ERA 3.42 · 12홀드 · vs좌 .198 · vs우 .278'
  situationStats: string;
  bullpenHeaders: string[];  // ['투수','라모스','김재환','양의지','헨리','만루ERA']
  bullpen: BullpenRow[];
}

export interface ChoiceOption {
    id: string;
    text: string;
    desc: string;
}
  
export interface SubChoice {
    title: string;
    options: ChoiceOption[];
}
  
export interface ResultData {
    choice: string;
    result: string;
    points: string;
}

// 시나리오 데이터
export interface ScenarioData {
    id: string;
    gameDate: string;
    title: string;
    homeTeam: string;
    awayTeam: string;
    score: {
      home: number;
      away: number;
    };
    inning: string;
    outs: string;
    situation: string;

    batterCard: BatterCard;
    lineup: PlayerStat[];       // 타순 + 대타 목록
    pitcherCard: PitcherCard;
    
    /** 메인 선택지 목록 (A/B/C/D) */
    mainChoices: MainChoice[];
    subChoices: Record<string, SubChoice>;
    results: Record<string, ResultData>;
  }
   
  export interface MainChoice {
    id: string;       // 'A' | 'B' | 'C' | 'D'
    text: string;     // 예시 : '마운드 방문 후 이준영 유지'
  }
