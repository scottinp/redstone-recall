'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MenuPage() {
  const [quizSets, setQuizSets] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // ✅ Fetch from your backend server (not Next.js itself)
    fetch('http://localhost:3001/api/quizsets')
      .then((res) => res.json())
      .then((data) => setQuizSets(data))
      .catch((err) => console.error('Error fetching quiz sets:', err));
  }, []);

  const handleSelect = (setId) => {
    router.push(`/quiz?set=${setId}`);
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Select a Quiz Set</h1>
      {quizSets.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {quizSets.map((set) => (
            <li
              key={set}
              onClick={() => handleSelect(set)}
              style={{
                cursor: 'pointer',
                margin: '10px 0',
                padding: '12px 24px',
                background: '#333',
                color: 'white',
                borderRadius: '8px',
                display: 'inline-block'
              }}
            >
              {set.charAt(0).toUpperCase() + set.slice(1)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading quiz sets...</p>
      )}
    </main>
  );
}
