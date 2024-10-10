"use client"
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./navBar";
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'], // Add the font weights you want to use
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  //check
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Use effect to apply theme from local storage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme as 'light' | 'dark');
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Persist theme
  };

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body
        className={` ${poppins.variable} antialiased`}
      >
        <NavBar toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  );
}
