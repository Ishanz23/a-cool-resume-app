import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [menuVisible, setMenuVisibility] = useState(false);
  return (
    <header className="w-100 print:hidden">
      <nav className="flex items-center justify-between w-full h-[8vh] fixed bottom-0 md:top-0 md:sticky z-10 bg-slate-800 dark:bg-slate-900 dark:text-slate-50 text-slate-50">
        <h2 className="px-4 font-semibold">A COOL RESUME APP</h2>
        <ul
          className={cn(
            menuVisible
              ? "flex flex-col md:flex-row justify-end absolute md:static right-0 bottom-[8vh] md:bottom-auto h-[92vh] md:h-auto w-full md:w-auto md:pr-4 pb-8 md:pb-0 items-center gap-12 bg-slate-900 dark:bg-slate-800 md:dark:bg-transparent md:bg-transparent dark:text-slate-50 text-slate-50"
              : "hidden md:flex md:flex-row md:pr-4 md:gap-4 md:items-center"
          )}
        >
          <li className="cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <a href="/">
              <Button
                className="flex items-center opacity-80 bg-fuchsia-500"
                title="Download PDF"
                aria-label="Download PDF"
              >
                <span className="material-symbols-outlined">preview</span>
              </Button>
            </a>
          </li>
          <li className="cursor-pointer hover:text-fuchsia-400 dark:hover:text-fuchsia-300">
            <Button
              className="flex items-center opacity-80 bg-fuchsia-500"
              title="Download PDF"
              aria-label="Download PDF"
            >
              <span className="material-symbols-outlined">download</span>
            </Button>
          </li>
        </ul>
        <div
          className="absolute flex flex-col items-center justify-between h-5 cursor-pointer right-4 w-7 md:hidden"
          onClick={() => setMenuVisibility(!menuVisible)}
        >
          <button
            className="w-full h-full"
            title="Open Menu"
            aria-label="Open Menu"
          >
            <div className="absolute h-0.5 w-full top-0 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
            <div className="absolute h-0.5 w-full top-2 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
            <div className="absolute h-0.5 w-full top-4 transition-all origin-left-center rounded-lg bg-slate-100 opacity-100"></div>
          </button>
        </div>
      </nav>
    </header>
  );
}
