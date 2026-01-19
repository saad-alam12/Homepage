import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saad Alam | Physics M.Sc. · Quantitative Finance",
  description: "Physics M.Sc. student at TUM seeking working student positions in quantitative research, algorithmic trading, and market risk management. Strong background in mathematical modeling, Python, C++, and statistical analysis.",
  keywords: ["quantitative research", "physics", "TUM", "quant finance", "risk management", "Python", "algorithmic trading"],
  authors: [{ name: "Saad Alam" }],
  openGraph: {
    title: "Saad Alam | Quantitative Finance Portfolio",
    description: "Physics M.Sc. student at TUM seeking opportunities in quantitative finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
