'use client';
import { useState, useEffect } from 'react';

export default function EmeraldsDisplay() {
  const [emeralds, setEmeralds] = useState(0);

  useEffect(() => {
    const fetchEmeralds = async () => {
      const response = await fetch('/api/emeralds');
      const data = await response.json();
      setEmeralds(data.emeralds);  
    };

    fetchEmeralds();
  }, []);

  return (
    <div className="emeralds-display">
      <span>💎 {emeralds} Emeralds</span>
    </div>
  );
}