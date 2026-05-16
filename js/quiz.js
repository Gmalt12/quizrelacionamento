const CHECKOUT_URL = "/registration";

const steps = [
  {
    id: "age",
    type: "single",
    title: "COMO <span class='blue'>FALAR COM UMA MULHER</span>",
    subtitle: "DE ACORDO COM A SUA IDADE",
    layout: "cards",
    hideLabels: true,
    options: [
      { text: "Idade: 18-34", image: "assets/age_18_34.jpg", value: "18-34" },
      { text: "Idade: 35-44", image: "assets/age_35_44.jpg", value: "35-44" },
      { text: "Idade: 45-54", image: "assets/age_45_54.jpg", value: "45-54" },
      { text: "Idade: 55+", image: "assets/age_55_plus.jpg", value: "55+" }
    ]
  },
  {
    id: "status",
    type: "single",
    title: "Qual é o seu status de relacionamento atual?",
    options: [
      { text: "Solteiro", image: "prints-quiz/02.png", value: "single" },
      { text: "Em um relacionamento", image: "prints-quiz/02.png", value: "in_relationship" },
      { text: "É complicado", value: "complicated" }
    ]
  },
  {
    id: "relationship_detail",
    type: "single",
    title: "O que melhor descreve seu relacionamento?",
    dynamicTitle: (answers) => answers.status === 'single' ? "O que melhor descreve seu relacionamento anterior?" : "O que melhor descreve seu relacionamento atual?",
    options: (answers) => answers.status === 'single' ? [
      { text: "Relacionamento sério" },
      { text: "Casual" },
      { text: "Divórcio" },
      { text: "Nunca tive um" },
      { text: "Outro" }
    ] : [
      { text: "Relacionamento sério" },
      { text: "Casual" },
      { text: "Casamento" },
      { text: "É complicado" },
      { text: "Outro" }
    ]
  },
  {
    id: "children",
    type: "single",
    title: "Você tem filhos?",
    layout: "cards",
    options: [
      { text: "Sim", icon: "✅", value: "yes" },
      { text: "Não", icon: "❌", value: "no" }
    ]
  },
  {
    id: "splash_stats",
    type: "splash",
    title: "Você está exatamente onde precisa estar!",
    rating: "4.8",
    content: (answers) => {
        const age = answers.age || "35-44";
        return `<strong>Homens com ${age} anos</strong> representam 26% da nossa comunidade — eles já estão usando nossas ferramentas para conseguir respostas, despertar interesse e se sentir seguros com mulheres.`;
    },
    image: "assets/premium_men.jpg",
    btnText: "Continuar"
  },
  {
    id: "personality",
    type: "single",
    title: "Como você se descreveria?",
    options: [
      { text: "Introvertido", emoji: "😔" },
      { text: "Extrovertido", emoji: "😃" },
      { text: "Ambivertido (mistura dos dois)", emoji: "🤔" },
      { text: "Não tenho certeza", emoji: "🧐" }
    ]
  },
  {
    id: "ignored",
    type: "single",
    title: "Você já foi ignorado por alguém que gostava?",
    layout: "cards",
    options: [
      { text: "Sim", icon: "✅" },
      { text: "Não", icon: "❌" }
    ]
  },
  {
    id: "overthinking",
    type: "single",
    title: "Você costuma pensar demais no que escrever ou como responder?",
    options: [
      { text: "Sim, quase sempre" },
      { text: "Às vezes" },
      { text: "Raramente" },
      { text: "De jeito nenhum" }
    ]
  },
  {
    id: "comfort",
    type: "single",
    title: "Você se sente à vontade conversando com mulheres?",
    layout: "cards",
    options: [
      { text: "Sim", icon: "✅" },
      { text: "Não", icon: "❌" }
    ]
  },
  {
    id: "initiative",
    type: "single",
    title: "O que parece mais natural para você nos relacionamentos?",
    options: [
      { text: "Gosto de tomar a iniciativa" },
      { text: "Prefiro quando ela dá o primeiro passo" },
      { text: "Quero que seja algo mútuo" },
      { text: "Ainda não sei" }
    ]
  },
  {
    id: "blame",
    type: "single",
    title: "Quem você geralmente culpa após um término?",
    options: [
      { text: "A mim mesmo" },
      { text: "Minha parceira" },
      { text: "Depende da situação" },
      { text: "Não tenho certeza" }
    ]
  },
  {
    id: "improvement",
    type: "multi",
    title: "No que você gostaria de melhorar?",
    options: [
      { text: "Iniciar ou manter conversas" },
      { text: "Flertar de forma natural" },
      { text: "Demonstrar interesse com clareza" },
      { text: "Ler os sinais dela" },
      { text: "Ter mais confiança" },
      { text: "Outro" }
    ],
    btnText: "Continuar"
  },
  {
    id: "splash_coach",
    type: "splash",
    title: "Você não está sozinho nisso!",
    content: "Estamos aqui para te apoiar<br><br>“No Melto, passamos mais de 3 anos descobrindo o que realmente constrói conexão — e como liderar com clareza e inteligência emocional”<br><br>Daniel K., Coach Principal",
    image: "prints-quiz/13.jpeg",
    btnText: "Continuar"
  },
  {
    id: "warning",
    type: "splash",
    title: "Um aviso rápido",
    content: "As próximas perguntas podem explorar temas pessoais sobre emoções, confiança e experiências passadas em relacionamentos.<br><br>Você pode escolher responder ou pular — a decisão é completamente sua.",
    icon: "🧠",
    btnText: "Continuar",
    skipText: "Pular"
  },
  {
    id: "scale_feelings",
    type: "scale",
    title: "É difícil para mim falar sobre sentimentos por mensagem",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_import",
    type: "scale",
    title: "Muitas vezes sinto que me importo mais do que ela",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_rejection",
    type: "scale",
    title: "Tenho dificuldade em lidar com a rejeição",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_honesty",
    type: "scale",
    title: "Fico preocupado que ser honesto demais vai afastá-la",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_anxiety",
    type: "scale",
    title: "Costumo esperar para responder para não parecer ansioso demais",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_understanding",
    type: "scale",
    title: "Geralmente percebo o que ela está sentindo ou tentando dizer",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_vibe",
    type: "scale",
    title: "É difícil para mim manter um clima descontraído no chat",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "scale_interest",
    type: "scale",
    title: "Não sei bem como manter o interesse dela por mensagem",
    subtitle: "A afirmação acima descreve você?",
    minLabel: "Discordo totalmente",
    maxLabel: "Concordo totalmente"
  },
  {
    id: "splash_comparison",
    type: "splash",
    title: "Você é reflexivo – mas fica travado pensando demais",
    content: "Lose Get te ajuda a dizer a coisa certa, manter a energia viva e entendê-la — sem ficar na dúvida o tempo todo.",
    image: "prints-quiz/23.jpeg",
    btnText: "Continuar"
  },
  {
    id: "journey",
    type: "single",
    title: "onde você está agora na sua jornada amorosa?",
    options: [
      { text: "Interessado em alguém", emoji: "😍" },
      { text: "Tentando melhorar meus resultados", emoji: "😃" },
      { text: "Procurando algo sério", emoji: "😊" },
      { text: "Ainda não sei", emoji: "🤔" }
    ]
  },
  {
    id: "need_change",
    type: "single",
    title: "Você sente necessidade de mudança na sua vida amorosa?",
    layout: "cards",
    options: [
      { text: "Sim", icon: "✅" },
      { text: "Não", icon: "❌" }
    ]
  },
  {
    id: "challenges",
    type: "multi",
    title: "Quais desafios você enfrenta na sua vida amorosa agora?",
    options: [
      { text: "Zona de amizade" },
      { text: "Falta de confiança" },
      { text: "Interpretar sinais errado" },
      { text: "Conversas constrangedoras" },
      { text: "Fico sendo ignorado" },
      { text: "Todos eles" }
    ],
    btnText: "Continuar"
  },
  {
    id: "importance",
    type: "slider",
    title: "Quão importante é melhorar sua vida amorosa agora?",
    subtitle: "Por favor, escolha o nível de importância",
    minLabel: "Nada importante de jeito nenhum",
    maxLabel: "Extremamente importante",
    btnText: "Continuar"
  },
  {
    id: "tried_before",
    type: "multi",
    title: "Você já tentou alguma das opções abaixo antes?",
    options: [
      { text: "Coaching ou terapia" },
      { text: "Cursos de namoro" },
      { text: "Apps de wingman com IA" },
      { text: "Reddit ou YouTube" },
      { text: "Nenhuma das anteriores" }
    ],
    btnText: "Continuar"
  },
  {
    id: "splash_final",
    type: "splash",
    title: "obrigado por ser honesto!",
    content: "Sabemos que se abrir nem sempre é fácil, mas os resultados vão valer a pena. Só mais algumas perguntas e seu plano estará pronto!",
    image: "prints-quiz/29.jpeg",
    btnText: "Continuar"
  },
  {
    id: "invest_time",
    type: "single",
    title: "Quanto tempo você consegue investir por dia?",
    options: [
      { text: "Menos de 5 min" },
      { text: "5-10 min" },
      { text: "10-30 min" },
      { text: "Mais de 30 min" },
      { text: "Ainda não sei" }
    ]
  },
  { id: "theme_1", type: "single", title: "Este tema parece interessante para você?", content: "Texting Primeiro: O Guia Definitivo", image: "assets/theme_1.jpg", options: [{text: "Sim", icon: "✅"}, {text: "Não", icon: "❌"}], layout: "cards" },
  { id: "theme_2", type: "single", title: "Este tema parece interessante para você?", content: "A Arte de Começar e Manter o Contato", image: "assets/theme_2.jpg", options: [{text: "Sim", icon: "✅"}, {text: "Não", icon: "❌"}], layout: "cards" },
  { id: "theme_3", type: "single", title: "Este tema parece interessante para você?", content: "O Kit de Mensagens de Atração", image: "assets/theme_3.jpg", options: [{text: "Sim", icon: "✅"}, {text: "Não", icon: "❌"}], layout: "cards" },
  { id: "theme_4", type: "single", title: "Este tema parece interessante para você?", content: "Estabelecer Limites: O Respeito Começa Aqui", image: "assets/theme_4.jpg", options: [{text: "Sim", icon: "✅"}, {text: "Não", icon: "❌"}], layout: "cards" },
  {
    id: "profile",
    type: "profile"
  },
  {
    id: "loading",
    type: "loading"
  },
  {
    id: "email",
    type: "email"
  },
  {
    id: "sales",
    type: "sales"
  }
];

