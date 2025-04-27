
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const services = [
    {
      title: "SEO",
      subtitle: "Services",
      description: "Web jRtg lmsg, og ifour incture om tsscles taur. Mloped in yoh lopes pun services.",
    },
    {
      title: "Web",
      subtitle: "Developmenty",
      description: "Wet Firly imlg lmey, to ifour incture om tsscles taur. Mloped un yot pixes joon pou services.",
    },
    {
      title: "Why",
      subtitle: "Choose Us",
      description: "Bvesik aig inoed, ror iour battues aocteixe ittue since! hn yot ftpee bon dectvises.",
    },
    {
      title: "Contact:",
      subtitle: "Cta",
      description: "Wei itcnio ireag, eo, iour catoles tioseixe thos fiancel fif rych lôpus toun services.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0FFF4]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Save Ideas Digital
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              SEO, Google Adss, Web Development, and software antomation auttwee arotyiunt servicees services.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild className="rounded-full bg-[#90EE90] text-gray-900 hover:bg-[#7ACC7A] px-8">
                <Link to="/contact">Gactáies iWeei Wds</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-2 px-8">
                <Link to="/services">Coogoe Uist</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/322d1576-b2ab-42ce-a0b9-959c5f7da3f9.png"
              alt="Dashboard Preview"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-10 -left-10">
              <img
                src="/lovable-uploads/322d1576-b2ab-42ce-a0b9-959c5f7da3f9.png"
                alt="Google Logo"
                className="w-24 h-24 rounded-xl shadow-lg bg-white p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <h4 className="text-2xl font-bold">{service.subtitle}</h4>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
