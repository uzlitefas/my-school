import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";

const navItems = [
  { title: "home", url: "/" },
  { title: "about", url: "/about" },
  { title: "galary", url: "/galary" },
  { title: "bitiruvchilar", url: "/bitiruvchilar" },
  { title: "contact", url: "/contact" },
];

const Navbar = () => {
  return (
    <section className="py-4 px-2 fixed z-50 w-full bg-background">
      <div className="container mx-auto">
        <nav className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8 dark:invert"
                alt="logo"
              />
              <span className="text-lg font-semibold tracking-tighter">
                1-Maktab
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.url}
                      className="px-4 py-2 text-sm font-medium hover:bg-muted rounded"
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-2">
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/register">Sign up</Link>
            </Button>
          </div>
        </nav>

        <div className="lg:hidden flex items-center justify-between">
          <Link to="/">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8 dark:invert"
              alt="logo"
            />
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="flex gap-3">
                  <Link to="/" className="flex items-center gap-2">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8 dark:invert"
                      alt="logo"
                    />
                  </Link>
                  <ModeToggle />
                </SheetTitle>
              </SheetHeader>

              <div className="p-4 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="text-md font-semibold block py-1"
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="flex flex-col gap-3">
                  <Button asChild variant="outline">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Sign up</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export { Navbar };
