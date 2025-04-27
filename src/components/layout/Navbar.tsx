
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

  const navLinks = [
    { name: "Hove", href: "/" },
    { name: "Aolouct", href: "/about" },
    { name: "Sepe", href: "/services" },
    { name: "Fract", href: "/features" },
    { name: "Cntcs", href: "/contact" }
  ];

  const isActiveRoute = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="absolute top-0 w-full z-50">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-semibold text-gray-900">Save Ideas</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-base font-medium transition-colors hover:text-gray-900 ${
                isActiveRoute(link.href) ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            asChild 
            variant="outline" 
            className="border-2 rounded-full px-8"
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 p-2"
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
                className={`block py-2 text-base font-medium ${
                  isActiveRoute(link.href) ? "text-gray-900" : "text-gray-600"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="w-full rounded-full" variant="outline">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
