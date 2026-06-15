import { notFound } from 'next/navigation';
import { getScenario } from '@/data';
import ScenePage from './ScenePage';
 
interface Props {
  params: Promise<{ gameId: string; scene: string }>;
}
 
export default async function Page({ params }: Props) {
  const { gameId, scene } = await params;
 
  const scenario = getScenario(gameId);
  if (!scenario) notFound();
 
  const subChoice = scenario.subChoices[scene.toUpperCase()];
  if (!subChoice) notFound();
 
  return (
    <ScenePage
      gameId={gameId}
      title={scenario.title}
      subChoice={subChoice}
      scene={scene}
    />
  );
}