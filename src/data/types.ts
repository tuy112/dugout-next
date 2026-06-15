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
    /** 메인 선택지 목록 (A/B/C/D) */
    mainChoices: MainChoice[];
    subChoices: Record<string, SubChoice>;
    results: Record<string, ResultData>;
  }
   
  export interface MainChoice {
    id: string;       // 'A' | 'B' | 'C' | 'D'
    text: string;     // 예시 : '마운드 방문 후 이준영 유지'
  }