let currentStep = 0;
let answers = {};

function init() {
  renderStep();
}

function renderStep() {
  const step = steps[currentStep];
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";
  
  // Progress Bar
  updateProgress();
  
  const screen = document.createElement("div");
  screen.className = "screen active";
  
  if (step.type === "profile") {
    renderProfile(screen);
  } else if (step.type === "loading") {
    renderLoading(screen);
  } else if (step.type === "email") {
    renderEmail(screen);
  } else if (step.type === "sales") {
    renderSales(screen);
  } else {
    // Top Rating if available
    if (step.rating) {
        const wrapper = document.createElement("div");
        wrapper.className = "rating-wrapper";
        wrapper.innerHTML = `
            <div class="rating">
                <span class="rating-score">${step.rating}</span>
                <span class="rating-stars">★★★★★</span>
            </div>
            <p class="rating-text">Avaliações de usuários da Lose Get</p>
        `;
        screen.appendChild(wrapper);
    }

    // Title
    const title = document.createElement("h1");
    title.innerHTML = step.dynamicTitle ? step.dynamicTitle(answers) : step.title;
    screen.appendChild(title);
    
    if (step.subtitle) {
      const sub = document.createElement("p");
      sub.className = "subtitle";
      sub.textContent = step.subtitle;
      screen.appendChild(sub);
    }

    if (step.content && step.type !== "splash") {
        const content = document.createElement("p");
        content.className = "text-center mb-20";
        content.textContent = step.content;
        screen.appendChild(content);
    }
    
    if (step.type === "splash") {
        const content = document.createElement("p");
        content.className = "text-center mb-20";
        content.style.fontSize = "16px";
        content.style.lineHeight = "1.5";
        content.innerHTML = typeof step.content === "function" ? step.content(answers) : step.content;
        screen.appendChild(content);
    }

    if (step.image) {
      const img = document.createElement("img");
      img.src = step.image;
      img.className = "splash-img";
      screen.appendChild(img);
    }
    
    if (step.type === "single") {
      renderSingle(screen, step);
    } else if (step.type === "multi") {
      renderMulti(screen, step);
    } else if (step.type === "scale") {
      renderScale(screen, step);
    } else if (step.type === "slider") {
      renderSlider(screen, step);
    } else if (step.type === "splash") {
      renderSplash(screen, step);
    }
  }
  
  container.appendChild(screen);
  document.getElementById("back-btn").style.display = currentStep > 0 ? "block" : "none";
}

