import "./global.css";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav.tsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer.tsx";
import { ThemeProvider } from "./components/theme-switch.tsx";

const title = "Syvertsen.dev";
const description = "My personal webpage";
const baseUrl = "https://syvertsen.dev";

const socialLinks = {
  github: "https://github.com/andesyv/syvertsen.dev",
  email: "mailto:anders@syvertsen.dev",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: baseUrl,
    siteName: title,
    locale: "en_US",
    type: "website",
  },
  // Robots disabled for now
  //  robots: {
  //    index: true,
  //    follow: true,
  //    googleBot: {
  //      index: true,
  //      follow: true,
  //      "max-video-preview": -1,
  //      "max-image-preview": "large",
  //      "max-snippet": -1,
  //    },
  //  },
  icons: {
    icon: "/favicon.ico",
  },
};

const stringifyClasses = (...classes: string[]) =>
  classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={stringifyClasses(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <ThemeProvider>
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[640px] w-full">
            <Navbar title={title} />
            {children}
            <Footer title={title} socialLinks={socialLinks} />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
