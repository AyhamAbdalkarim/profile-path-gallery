
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Edit, Trash2, Image as ImageIcon, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("career");

  // Form states
  const [careerForm, setCareerForm] = useState({
    title: "",
    company: "",
    period: "",
    description: "",
    image: "",
    fullDescription: "",
    achievements: "",
    technologies: ""
  });

  const [volunteeringForm, setVolunteeringForm] = useState({
    title: "",
    organization: "",
    period: "",
    description: "",
    image: "",
    fullDescription: "",
    impact: "",
    activities: ""
  });

  const [certificateForm, setCertificateForm] = useState({
    title: "",
    issuer: "",
    date: "",
    description: "",
    image: "",
    fullDescription: "",
    skills: "",
    validUntil: "",
    credentialId: ""
  });

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Career item added!",
      description: "Your career entry has been successfully added to the portfolio.",
    });
    setCareerForm({
      title: "",
      company: "",
      period: "",
      description: "",
      image: "",
      fullDescription: "",
      achievements: "",
      technologies: ""
    });
  };

  const handleVolunteeringSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Volunteering item added!",
      description: "Your volunteering entry has been successfully added to the portfolio.",
    });
    setVolunteeringForm({
      title: "",
      organization: "",
      period: "",
      description: "",
      image: "",
      fullDescription: "",
      impact: "",
      activities: ""
    });
  };

  const handleCertificateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Certificate added!",
      description: "Your certificate has been successfully added to the portfolio.",
    });
    setCertificateForm({
      title: "",
      issuer: "",
      date: "",
      description: "",
      image: "",
      fullDescription: "",
      skills: "",
      validUntil: "",
      credentialId: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-800">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="text-xl font-bold text-slate-800">Admin Panel</div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Portfolio Management</h1>
          <p className="text-slate-600">Add and manage your career, volunteering, and certificate entries</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="volunteering">Volunteering</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
          </TabsList>

          {/* Career Tab */}
          <TabsContent value="career">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Career Experience
                </CardTitle>
                <CardDescription>
                  Add a new career experience to your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-title">Job Title</Label>
                      <Input
                        id="career-title"
                        value={careerForm.title}
                        onChange={(e) => setCareerForm({...careerForm, title: e.target.value})}
                        placeholder="e.g., Senior Software Engineer"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="career-company">Company</Label>
                      <Input
                        id="career-company"
                        value={careerForm.company}
                        onChange={(e) => setCareerForm({...careerForm, company: e.target.value})}
                        placeholder="e.g., Tech Company Inc."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="career-period">Time Period</Label>
                      <Input
                        id="career-period"
                        value={careerForm.period}
                        onChange={(e) => setCareerForm({...careerForm, period: e.target.value})}
                        placeholder="e.g., 2020 - Present"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="career-image">Image URL</Label>
                      <Input
                        id="career-image"
                        value={careerForm.image}
                        onChange={(e) => setCareerForm({...careerForm, image: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="career-description">Short Description</Label>
                    <Textarea
                      id="career-description"
                      value={careerForm.description}
                      onChange={(e) => setCareerForm({...careerForm, description: e.target.value})}
                      placeholder="Brief description for the card"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="career-full-description">Full Description</Label>
                    <Textarea
                      id="career-full-description"
                      value={careerForm.fullDescription}
                      onChange={(e) => setCareerForm({...careerForm, fullDescription: e.target.value})}
                      placeholder="Detailed description for the detail page"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="career-achievements">Achievements (one per line)</Label>
                    <Textarea
                      id="career-achievements"
                      value={careerForm.achievements}
                      onChange={(e) => setCareerForm({...careerForm, achievements: e.target.value})}
                      placeholder="Achievement 1&#10;Achievement 2&#10;Achievement 3"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="career-technologies">Technologies (comma separated)</Label>
                    <Input
                      id="career-technologies"
                      value={careerForm.technologies}
                      onChange={(e) => setCareerForm({...careerForm, technologies: e.target.value})}
                      placeholder="React, Node.js, TypeScript, AWS"
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Add Career Experience
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Volunteering Tab */}
          <TabsContent value="volunteering">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Volunteering Experience
                </CardTitle>
                <CardDescription>
                  Add a new volunteering experience to your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleVolunteeringSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vol-title">Role Title</Label>
                      <Input
                        id="vol-title"
                        value={volunteeringForm.title}
                        onChange={(e) => setVolunteeringForm({...volunteeringForm, title: e.target.value})}
                        placeholder="e.g., Code Mentor"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vol-organization">Organization</Label>
                      <Input
                        id="vol-organization"
                        value={volunteeringForm.organization}
                        onChange={(e) => setVolunteeringForm({...volunteeringForm, organization: e.target.value})}
                        placeholder="e.g., Tech for Good"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="vol-period">Time Period</Label>
                      <Input
                        id="vol-period"
                        value={volunteeringForm.period}
                        onChange={(e) => setVolunteeringForm({...volunteeringForm, period: e.target.value})}
                        placeholder="e.g., 2021 - Present"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="vol-image">Image URL</Label>
                      <Input
                        id="vol-image"
                        value={volunteeringForm.image}
                        onChange={(e) => setVolunteeringForm({...volunteeringForm, image: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="vol-description">Short Description</Label>
                    <Textarea
                      id="vol-description"
                      value={volunteeringForm.description}
                      onChange={(e) => setVolunteeringForm({...volunteeringForm, description: e.target.value})}
                      placeholder="Brief description for the card"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="vol-full-description">Full Description</Label>
                    <Textarea
                      id="vol-full-description"
                      value={volunteeringForm.fullDescription}
                      onChange={(e) => setVolunteeringForm({...volunteeringForm, fullDescription: e.target.value})}
                      placeholder="Detailed description for the detail page"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="vol-impact">Impact & Achievements (one per line)</Label>
                    <Textarea
                      id="vol-impact"
                      value={volunteeringForm.impact}
                      onChange={(e) => setVolunteeringForm({...volunteeringForm, impact: e.target.value})}
                      placeholder="Impact 1&#10;Impact 2&#10;Impact 3"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="vol-activities">Key Activities (one per line)</Label>
                    <Textarea
                      id="vol-activities"
                      value={volunteeringForm.activities}
                      onChange={(e) => setVolunteeringForm({...volunteeringForm, activities: e.target.value})}
                      placeholder="Activity 1&#10;Activity 2&#10;Activity 3"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Add Volunteering Experience
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Certificates Tab */}
          <TabsContent value="certificates">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  Add Certificate
                </CardTitle>
                <CardDescription>
                  Add a new certificate or certification to your portfolio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCertificateSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cert-title">Certificate Title</Label>
                      <Input
                        id="cert-title"
                        value={certificateForm.title}
                        onChange={(e) => setCertificateForm({...certificateForm, title: e.target.value})}
                        placeholder="e.g., AWS Solutions Architect"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cert-issuer">Issuer</Label>
                      <Input
                        id="cert-issuer"
                        value={certificateForm.issuer}
                        onChange={(e) => setCertificateForm({...certificateForm, issuer: e.target.value})}
                        placeholder="e.g., Amazon Web Services"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="cert-date">Issue Date</Label>
                      <Input
                        id="cert-date"
                        value={certificateForm.date}
                        onChange={(e) => setCertificateForm({...certificateForm, date: e.target.value})}
                        placeholder="e.g., 2023"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="cert-valid">Valid Until</Label>
                      <Input
                        id="cert-valid"
                        value={certificateForm.validUntil}
                        onChange={(e) => setCertificateForm({...certificateForm, validUntil: e.target.value})}
                        placeholder="e.g., 2026"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cert-image">Image URL</Label>
                      <Input
                        id="cert-image"
                        value={certificateForm.image}
                        onChange={(e) => setCertificateForm({...certificateForm, image: e.target.value})}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cert-credential">Credential ID</Label>
                    <Input
                      id="cert-credential"
                      value={certificateForm.credentialId}
                      onChange={(e) => setCertificateForm({...certificateForm, credentialId: e.target.value})}
                      placeholder="e.g., AWS-SAA-C03-2023-001"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cert-description">Short Description</Label>
                    <Textarea
                      id="cert-description"
                      value={certificateForm.description}
                      onChange={(e) => setCertificateForm({...certificateForm, description: e.target.value})}
                      placeholder="Brief description for the card"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cert-full-description">Full Description</Label>
                    <Textarea
                      id="cert-full-description"
                      value={certificateForm.fullDescription}
                      onChange={(e) => setCertificateForm({...certificateForm, fullDescription: e.target.value})}
                      placeholder="Detailed description for the detail page"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="cert-skills">Skills & Competencies (one per line)</Label>
                    <Textarea
                      id="cert-skills"
                      value={certificateForm.skills}
                      onChange={(e) => setCertificateForm({...certificateForm, skills: e.target.value})}
                      placeholder="Skill 1&#10;Skill 2&#10;Skill 3"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Add Certificate
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