function updateProgress() {
  const fills = document.querySelectorAll(".progress-fill");
  const questionSteps = steps.filter(s => !['splash', 'loading', 'profile', 'sales', 'email'].includes(s.type));
  const currentStepObj = steps[currentStep];
  
  if (['splash', 'loading', 'profile', 'sales', 'email'].includes(currentStepObj.type)) return;

  const questionIndex = questionSteps.indexOf(currentStepObj);
  if (questionIndex === -1) return;

  const totalPercent = ((questionIndex + 1) / questionSteps.length) * 100;
  const numSegments = fills.length;
  
  fills.forEach((fill, i) => {
    const segmentStart = (i / numSegments) * 100;
    const segmentEnd = ((i + 1) / numSegments) * 100;
    
    if (totalPercent >= segmentEnd) {
      fill.style.width = "100%";
    } else if (totalPercent > segmentStart) {
      const segmentPercent = ((totalPercent - segmentStart) / (100 / numSegments)) * 100;
      fill.style.width = segmentPercent + "%";
    } else {
      fill.style.width = "0%";
    }
  });
}

function next() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
}

function back() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

function selectOption(stepId, value) {
  if (value === "Pular") {
    goToStepById("journey");
    return;
  }
  answers[stepId] = value;
  localStorage.setItem("quizAnswers", JSON.stringify(answers));
  next();
}

function goToStepById(id) {
  const index = steps.findIndex(s => s.id === id);
  if (index !== -1) {
    currentStep = index;
    renderStep();
  }
}

function renderSingle(container, step) {
  const optionsDiv = document.createElement("div");
  optionsDiv.className = step.layout === "cards" ? "cards-grid" : "options-list";
  
  const options = typeof step.options === "function" ? step.options(answers) : step.options;
  
  options.forEach(opt => {
    const div = document.createElement("div");
    if (step.hideLabels) {
        div.className = "age-option";
    } else {
        div.className = step.layout === "cards" ? "card" : "option-btn";
    }
    
    div.onclick = () => selectOption(step.id, opt.value || opt.text);
    
    if (step.layout === "cards") {
      if (opt.image) {
        const img = document.createElement("img");
        img.src = opt.image;
        div.appendChild(img);
      }
      
      if (!step.hideLabels) {
          const label = document.createElement("div");
          label.className = opt.image ? "card-label" : "card-label-dark";
          label.innerHTML = `${opt.icon || ''} ${opt.text}`;
          div.appendChild(label);
      }
    } else {
      if (opt.emoji) {
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.textContent = opt.emoji;
        div.appendChild(emoji);
      }
      const text = document.createElement("span");
      text.textContent = opt.text;
      div.appendChild(text);
    }
    
    optionsDiv.appendChild(div);
  });
  
  container.appendChild(optionsDiv);
}

