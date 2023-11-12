"use client";
import "./globals.css";
import Nav from "./(components)/Nav";
import { StarsCanvas } from "./(components)/Canvas";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary">
        <Nav />
        <div className="min-h-screen grid content-center justify-items-center">
          {children}
          <StarsCanvas />
        </div>
      </body>
    </html>
  );
}
