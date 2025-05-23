import { Link } from "react-router-dom";
import { ArrowRight, Check, Search, LayoutDashboard, Code, Database, Blocks } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { motion } from "framer-motion";

const Index = () => {
  const services = [{
    icon: <Search className="h-10 w-10 text-brand-primary" />,
    title: "SEO Optimization",
    description: "Boost your organic traffic and rankings with our data-driven SEO strategies."
  }, {
    icon: <LayoutDashboard className="h-10 w-10 text-brand-primary" />,
    title: "Google Ads Management",
    description: "Maximize ROI with targeted campaigns managed by certified experts."
  }, {
    icon: <Code className="h-10 w-10 text-brand-primary" />,
    title: "Website Design & Development",
    description: "Custom, mobile-responsive websites designed to convert visitors into customers."
  }, {
    icon: <Database className="h-10 w-10 text-brand-primary" />,
    title: "Custom Software & Automation",
    description: "Tailored software solutions that streamline operations and scale your business."
  }, {
    icon: <Blocks className="h-10 w-10 text-brand-primary" />,
    title: "Blockchain Data Storage",
    description: "Secure, decentralized data storage solutions with enhanced security and transparency."
  }];

  const whyChooseUs = [{
    title: "8+ Years SEO and Google Ads Experience",
    description: "We've helped businesses across multiple industries achieve sustainable growth."
  }, {
    title: "10+ Years Web Development Mastery",
    description: "Our team builds beautiful, functional websites that drive real results."
  }, {
    title: "Experts in Custom Automation",
    description: "We create bespoke software solutions that save time and reduce costs."
  }, {
    title: "Full Digital Growth Support",
    description: "From strategy to execution, we're your partner in digital success."
  }];
  const caseStudies = [{
    title: "E-commerce SEO Growth",
    description: "Increased organic traffic by 135% and sales by 86% in 6 months for an online retailer."
  }, {
    title: "Google Ads ROI for Service Business",
    description: "Generated 300% return on ad spend with targeted local service campaigns."
  }, {
    title: "Custom Software Integration",
    description: "Reduced manual processes by 75% with tailored automation software for a manufacturing client."
  }];

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };
  return <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroGeometric badge="Save Ideas Digital" title1="Grow Faster With" title2="Smart Digital Solutions" />

      {/* Services Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-light to-white opacity-70 z-0" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4 relative">
              <span className="relative inline-block">
                Our Services
                <motion.span initial={{
                width: "0%"
              }} whileInView={{
                width: "100%"
              }} transition={{
                duration: 1,
                delay: 0.5
              }} className="absolute h-1 bg-brand-accent left-0 bottom-0" />
              </span>
            </h2>
            <p className="text-gray-dark text-lg">
              Comprehensive digital solutions to help your business thrive in today's competitive market.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service, index) => <motion.div key={index} variants={itemVariants} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2" style={{
            perspective: "1000px"
          }}>
                <motion.div whileHover={{
              rotateY: 15,
              rotateX: 15,
              scale: 1.05
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }} className="relative">
                  <div className="mb-4 bg-brand-light rounded-full p-4 inline-block">
                    {service.icon}
                  </div>
                  <div className="absolute top-2 right-0 w-20 h-20 bg-brand-accent/10 rounded-full blur-2xl -z-10" />
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-dark mb-4">{service.description}</p>
                  <Link to={`/services`} className="inline-flex items-center text-brand-primary font-medium group-hover:underline">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </motion.div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="mt-12 text-center">
            <Button asChild className="bg-brand-primary hover:bg-brand-dark px-8 relative overflow-hidden group">
              <Link to="/services">
                <span className="relative z-10">Explore Our Services</span>
                <span className="absolute inset-0 bg-brand-dark scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-light relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              <span className="relative inline-block">
                Why Choose Us
                <motion.span initial={{
                width: "0%"
              }} whileInView={{
                width: "100%"
              }} transition={{
                duration: 1,
                delay: 0.5
              }} className="absolute h-1 bg-brand-primary left-0 bottom-0" />
              </span>
            </h2>
            <p className="text-gray-dark text-lg">
              We combine technical expertise with creative problem-solving to deliver results.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => <motion.div key={index} variants={itemVariants} className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 mt-1">
                  <motion.div initial={{
                scale: 0.8
              }} whileInView={{
                scale: [0.8, 1.2, 1]
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-brand-primary rounded-full p-1">
                    <Check className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
                <div>
                  <motion.h3 className="text-xl font-semibold text-brand-dark mb-2">
                    {item.title}
                  </motion.h3>
                  <p className="text-gray-dark">{item.description}</p>
                </div>
              </motion.div>)}
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="mt-12 flex justify-center">
            <div className="inline-block rounded-lg border border-gray-200 bg-white p-4 shadow-sm relative overflow-hidden group">
              <motion.div animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1]
            }} transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }} className="flex items-center gap-2 text-brand-primary relative z-10">
                <Check className="h-5 w-5" />
                <span className="text-sm font-medium">Trusted by businesses across industries</span>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-light/30 via-transparent to-brand-light/30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: "-100px"
        }} className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              <span className="relative inline-block">
                Proven Results Across 3+ Markets
                <motion.span initial={{
                width: "0%"
              }} whileInView={{
                width: "100%"
              }} transition={{
                duration: 1,
                delay: 0.5
              }} className="absolute h-1 bg-brand-secondary left-0 bottom-0" />
              </span>
            </h2>
            <p className="text-gray-dark text-lg">
              See how our solutions have helped businesses like yours achieve their goals.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          margin: "-100px"
        }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => <motion.div key={index} variants={itemVariants} whileHover={{
            scale: 1.03,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative" style={{
            transformStyle: "preserve-3d",
            perspective: "1000px"
          }}>
                <motion.div className="absolute -right-4 -top-4 bg-brand-accent/20 w-20 h-20 rounded-full blur-xl -z-10" animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }} />
                <motion.h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {study.title}
                </motion.h3>
                <p className="text-gray-dark">{study.description}</p>
                <motion.div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-primary to-brand-accent" initial={{
              width: "0%"
            }} whileInView={{
              width: "100%"
            }} transition={{
              duration: 1,
              delay: 0.2 + index * 0.1
            }} />
              </motion.div>)}
          </motion.div>

          {/* Testimonial */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.3
        }} viewport={{
          once: true
        }} className="mt-16 max-w-3xl mx-auto bg-brand-light rounded-lg p-8 border border-brand-accent/30 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-accent/30 rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="flex gap-4 items-start relative z-10">
              <motion.div animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }} transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }} className="text-4xl text-brand-primary">
                "
              </motion.div>
              <div>
                <motion.p initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                duration: 1,
                delay: 0.5
              }} className="text-gray-dark italic mb-4">Save Ideas Digital transformed our online presence completely. Their SEO strategy increased our organic traffic by 235% and their custom automation tools saved us countless hours on manual tasks. Their team was responsive, professional, and delivered real results.</motion.p>
                <motion.p initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} transition={{
                duration: 0.5,
                delay: 0.8
              }} className="text-brand-dark font-medium">Dejan Vuković - CEO of VP Law Firm</motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-primary text-white relative overflow-hidden">
        <motion.div animate={{
        y: [0, 15, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />
        <motion.div animate={{
        y: [0, -15, 0],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse"
      }} className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="container mx-auto text-center max-w-3xl relative z-10">
          <motion.h2 initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to scale your business? Let's talk!
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Save Ideas Digital and transform your digital presence with our expert team of SEO specialists, developers, and digital strategists.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} whileHover={{
          scale: 1.05
        }}>
            <Button asChild className="bg-white text-brand-primary hover:bg-gray-100 px-8 py-6 text-lg relative overflow-hidden group">
              <Link to="/contact">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 bg-brand-light scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>;
};
export default Index;
