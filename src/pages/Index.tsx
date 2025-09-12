import Navigation from "@/components/Navigation";
import CourseHeader from "@/components/CourseHeader";
import ModuleCard from "@/components/ModuleCard";
import CourseDetails from "@/components/CourseDetails";
import OutcomesSection from "@/components/OutcomesSection";
import Footer from "@/components/Footer";
import { courseModules } from "@/data/courseModules";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <main className="flex-grow">
        <div id="overview">
          <CourseHeader />
        </div>
        
        <section id="modules" className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Course Modules
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive 7-module journey through finance automation, AI implementation, and ethical practices
              </p>
            </div>
          
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {courseModules.map((module) => (
                <ModuleCard
                  key={module.moduleNumber}
                  moduleNumber={module.moduleNumber}
                  title={module.title}
                  description={module.description}
                  topics={module.topics}
                  isCompleted={module.moduleNumber <= 5}
                />
              ))}
            </div>
          </div>
        </section>

        <CourseDetails />
        
        <div id="outcomes">
          <OutcomesSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;