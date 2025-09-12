import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award } from "lucide-react";

const CourseDetails = () => {
  const details = [
    {
      icon: Calendar,
      label: "Duration",
      value: "7 Weeks",
      description: "One module per week"
    },
    {
      icon: Clock,
      label: "Time Commitment",
      value: "3-5 Hours",
      description: "Per module"
    },
    {
      icon: Users,
      label: "Target Audience",
      value: "Finance Team",
      description: "Afrika Tikkun staff"
    },
    {
      icon: Award,
      label: "Certification",
      value: "Certificate",
      description: "Upon completion"
    }
  ];

  const prerequisites = [
    "Basic understanding of finance operations",
    "Familiarity with financial reporting",
    "Access to computer and internet",
    "Commitment to attend all sessions"
  ];

  return (
    <section id="timeline" className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Course Details & Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about the course structure and requirements
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Course Overview */}
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Course Overview</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-course-primary/10 rounded-full flex items-center justify-center">
                      <detail.icon className="h-5 w-5 text-course-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{detail.label}</p>
                      <p className="text-course-primary font-bold">{detail.value}</p>
                      <p className="text-sm text-muted-foreground">{detail.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card className="border-0 bg-white/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Prerequisites</h3>
              <div className="space-y-4">
                {prerequisites.map((prerequisite, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-course-secondary mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{prerequisite}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Badge variant="outline" className="bg-course-accent/20 text-course-neutral border-course-accent">
                  No prior AI experience required
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Path */}
        <Card className="border-0 bg-gradient-to-br from-white to-muted/50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Learning Journey</h3>
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gradient-to-b from-course-primary to-course-secondary"></div>
              <div className="space-y-8">
                {[
                  "Week 1-2: Foundation & Applications",
                  "Week 3-4: Ethics & Practical Tools", 
                  "Week 5-6: Risk Management & Strategy",
                  "Week 7: Capstone Project & Implementation"
                ].map((phase, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-course-primary rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                      {index + 1}
                    </div>
                    <p className="text-lg font-medium text-foreground">{phase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CourseDetails;