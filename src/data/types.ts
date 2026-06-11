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
    subChoices: Record<string, SubChoice>;
    results: Record<string, ResultData>;
}