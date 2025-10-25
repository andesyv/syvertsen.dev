import Link from "next/link";
import { ThemeSwitch } from "./theme-switch.tsx";

interface NavItem {
  path: string;
  name: string;
}

const navItems: NavItem[] = [
  {
    path: "/projects",
    name: "Projects",
  },
  // Blog is disabled until I make some content :)
  //  {
  //    path: "/blog",
  //    name: "Blog",
  //  },
];

export function Navbar({ title }: { title: string }) {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {navItems.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
