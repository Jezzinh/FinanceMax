# Quiz Financeiro - FinanceMax Pro

Uma aplicação completa de quiz financeiro que guia os usuários através de uma experiência interativa multi-step, integrando insights financeiros detalhados com design responsivo e elegante.

## 🚀 Deploy no Vercel

Este projeto foi refatorado especificamente para ser compatível com Vercel. Para fazer o deploy:

1. **Faça fork deste repositório**
2. **Conecte ao Vercel:**
   - Vá para [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Importe este repositório
   - Configure as variáveis de ambiente (opcional)

3. **Variáveis de Ambiente (Opcional):**
   ```
   FACEBOOK_PIXEL_ID=seu_pixel_id_aqui
   ```

4. **Deploy automático:** O Vercel detectará automaticamente Next.js e fará o deploy

## 🛠️ Tecnologias Utilizadas

- **Framework:** Next.js 15 com App Router
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Componentes:** Radix UI primitives
- **Animações:** Framer Motion
- **Build:** Next.js build system (otimizado para Vercel)
- **Deploy:** Vercel (configuração automática)

## 📋 Características Principais

### ✅ Quiz Interativo Multi-Step
- 11 etapas de perguntas personalizadas
- Animações suaves entre etapas
- Barra de progresso visual
- Navegação intuitiva (voltar/avançar)

### ✅ Design Responsivo
- Mobile-first approach
- Breakpoints otimizados para todos dispositivos
- Interface adaptável (mobile, tablet, desktop)
- Componentes que se ajustam automaticamente

### ✅ Animações Profissionais
- Transições suaves com Framer Motion
- Loading animations personalizadas
- Gráficos animados de economia
- Efeitos hover e click

### ✅ Página de Vendas Integrada
- Sales page completa integrada na step 11
- Multiple call-to-actions otimizados
- Seções persuasivas (recursos, depoimentos, garantia)
- Pricing display com desconto

### ✅ Tracking e Analytics
- Facebook Pixel integrado
- Eventos de Lead e Purchase
- Tracking de progressão do quiz
- Otimizado para conversão

### ✅ Otimizado para SEO
- Meta tags otimizadas
- Open Graph configurado
- Semantic HTML structure
- Performance otimizada

## 🎯 Funcionalidades do Quiz

1. **Situação Financeira Atual** - Avaliação do estado financeiro
2. **Suficiência da Renda** - Análise de adequação da renda
3. **Faixa de Renda** - Categorização por renda mensal
4. **Barreira Financeira** - Identificação de obstáculos
5. **Conteúdo Educacional** - Informações valiosas sobre finanças
6. **Capacidade de Poupança** - Avaliação de economia mensal
7. **Categorias de Gastos** - Identificação de áreas de despesa
8. **Apresentação de Benefícios** - Proposta de valor do produto
9. **Animação de Carregamento** - Processamento dos dados
10. **Resultados com Gráficos** - Diagnóstico visual personalizado
11. **Página de Vendas** - Oferta completa do FinanceMax Pro

## 🔧 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start
```

O aplicativo estará disponível em `http://localhost:3000`

## 📱 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais e CSS variables
│   ├── layout.tsx       # Layout root com Facebook Pixel
│   └── page.tsx         # Página principal do quiz
├── components/
│   ├── ui/              # Componentes base do shadcn/ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── checkbox.tsx
│   │   └── progress.tsx
│   └── quiz/            # Componentes específicos do quiz
│       ├── ChartAnimation.tsx
│       ├── LoadingAnimation.tsx
│       ├── ProgressBar.tsx
│       └── QuizStep.tsx
└── lib/
    └── utils.ts         # Utilitários (cn function)
```

## 💡 Características Técnicas

### Performance
- **Next.js 15:** Última versão com otimizações avançadas
- **App Router:** Melhor performance e experiência do usuário
- **Code Splitting:** Carregamento otimizado por componente
- **Image Optimization:** Otimização automática de imagens

### Compatibilidade Vercel
- **Configuração automática:** `vercel.json` configurado
- **Build otimizado:** Next.js build system
- **Deploy automático:** Push-to-deploy workflow
- **Edge Runtime:** Baixa latência global

### Acessibilidade
- **Radix UI:** Componentes acessíveis por padrão
- **Keyboard Navigation:** Navegação completa por teclado
- **Screen Reader:** Compatível com leitores de tela
- **ARIA Labels:** Labels semânticos apropriados

## 🎨 Design System

- **Colors:** Paleta consistente com CSS variables
- **Typography:** Hierarchy tipográfica clara
- **Spacing:** Sistema de espaçamento Tailwind
- **Components:** Componentes reutilizáveis e modulares

## 📊 Conversão e Marketing

- **Psychological Triggers:** Escassez, urgência, prova social
- **Multiple CTAs:** Diversos pontos de conversão
- **Value Proposition:** Benefícios claramente apresentados
- **Trust Signals:** Garantias e depoimentos

## 🔒 Características de Segurança

- **TypeScript:** Type safety em todo o código
- **Next.js Security:** Headers de segurança automáticos
- **Environment Variables:** Configuração segura de variáveis
- **No Backend Dependencies:** Aplicação puramente frontend

## 🌐 Compatibilidade

- **Browsers:** Todos os browsers modernos (Chrome, Firefox, Safari, Edge)
- **Mobile:** iOS Safari, Chrome Mobile, Samsung Internet
- **Responsive:** 320px - ∞ breakpoints
- **Performance:** Core Web Vitals otimizados

---

## 🚀 Deploy Rápido

1. **Fork este repositório**
2. **Vá para vercel.com**
3. **Clique "New Project"**
4. **Importe o repositório**
5. **Deploy!** ✨

Seu quiz estará no ar em menos de 2 minutos!

---

*Desenvolvido especificamente para máxima compatibilidade com Vercel e performance otimizada.*