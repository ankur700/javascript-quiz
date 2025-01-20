"use client";
import Link from "next/link";
import { Fullscreen, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/components/lib/utils";

import { ModeToggle } from "@/lib/components/ThemeToggle";
import { useQuiz } from "@/lib/hooks/useQuiz";
import { useMobile } from "@/lib/hooks/useMobile";
import { Button } from "./ui/button";
import { useEffect } from "react";

const Navbar = () => {
  const { user } = useQuiz();
  const { isMobile } = useMobile();

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  function logout() {
    localStorage.removeItem("scores");
    localStorage.removeItem("user");
  }

  useEffect(() => {
    const fullScreenToggler = (e: KeyboardEvent) => {
      if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
        e.preventDefault();
        toggleFullScreen();
      }
    };
    window.addEventListener("keydown", fullScreenToggler);

    return () => window.removeEventListener("keydown", fullScreenToggler);
  });

  return (
    <header
      className={cn(
        "mx-auto w-full bg-background/10 shadow backdrop-blur-md py-3",
        !isMobile ? "sticky inset-x-0 top-0 z-30" : ""
      )}
    >
      <nav className="max-w-5xl flex items-center justify-between mx-auto p-4 px-8">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-foreground">
            {"<JS />"}
          </span>
        </Link>

        <div className="flex gap-4 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ModeToggle />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  aria-label="toggle fullscreen"
                  variant="outline"
                  onClick={toggleFullScreen}
                >
                  <Fullscreen />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle fullscreen CTRL + f</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={""} alt={user} />
                <AvatarFallback className="rounded-lg">
                  {user
                    ? user.charAt(0).toUpperCase()
                    : "John Doe".charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={"bottom"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {user ?? "John Doe"}
                    </span>
                    {/* <span className="truncate text-xs">{user.email}</span> */}
                  </div>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
