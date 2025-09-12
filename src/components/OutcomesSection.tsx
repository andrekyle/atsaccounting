import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, Shield, Users } from "lucide-react";

const OutcomesSection = () => {
  const outcomes = [
    {
      icon: Target,
      title: "Streamlined Operations",
      description: "Reduce manual workload with automated finance processes"
    },
    {
      icon: TrendingUp,
      title: "Enhanced Accuracy",
      description: "Improve reporting accuracy and transparency for stakeholders"
    },
    {
      icon: Shield,
      title: "Stronger Compliance",
      description: "Implement ethical practices in fund management and reporting"
    },
    {
      icon: Users,
      title: "Team Confidence",
      description: "Build confidence in using AI tools responsibly and strategically"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Key Outcomes for Afrika Tikkun
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your finance operations with responsible AI implementation and ethical best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="text-center border-0 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-course-primary/10 mb-4">
                  <outcome.icon className="h-6 w-6 text-course-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {outcome.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {outcome.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;