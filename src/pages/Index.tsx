
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award, User, Mail, BookUser, Contact } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [profileData] = useState({
    name: "Your Name",
    title: "Professional Title",
    bio: "Professional bio and introduction goes here. Describe your expertise and what makes you unique.",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country"
  });

  const [careerItems] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Leading development of scalable web applications",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Previous Company",
      period: "2018 - 2020",
      description: "Built responsive web applications using modern frameworks",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    }
  ]);

  const [volunteeringItems] = useState([
    {
      id: 1,
      title: "Code Mentor",
      organization: "Tech for Good",
      period: "2021 - Present",
      description: "Mentoring junior developers and organizing coding workshops",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    }
  ]);

  const [certificates] = useState([
    {
      id: 1,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification in cloud architecture",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-800">Portfolio</div>
            <div className="flex space-x-4">
              <Link to="/admin">
                <Button variant="outline" size="sm">Admin Panel</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <User className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4">{profileData.name}</h1>
          <p className="text-xl text-slate-600 mb-6">{profileData.title}</p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">{profileData.bio}</p>
          
          <div className="flex flex-wrap justify-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Contact className="w-4 h-4" />
              <span>{profileData.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Career Path</h2>
              <p className="text-slate-600">My professional journey and experiences</p>
            </div>
            <Briefcase className="w-8 h-8 text-blue-500" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="h-48 bg-cover bg-center rounded-t-lg" 
                       style={{backgroundImage: `url(${item.image})`}}>
                    <div className="h-full bg-black/20 rounded-t-lg flex items-end p-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {item.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium mb-3">
                    {item.company}
                  </CardDescription>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <Link to={`/career/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Volunteering</h2>
              <p className="text-slate-600">Contributing to the community</p>
            </div>
            <BookUser className="w-8 h-8 text-green-500" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteeringItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="h-48 bg-cover bg-center rounded-t-lg" 
                       style={{backgroundImage: `url(${item.image})`}}>
                    <div className="h-full bg-black/20 rounded-t-lg flex items-end p-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {item.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-green-600 font-medium mb-3">
                    {item.organization}
                  </CardDescription>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <Link to={`/volunteering/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">Certificates</h2>
              <p className="text-slate-600">Professional certifications and achievements</p>
            </div>
            <Certificate className="w-8 h-8 text-purple-500" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="h-48 bg-cover bg-center rounded-t-lg" 
                       style={{backgroundImage: `url(${item.image})`}}>
                    <div className="h-full bg-black/20 rounded-t-lg flex items-end p-4">
                      <Badge variant="secondary" className="bg-white/90 text-slate-800">
                        {item.date}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <CardDescription className="text-purple-600 font-medium mb-3">
                    {item.issuer}
                  </CardDescription>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <Link to={`/certificates/${item.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
          <p className="text-slate-300 mb-6">Let's connect and discuss opportunities</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>{profileData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Contact className="w-5 h-5" />
              <span>{profileData.phone}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
