"use client";

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
        Seu potencial de economia
      </h3>
      
      <div className="bg-white p-6 rounded-lg border">
        <div className="flex items-end justify-center space-x-2 h-32 mb-4">
          {/* Animated bars representing savings growth */}
          {[20, 35, 50, 70, 85].map((height, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-green-400 to-green-600 rounded-t transition-all duration-1000 ease-out flex items-end justify-center"
              style={{
                width: '40px',
                height: chartProgress > 0 ? `${height}%` : '0%',
                transitionDelay: `${index * 200}ms`
              }}
            >
              <span className="text-white text-xs font-semibold mb-1">
                {chartProgress > 0 && `R$${(index + 1) * 200}`}
              </span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between text-xs text-gray-600 px-2">
          <span className="bg-red-500 text-white px-2 py-1 rounded text-center">
            Você está aqui
          </span>
          <span className="text-center">Mês 2</span>
          <span className="text-center">Mês 3</span>
          <span className="text-center">Mês 4</span>
          <span className="bg-green-500 text-white px-2 py-1 rounded text-center">
            Meta
          </span>
        </div>
      </div>
    </div>
  );
}