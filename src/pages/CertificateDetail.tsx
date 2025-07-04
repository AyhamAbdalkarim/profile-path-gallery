
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Award } from "lucide-react";

const CertificateDetail = () => {
  const { id } = useParams();
  
  const [certificates] = useState([
    {
      id: 1,
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional certification in cloud architecture",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      fullDescription: "This certification validates expertise in designing distributed systems on AWS. It covers architectural best practices, security, cost optimization, and operational excellence in cloud environments.",
      skills: [
        "Cloud Architecture Design",
        "AWS Services Implementation",
        "Security Best Practices",
        "Cost Optimization Strategies",
        "High Availability Solutions",
        "Disaster Recovery Planning"
      ],
      validUntil: "2026",
      credentialId: "AWS-SAA-C03-2023-001"
    }
  ]);

  const item = certificates.find(item => item.id === parseInt(id || "1"));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Certificate not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="font-medium">Certificate Details</span>
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
                  {item.date}
                </Badge>
                <h1 className="text-4xl font-bold mb-2">{item.title}</h1>
                <p className="text-xl opacity-90">{item.issuer}</p>
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
                <CardTitle>About This Certification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">
                  {item.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skills & Competencies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-3">
                  {item.skills.map((skill, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Certificate Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500">Valid Until</p>
                  <p className="font-medium">{item.validUntil}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Credential ID</p>
                  <p className="font-medium text-sm">{item.credentialId}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Issued By</p>
                  <p className="font-medium">{item.issuer}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;
