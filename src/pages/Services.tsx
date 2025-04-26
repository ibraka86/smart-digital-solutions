
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, LayoutDashboard, Code, Database, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "seo",
      icon: <Search className="h-12 w-12 text-brand-primary" />,
      title: "SEO Optimization",
      description:
        "Full on-site and off-site SEO services to grow organic traffic. We optimize your website content, structure, and backlink strategy to improve your search rankings and drive targeted organic traffic to your business.",
      features: [
        "Technical SEO audits & optimization",
        "Keyword research & content strategy",
        "On-page & off-page optimization",
        "Regular reporting & analytics",
        "Local SEO for better regional presence",
      ],
    },
    {
      id: "google-ads",
      icon: <LayoutDashboard className="h-12 w-12 text-brand-primary" />,
      title: "Google Ads Management",
      description:
        "High-ROI Google Ads campaigns tailored to your business goals. Our Google Ads experts create and manage targeted campaigns designed to maximize your return on investment while minimizing unnecessary ad spend.",
      features: [
        "Strategic campaign setup & optimization",
        "Custom audience targeting",
        "Ad copy & creative development",
        "Conversion tracking & analysis",
        "Budget management & ROI maximization",
      ],
    },
    {
      id: "websites",
      icon: <Code className="h-12 w-12 text-brand-primary" />,
      title: "Website Development",
      description:
        "Custom, mobile-responsive websites designed to convert. We create beautiful, functional websites that not only look great on all devices but are optimized for conversions and user experience.",
      features: [
        "Custom design & development",
        "Mobile-first responsive design",
        "SEO-friendly architecture",
        "Performance optimization",
        "Content management systems",
      ],
    },
    {
      id: "software",
      icon: <Database className="h-12 w-12 text-brand-primary" />,
      title: "Custom Software & Automation",
      description:
        "Tailored software solutions and automations to scale business operations. Our development team builds custom software applications that streamline your business processes, reduce manual work, and increase efficiency.",
      features: [
        "Business process automation",
        "Custom software development",
        "Integration with existing systems",
        "Data management solutions",
        "Workflow optimization tools",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Our Digital Services
            </h1>
            <p className="text-xl text-gray-dark mb-8 max-w-2xl">
              Comprehensive digital solutions designed to help your business grow, 
              reach more customers, and operate more efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`scroll-mt-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""} flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16`}
              >
                <div className="md:w-1/2">
                  <div className="bg-brand-light p-8 rounded-lg h-full flex items-center justify-center">
                    <div className="text-center">
                      {service.icon}
                      <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mt-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-brand-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-dark mb-6">
                    {service.description}
                  </p>
                  
                  <h4 className="text-xl font-semibold text-brand-dark mb-4">
                    What we offer:
                  </h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="bg-brand-primary rounded-full p-1">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                        </div>
                        <span className="text-gray-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="bg-brand-primary hover:bg-brand-dark">
                    <Link to="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-light py-16 md:py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-dark text-lg mb-8">
            We can create tailored digital strategies that combine our services for maximum impact.
            Let's discuss your specific business needs and goals.
          </p>
          <Button asChild className="bg-brand-primary hover:bg-brand-dark px-8">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
