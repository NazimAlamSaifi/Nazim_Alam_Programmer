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
        
            ${skill.icon}
            <h4>${skill.title}</h4>
            <p>${skill.tech}</p>
        
    `).join('');

    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = projectData.map(proj => `
        
            <h4>${proj.name}</h4>
            <p>${proj.desc}</p>
            <a href="${proj.link}">View Case Study →</a>
        
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

    // ---------- PDF preview & download logic ----------
    // Path to the resume PDF (put the file in the repo root or update this path)
    const resumePath = 'assets/resume.pdf';

    const openBtn = document.getElementById('open-resume');
    const modal = document.getElementById('pdf-modal');
    const modalCloseButtons = Array.from(document.querySelectorAll('#pdf-modal-close, #pdf-modal-close-2'));
    const iframe = document.getElementById('pdf-preview');
    const downloadLink = document.getElementById('pdf-download');

    if (openBtn) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        iframe.src = resumePath + '#toolbar=0'; 
        downloadLink.href = resumePath;
        downloadLink.setAttribute('download', 'Nazim_Alam_Resume_2026.pdf');
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
      });
    }

    modalCloseButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';
      }
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
        iframe.src = '';
      }
    });
});