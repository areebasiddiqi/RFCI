import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RFCICalculator - Estimate RFCI & SMP Scores",
  description: "Estimate the RFCI and SMP scores for any topic using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className="container">
            <div className={styles.headerContent}>
              <a href="/" className={styles.logo}>
                RFCICalculator
              </a>
              <nav className={styles.nav}>
                <a href="/" className={styles.navLink}>Home</a>
                <a href="/blog" className={styles.navLink}>Blog</a>
              </nav>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div className="container">
            <p>&copy; {new Date().getFullYear()} RFCICalculator. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
