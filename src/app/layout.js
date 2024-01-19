import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Assigment",
  description: "A small demo project with Next.js and JavaScript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx("bg-white h-full text-neutral-700", inter.className)}
      >
        <div className="min-h-[500px]">
          <section>
            <div className="bg-neutral-100 relative shadow-[inset_0_-1px_0_rgba(0,0,0,0.06)] w-full h-24">
              <div className="grid relative h-full items-center">
                <div className="flex justify-center grid-cols-2">
                  <span className="text-neutral-700 font-sans text-2xl font-bold">
                    UNN NextJS Demo Project
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <div>
                    <Link href="/">Home</Link>
                  </div>
                  <div>
                    <Link href="/about">About</Link>
                  </div>
                  <div>
                    <Link href="/portfolio">Portfolio</Link>
                  </div>
                  <div>
                    <Link href="/contact">Contact</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-7 mx-auto w-[700px]">{children}</div>
        </div>
        <footer className="border-t border-neutral-200 bg-neutral-100 min-h-[400px]">
          <div className="mx-auto w-[700px]">
            <div className="grid grid-cols-3">
              <section className="pt-10">
                <h3 className="font-bold">UNN NextJS Demo Project</h3>
                <ul className="grid gap-3 mt-2 mb-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
