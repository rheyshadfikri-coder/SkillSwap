import JokeGenerator from '@components/JokeGenerator';

export const metadata = {
  title: 'Joke Generator - SkillSwap',
  description: 'Generate random jokes from JokeAPI',
};

export default function JokePage() {
  return (
    <main className="w-full overflow-hidden">
      <JokeGenerator />
    </main>
  );
}
