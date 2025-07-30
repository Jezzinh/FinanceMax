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
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
        Seu potencial de economia
      </h3>
      
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-end justify-center space-x-3 h-32 mb-4">
          {/* Animated bars representing savings growth */}
          {[25, 40, 55, 70, 85].map((height, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-gradient-to-t from-green-500 to-green-600 rounded transition-all duration-1000 ease-out flex items-end justify-center min-w-[32px] md:min-w-[40px]"
                style={{
                  height: chartProgress > 0 ? `${height}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <span className="text-white text-xs font-bold mb-1 text-center">
                  {chartProgress > 0 && `R$${(index + 1) * 300}`}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-gray-600 mb-2">
          <span className="text-center flex-1">Mês 1</span>
          <span className="text-center flex-1">Mês 2</span>
          <span className="text-center flex-1">Mês 3</span>
          <span className="text-center flex-1">Mês 4</span>
          <span className="text-center flex-1">Mês 5</span>
        </div>
        
        <div className="flex justify-between text-xs">
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-center text-xs font-medium">
            Você está aqui
          </span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-center text-xs font-medium">
            Meta
          </span>
        </div>
      </div>
    </div>
  );
}
