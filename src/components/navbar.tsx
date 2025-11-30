import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

// === NEW ICONS ===
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// === YOUR NAV LINKS ===
const NAV_MENU = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Shikazu777",   // ← your GitHub link
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/dhanraj-nagarajan-a9b52537b/", // ← your LinkedIn link
  },
  {
    name: "Mail",
    icon: FaEnvelope,
    href: "iamdhanrajn@gmail.com",  // ← your mail
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target="_blank"
        rel="noopener noreferrer"
        variant="paragraph"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-blue-600 transition"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography className="text-lg font-bold">
          Portfolio
        </Typography>

        {/* DESKTOP MENU */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* MOBILE MENU */}
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-4 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
