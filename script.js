let currentTheme = 'light';
let currentPage = 'home';

// Project data
const projects = {
    vms: {
        title: "Visitor Management System",
        description: "A comprehensive visitor management solution built with Java Swing and MySQL. Features include visitor registration, check-in/check-out functionality, visitor tracking, reporting dashboard, and security management.",
        features: [
            "Real-time visitor tracking",
            "Automated check-in/out process",
            "Comprehensive reporting system",
            "Security badge generation",
            "MySQL database integration",
            "User-friendly GUI interface"
        ],
        technologies: ["Java", "Swing", "MySQL", "JDBC", "GUI Design"],
        github: "https://github.com/shanlatke004/VisitorManagementSystem"
    },
    webscraping: {
        title: "Web Scraping & Data Analysis",
        description: "Advanced web scraping tool with powerful data analysis capabilities. Extracts data from various websites, processes it using pandas, and provides interactive visualizations and automated reporting features.",
        features: [
            "Multi-site data extraction",
            "Data cleaning and preprocessing",
            "Interactive visualizations",
            "Automated report generation",
            "CSV/Excel export functionality",
            "Scheduled scraping tasks"
        ],
        technologies: ["Python", "BeautifulSoup", "Pandas", "Matplotlib", "Requests", "Selenium"],
        github: "https://github.com/shanlatke004/Web-Scrapping-and-Data-Analysis-"
    },
    portfolio: {
        title: "Interactive Portfolio Website",
        description: "Modern, responsive portfolio website featuring dark mode, smooth animations, and a clean single-page architecture. Built with vanilla JavaScript and modern CSS techniques.",
        features: [
            "Dark/Light theme toggle",
            "Responsive design",
            "Interactive project showcase",
            "Smooth page transitions",
            "Mobile-first approach",
            "Skills & Experience sections"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox"],
        github: "#"
    },
    ims: {
        title: "Incident Management System",
        description: "Incidents and service requests were arriving through multiple disconnected channels — phone calls, emails, and direct requests — with no central system tracking them. The business and support team had no visibility into what was coming in, how much was outstanding, or what the status of any given issue was.",
        features: [
            "Consolidated multi-channel intake (phone, email, requests) into one platform",
            "Real-time dashboard showing live ticket status for 50+ users",
            "Priority and status tracking across all active incidents",
            "Reporting and metrics for team performance visibility",
            "Streamlined resolution workflow reducing manual handoffs"
        ],
        technologies: ["J.D. Irving \u2014 Confidential"],
        github: null
    },
    fst: {
        title: "Field Service Tracker",
        description: "Leadership had no real-time visibility into where their field service agents were or what they were assigned to. This created serious safety concerns and operational inefficiencies — agents were frequently dispatched to sites that had already been visited, or multiple agents were sent to the same location unnecessarily.",
        features: [
            "Live location tracking for field service agents",
            "Real-time assignment and dispatch visibility for leadership",
            "Eliminated duplicate site visits and conflicting dispatches",
            "Improved safety accountability for agents in the field",
            "Enabled faster, smarter dispatch decisions to resolve incidents"
        ],
        technologies: ["J.D. Irving \u2014 Confidential"],
        github: null
    },
    snagent: {
        title: "ServiceNow Agent",
        description: "The service desk was overwhelmed with calls and tickets from users who needed help with common issues but had no way to self-serve. Incident and task resolution times were high because every request required manual service desk involvement. Built an enterprise-wide AI agent integrated into ServiceNow that guides users through relevant troubleshooting steps, enabling self-service resolution.",
        features: [
            "AI agent integrated directly into ServiceNow",
            "Guides users through step-by-step troubleshooting for common issues",
            "Reduces service desk call volume through self-service resolution",
            "Covers incident and task resolution workflows",
            "Deployable and scalable across the entire enterprise"
        ],
        technologies: ["J.D. Irving \u2014 Confidential"],
        github: null
    },
    Enhanced_Stock_Analysis: {
        title: "Enhanced Stock Analysis",
        description: "A Python tool for multi-factor stock evaluation using yfinance. Scores valuation, profitability, growth, health, and technicals; generates reports and short-term predictions. Supports US and international exchanges.",
        features: [
            "Multi-Factor Stock Evaluation",
            "Normalized Scoring System",
            "Broad Market Support",
            "Performance Optimization",
            "Comprehensive Reporting",
            "Short-term Predictions"
        ],
        technologies: ["Python", "Pandas", "NumPy", "yfinance", "Logging"],
        github: "https://github.com/shanlatke004/Stocks_Analysis"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        applyTheme(currentTheme);
    }

    // Show intro banner on first visit
    initBanner();

    // Start rotating hero word
    setInterval(rotateHeroWord, 3000);
});

