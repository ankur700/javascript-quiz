"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Site } from "@/lib/utils/config";
import ScoreCard from "@/lib/components/ScoreCard";
import { Button } from "@/lib/components/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/components/ui/avatar";
import { ModeToggle } from "@/lib/components/ThemeToggle";
import { useQuiz } from "@/lib/hooks/useQuiz";

const Navbar = () => {
  const [showScoreCard, setShowScoreCard] = useState<boolean>(false);
  const [showUserDropDown, setShowUserDropDown] = useState<boolean>(false);
  const { userName } = useQuiz();

  return (
    <header className="sticky inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl border border-border bg-background/10 shadow backdrop-blur-md md:top-4 md:rounded-3xl">
      <nav className=" max-w-3xl flex flex-wrap items-center justify-between mx-auto p-4 px-8">
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

          <Button
            id="score-button"
            onClick={() => setShowScoreCard(!showScoreCard)}
            variant="outline"
          >
            Scores
          </Button>

          {showScoreCard && (
            <div className="z-50 absolute top-20 right-6 ">
              <ScoreCard />
            </div>
          )}

          <Avatar onClick={() => setShowUserDropDown(!showUserDropDown)}>
            <AvatarImage src="" />
            <AvatarFallback>{userName.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>

          {showUserDropDown && (
            <div
              className="z-50 absolute top-20 right-6 my-4 text-foreground text-base list-none bg-background divide-y rounded-lg shadow divide-primary"
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm">{userName}</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Settings
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-secondary hover:text-secondary-foreground"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
