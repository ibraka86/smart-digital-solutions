
import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, LayoutDashboard, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SplashCursor } from "@/components/ui/splash-cursor";

const Index = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10 text-brand-primary" />,
      title: "SEO Optimization",
      description:
        "Boost your organic traffic and rankings with our data-driven SEO strategies.",
    },
    {
      icon: <LayoutDashboard className="h-10 w-10 text-brand-primary" />,
      title: "Google Ads Management",
      description:
        "Maximize ROI with targeted campaigns managed by certified experts.",
    },
    {
      icon: <Code className="h-10 w-10 text-brand-primary" />,
      title: "Website Design & Development",
      description:
        "Custom, mobile-responsive websites designed to convert visitors into customers.",
    },
    {
      icon: <Database className="h-10 w-10 text-brand-primary" />,
      title: "Custom Software & Automation",
      description:
        "Tailored software solutions that streamline operations and scale your business.",
    },
  ];

  const whyChooseUs = [
    {
      title: "5+ Years SEO and Google Ads Experience",
      description:
        "We've helped businesses across multiple industries achieve sustainable growth.",
    },
    {
      title: "7+ Years Web Development Mastery",
      description:
        "Our team builds beautiful, functional websites that drive real results.",
    },
    {
      title: "Experts in Custom Automation",
      description:
        "We create bespoke software solutions that save time and reduce costs.",
    },
    {
      title: "Full Digital Growth Support",
      description:
        "From strategy to execution, we're your partner in digital success.",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce SEO Growth",
      description:
        "Increased organic traffic by 135% and sales by 86% in 6 months for an online retailer.",
    },
    {
      title: "Google Ads ROI for Service Business",
      description:
        "Generated 300% return on ad spend with targeted local service campaigns.",
    },
    {
      title: "Custom Software Integration",
      description:
        "Reduced manual processes by 75% with tailored automation software for a manufacturing client.",
    },
  ];

  return (
    <>
      <SplashCursor 
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1024}
        DENSITY_DISSIPATION={3}
        VELOCITY_DISSIPATION={1.8}
        PRESSURE={0.12}
        CURL={2}
        SPLAT_RADIUS={0.25}
        COLOR_UPDATE_SPEED={8}
        BACK_COLOR={{ r: 0, g: 0.32, b: 0.28 }}
        TRANSPARENT={true}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-light to-white overflow-hidden min-h-[90vh] flex items-center">
        <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 tracking-tight">
              Grow Faster With Smart Digital Solutions
            </h1>
            <h2 className="text-xl md:text-2xl text-gray mb-8">
              SEO | Google Ads | Websites | Software | Automation
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-brand-primary hover:bg-brand-dark text-white px-8 py-6 text-lg"
              >
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-brand-primary text-brand-primary hover:bg-brand-light px-8 py-6 text-lg"
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Services
            </h2>
            <p className="text-gray-dark text-lg">
              Comprehensive digital solutions to help your business thrive in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-dark mb-4">{service.description}</p>
                <Link
                  to={`/services`}
                  className="inline-flex items-center text-brand-primary font-medium group-hover:underline"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-brand-primary hover:bg-brand-dark px-8"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-light">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-dark text-lg">
              We combine technical expertise with creative problem-solving to deliver results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-brand-primary rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-dark">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-block rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-brand-primary">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">Trusted by businesses across industries</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Proven Results Across 3+ Markets
            </h2>
            <p className="text-gray-dark text-lg">
              See how our solutions have helped businesses like yours achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-dark">{study.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mt-16 max-w-3xl mx-auto bg-brand-light rounded-lg p-8 border border-brand-accent/30">
            <div className="flex gap-4 items-start">
              <div className="text-4xl text-brand-primary">"</div>
              <div>
                <p className="text-gray-dark italic mb-4">
                  Save Ideas Digital transformed our online presence completely. Their SEO strategy increased our organic traffic by 135% and their custom automation tools saved us countless hours on manual tasks. Their team was responsive, professional, and delivered real results.
                </p>
                <p className="text-brand-dark font-medium">
                  - Marketing Director, E-commerce Company
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to scale your business? Let's talk!
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Save Ideas Digital and transform your digital presence with our expert team of SEO specialists, developers, and digital strategists.
          </p>
          <Button
            asChild
            className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-6 text-lg"
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Index;
