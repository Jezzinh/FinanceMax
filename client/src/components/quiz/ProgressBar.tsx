interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2">
      <div 
        className="bg-secondary h-2 transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
