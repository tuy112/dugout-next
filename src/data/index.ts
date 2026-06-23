import { ScenarioData } from './types';

import { game240817 } from './scenarios/240817';
import { game700101 } from './scenarios/700101';

// 새 게임 추가 공간
const scenarioMap: Record<string, ScenarioData> = {
  '240817': game240817,
  '700101': game700101,
};

// 메인페이지용 배열 (map 사용 가능)
export const scenarios: ScenarioData[] = Object.values(scenarioMap);
 
// gameId로 단건 조회
export function getScenario(gameId: string): ScenarioData | null {
  return scenarioMap[gameId] ?? null;
}
 
export function getAllGameIds(): string[] {
  return Object.keys(scenarios);
}