// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import EmeraldsDisplay from '/Users/stephenbui/Documents/GitHub/redstone-recall/client/src/app/components/EmeraldsDisplay.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Redstone Recall',
  description: 'Study with Steve',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Emeralds UI visible on all pages */}
        <EmeraldsDisplay/>

        {/* Main content of your app */}
        <main>{children}</main>
      </body>
    </html>
  );
}
