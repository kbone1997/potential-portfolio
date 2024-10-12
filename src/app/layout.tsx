"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from '@next/font/google';
import NavBar from "./navBar";
import { useEffect, useState } from 'react';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700'], // Define the weights you need
  style: ["normal"],
  subsets: ['latin'],  // Specify the character subsets
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
        className={`${poppins.className} bg-white dark:bg-darkBg`}
      >
        <NavBar toggleTheme={toggleTheme} />
        {children}
      </body>
    </html>
  );
}
