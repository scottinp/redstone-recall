'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MenuPage() {
  const [quizSets, setQuizSets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:3001/api/quizsets')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch quiz sets');
        return res.json();
      })
      .then((data) => {
        console.log('📦 Received from backend:', data);
        setQuizSets(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('❌ Error:', err);
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  const handleSelect = (setId) => {
    router.push(`/quiz?set=${setId}`);
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Select a Quiz Set</h1>

      {loading && <p>Loading quiz sets...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && quizSets.length === 0 && (
        <p>No quiz sets found. Try inserting one into MongoDB.</p>
      )}

      {!loading && !error && quizSets.length > 0 && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {quizSets.map((set) => (
            <li
              key={set}
              onClick={() => handleSelect(set)}
              style={{
                cursor: 'pointer',
                margin: '10px 0',
                padding: '12px 24px',
                background: '#1e1e1e',
                color: '#fff',
                border: '2px solid #555',
                borderRadius: '8px',
                fontSize: '1.2rem',
                transition: '0.2s',
                display: 'inline-block'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#444')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#1e1e1e')}
            >
              {set.charAt(0).toUpperCase() + set.slice(1)}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
