import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "Services",
    href: "/services"
  }, {
    name: "About",
    href: "/about"
  }, {
    name: "Contact",
    href: "/contact"
  }];

  // Check if the current route matches the link
  const isActiveRoute = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };
  return <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img alt="Save Ideas Digital Logo" src="/lovable-uploads/3edd8dd3-d399-4350-b098-6e35fa187569.png" className="h-12 md:h-14 object-none" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-base font-medium transition-colors hover:text-brand-primary ${isActiveRoute(link.href) ? "text-brand-primary" : "text-gray-dark"}`}>
              {link.name}
            </Link>)}
          <Button asChild className="bg-brand-primary hover:bg-brand-dark">
            <Link to="/contact">Get Started</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-dark p-2" aria-label="Toggle Menu">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map(link => <Link key={link.name} to={link.href} className={`block py-2 text-base font-medium ${isActiveRoute(link.href) ? "text-brand-primary" : "text-gray-dark"}`} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </Link>)}
            <Button asChild className="w-full bg-brand-primary hover:bg-brand-dark">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>}
    </header>;
};
export default Navbar;