// Intro banner
function initBanner() {
    if (!localStorage.getItem('hasVisited')) {
        const banner = document.getElementById('introBanner');
        if (banner) {
            banner.style.display = 'flex';
            document.querySelector('.navbar').style.top = '40px';
            document.querySelectorAll('.page').forEach(p => {
                p.style.paddingTop = '120px';
            });
            setTimeout(dismissBanner, 5000);
        }
    }
}

function dismissBanner() {
    const banner = document.getElementById('introBanner');
    if (!banner) return;
    banner.classList.add('dismissed');
    document.querySelector('.navbar').style.top = '0';
    document.querySelectorAll('.page').forEach(p => {
        p.style.paddingTop = '80px';
    });
    localStorage.setItem('hasVisited', 'true');
}

// Rotating hero word
const heroWords = ['automation systems', 'agentic AI pipelines', 'data-driven tools', 'intelligent workflows'];
let heroWordIndex = 0;

function rotateHeroWord() {
    const el = document.getElementById('rotatingWord');
    if (!el) return;
    el.classList.add('fade');
    setTimeout(() => {
        heroWordIndex = (heroWordIndex + 1) % heroWords.length;
        el.textContent = heroWords[heroWordIndex];
        el.classList.remove('fade');
    }, 300);
}

// Navbar scroll shadow
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const currentLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
    if (currentLink) {
        currentLink.classList.add('active');
    }

    currentPage = pageId;

    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('active');

    document.getElementById(pageId).classList.add('fade-in');
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function downloadCV() {
    const link = document.createElement('a');
    link.href = './assets/ShantanuLatkeResume.pdf';
    link.download = 'ShantanuLatkeResume.pdf';
    link.click();
}

function openProjectModal(projectKey) {
    const project = projects[projectKey];
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <h2 style="color: var(--accent-primary); margin-bottom: 1rem;">${project.title}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size: 1.1rem;">${project.description}</p>

        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Key Features:</h3>
            <ul style="color: var(--text-secondary); line-height: 1.8;">
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: var(--text-primary);">Technologies Used:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>

        ${project.github ? `
        <div style="text-align: center;">
            <a href="${project.github}" target="_blank" class="btn btn-primary">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>` : `
        <div style="text-align:center; color: var(--text-secondary); font-size: 0.85rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 10px; border: 1px solid var(--border-color);">
            <i class="fas fa-lock" style="margin-right: 0.4rem;"></i> Source code is confidential &mdash; J.D. Irving proprietary work
        </div>`}
    `;

    modal.style.display = 'flex';
}

function closeProjectModal() {
    document.getElementById('projectModal').style.display = 'none';
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxCpVzQIU3ULEfd1Z1np3qDbMfyYhHIDgdc0aIs-gMUQQL2EuUwwjW_wn6V5sFxxtXPKw/exec';

    try {
        fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        alert(`Thank you ${data.name}! Your message has been sent successfully.`);
        form.reset();

    } catch (error) {
        console.error('Error!', error.message);
        alert('An error occurred. Please try again.');
    }
}

// Close project modal when clicking outside
document.addEventListener('click', function(event) {
    const projectModal = document.getElementById('projectModal');
    if (event.target === projectModal) {
        closeProjectModal();
    }
});

document.documentElement.style.scrollBehavior = 'smooth';

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});
