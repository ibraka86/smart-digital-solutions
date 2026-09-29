import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <section className="bg-brand-light py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-7xl md:text-8xl font-bold text-brand-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Page not found
          </h1>
          <p className="text-lg text-gray-dark mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild className="bg-brand-primary hover:bg-brand-dark px-8">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;
