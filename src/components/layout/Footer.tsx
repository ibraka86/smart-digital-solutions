import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-light">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/17100480-ffd8-4fe2-8482-4baeb50fdefa.png" 
                alt="Save Ideas Digital Logo" 
                className="h-14"
              />
            </Link>
            <p className="text-gray-dark max-w-xs">
              Full-service digital solutions company specializing in SEO, Google Ads, 
              website development, software creation, and automation systems.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-dark">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-dark hover:text-brand-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-dark">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services#seo" className="text-gray-dark hover:text-brand-primary transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link to="/services#google-ads" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Google Ads Management
                </Link>
              </li>
              <li>
                <Link to="/services#websites" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services#software" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Custom Software & Automation
                </Link>
              </li>
              <li>
                <Link to="/services#blockchain" className="text-gray-dark hover:text-brand-primary transition-colors">
                  Blockchain Data Storage
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-brand-dark">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-brand-primary" />
                <a href="mailto:info@saveideasdigital.com" className="text-gray-dark hover:text-brand-primary transition-colors">
                  info@saveideasdigital.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-brand-primary" />
                <a href="tel:+61435877989" className="text-gray-dark hover:text-brand-primary transition-colors">
                  (+61) 435 877 989
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-brand-primary" />
                <a href="https://saveideasdigital.com" className="text-gray-dark hover:text-brand-primary transition-colors">
                  saveideasdigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-dark">
            © {new Date().getFullYear()} Save Ideas Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
