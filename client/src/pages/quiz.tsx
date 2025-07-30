import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ProgressBar } from "@/components/quiz/ProgressBar";
import { QuizStep } from "@/components/quiz/QuizStep";
import { LoadingAnimation } from "@/components/quiz/LoadingAnimation";
import { ChartAnimation } from "@/components/quiz/ChartAnimation";

interface QuizData {
  age?: string;
  income?: string;
  sufficiency?: string;
  situation?: string;
  barrier?: string;
  savings?: string;
  expenses?: string[];
}

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizData, setQuizData] = useState<QuizData>({});
  const totalSteps = 11;

  // Removed quiz submission since it's only interactive

  const selectOption = (category: keyof QuizData, value: string) => {
    setQuizData(prev => ({ ...prev, [category]: value }));
    
    // Track quiz progression with Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: `Quiz Step ${currentStep}`,
        content_category: category,
        value: value
      });
    }
    
    setTimeout(() => {
      nextStep();
    }, 300);
  };

  const handleExpenseSelection = (expense: string, checked: boolean) => {
    setQuizData(prev => {
      const currentExpenses = prev.expenses || [];
      if (checked) {
        return { ...prev, expenses: [...currentExpenses, expense] };
      } else {
        return { ...prev, expenses: currentExpenses.filter(e => e !== expense) };
      }
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const redirectToApp = () => {
    // Track conversion with Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        content_name: 'FinanceMax Pro',
        content_category: 'Financial Course',
        value: 19.90,
        currency: 'BRL'
      });
    }
    
    window.location.href = 'https://financa-flex.vercel.app/';
  };

  const expenseOptions = [
    { value: "domestic", icon: "🏠", label: "Gastos domésticos" },
    { value: "shopping", icon: "🛒", label: "Compras do dia a dia" },
    { value: "transport", icon: "🚗", label: "Transporte e combustível" },
    { value: "food", icon: "🍕", label: "Alimentação e delivery" },
    { value: "education", icon: "🎓", label: "Educação e cursos" },
    { value: "clothes", icon: "👕", label: "Roupas e acessórios" },
    { value: "entertainment", icon: "🎮", label: "Entretenimento" },
    { value: "health", icon: "💊", label: "Saúde e medicamentos" },
    { value: "gifts", icon: "🎁", label: "Presentes e festas" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      {currentStep > 1 && currentStep < 10 && (
        <div className="flex items-center p-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={previousStep}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ChevronLeft className="w-6 h-6 mr-2" />
          </Button>
        </div>
      )}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Step 1 - Age Selection with Purchase Triggers */}
              {currentStep === 1 && (
                <div>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-lg mb-4 text-center animate-pulse">
                    <h2 className="text-lg font-semibold mb-1">🚨 ATENÇÃO: VAGAS LIMITADAS</h2>
                    <p className="text-sm font-medium">
                      Apenas 47 vagas restantes para o programa exclusivo!
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg mb-6 text-center">
                    <h2 className="text-lg font-semibold mb-2">🔥 DIAGNÓSTICO GRATUITO</h2>
                    <p className="text-sm opacity-90">
                      Descubra EXATAMENTE quanto dinheiro você está perdendo todo mês!
                    </p>
                    <div className="mt-2 text-xs bg-white bg-opacity-20 rounded px-2 py-1 inline-block">
                      Valor: R$ 97,00 - HOJE GRÁTIS
                    </div>
                  </div>

                  <QuizStep>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                      Selecione sua idade?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: "18-24", label: "18 a 24 anos" },
                        { value: "25-34", label: "25 a 34 anos" },
                        { value: "35-44", label: "35 a 44 anos" },
                        { value: "45+", label: "45+ anos" },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          variant="outline"
                          className="w-full p-4 h-auto text-left justify-start option-card hover:bg-green-50 hover:border-green-400"
                          onClick={() => selectOption("age", option.value)}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </QuizStep>

                  <div className="mt-4 space-y-2">
                    <div className="text-center text-sm text-gray-600">
                      <p>
                        ⚡ <span className="font-semibold text-primary">27.843 pessoas</span> já transformaram suas finanças!
                      </p>
                    </div>
                    <div className="bg-yellow-100 border border-yellow-300 rounded p-3 text-center">
                      <p className="text-sm text-yellow-800 font-medium">
                        ⏰ Esta oportunidade expira em 24 horas
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 - Income Range */}
              {currentStep === 2 && (
                <QuizStep>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Qual sua faixa de renda mensal?
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    Se não tem renda fixa, considere uma média.
                  </p>
                  <div className="space-y-3">
                    {[
                      { value: "até-3000", label: "Até R$ 3.000" },
                      { value: "3000-5000", label: "De R$ 3.000 a R$ 5.000" },
                      { value: "5000-8000", label: "De R$ 5.000 a R$ 8.000" },
                      { value: "8000-12000", label: "De R$ 8.000 a R$ 12.000" },
                      { value: "12000+", label: "Acima de R$ 12.000" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="w-full p-4 h-auto text-left justify-start option-card"
                        onClick={() => selectOption("income", option.value)}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </QuizStep>
              )}

              {/* Step 3 - Income Sufficiency */}
              {currentStep === 3 && (
                <div>
                  <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Fato:</span> 78% das pessoas que fazem este teste descobrem que estão perdendo dinheiro todo mês sem perceber!
                    </p>
                  </div>

                  <QuizStep>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                      Você considera que sua renda mensal é suficiente para viver bem?
                    </h2>
                    <div className="space-y-3">
                      {[
                        { value: "yes", icon: "👍", label: "Sim, mas nunca dinheiro sobrar" },
                        { value: "no", icon: "👎", label: "Não, preciso me organizar melhor" },
                        { value: "maybe", icon: "😕", label: "Talvez, não tenho certeza" },
                      ].map((option) => (
                        <Button
                          key={option.value}
                          variant="outline"
                          className="w-full p-4 h-auto text-left justify-start option-card"
                          onClick={() => selectOption("sufficiency", option.value)}
                        >
                          <span className="text-2xl mr-3">{option.icon}</span>
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </QuizStep>
                </div>
              )}

              {/* Step 4 - Financial Situation */}
              {currentStep === 4 && (
                <QuizStep>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    Como você se sente em relação à sua situação financeira atual?
                  </h2>
                  <div className="space-y-3">
                    {[
                      { value: "comfortable", icon: "😎", label: "Estou confortável" },
                      { value: "organized", icon: "😟", label: "Gostaria de ser organizado com meu dinheiro" },
                      { value: "struggling", icon: "😰", label: "Estou lutando com problemas financeiros" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="w-full p-4 h-auto text-left justify-start option-card"
                        onClick={() => selectOption("situation", option.value)}
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </QuizStep>
              )}

              {/* Step 5 - Financial Disorganization Impact */}
              {currentStep === 5 && (
                <QuizStep>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    A desorganização financeira é uma barreira para viver a vida que você realmente deseja?
                  </h2>
                  <div className="space-y-3">
                    {[
                      { value: "yes", icon: "👍", label: "Sim" },
                      { value: "no", icon: "👎", label: "Não" },
                      { value: "unsure", icon: "😕", label: "Hm, não tenho certeza" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="w-full p-4 h-auto text-left justify-start option-card"
                        onClick={() => selectOption("barrier", option.value)}
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </QuizStep>
              )}

              {/* Step 6 - Educational Content */}
              {currentStep === 6 && (
                <QuizStep>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                    <h2 className="text-xl font-semibold text-red-800 mb-2 text-center">
                      ⚠️ ALERTA FINANCEIRO
                    </h2>
                    <p className="text-red-700 text-center text-sm">
                      Você pode estar perdendo muito dinheiro por ano sem perceber!
                    </p>
                  </div>
                  
                  <div className="bg-red-600 text-white p-4 rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center">
                          <span className="text-red-600 font-bold text-sm">g1</span>
                        </div>
                        <span className="font-semibold">ECONOMIA</span>
                      </div>
                    </div>
                    <p className="text-sm mt-2">EDUCAÇÃO FINANCEIRA</p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-b-lg p-4 mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Três a cada quatro brasileiros apontam o dinheiro como sua maior preocupação, diz pesquisa
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Apenas 17,8% dos entrevistados afirmaram que conseguem cobrir os gastos e poupar algum 
                      dinheiro ao fim do mês. Outros 33,7% confidenciaram que os gastos são maiores que a renda mensal.
                    </p>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                      <p className="text-yellow-800 text-sm font-medium">
                        💡 <strong>Você sabia?</strong> Quem usa o método FinanceMax Pro consegue ter muito mais controle sobre seu dinheiro!
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-700 mb-2">
                      <strong>27.843 pessoas</strong> já organizaram suas finanças e venceram a ansiedade do dinheiro conosco.
                    </p>
                    <p className="font-semibold text-primary mb-4">Agora é a sua vez de ser a próxima história de sucesso!</p>
                    
                    <div className="bg-green-100 border border-green-300 rounded p-3 mb-4">
                      <p className="text-green-800 text-sm">
                        🎯 <strong>Garantia de 30 dias:</strong> Se não ficar 100% satisfeito, devolvemos todo seu dinheiro!
                      </p>
                    </div>
                    
                    <Button 
                      onClick={nextStep}
                      className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3"
                    >
                      QUERO DESCOBRIR QUANTO POSSO ECONOMIZAR
                    </Button>
                  </div>
                </QuizStep>
              )}

              {/* Step 7 - Monthly Savings */}
              {currentStep === 7 && (
                <QuizStep>
                  <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                    Quanto você consegue guardar mensalmente?
                  </h2>
                  <div className="space-y-3">
                    {[
                      { value: "nothing", icon: "😰", label: "Nada, às vezes até falta" },
                      { value: "under-500", icon: "😟", label: "Menos de R$ 500" },
                      { value: "500-1000", icon: "🙂", label: "Entre R$500 e R$ 1.000" },
                      { value: "1000-5000", icon: "😊", label: "Entre R$ 1.000 e R$ 5.000" },
                      { value: "over-5000", icon: "😎", label: "Mais de R$ 5.000" },
                    ].map((option) => (
                      <Button
                        key={option.value}
                        variant="outline"
                        className="w-full p-4 h-auto text-left justify-start option-card"
                        onClick={() => selectOption("savings", option.value)}
                      >
                        <span className="text-2xl mr-3">{option.icon}</span>
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </QuizStep>
              )}

              {/* Step 8 - Expense Categories */}
              {currentStep === 8 && (
                <QuizStep>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Em quais áreas você tem mais gastos durante o mês?
                  </h2>
                  <p className="text-gray-600 text-center mb-6 text-sm">
                    Escolha todas as opções que se aplicam
                  </p>
                  <div className="space-y-3">
                    {expenseOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center p-4 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg cursor-pointer transition-all duration-200"
                      >
                        <Checkbox
                          checked={quizData.expenses?.includes(option.value) || false}
                          onCheckedChange={(checked) => 
                            handleExpenseSelection(option.value, checked as boolean)
                          }
                          className="mr-4"
                        />
                        <span className="text-2xl mr-3">{option.icon}</span>
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                  
                  <Button
                    onClick={nextStep}
                    disabled={!quizData.expenses || quizData.expenses.length === 0}
                    className="w-full mt-6"
                  >
                    Continuar
                  </Button>
                </QuizStep>
              )}

              {/* Step 9 - Benefits Presentation */}
              {currentStep === 9 && (
                <QuizStep>
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-lg mb-4 text-center">
                    <h2 className="text-xl font-semibold mb-2">
                      🎉 PARABÉNS! Você se qualificou!
                    </h2>
                    <p className="text-sm opacity-90">
                      Com base no seu perfil, você pode economizar muito mais todo mês!
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 mb-6 text-white relative overflow-hidden">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">FinanceMax Pro</h3>
                      <p className="text-sm opacity-90">O método que vai transformar sua vida financeira</p>
                      <div className="mt-3">
                        <span className="text-xs line-through opacity-75">De R$ 84,90</span>
                        <div className="text-3xl font-bold">POR APENAS R$ 19,90</div>
                        <p className="text-xs mt-1">💳 Ou 4x de R$ 5,77</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-center text-gray-700 mb-4">
                      Com o <span className="font-semibold text-primary">FinanceMax Pro</span> você vai{" "}
                      <span className="font-semibold">fazer o dinheiro render o mês inteiro!</span>
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    {[
                      { text: "Controle total das suas finanças", savings: "Economia" },
                      { text: "Dinheiro sobrando até fim do mês", savings: "Sobra" },
                      { text: "Controle dos gastos com cartões", savings: "Controle" },
                      { text: "Junte dinheiro e realize sonhos", savings: "Sonhos" },
                      { text: "Tranquilidade e saúde financeira", savings: "Sem preço" },
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700 font-medium">{benefit.text}</span>
                        </div>
                        <span className="text-green-600 font-bold text-sm">{benefit.savings}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-red-100 border border-red-300 rounded-lg p-3 mb-4">
                    <p className="text-red-800 text-sm text-center">
                      ⏰ <strong>OFERTA LIMITADA:</strong> Preço promocional por tempo limitado!
                    </p>
                  </div>

                  <Button 
                    onClick={nextStep}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 text-lg animate-pulse"
                  >
                    VER MEU DIAGNÓSTICO COMPLETO →
                  </Button>
                </QuizStep>
              )}

              {/* Step 10 - Loading Analysis */}
              {currentStep === 10 && (
                <LoadingAnimation onComplete={nextStep} />
              )}

              {/* Step 11 - Results with Chart */}
              {currentStep === 11 && (
                <QuizStep>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-3 rounded-lg mb-4 text-center">
                    <h2 className="text-lg font-bold mb-1">🚨 DIAGNÓSTICO CONCLUÍDO</h2>
                    <p className="text-sm">Sua situação financeira precisa de ATENÇÃO IMEDIATA!</p>
                  </div>
                  
                  <ChartAnimation />

                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                    <p className="text-red-800 mb-2 font-semibold">
                      ⚠️ ALERTA: Com base nos seus resultados
                    </p>
                    <p className="text-red-700 text-sm mb-3">
                      Você está desperdiçando dinheiro sem perceber. 
                      Trabalha duro, mas o dinheiro "some" todo mês.
                    </p>
                    <div className="bg-yellow-100 border border-yellow-300 rounded p-3">
                      <p className="text-yellow-800 text-sm">
                        💰 <strong>O problema:</strong> Muito dinheiro perdido que poderia estar na sua conta!
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                    <h3 className="text-green-800 font-semibold mb-2">✅ A BOA NOTÍCIA:</h3>
                    <p className="text-green-700 text-sm mb-2">
                      Com o <strong>FinanceMax Pro</strong>, você pode reverter essa situação em apenas 30 dias!
                    </p>
                    <div className="text-center bg-green-100 rounded p-2">
                      <p className="text-green-800 font-bold">
                        RESULTADO: Muito mais controle financeiro
                      </p>
                      <p className="text-green-600 text-xs">
                        = Dinheiro sobrando todo mês!
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-3 rounded-lg mb-4 text-center animate-pulse">
                    <p className="font-bold text-sm">
                      ⏰ ÚLTIMA CHANCE: Oferta especial expira em breve
                    </p>
                  </div>

                  <Button 
                    onClick={redirectToApp}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 text-lg shadow-lg animate-bounce"
                  >
                    🚀 QUERO PARAR DE PERDER DINHEIRO AGORA!
                  </Button>

                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-600">
                      ✅ Acesso imediato • ✅ Garantia de 30 dias • ✅ Suporte VIP incluso
                    </p>
                  </div>
                </QuizStep>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
