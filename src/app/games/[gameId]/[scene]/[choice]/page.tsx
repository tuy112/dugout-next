import { notFound } from 'next/navigation';
import { getScenario } from '@/data';
import ChoiceResultPage from './ChoiceResultPage';
 
interface Props {
  params: Promise<{ gameId: string; scene: string; choice: string }>;
}
 
export default async function Page({ params }: Props) {
  const { gameId, choice } = await params;
 
  const scenario = getScenario(gameId);
  if (!scenario) notFound();
 
  const result = scenario.results[choice];
  if (!result) notFound();
 
  return (
    <ChoiceResultPage
      gameId={gameId}
      result={result}
    />
  );
}