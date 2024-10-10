"use client"
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./navBar";
import { useEffect, useState } from 'react';


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
        className="font-poppins font-normal bg-white dark:bg-darkBg"
      >
        <NavBar toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  );
}
