
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home
    }, 
    {
      name: "Services",
      href: "/services",
      icon: Briefcase
    }, 
    {
      name: "About",
      href: "/about",
      icon: User
    }, 
    {
      name: "Contact",
      href: "/contact",
      icon: FileText
    }
  ];

  // Check if the current route matches the link
  const isActiveRoute = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  // Format navLinks for the tubelight navbar
  const tubelightItems = navLinks.map(link => ({
    name: link.name,
    url: link.href,
    icon: link.icon
  }));

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            alt="Save Ideas Digital Logo" 
            src="/lovable-uploads/17100480-ffd8-4fe2-8482-4baeb50fdefa.png" 
            className="h-12 md:h-14 object-contain"
          />
        </Link>

        {/* Mobile Menu Button - Use Sheet/Drawer for mobile */}
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[80%] sm:max-w-sm">
              <div className="mt-8 flex flex-col gap-4">
                {navLinks.map(link => (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    className={`flex items-center gap-2 py-2 text-base font-medium ${isActiveRoute(link.href) ? "text-brand-primary" : "text-gray-dark"}`}
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 bg-brand-primary hover:bg-brand-dark">
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="hidden md:block">
            <Button asChild className="bg-brand-primary hover:bg-brand-dark">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
      
      {/* Display the tubelight navbar in the center */}
      {!isMobile && <NavBar items={tubelightItems} />}
    </header>
  );
};

export default Navbar;
