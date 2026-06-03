(function () {
  "use strict";

  const STORAGE_KEY = "site-lang";
  const THEME_KEY = "site-theme";

  const i18n = {
    ru: {
      "meta.title": "Олег — Производство & ИТ",
      "meta.description":
        "Специалист по автоматизированному производству электроники, SMT и системной инженерии",
      "lang.switch": "Выбор языка",
      "theme.toLight": "Светлая тема",
      "theme.toDark": "Тёмная тема",
      "nav.label": "Основная навигация",
      "nav.open": "Открыть меню",
      "nav.about": "Обо мне",
      "nav.skills": "Навыки",
      "nav.projects": "Проекты",
      "nav.experience": "Опыт",
      "nav.contact": "Контакты",
      "hero.label": "SMT · Автоматизация · Project Management",
      "hero.title1": "Инженерия на стыке",
      "hero.title2": "производства и\u00a0ИТ",
      "hero.sub":
        "Программирование SMT-линий, системная инженерия и внедрение эффективных решений в автоматизированном производстве электроники.",
      "hero.cta1": "Мои проекты",
      "hero.cta2": "Связаться",
      "hero.stat1": "лет в инженерии",
      "hero.stat2": "настроенных SMT-линий",
      "hero.stat3": "успешных ИТ-проектов",
      "about.title": "Обо мне",
      "about.text":
        'Специалист с сильным техническим бэкграундом и высшим инженерным образованием (<strong>Киевский технический университет</strong>). Сочетаю глубокую экспертизу в автоматизированном производстве электроники с опытом проектного управления (Project Management) и системной инженерии. Фокусируюсь на автоматизации процессов, программировании SMT-линий и внедрении эффективных решений на стыке производства и ИТ.',
      "skills.title": "Ключевые навыки",
      "skills.prod.title": "Производство",
      "skills.prod.smt": "Программирование SMT-машин",
      "skills.prod.smt.tip": "Настройка и оптимизация линий поверхностного монтажа",
      "skills.prod.ipc": "Стандарты IPC-A-610",
      "skills.prod.ipc.tip": "Приёмка и контроль качества электронных сборок",
      "skills.prod.equip": "Управление SMT-оборудованием",
      "skills.prod.equip.tip": "Управление производственным оборудованием",
      "skills.it.title": "ИТ и Аналитика",
      "skills.it.sql": "SQL",
      "skills.it.sql.tip": "Работа с данными и отчётность",
      "skills.it.python": "Python",
      "skills.it.python.tip": "Автоматизация и аналитика",
      "skills.it.tableau": "Tableau",
      "skills.it.tableau.tip": "Визуализация и дашборды",
      "skills.it.syseng": "Системная инженерия",
      "skills.it.syseng.tip": "Комплексные технические системы",
      "skills.it.pm": "Project Management",
      "skills.it.pm.tip": "Планирование и ведение ИТ-проектов",
      "skills.hint": "Наведите на тег — увидите подсказку",
      "projects.title": "Мои проекты",
      "projects.p1.tag": "Python / SMT",
      "projects.p1.title": "SMT Placement Optimizer",
      "projects.p1.desc": "Скрипт оптимизации траектории SMT-установщика. Сокращает время сборки печатных плат на 15% за счет оптимизации порядка раскладки компонентов.",
      "projects.p2.tag": "SQL / Tableau",
      "projects.p2.title": "Quality Control Dashboard",
      "projects.p2.desc": "Интерактивный дашборд для мониторинга брака при поверхностном монтаже (IPC-A-610). Автоматизирует сбор статистики по дефектам пайки.",
      "projects.p2.link": "Внутренний инструмент",
      "projects.p3.tag": "Systems Engineering / PM",
      "projects.p3.title": "MES-ERP Integration",
      "projects.p3.desc": "Руководство проектом интеграции системы MES завода с корпоративной ERP. Налажен автоматический учет расхода компонентов и готовой продукции.",
      "projects.p3.link": "Кейс внедрения",
      "exp.title": "Опыт и образование",
      "exp.now.badge": "Сейчас",
      "exp.now.time": "2024 — н.в.",
      "exp.now.role": "Программист и управляющий SMT-оборудованием",
      "exp.now.place": "Крупный завод электроники · Израиль",
      "exp.now.desc":
        "Программирование и эксплуатация SMT-линий, оптимизация производственных процессов и внедрение автоматизации на производстве.",
      "exp.past.badge": "Опыт",
      "exp.past.time": "Ранее",
      "exp.past.role": "Руководитель проектов & системный инженер",
      "exp.past.place": "Банковский и ИТ-сектор · Украина",
      "exp.past.desc":
        "Управление ИТ-проектами, системная инженерия и координация кросс-функциональных команд в финтех и корпоративном секторе.",
      "exp.edu.badge": "Образование",
      "exp.edu.time": "Киев",
      "exp.edu.role": "Высшее техническое образование",
      "exp.edu.place": "Национальный технический университет Украины «КПИ»",
      "exp.edu.desc":
        "Степень специалиста / бакалавра в области инженерии. Фундаментальная подготовка в точных науках и прикладной инженерии.",
      "contact.title": "Связаться со мной",
      "contact.sub": "Давайте обсудим ваш проект",
      "contact.desc": "Я всегда открыт для интересных предложений, автоматизации производства, ИТ-консалтинга или системного проектирования.",
      "contact.emailLabel": "Эл. почта:",
      "contact.copyAria": "Скопировать email",
      "contact.copied": "Скопировано!",
      "contact.copiedAria": "Адрес электронной почты скопирован в буфер обмена",
      "footer.copy": "Олег · Производство & ИТ",
      "footer.top": "Наверх",
    },
    en: {
      "meta.title": "Oleg — Manufacturing & IT",
      "meta.description":
        "Specialist in automated electronics manufacturing, SMT programming, and systems engineering",
      "lang.switch": "Language selection",
      "theme.toLight": "Light theme",
      "theme.toDark": "Dark theme",
      "nav.label": "Main navigation",
      "nav.open": "Open menu",
      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      "hero.label": "SMT · Automation · Project Management",
      "hero.title1": "Engineering at the",
      "hero.title2": "intersection of manufacturing & IT",
      "hero.sub":
        "SMT line programming, systems engineering, and deploying efficient solutions in automated electronics manufacturing.",
      "hero.cta1": "My Projects",
      "hero.cta2": "Contact Me",
      "hero.stat1": "years in engineering",
      "hero.stat2": "configured SMT lines",
      "hero.stat3": "successful IT projects",
      "about.title": "About Me",
      "about.text":
        "Specialist with a strong technical background and an engineering degree from <strong>Kyiv Polytechnic Institute</strong>. I combine deep expertise in automated electronics manufacturing with project management and systems engineering experience. I focus on process automation, SMT line programming, and effective solutions at the intersection of manufacturing and IT.",
      "skills.title": "Key Skills",
      "skills.prod.title": "Manufacturing",
      "skills.prod.smt": "SMT machine programming",
      "skills.prod.smt.tip": "Setup and optimization of surface-mount assembly lines",
      "skills.prod.ipc": "IPC-A-610 standards",
      "skills.prod.ipc.tip": "Acceptance and quality control of electronic assemblies",
      "skills.prod.equip": "SMT equipment management",
      "skills.prod.equip.tip": "Operation of production equipment",
      "skills.it.title": "IT & Analytics",
      "skills.it.sql": "SQL",
      "skills.it.sql.tip": "Data work and reporting",
      "skills.it.python": "Python",
      "skills.it.python.tip": "Automation and analytics",
      "skills.it.tableau": "Tableau",
      "skills.it.tableau.tip": "Visualization and dashboards",
      "skills.it.syseng": "Systems engineering",
      "skills.it.syseng.tip": "Complex technical systems",
      "skills.it.pm": "Project Management",
      "skills.it.pm.tip": "Planning and leading IT projects",
      "skills.hint": "Hover a tag to see a hint",
      "projects.title": "My Projects",
      "projects.p1.tag": "Python / SMT",
      "projects.p1.title": "SMT Placement Optimizer",
      "projects.p1.desc": "SMT placement trajectory optimization script. Reduces PCB assembly time by 15% through smart component sequencing.",
      "projects.p2.tag": "SQL / Tableau",
      "projects.p2.title": "Quality Control Dashboard",
      "projects.p2.desc": "Interactive dashboard for monitoring defects in surface mount technology (IPC-A-610). Automates solder defect statistics.",
      "projects.p2.link": "Internal tool",
      "projects.p3.tag": "Systems Engineering / PM",
      "projects.p3.title": "MES-ERP Integration",
      "projects.p3.desc": "Project management for factory MES and corporate ERP integration. Automated inventory tracking and product costing.",
      "projects.p3.link": "Case study",
      "exp.title": "Experience & Education",
      "exp.now.badge": "Current",
      "exp.now.time": "2024 — present",
      "exp.now.role": "SMT programmer & equipment operator",
      "exp.now.place": "Major electronics plant · Israel",
      "exp.now.desc":
        "Programming and operating SMT lines, optimizing production processes, and implementing automation on the factory floor.",
      "exp.past.badge": "Experience",
      "exp.past.time": "Previously",
      "exp.past.role": "Project Manager & systems engineer",
      "exp.past.place": "Banking & IT sector · Ukraine",
      "exp.past.desc":
        "IT project management, systems engineering, and cross-functional team coordination in fintech and corporate sectors.",
      "exp.edu.badge": "Education",
      "exp.edu.time": "Kyiv",
      "exp.edu.role": "Higher technical education",
      "exp.edu.place": "National Technical University of Ukraine «KPI»",
      "exp.edu.desc":
        "Specialist / bachelor's degree in engineering. Strong foundation in applied sciences and engineering.",
      "contact.title": "Contact Me",
      "contact.sub": "Let's discuss your project",
      "contact.desc": "I am always open to interesting opportunities, manufacturing automation, IT consulting, or systems design.",
      "contact.emailLabel": "Email:",
      "contact.copyAria": "Copy email",
      "contact.copied": "Copied!",
      "contact.copiedAria": "Email address copied to clipboard",
      "footer.copy": "Oleg · Manufacturing & IT",
      "footer.top": "Back to top",
    },
  };

  let currentLang = "ru";
  let skillHintDefault = i18n.ru["skills.hint"];

  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  const langButtons = document.querySelectorAll(".lang-switch__btn");
  const themeToggle = document.getElementById("theme-toggle");
  const skillHint = document.getElementById("skill-hint");
  const revealEls = document.querySelectorAll(".reveal");
  const yearEl = document.getElementById("year");
  const statValues = document.querySelectorAll(".stat-value[data-count]");
  const metaDescription = document.querySelector('meta[name="description"]');

  function t(key) {
    return (i18n[currentLang] && i18n[currentLang][key]) || i18n.ru[key] || "";
  }

  function applyLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    skillHintDefault = t("skills.hint");

    document.documentElement.lang = lang;
    document.title = t("meta.title");

    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description"));
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-tip]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-tip");
      el.setAttribute("data-tip", t(key));
    });

    langButtons.forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    if (skillHint && !skillHint.classList.contains("has-tip")) {
      skillHint.textContent = skillHintDefault;
    }

    updateThemeToggleLabel();

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* ignore */
    }
  }

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  function updateThemeToggleLabel() {
    if (!themeToggle) return;
    const isLight = getTheme() === "light";
    const key = isLight ? "theme.toDark" : "theme.toLight";
    themeToggle.setAttribute("data-i18n-aria", key);
    themeToggle.setAttribute("aria-label", t(key));
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    updateThemeToggleLabel();
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* ignore */
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
      /* ignore */
    }

    if (saved === "light" || saved === "dark") {
      applyTheme(saved);
    } else {
      const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      applyTheme(prefersLight ? "light" : "dark");
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        applyTheme(getTheme() === "light" ? "dark" : "light");
      });
    }

    window
      .matchMedia("(prefers-color-scheme: light)")
      .addEventListener("change", function (e) {
        try {
          if (localStorage.getItem(THEME_KEY)) return;
        } catch (err) {
          return;
        }
        applyTheme(e.matches ? "light" : "dark");
      });
  }

  initTheme();

  function initLanguage() {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      /* ignore */
    }

    const browserLang = (navigator.language || "").toLowerCase();
    const initial =
      saved && i18n[saved]
        ? saved
        : browserLang.startsWith("en")
          ? "en"
          : "ru";

    applyLanguage(initial);

    langButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lang = btn.getAttribute("data-lang");
        if (lang && lang !== currentLang) {
          applyLanguage(lang);
        }
      });
    });
  }

  initLanguage(); /* also refreshes theme toggle aria-label */

  /* Footer year */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* Header scroll state */
  function onScroll() {
    if (header) {
      header.classList.toggle("header--scrolled", window.scrollY > 24);
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav */
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Skill tag tooltips */
  function bindSkillTags() {
    const skillTags = document.querySelectorAll(".skill-tag");

    skillTags.forEach(function (tag) {
      tag.addEventListener("mouseenter", function () {
        skillTags.forEach(function (t) {
          t.classList.remove("active");
        });
        tag.classList.add("active");
        const tip = tag.getAttribute("data-tip");
        if (skillHint && tip) {
          skillHint.textContent = tip;
          skillHint.classList.add("has-tip");
        }
      });

      tag.addEventListener("focus", function () {
        tag.dispatchEvent(new Event("mouseenter"));
      });

      tag.addEventListener("mouseleave", function () {
        tag.classList.remove("active");
      });

      tag.addEventListener("blur", function () {
        tag.classList.remove("active");
        if (skillHint) {
          skillHint.textContent = skillHintDefault;
          skillHint.classList.remove("has-tip");
        }
      });
    });
  }

  bindSkillTags();

  /* Scroll reveal */
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* Animated counters */
  if (statValues.length) {
    const duration = 1400;

    const easeOut = function (progress) {
      return 1 - Math.pow(1 - progress, 3);
    };

    const animateCounter = function (el) {
      const target = parseInt(el.getAttribute("data-count"), 10);
      if (isNaN(target)) return;
      let start = null;

      const step = function (timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        el.textContent = Math.floor(easeOut(progress) * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statValues.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* Active nav link on scroll */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav a");

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              const active = link.getAttribute("href") === "#" + id;
              link.style.color = active ? "var(--text)" : "";
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: "-20% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* Email Copy Interaction */
  const emailCopyBtn = document.getElementById("email-copy-btn");
  const emailText = document.getElementById("email-text");
  const copyToast = document.getElementById("copy-toast");

  if (emailCopyBtn && emailText) {
    emailCopyBtn.addEventListener("click", function () {
      const email = emailText.textContent.trim();
      navigator.clipboard.writeText(email).then(
        function () {
          const copyIcon = emailCopyBtn.querySelector(".copy-icon");
          const checkIcon = emailCopyBtn.querySelector(".check-icon");

          if (copyIcon && checkIcon) {
            copyIcon.style.display = "none";
            checkIcon.style.display = "block";
          }

          if (copyToast) {
            copyToast.textContent = t("contact.copied");
            copyToast.classList.add("is-visible");
            copyToast.setAttribute("aria-label", t("contact.copiedAria"));
          }

          setTimeout(function () {
            if (copyIcon && checkIcon) {
              copyIcon.style.display = "block";
              checkIcon.style.display = "none";
            }
            if (copyToast) {
              copyToast.classList.remove("is-visible");
              copyToast.removeAttribute("aria-label");
              copyToast.textContent = "";
            }
          }, 2000);
        },
        function () {
          /* Fallback if copy fails */
        }
      );
    });
  }
})();