function renderMulti(container, step) {
  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options-list";
  
  let selected = [];
  
  const options = step.options;
  
  options.forEach(opt => {
    const btn = document.createElement("div");
    btn.className = "option-btn";
    btn.innerHTML = `<span>${opt.text}</span><div class="check-circle"></div>`;
    btn.dataset.value = opt.text;
    btn.onclick = () => {
      const val = opt.text;
      
      if (val === "Todos eles") {
        if (selected.length === options.length) {
            selected = [];
            optionsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        } else {
            selected = options.map(o => o.text);
            optionsDiv.querySelectorAll('.option-btn').forEach(b => b.classList.add('selected'));
        }
      } else if (val === "Outro") {
        btn.classList.toggle("selected");
        const existing = container.querySelector(".other-input-wrapper");
        if (btn.classList.contains("selected")) {
            if (!existing) {
                const wrapper = document.createElement("div");
                wrapper.className = "other-input-wrapper";
                wrapper.innerHTML = `<textarea id="other-ans-${step.id}" placeholder="Digite sua resposta..."></textarea>`;
                container.insertBefore(wrapper, container.querySelector(".btn-primary"));
            } else {
                existing.classList.remove("hidden");
            }
            if (!selected.includes(val)) selected.push(val);
        } else {
            if (existing) existing.classList.add("hidden");
            selected = selected.filter(s => s !== val);
        }
      } else {
        btn.classList.toggle("selected");
        if (selected.includes(val)) {
            selected = selected.filter(s => s !== val);
            // Uncheck "Todos eles" if any individual is unchecked
            const allBtn = Array.from(optionsDiv.querySelectorAll('.option-btn')).find(b => b.dataset.value === "Todos eles");
            if (allBtn) allBtn.classList.remove('selected');
        } else {
            selected.push(val);
            // Check "Todos eles" if all individuals are checked
            if (selected.length === options.length - 1 && !selected.includes("Todos eles")) {
                 const allBtn = Array.from(optionsDiv.querySelectorAll('.option-btn')).find(b => b.dataset.value === "Todos eles");
                 if (allBtn) {
                     allBtn.classList.add('selected');
                     selected.push("Todos eles");
                 }
            }
        }
      }
    };
    optionsDiv.appendChild(btn);
  });
  
  container.appendChild(optionsDiv);
  
  const nextBtn = document.createElement("button");
  nextBtn.className = "btn-primary";
  nextBtn.textContent = step.btnText || "Continuar";
  nextBtn.onclick = () => {
    if (selected.length === 0) {
        alert("Por favor, selecione pelo menos uma opção.");
        return;
    }
    
    // If 'Outro' is selected, handle its text
    if (selected.includes("Outro")) {
        const txt = document.getElementById(`other-ans-${step.id}`).value;
        if (txt.trim()) {
            // Replace 'Outro' with the actual text or keep both
            selected = selected.map(s => s === "Outro" ? `Outro: ${txt}` : s);
        } else {
            alert("Por favor, descreva sua resposta no campo 'Outro'.");
            return;
        }
    }

    answers[step.id] = selected;
    next();
  };
  container.appendChild(nextBtn);
}

function renderScale(container, step) {
  const scaleDiv = document.createElement("div");
  scaleDiv.className = "scale-container";
  
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("div");
    btn.className = "scale-btn";
    btn.textContent = i;
    btn.onclick = () => selectOption(step.id, i);
    scaleDiv.appendChild(btn);
  }
  
  container.appendChild(scaleDiv);
  
  const labels = document.createElement("div");
  labels.className = "scale-labels";
  labels.innerHTML = `<span>${step.minLabel}</span><span>${step.maxLabel}</span>`;
  container.appendChild(labels);
}

function renderSlider(container, step) {
  // Clear container to avoid duplicate titles if necessary, 
  // but we only want to replace the content area.
  // The current renderStep adds h1 and subtitle before calling renderSlider.
  // We will remove them if they exist to follow the new layout.
  const parent = container;
  const oldH1 = parent.querySelector("h1");
  const oldSub = parent.querySelector(".subtitle");
  if (oldH1) oldH1.remove();
  if (oldSub) oldSub.remove();

  const section = document.createElement("section");
  section.className = "step-27-content";
  section.innerHTML = `
    <h1 class="title">
      Quão importante é<br>
      melhorar sua vida<br>
      amorosa agora?
    </h1>

    <p class="subtitle">
      Por favor, escolha o nível de<br>
      importância
    </p>

    <div class="range-area">
      <div class="scale-numbers">
        <span>1</span>
        <span id="current-number">4</span>
        <span>5</span>
      </div>

      <input
        id="importance-range"
        class="importance-range"
        type="range"
        min="1"
        max="5"
        value="4"
        step="1"
      >

      <div class="range-labels">
        <span>Nada importante<br>de jeito nenhum</span>
        <span>Extremamente<br>importante</span>
      </div>
    </div>

    <div id="thanks-card" class="thanks-card hidden">
      <div class="thanks-header">
        <strong>Obrigado por compartilhar!</strong>
        <span>🙌🏻</span>
      </div>
      <p>
        Vamos levar isso em conta ao preparar seu plano pessoal para que ele se adapte às suas necessidades atuais.
      </p>
    </div>

    <button class="continue-button" type="button" id="continue-btn-27">
      Continuar
    </button>
  `;
  container.appendChild(section);

  const range = section.querySelector("#importance-range");
  const thanksCard = section.querySelector("#thanks-card");
  const currentNumber = section.querySelector("#current-number");
  const nextBtn = section.querySelector("#continue-btn-27");

  function updateRangeProgress() {
    const min = Number(range.min);
    const max = Number(range.max);
    const value = Number(range.value);
    const progress = ((value - min) / (max - min)) * 100;
    range.style.setProperty("--progress", `${progress}%`);
    if (currentNumber) currentNumber.textContent = value;
  }

  updateRangeProgress();

  range.addEventListener("input", () => {
    updateRangeProgress();
    thanksCard.classList.remove("hidden");
    answers[step.id] = range.value;
  });

  nextBtn.onclick = () => next();
}

