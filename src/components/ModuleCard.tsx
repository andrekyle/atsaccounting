import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, BookOpen } from "lucide-react";

interface ModuleCardProps {
  moduleNumber: number;
  title: string;
  description: string;
  topics: Array<string | { text: string; animated?: boolean; animatedParts?: any }>;
  duration?: string;
  isCompleted?: boolean;
}

const ModuleCard = ({ 
  moduleNumber, 
  title, 
  description, 
  topics, 
  duration = "3-5 hours",
  isCompleted = false 
}: ModuleCardProps) => {
  return (
    <Card className="h-full border-0 bg-gradient-to-br from-white to-muted/30">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-course-primary text-white border-course-primary">
            Module {moduleNumber}
          </Badge>
          <div className="flex items-center gap-2">
            {isCompleted && <CheckCircle className="h-5 w-5 text-course-secondary" />}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {duration}
            </div>
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-foreground leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <BookOpen className="h-4 w-4 text-course-primary" />
            Key Topics:
          </div>
          <ul className="space-y-2">
            {topics.map((topic, index) => {
              // Handle both string topics and object topics with {text} property
              const topicText = typeof topic === 'string' ? topic : (topic as any).text || '';
              return (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-course-secondary mt-2 flex-shrink-0" />
                  {topicText}
                </li>
              );
            })}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;