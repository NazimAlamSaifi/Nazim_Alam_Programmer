const skillSet = [
  {
    title: "End-to-End Development",
    tech:
      "I have designed and implemented complete solutions, combining backend logic in Ruby on Rails with dynamic frontend experiences in modern JavaScript.",
    icon: "🌐",
  },
  {
    title: "Interactive User Experiences",
    tech:
      "I have crafted responsive, engaging interfaces using JavaScript and DOM manipulation, delivering applications that are intuitive and enjoyable to use.",
    icon: "⚡",
  },
  {
    title: "Reliable Code Practices",
    tech:
      "I have applied Test-Driven Development with RSpec, producing maintainable, well-structured code that ensured reliability and scalability.",
    icon: "🛡️",
  },
  {
    title: "Deployment & Systems",
    tech:
      "I have managed deployments with Linux and Github, setting up pipelines that ensured smooth delivery and stable systems.",
    icon: "🚀",
  },
];

const projectData = [
  {
    name: "Chess Engine",
    desc:
      "I developed a full chess engine in Ruby, applying OOP principles and clean architecture to handle complex logic.",
    link: "https://github.com/NazimAlamSaifi/Chess",
  },
  {
    name: "Calculator",
    desc:
      "I built an advanced JavaScript calculator with memory functions, responsive UI, and DOM manipulation for dynamic interaction.",
    link: "https://nazimalamsaifi.github.io/Calculator/",
  },
  {
    name: "Hangman",
    desc:
      "I created a professional portfolio site using HTML, CSS, and JavaScript with animations and DOM manipulation to showcase my skills.",
    link: "https://github.com/NazimAlamSaifi/Hangman-",
  },
];

function renderCards(containerId, items, templateFn) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(templateFn).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards("skills-grid", skillSet, (skill) => `
    <div class="card">
      <div>${skill.icon}</div>
      <h4>${skill.title}</h4>
      <p>${skill.tech}</p>
    </div>
  `);

  renderCards("projects-grid", projectData, (proj) => `
    <div class="card">
      <h4>${proj.name}</h4>
      <p>${proj.desc}</p>
      <a href="${proj.link}" target="_blank">View Case Study →</a>
    </div>
  `);

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach(
        (entry) => entry.isIntersecting && entry.target.classList.add("visible")
      ),
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const modal = document.getElementById("pdf-modal");
  const iframe = document.getElementById("pdf-preview");
  const download = document.getElementById("pdf-download");
  const resumePath = "assets/resume.pdf";

  document.getElementById("open-resume")?.addEventListener("click", (e) => {
    e.preventDefault();
    iframe.src = `${resumePath}#toolbar=0`;
    download.href = resumePath;
    modal.classList.add("open");
  });

  document
    .querySelectorAll("#pdf-modal-close, #pdf-modal-close-2")
    .forEach((btn) =>
      btn.addEventListener("click", () => {
        modal.classList.remove("open");
        iframe.src = "";
      })
    );
});
