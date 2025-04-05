'use client';

import { useRouter } from 'next/navigation';

export default function Menu() {
  const router = useRouter();

  const handleExit = () => {
    router.push('../');
  };


  return (
    <div>
      <h2>Select Your Quiz Set</h2>
      <ul>
        <li onClick={() => router.push('/quiz?set=mining')}>Mining</li>
        <li onClick={() => router.push('/quiz?set=mobs')}>Mobs</li>
        <li onClick={() => router.push('/quiz?set=redstone')}>Redstone</li>
        <button onClick={handleExit}>Exit</button>
      </ul>
    </div>
  );
}
