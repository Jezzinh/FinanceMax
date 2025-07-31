"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const analysisSteps = [
    "Analisando suas respostas",
    "Calculando seu potencial de economia", 
    "Identificando suas prioridades",
    "Preparando sua solução personalizada"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Complete analysis steps based on progress
        if (newProgress >= 25 && !completedSteps.includes(0)) {
          setCompletedSteps(prev => [...prev, 0]);
        }
        if (newProgress >= 50 && !completedSteps.includes(1)) {
          setCompletedSteps(prev => [...prev, 1]);
        }
        if (newProgress >= 75 && !completedSteps.includes(2)) {
          setCompletedSteps(prev => [...prev, 2]);
        }
        if (newProgress >= 100 && !completedSteps.includes(3)) {
          setCompletedSteps(prev => [...prev, 3]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete, completedSteps]);

  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <div className="relative w-32 h-32 mx-auto mb-8">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
          <circle 
            cx="60" 
            cy="60" 
            r="50" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="none" 
            className="text-gray-200"
          />
          <circle 
            cx="60" 
            cy="60" 
            r="50" 
            stroke="currentColor" 
            strokeWidth="8" 
            fill="none" 
            className="text-primary" 
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transition: 'stroke-dashoffset 0.5s ease-in-out'
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">{progress}%</span>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Analisando seu perfil financeiro...
      </h2>

      <div className="space-y-4 text-left max-w-sm mx-auto">
        {analysisSteps.map((step, index) => (
          <div key={index} className="flex items-center text-gray-600">
            <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-300 ${
              completedSteps.includes(index)
                ? 'border-green-500 bg-green-500'
                : 'border-gray-300'
            }`}>
              {completedSteps.includes(index) && (
                <Check className="w-3 h-3 text-white" />
              )}
            </div>
            <span className={completedSteps.includes(index) ? 'text-gray-800' : 'text-gray-600'}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}