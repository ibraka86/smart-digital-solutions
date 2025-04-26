
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/ui/ContactForm";
import { Mail, Phone, Globe } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-light py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Let's Start Your Project
            </h1>
            <p className="text-xl text-gray-dark">
              Reach out to discuss how we can help your business grow with our digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-dark mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Contact Information
              </h2>
              <p className="text-gray-dark mb-8">
                Prefer to reach out directly? Use the contact information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-full">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark">Email</h3>
                    <a href="mailto:info@saveideasdigital.com" className="text-gray-dark hover:text-brand-primary transition-colors">
                      info@saveideasdigital.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-full">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark">Phone</h3>
                    <a href="tel:+11234567890" className="text-gray-dark hover:text-brand-primary transition-colors">
                      (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-brand-light p-3 rounded-full">
                    <Globe className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark">Website</h3>
                    <a href="https://saveideasdigital.com" className="text-gray-dark hover:text-brand-primary transition-colors">
                      saveideasdigital.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-gray-light rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  Business Hours
                </h3>
                <p className="text-gray-dark mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-dark">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