function renderSplash(container, step) {
  const nextBtn = document.createElement("button");
  nextBtn.className = "btn-primary";
  nextBtn.textContent = step.btnText;
  nextBtn.onclick = () => next();
  container.appendChild(nextBtn);
  
  if (step.skipText) {
    const skipBtn = document.createElement("button");
    skipBtn.className = "btn-secondary";
    skipBtn.textContent = step.skipText;
    skipBtn.onclick = () => selectOption(step.id, "Pular");
    container.appendChild(skipBtn);
  }
}

function renderProfile(container) {
  const challenges = answers.challenges || ["Conexão instável"];
  const skills = answers.improvement || ["Ler sinais"];
  const meta = answers.invest_time || "15-30 min";

  // Clean up 'Outro: ' prefix if present
  const cleanSkills = skills.map(s => s.replace("Outro: ", ""));
  const cleanChallenges = challenges.map(c => c.replace("Outro: ", ""));

  let skillsHtml = "";
  cleanSkills.forEach(skill => {
    skillsHtml += `<div class="option-btn profile-card"><span>💡 Habilidade: ${skill}</span></div>`;
  });

  container.innerHTML = `
    <div class="profile-screen">
        <h1 style="font-weight: 800; font-size: 24px;">Com base nas suas respostas, este é o seu perfil</h1>
        <p class="text-center mb-20" style="color: var(--text-muted); font-size: 14px;">Seu potencial amoroso</p>
        
        <div class="potential-meter-wrapper">
            <div class="potential-meter-labels">
                <span>Baixo</span>
                <span>Médio</span>
                <span>Alto</span>
            </div>
            <div class="potential-meter-bar">
                <div class="potential-meter-fill" style="width: 75%;"></div>
                <div class="potential-meter-marker" style="left: 75%;">▼</div>
            </div>
        </div>

        <div class="options-list" style="margin-top: 30px;">
            <div class="option-btn profile-card main-issue"><span>⚠️ Desafio: ${cleanChallenges[0]}</span></div>
            ${skillsHtml}
            <div class="option-btn profile-card"><span>⏰ Meta diária: ${meta}</span></div>
        </div>

        <button class="btn-primary" style="margin-top: 30px; height: 60px; font-size: 18px; font-weight: 700;" onclick="next()">Continuar</button>
    </div>
  `;
}


function renderLoading(container) {
  container.innerHTML = `
    <h1>Carregando seu plano personalizado</h1>
    <p class="text-center">Vamos transformar suas respostas em resultados reais</p>
    <div class="loading-bars" id="loading-items">
        <div class="loading-item">
            <div class="loading-label"><span>Definindo objetivos</span><span id="load-val-1">0%</span></div>
            <div class="loading-bar-bg"><div class="loading-bar-fill" id="load-bar-1"></div></div>
        </div>
        <div class="loading-item">
            <div class="loading-label"><span>Adaptando áreas-chave</span><span id="load-val-2">0%</span></div>
            <div class="loading-bar-bg"><div class="loading-bar-fill" id="load-bar-2"></div></div>
        </div>
        <div class="loading-item">
            <div class="loading-label"><span>Selecionando conteúdo</span><span id="load-val-3">0%</span></div>
            <div class="loading-bar-bg"><div class="loading-bar-fill" id="load-bar-3"></div></div>
        </div>
        <div class="loading-item">
            <div class="loading-label"><span>Priorizando desafios</span><span id="load-val-4">0%</span></div>
            <div class="loading-bar-bg"><div class="loading-bar-fill" id="load-bar-4"></div></div>
        </div>
    </div>
    <div style="background:white; color:black; padding:15px; border-radius:12px; font-size:14px; margin-top:20px">
        <b>Arjun, 30 ⭐⭐⭐⭐⭐</b><br>
        "Antes eu não entendia o que ela realmente queria dizer. Agora entendo os sinais de verdade."
    </div>
  `;
  
  const modals = [
    { title: "Você prefere ter orientação de um especialista?", text: "Para avançar, especifique" },
    { title: "Você tem dificuldade em manter a consistência?", text: "Para avançar, especifique" },
    { title: "Você está aberto ao autodesenvolvimento?", text: "Para avançar, especifique" },
    { title: "Pronto para começar seu plano hoje?", text: "Para avançar, especifique" }
  ];

  let currentModal = 0;

  function showNextModal() {
    if (currentModal < modals.length) {
        openModal(modals[currentModal].title, modals[currentModal].text);
        // Override closeModal for this sequence
        const originalClose = window.closeModal;
        window.closeModal = () => {
            document.getElementById("modal-overlay").style.display = "none";
            currentModal++;
            window.closeModal = originalClose;
            setTimeout(showNextModal, 500);
        };
    }
  }

  let p1 = 0, p2 = 0, p3 = 0, p4 = 0;
  const interval = setInterval(() => {
    if (p1 < 100) {
        p1 += 2;
        document.getElementById("load-bar-1").style.width = p1 + "%";
        document.getElementById("load-val-1").textContent = p1 + "%";
        if (p1 === 50) showNextModal(); // Trigger first modal at 50%
    } else if (p2 < 100) {
        p2 += 2;
        document.getElementById("load-bar-2").style.width = p2 + "%";
        document.getElementById("load-val-2").textContent = p2 + "%";
    } else if (p3 < 100) {
        p3 += 2;
        document.getElementById("load-bar-3").style.width = p3 + "%";
        document.getElementById("load-val-3").textContent = p3 + "%";
    } else if (p4 < 100) {
        p4 += 2;
        document.getElementById("load-bar-4").style.width = p4 + "%";
        document.getElementById("load-val-4").textContent = p4 + "%";
    } else {
        clearInterval(interval);
        setTimeout(next, 1000);
    }
  }, 50);
}

