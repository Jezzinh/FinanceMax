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
                  <div className="bg-gradient-to-r from-primary to-purple-600 text-white p-4 rounded-lg mb-6 text-center">
                    <h2 className="text-lg font-semibold mb-2">🔥 OFERTA ESPECIAL</h2>
                    <p className="text-sm opacity-90">
                      Descubra seu perfil financeiro GRATUITAMENTE e ganhe um plano personalizado!
                    </p>
                  </div>

                  <QuizStep>
                    <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                      Qual a sua idade?
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
                          className="w-full p-4 h-auto text-left justify-start option-card"
                          onClick={() => selectOption("age", option.value)}
                        >
                          {option.label}
                        </Button>
                      ))}
                    </div>
                  </QuizStep>

                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p>
                      ⚡ <span className="font-semibold text-primary">Mais de 10.000 pessoas</span> já descobriram seu perfil financeiro!
                    </p>
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
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Não deixe que a DESORGANIZAÇÃO com o Dinheiro impeça você de ter a vida que você merece!
                  </h2>
                  
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
                    <p className="text-gray-600 text-sm">
                      Apenas 17,8% dos entrevistados afirmaram que conseguem cobrir os gastos e poupar algum 
                      dinheiro ao fim do mês. Outros 33,7% confidenciaram que os gastos são maiores que a renda mensal.
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-700 mb-4">
                      Milhares de pessoas já organizaram suas finanças e venceram a ansiedade do dinheiro com a nossa ajuda.
                    </p>
                    <p className="font-semibold text-gray-800 mb-6">Agora é a sua vez.</p>
                    <Button 
                      onClick={nextStep}
                      className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3"
                    >
                      CONTINUAR
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
                  <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Organize suas finanças e veja o seu dinheiro AUMENTAR
                  </h2>
                  
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-6 mb-6 text-white relative overflow-hidden">
                    <div className="h-24 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full mx-auto mb-2"></div>
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
                      "Controle total das suas finanças",
                      "Dinheiro sobrando até fim do mês",
                      "Controle dos gastos com cartões",
                      "Junte dinheiro e realize sonhos",
                      "Tranquilidade e saúde financeira",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={nextStep}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3"
                  >
                    CONTINUAR
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    SEU PLANO PERSONALIZADO ESTÁ PRONTO!
                  </h2>
                  
                  <ChartAnimation />

                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-gray-800 mb-2">
                      <span className="font-semibold">Como base nos seus resultados:</span>{" "}
                      Você está desperdiçando dinheiro sem perceber.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Trabalha duro, mas o dinheiro "some" todo mês. Essa falta de controle está 
                      sabotando sua segurança financeira e impedindo você de conquistar seus sonhos.
                    </p>
                  </div>

                  <Button 
                    onClick={redirectToApp}
                    className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 text-lg"
                  >
                    CONTINUAR
                  </Button>
                </QuizStep>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
