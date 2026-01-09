const skillSet = [
  { 
    title: "End-to-End Development", 
    tech: "I have designed and implemented complete solutions, combining backend logic in Ruby on Rails with dynamic frontend experiences in modern JavaScript.", 
    icon: "🌐" 
  },
  { 
    title: "Interactive User Experiences", 
    tech: "I have crafted responsive, engaging interfaces using JavaScript and DOM manipulation, delivering applications that are intuitive and enjoyable to use.", 
    icon: "⚡" 
  },
  { 
    title: "Reliable Code Practices", 
    tech: "I have applied Test-Driven Development with RSpec, producing maintainable, well‑structured code that ensured reliability and scalability.", 
    icon: "🛡️" 
  },
  { 
    title: "Deployment & Systems", 
    tech: "I have managed deployments with Linux and Github, setting up pipelines that ensured smooth delivery and stable systems.", 
    icon: "🚀" 
  }
];



const projectData = [
  { 
    name: "Chess Engine", 
    desc: "I developed a full chess engine in Ruby, applying OOP principles and clean architecture to handle complex logic.", 
    link: "https://github.com/NazimAlamSaifi/Chess" 
  },
  { 
    name: "Calculator", 
    desc: "I built an advanced JavaScript calculator with memory functions, responsive UI, and DOM manipulation for dynamic interaction.", 
    link: "https://nazimalamsaifi.github.io/Calculator/"
    
  },
  { 
    name: "Hangman", 
    desc: "I created a professional portfolio site using HTML, CSS, and JavaScript with animations and DOM manipulation to showcase my skills.", 
    link: "https://github.com/NazimAlamSaifi/Hangman-" 
  }
];


function initPortfolio() {
    const skillsGrid = document.getElementById('skills-grid');
    // Clear and build
    skillsGrid.innerHTML = skillSet.map(skill => `
        <div class="card">
            <div style="font-size: 2rem; margin-bottom: 1rem;">${skill.icon}</div>
            <h4>${skill.title}</h4>
            <p style="color: var(--text-dim); font-size: 0.9rem;">${skill.tech}</p>
        </div>
    `).join('');

    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projectData.map(proj => `
        <div class="card project-card">
            <h4>${proj.name}</h4>
            <p style="color: var(--text-dim); margin: 1rem 0;">${proj.desc}</p>
            <a href="${proj.link}" class="link" target="_blank" rel="noopener">View Case Study →</a>
        </div>
    `).join('');
}

// Optimized Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.addEventListener('DOMContentLoaded', () => {
    initPortfolio();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
