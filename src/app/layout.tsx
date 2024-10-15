"use client"
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from '@next/font/google';
import NavBar from "./navBar";
import { useEffect, useState } from 'react';
import Footer from "./footer";
import Footer2 from "./footer2";
import useThemeStore from "./store";

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
  const setThemeStore = useThemeStore((state) => state.setDarkMode);
  const themeStore = useThemeStore((state) => state.darkMode);


  // Use effect to apply theme from local storage or default
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme as 'light' | 'dark');
  }, []);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeStore()
    localStorage.setItem('theme', newTheme); // Persist theme
  };

  return (
    <html lang="en" className={themeStore ? 'dark' : ''}>
      <body
        className={`${poppins.className} bg-white dark:bg-darkBg`}
      >
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <NavBar toggleTheme={toggleTheme} />
        {children}
        <Footer />
        <Footer2 />
      </body>
    </html>
  );
}
