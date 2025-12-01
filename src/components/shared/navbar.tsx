import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
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
  { title: "Maktab", url: "/" },
  { title: "Malumotlar", url: "/about" },
  { title: "Gallareya", url: "/galary" },
  { title: "bitiruvchilar", url: "/bitiruvchilar" },
  { title: "Bog'lanish", url: "/contact" },
];

const Navbar = () => {
  return (
    <section className="py-4 px-2 fixed z-50 w-full bg-background dark:bg-gray-900 border-b">
      <div className="container mx-auto">
        <nav className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                className="max-h-8 dark:invert"
                alt="logo"
              />
              <span className="text-lg font-[700] tracking-tighter">
                1-Maktab
              </span>
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      to={item.url}
                      className="px-4 py-2 text-sm font-medium rounded hover:bg-emerald-400/15 dark:text-emerald-200 text-emerald-800"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-2">
            <ModeToggle />
            <Button
              className="hover:bg-emerald-400/15"
              asChild
              variant="outline"
            >
              <Link to="/login">Login</Link>
            </Button>
            <Button className="bg-emerald-400 hover:bg-emerald-400/90" asChild>
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
              <Button
                variant="outline"
                size="icon"
                className="border-emerald-400 text-emerald-600 hover:bg-emerald-100/50 hover:text-emerald-700 transition-colors duration-300"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>

            <SheetContent className="overflow-y-auto bg-white dark:bg-gray-800 shadow-xl rounded-l-xl pt-7">
              <SheetHeader>
                <SheetTitle className="flex justify-between items-center gap-2">
                  <Link to="/" className="flex items-center">
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8 dark:invert"
                      alt="logo"
                    />
                  </Link>
                  <ModeToggle />
                </SheetTitle>
              </SheetHeader>

              <div className="p-4 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="text-md font-semibold block py-2 px-4 rounded-lg hover:bg-emerald-100/50 transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="flex flex-col gap-3 mt-4">
                  <Button
                    className="hover:bg-emerald-400/15 border border-emerald-400 text-emerald-600 dark:text-emerald-400 transition-colors duration-300"
                    asChild
                    variant="outline"
                  >
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button
                    className="bg-emerald-400 text-white hover:bg-emerald-500 shadow-lg transition-all duration-300 rounded-lg"
                    asChild
                  >
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