function renderEmail(container) {
    container.innerHTML = `
        <h1>Seu plano está pronto!</h1>
        <p class="text-center mb-20">Onde devemos enviar seu guia personalizado?</p>
        <input type="email" id="email-input" placeholder="Seu melhor e-mail" style="width:100%; padding:18px; border-radius:12px; border:1px solid #333; background:#1e1e1e; color:white; font-size:16px; margin-bottom:20px">
        <button class="btn-primary" onclick="saveEmail()">Ver Meu Plano</button>
        <p style="font-size:12px; color:#666; text-align:center; margin-top:15px">Respeitamos sua privacidade. Sem spam.</p>
    `;
}

function saveEmail() {
    const email = document.getElementById("email-input").value;
    if (email && email.includes("@")) {
        localStorage.setItem("quizEmail", email);
        next();
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
}

function renderSales(container) {
    const app = document.getElementById("quiz-app");
    app.classList.add("sales-page");
    document.getElementById("progress-container").style.display = "none";
    
    // Header
    const header = document.querySelector("header");
    header.innerHTML = `
        <div class="sales-header">
            <div class="header-timer-box">
                <span class="header-timer-label">Esta oferta termina em:</span>
                <span class="header-timer-value" id="sales-timer">14:59</span>
            </div>
            <button class="btn-header" onclick="goToCheckout()">Obter Meu Plano</button>
        </div>
    `;

    container.innerHTML = `
        <div class="sales-content" style="padding: 20px 0;">
            <h1 style="padding: 0 20px;">Escreva com confiança,<br>receba respostas na hora</h1>
            
            <!-- Before After -->
            <div class="ba-container" style="padding: 0 20px;">
                <div class="ba-card">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" class="ba-img">
                    <div class="ba-label before">❌ ANTES</div>
                </div>
                <div style="display:flex; align-items:center; font-size:24px;">➜</div>
                <div class="ba-card">
                    <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300" class="ba-img">
                    <div class="ba-label after">✅ DEPOIS</div>
                </div>
            </div>

            <div class="ba-level-box">
                <div class="ba-level-item">
                    <div class="ba-level-title">Nível da vida amorosa</div>
                    <div class="ba-level-name">Iniciante</div>
                    <div class="ba-bars">
                        <div class="ba-bar red"></div>
                        <div class="ba-bar gray"></div>
                        <div class="ba-bar gray"></div>
                    </div>
                </div>
                <div style="width:40px"></div>
                <div class="ba-level-item">
                    <div class="ba-level-title">Nível da vida amorosa</div>
                    <div class="ba-level-name">Avançado</div>
                    <div class="ba-bars">
                        <div class="ba-bar green"></div>
                        <div class="ba-bar green"></div>
                        <div class="ba-bar green"></div>
                    </div>
                </div>
            </div>

            <!-- Pricing Card -->
            <div class="pricing-section" style="margin: 0 20px 40px;">
                <h2>seu plano personalizado<br>esta 100% pronto!</h2>
                <p>Comece sua nova jornada agora mesmo</p>
                
                <div class="plan-card" id="plan-1w" onclick="selectPlan('plan-1w')">
                    <div class="plan-info">
                        <div class="plan-title">1 semana</div>
                        <div class="plan-price-row">1 dia – R$ 1,57 <span class="plan-price-old">R$ 4,49</span></div>
                    </div>
                </div>

                <div class="plan-card selected" id="plan-4w" onclick="selectPlan('plan-4w')">
                    <div class="plan-badge">Mais Popular</div>
                    <div class="plan-info">
                        <div class="plan-title">4 semanas</div>
                        <div class="plan-price-row">1 dia – R$ 0,67 <span class="plan-price-old">R$ 1,91</span></div>
                    </div>
                </div>

                <div class="plan-card" id="plan-12w" onclick="selectPlan('plan-12w')">
                    <div class="plan-badge blue">Mais barato</div>
                    <div class="plan-info">
                        <div class="plan-title">12 semanas</div>
                        <div class="plan-price-row">1 dia – R$ 0,49 <span class="plan-price-old">R$ 1,40</span></div>
                    </div>
                </div>

                <button class="btn-primary" onclick="goToCheckout()" style="margin-top:20px;">Obter Meu Plano</button>
                
                <p style="font-size:10px; margin-top:15px; line-height:1.2;">
                    Ao continuar você concorda que, se não cancelar pelo menos 24 horas antes do fim da oferta introdutória de 4 semanas, será cobrado automaticamente o preço integral.
                </p>
                
                <div style="font-size:12px; font-weight:700; margin-top:10px;">🔒 Pagamento seguro e protegido</div>
                <div class="payment-icons">
                    <img src="https://img.icons8.com/color/48/000000/visa.png">
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png">
                    <img src="https://img.icons8.com/color/48/000000/amex.png">
                    <img src="https://img.icons8.com/color/48/000000/paypal.png">
                    <img src="https://img.icons8.com/color/48/000000/apple-pay.png">
                    <img src="https://img.icons8.com/color/48/000000/google-pay.png">
                </div>
            </div>

            <!-- Prediction Section -->
            <div class="prediction-section">
                <h2 style="text-align:center; font-size:20px; margin-bottom:20px;">Previsão Com Base nas Suas<br>Respostas</h2>
                <div class="prediction-grid">
                    <div class="prediction-cell">
                        <div class="prediction-label">Habilidades de Comunicação:</div>
                        <div class="prediction-val before">Intermediário</div>
                    </div>
                    <div class="prediction-cell">
                        <div class="prediction-label">Habilidades de Comunicação:</div>
                        <div class="prediction-val after">Avançado</div>
                    </div>
                    <div class="prediction-cell">
                        <div class="prediction-label">Nível de Confiança:</div>
                        <div class="prediction-val before">Baixo</div>
                    </div>
                    <div class="prediction-cell">
                        <div class="prediction-label">Nível de Confiança:</div>
                        <div class="prediction-val after">Alto</div>
                    </div>
                </div>
                
                <div class="potential-scale">
                    <div style="font-size:14px; font-weight:700;">Seu Potencial de Mudança</div>
                    <div class="potential-bar">
                        <div class="potential-marker"></div>
                    </div>
                    <div class="potential-labels">
                        <span>Baixo</span>
                        <span>Moderado</span>
                        <span>Alto</span>
                        <span>Extremo</span>
                    </div>
                </div>
            </div>

            <!-- Chat Section -->
            <div class="chat-section" style="padding: 0 20px;">
                <h2 style="text-align:center; font-size:20px; margin:40px 0 20px;">Quando você não sabe o que<br>escrever ou o que fazer a<br>seguir...</h2>
                <div style="display:flex; flex-direction:column;">
                    <div class="chat-bubble blue">Ela respondeu só com "haha" — como continuo a conversa?</div>
                    <div class="chat-bubble dark">Dei match com ela em um app de namoro — qual seria uma boa primeira mensagem?</div>
                    <div class="chat-bubble blue">Como chamar ela pra sair sem soar estranho? 🤔</div>
                </div>
            </div>

            <!-- Coach List Section -->
            <div class="coach-section" style="padding: 0 20px;">
                <h2 style="text-align:center; font-size:22px; margin:40px 0 10px;">... Receba orientação do<br>Coach Pessoal com IA</h2>
                <p style="text-align:center; font-size:14px; color:var(--text-muted); margin-bottom:30px;">para decifrar sinais, reescrever mensagens e lidar com momentos difíceis</p>
                <ul class="coach-list">
                    <li class="coach-item"><div class="check-icon">✓</div> Receba ideias de mensagens que realmente geram respostas</li>
                    <li class="coach-item"><div class="check-icon">✓</div> Decifre sinais contraditórios e comportamentos confusos</li>
                    <li class="coach-item"><div class="check-icon">✓</div> Saiba quando escrever — e quando esperar</li>
                    <li class="coach-item"><div class="check-icon">✓</div> Lide com ghosting e momentos constrangedores</li>
                    <li class="coach-item"><div class="check-icon">✓</div> Atraia mulheres que combinam com você</li>
                    <li class="coach-item"><div class="check-icon">✓</div> Mantenha a conversa avançando rumo a um encontro real</li>
                </ul>
            </div>

            <!-- AI Example Card -->
            <div class="ai-example-card" style="margin: 0 20px 40px;">
                <div class="ai-user-msg">Ela respondeu com 'kkk'... ela está interessada ou só sendo educada?</div>
                <div style="display:flex; gap:10px; align-items:flex-start;">
                    <div style="width:30px; height:30px; border-radius:50%; background:#444;"></div>
                    <div class="ai-coach-resp">
                        'Kkk' geralmente significa que ela reagiu, mas não encontrou uma forma fácil de continuar. Tente transformar isso em um fio descontraído: <b>"Cuidado... se você continuar rindo assim vou achar que sou engraçado"</b>.
                    </div>
                </div>
                <button class="btn-primary" style="margin-top:15px; font-size:14px; padding:12px;">Ahh, faz sentido. Gostei dessa abordagem</button>
            </div>

            <!-- Testimonials -->
            <div style="padding: 0 20px;">
                <h2 style="text-align:center; font-size:20px; margin-bottom:20px;">quem usa a Lose Get diz:</h2>
                <div class="testimonial-card">
                    <div class="testimonial-avatar"></div>
                    <div class="testimonial-name">Max, 43</div>
                    <div class="stars"><span class="stars-yellow">★★★★★</span> 5.0</div>
                    <p class="testimonial-text">"Sempre travava na hora de mandar mensagem, tipo batia um branco... agora me sinto muito mais tranquilo e até engraçado às vezes kkkk. O Melto me mostrou exatamente o que me faltava"</p>
                </div>
                <div class="dots">
                    <div class="dot active"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>

            <!-- Score Card -->
            <div class="score-card" style="margin: 0 20px 40px;">
                <div class="score-main">4.7 <span class="stars-yellow">★★★★★</span></div>
                <div class="score-label">Avg. score do usuário da Lose Get</div>
                <p style="font-size:10px; margin-top:10px;">Com a confiança de mais de 25K homens no mundo todo</p>
            </div>

            <!-- FAQ Section -->
            <div class="faq-section" style="padding: 0 20px;">
                <h2 style="text-align:center; font-size:20px; margin-bottom:20px;">As pessoas costumam<br>perguntar:</h2>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-header"><span>Por que preciso deste Plano?</span><span>+</span></div>
                    <div class="faq-content">Este plano foi desenhado especificamente para as suas necessidades com base nas suas respostas no quiz.</div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-header"><span>Para quem é este Plano?</span><span>+</span></div>
                    <div class="faq-content">Para homens que desejam melhorar suas habilidades de comunicação e conexão com mulheres.</div>
                </div>
                <div class="faq-item" onclick="toggleFaq(this)">
                    <div class="faq-header"><span>Como acesso meu Plano?</span><span>+</span></div>
                    <div class="faq-content">Você receberá o acesso imediato por e-mail após a confirmação do pagamento.</div>
                </div>
            </div>

            <!-- Repeat Pricing Card -->
            <div class="pricing-section" style="margin: 40px 20px;">
                <h2>seu plano personalizado<br>esta 100% pronto!</h2>
                <p>Comece sua nova jornada agora mesmo</p>
                
                <div class="plan-card" id="plan-1w-2" onclick="selectPlan('plan-1w')">
                    <div class="plan-info">
                        <div class="plan-title">1 semana</div>
                        <div class="plan-price-row">1 dia – R$ 1,57 <span class="plan-price-old">R$ 4,49</span></div>
                    </div>
                </div>

                <div class="plan-card selected" id="plan-4w-2" onclick="selectPlan('plan-4w')">
                    <div class="plan-badge">Mais Popular</div>
                    <div class="plan-info">
                        <div class="plan-title">4 semanas</div>
                        <div class="plan-price-row">1 dia – R$ 0,67 <span class="plan-price-old">R$ 1,91</span></div>
                    </div>
                </div>

                <div class="plan-card" id="plan-12w-2" onclick="selectPlan('plan-12w')">
                    <div class="plan-badge blue">Mais barato</div>
                    <div class="plan-info">
                        <div class="plan-title">12 semanas</div>
                        <div class="plan-price-row">1 dia – R$ 0,49 <span class="plan-price-old">R$ 1,40</span></div>
                    </div>
                </div>

                <button class="btn-primary" onclick="goToCheckout()" style="margin-top:20px;">Obter Meu Plano</button>
                
                <div class="payment-icons">
                    <img src="https://img.icons8.com/color/48/000000/visa.png">
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png">
                    <img src="https://img.icons8.com/color/48/000000/amex.png">
                    <img src="https://img.icons8.com/color/48/000000/paypal.png">
                    <img src="https://img.icons8.com/color/48/000000/apple-pay.png">
                    <img src="https://img.icons8.com/color/48/000000/google-pay.png">
                </div>
            </div>

            <!-- Guarantee -->
            <div class="guarantee-card" style="margin: 0 20px 40px;">
                <div class="guarantee-title">🛡️ Garantia de Reembolso</div>
                <div class="guarantee-text">Prometemos funcionar pra você. Se perceber que não gerou nenhum resultado dentro do primeiro uso, iremos reembolsar.</div>
            </div>

            <div class="footer">
                Ao continuar, você concorda com nossos Termos de Serviço, Política de Privacidade e Termos de Assinatura.<br><br>
                2026 © Todos os direitos reservados.
            </div>
        </div>
    `;
    startTimer();
}

function toggleFaq(el) {
    el.classList.toggle("active");
}

function selectPlan(planId) {
    localStorage.setItem("selectedPlan", planId);
    // Unselect all in both pricing blocks
    document.querySelectorAll('.plan-card').forEach(c => {
        c.classList.remove('selected');
        // If it's the same plan in a different block, select it too
        if (c.id === planId || c.id === planId + "-2" || (c.id + "-2") === planId) {
            c.classList.add('selected');
        }
    });
}

function startTimer() {
    let time = 15 * 60;
    const el = document.getElementById("sales-timer");
    const interval = setInterval(() => {
        const m = Math.floor(time / 60);
        const s = time % 60;
        el.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
        time--;
        if (time < 0) clearInterval(interval);
    }, 1000);
}

function goToCheckout() {
  const selectedPlan = localStorage.getItem("selectedPlan") || "plan-4w";
  const email = localStorage.getItem("quizEmail") || "";

  const params = new URLSearchParams({
    brand: "lose-get",
    plan: selectedPlan,
    email
  });

  window.location.href = `${CHECKOUT_URL}?${params.toString()}`;
}

init();
