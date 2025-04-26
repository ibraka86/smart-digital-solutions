
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly explore new technologies and strategies to keep our clients ahead of the competition.",
    },
    {
      title: "Transparency",
      description:
        "We believe in clear communication and keeping our clients informed throughout every project.",
    },
    {
      title: "Excellence",
      description:
        "We're committed to delivering high-quality work that exceeds expectations and drives real results.",
    },
    {
      title: "Growth",
      description:
        "We're passionate about helping our clients grow and succeed in the digital landscape.",
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
              About Save Ideas Digital
            </h1>
            <p className="text-xl text-gray-dark">
              Combining technical expertise with creative strategies to help businesses thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-brand-light p-4 rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Team working together"
                  className="w-full h-auto rounded object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Who We Are
              </h2>
              <div className="prose max-w-none text-gray-dark">
                <p className="mb-4 text-lg">
                  Save Ideas Digital was founded by a senior SEO and developer with over 5 years experience 
                  in digital marketing and 7 years experience building websites and software.
                </p>
                <p className="mb-4">
                  We believe in combining smart ideas with powerful technology to create real business growth.
                  Our approach integrates strategic marketing with technical excellence to deliver solutions
                  that drive meaningful results.
                </p>
                <p>
                  As a full-service digital agency, we bridge the gap between marketing and development,
                  ensuring all aspects of your digital presence work together seamlessly toward your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-20 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-dark mb-8">
              "Empower businesses with smart, reliable, and scalable digital solutions."
            </p>
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-gray-dark italic">
                Our founder started Save Ideas Digital after seeing too many businesses struggle with disconnected services. 
                Our mission is to provide one complete, strategic digital solution that addresses all aspects of your online presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-dark mb-12 text-center">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-brand-light rounded-lg p-6 border border-brand-accent/20">
                <h3 className="text-xl font-semibold text-brand-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-dark">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with Save Ideas Digital to transform your digital presence and achieve sustainable growth.
          </p>
          <Button
            asChild
            className="bg-white text-brand-primary hover:bg-gray-100 px-8"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
