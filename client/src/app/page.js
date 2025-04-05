'use client';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';
<style>
@import url('https://fonts.cdnfonts.com/css/minecraft-4');
</style>
                
export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push('../menu');
  };

  return (
    <main className={styles.title}>
      <h1>Redstone Remind</h1>
      <button onClick={handleStart}>Start</button>
    </main>
  );
}
