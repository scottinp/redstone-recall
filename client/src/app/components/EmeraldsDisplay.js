'use client';
import { useState, useEffect } from 'react';

export default function EmeraldsDisplay() {
  const [emeralds, setEmeralds] = useState(0);  // Initialize emeralds state

  // Fetch emeralds from your database (or state management)
  useEffect(() => {
    const fetchEmeralds = async () => {
      const response = await fetch('/api/emeralds'); // Endpoint that fetches user's emeralds
      const data = await response.json();
      setEmeralds(data.emeralds);  // Update emeralds state with fetched data
    };

    fetchEmeralds();
  }, []);

  return (
    <div className="emeralds-display">
      <span>💎 {emeralds} Emeralds</span>
    </div>
  );
}