
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Briefcase } from "lucide-react";

const CareerDetail = () => {
  const { id } = useParams();
  
  const [careerItems] = useState([
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Leading development of scalable web applications",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      fullDescription: "As a Senior Software Engineer, I lead a team of 5 developers in creating innovative web applications. My responsibilities include architectural decisions, code reviews, mentoring junior developers, and ensuring best practices are followed throughout the development lifecycle.",
      achievements: [
        "Increased application performance by 40%",
        "Led migration to microservices architecture",
        "Mentored 8 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Previous Company",
      period: "2018 - 2020",
      description: "Built responsive web applications using modern frameworks",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      fullDescription: "Developed and maintained multiple web applications serving over 10,000 users. Worked closely with design team to implement pixel-perfect UI/UX and collaborated with backend team to integrate RESTful APIs.",
      achievements: [
        "Delivered 15+ projects on time and within budget",
        "Reduced bug reports by 35% through improved testing",
        "Implemented responsive design increasing mobile usage by 50%",
        "Optimized database queries improving load times by 25%"
      ],
      technologies: ["JavaScript", "React", "Python", "Django", "PostgreSQL", "Git"]
    }
  ]);

  const item = careerItems.find(item => item.id === parseInt(id || "1"));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Career item not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Career Details</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="h-64 bg-cover bg-center rounded-xl mb-8" 
               style={{backgroundImage: `url(${item.image})`}}>
            <div className="h-full bg-black/40 rounded-xl flex items-end p-8">
              <div className="text-white">
                <Badge variant="secondary" className="mb-4 bg-white/90 text-slate-800">
                  {item.period}
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
                <p className="text-xl opacity-90">{item.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDetail;
