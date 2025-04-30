
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, User, FileText, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { useIsMobile } from "@/hooks/use-mobile";

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

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-dark p-2" 
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`block py-2 text-base font-medium ${isActiveRoute(link.href) ? "text-brand-primary" : "text-gray-dark"}`} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full bg-brand-primary hover:bg-brand-dark">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
      
      {/* Display the tubelight navbar in the center */}
      <NavBar items={tubelightItems} />
    </header>
  );
};

export default Navbar;
