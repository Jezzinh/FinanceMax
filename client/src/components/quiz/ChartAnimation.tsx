import { useEffect, useState } from "react";

export function ChartAnimation() {
  const [chartProgress, setChartProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartProgress(25); // Animate to 25% (Week 1 position)
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
        Seu nível de organização financeira
      </h3>
      
      <div className="relative h-32 bg-gradient-to-r from-red-200 via-yellow-200 via-green-200 to-blue-200 rounded-lg mb-4 overflow-hidden">
        <div 
          className="absolute inset-0 rounded-lg transition-all duration-2000 ease-out"
          style={{
            width: `${chartProgress}%`,
            background: 'linear-gradient(90deg, #F87171 0%, #FBBF24 33%, #34D399 66%, #60A5FA 100%)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-between px-4 text-sm font-medium text-gray-700">
          <span>Desorganizado</span>
          <span>Organizado</span>
        </div>
        <div 
          className="absolute top-2 bg-white rounded-full w-8 h-8 border-2 border-primary flex items-center justify-center transition-all duration-2000 ease-out"
          style={{ left: `${chartProgress}%` }}
        >
          <div className="w-3 h-3 bg-primary rounded-full" />
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-600">
        <span className="bg-primary text-white px-2 py-1 rounded">Semana 1</span>
        <span>Você</span>
        <span className="bg-blue-400 text-white px-2 py-1 rounded">Semana 4</span>
      </div>
    </div>
  );
}
