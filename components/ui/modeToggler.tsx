"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme,setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);


  const toggleTheme = () => {
    // Toggle theme between light and dark
    setTheme(theme === "light" ? "dark" : "light");
  };

  return mounted&&(
    <div  className="absolute right-10 top-10">
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {theme === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}