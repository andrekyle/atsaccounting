import { Badge } from "@/components/ui/badge";

const CourseHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-course-primary to-course-secondary">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative container mx-auto px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            Professional Development Course
          </Badge>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
            Finance Automation (AI) and Ethics
          </h1>
          <p className="text-xl lg:text-2xl mb-4 text-white/90 font-medium">
            for Afrika Tikkun
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Empower Afrika Tikkun's finance team to streamline financial operations through automation, 
              leverage AI tools responsibly, and uphold high ethical standards in managing funds and reporting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;