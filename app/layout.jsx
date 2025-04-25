import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import AnimatedCursor from "@/components/animated-cursor"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Rahul Kumar | Portfolio",
  description: "Code, Create & Conquer – Turning Ideas into Scalable Apps.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider defaultTheme="system">
          <AnimatedCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
