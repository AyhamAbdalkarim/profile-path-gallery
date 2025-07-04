
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookUser } from "lucide-react";

const VolunteeringDetail = () => {
  const { id } = useParams();
  
  const [volunteeringItems] = useState([
    {
      id: 1,
      title: "Code Mentor",
      organization: "Tech for Good",
      period: "2021 - Present",
      description: "Mentoring junior developers and organizing coding workshops",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      fullDescription: "As a volunteer code mentor, I dedicate my time to helping aspiring developers learn programming fundamentals and advance their careers. I organize weekly workshops, provide one-on-one mentoring sessions, and contribute to open-source educational resources.",
      impact: [
        "Mentored over 50 junior developers",
        "Organized 20+ coding workshops",
        "Helped 15 mentees land their first tech jobs",
        "Created educational content viewed by 1000+ people"
      ],
      activities: ["Weekly mentoring sessions", "Workshop organization", "Curriculum development", "Career guidance"]
    }
  ]);

  const item = volunteeringItems.find(item => item.id === parseInt(id || "1"));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Volunteering item not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <BookUser className="w-5 h-5 text-green-500" />
              <span className="font-medium">Volunteering Details</span>
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
                <p className="text-xl opacity-90">{item.organization}</p>
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
                <CardTitle>About This Role</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Impact & Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {item.impact.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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
                <CardTitle>Key Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {item.activities.map((activity, index) => (
                    <Badge key={index} variant="outline" className="text-sm block text-center">
                      {activity}
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

export default VolunteeringDetail;
