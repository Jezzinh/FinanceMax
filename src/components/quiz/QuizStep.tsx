import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface QuizStepProps {
  children: ReactNode;
  className?: string;
}

export function QuizStep({ children, className = "" }: QuizStepProps) {
  return (
    <Card className={`shadow-lg ${className}`}>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}