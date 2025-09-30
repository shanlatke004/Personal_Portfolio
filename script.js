let currentTheme = 'light';
        let userRole = null;
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
                description: "Modern, responsive portfolio website featuring dark mode, smooth animations, and role-based user experience customization. Built with vanilla JavaScript and modern CSS techniques.",
                features: [
                    "Role-based user experience",
                    "Dark/Light theme toggle",
                    "Responsive design",
                    "Interactive project showcase",
                    "Smooth page transitions",
                    "Mobile-first approach"
                ],
                technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox"],
                github: "#"
            },
            Enhanced_Stock_Analysis: {
                title: "Interactive Portfolio Website",
                description: "A Python tool for multi-factor stock evaluation using yfinance. Scores valuation, profitability, growth, health, and technicals; generates reports and short-term predictions. Supports US and international exchanges.",
                features: [
                    "Multi-Factor Stock Evaluation",
                    "Normalized Scoring System",
                    "Broad Market Support",
                    "Performance Optimization",
                    "Comprehensive Reporting",
                    "Technology Stack"
                ],
                technologies: ["Python", "Pandas", "NumPy", "yfinance", "Logging"],
                github: "#"
            }
        };
        // Initialize the application
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user has visited before
            const hasVisited = localStorage.getItem('hasVisited');
            if (!hasVisited) {
                showWelcomeModal();
            } else {
                hideWelcomeModal();
                const savedRole = localStorage.getItem('userRole');
                if (savedRole) {
                    userRole = savedRole;
                    customizeExperience(userRole);
                }
            }
            // Check saved theme
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                currentTheme = savedTheme;
                applyTheme(currentTheme);
            }
        });
        function showWelcomeModal() {
            document.getElementById('welcomeModal').style.display = 'flex';
        }
        function hideWelcomeModal() {
            document.getElementById('welcomeModal').style.display = 'none';
        }
        function selectRole(role) {
            userRole = role;
            localStorage.setItem('userRole', role);
            localStorage.setItem('hasVisited', 'true');
            hideWelcomeModal();
            customizeExperience(role);
            
            // Add welcome message based on role
            setTimeout(() => {
                showRoleWelcomeMessage(role);
            }, 500);
        }
        function customizeExperience(role) {
            const heroContent = document.querySelector('.hero-content');
            const subtitle = heroContent.querySelector('.subtitle');
            
            switch(role) {
                case 'recruiter':
                    subtitle.textContent = 'Technical Analyst & Software Developer - Ready for new opportunities';
                    break;
                case 'colleague':
                    subtitle.textContent = 'Technical Analyst & Software Developer - Let\'s build something amazing together';
                    break;
                case 'student':
                    subtitle.textContent = 'Technical Analyst & Software Developer - Happy to mentor and share knowledge';
                    break;
                case 'visitor':
                    subtitle.textContent = 'Technical Analyst & Software Developer - Welcome to my digital space';
                    break;
            }
        }
        function showRoleWelcomeMessage(role) {
            const messages = {
                recruiter: "Great! I've highlighted my professional experience and key achievements for you.",
                colleague: "Awesome! Feel free to check out my projects and let's connect on GitHub or LinkedIn.",
                student: "Welcome! Don't hesitate to reach out if you have any questions about development or career advice.",
                visitor: "Thanks for stopping by! Take your time exploring my work and background."
            };
            // You could implement a toast notification here
            console.log(messages[role]);
        }
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            // Update navigation
            const navLinks = document.querySelectorAll('.nav-item a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Find and activate current nav link
            const currentLink = document.querySelector(`[onclick="showPage('${pageId}')"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
            currentPage = pageId;
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
            // Add page transition effect
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
        function downloadCV() {
            // In a real implementation, this would download the actual CV
            alert('CV download would start here. Please contact me directly for my resume.');
        }
        function toggleMenu() {
          const menu = document.querySelector(".menu-links");
          const icon = document.querySelector(".hamburger-icon");
          menu.classList.toggle("open");
          icon.classList.toggle("open");}
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
                <div style="text-align: center;">
                    <a href="${project.github}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> View on GitHub
                    </a>
                </div>
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
            
            // Paste the Web app URL you copied from Google Apps Script here
          const scriptURL = 'https://script.google.com/macros/s/AKfycbxCpVzQIU3ULEfd1Z1np3qDbMfyYhHIDgdc0aIs-gMUQQL2EuUwwjW_wn6V5sFxxtXPKw/exec';
          try {
            const response = fetch(scriptURL, {
              method: 'POST',
              mode: 'no-cors', // Important to avoid CORS errors
              headers: {
                'Content-Type': 'application/json',
              },
               body: JSON.stringify(data)
              });
            // We don't get a useful response with 'no-cors', so we just assume success
            alert(`Thank you ${data.name}! Your message has been sent successfully.`);
            form.reset();
          } catch (error) {
            console.error('Error!', error.message);
            alert('An error occurred. Please try again.');
          }
        }
        // Close modals when clicking outside
        document.addEventListener('click', function(event) {
            const welcomeModal = document.getElementById('welcomeModal');
            const projectModal = document.getElementById('projectModal');
            
            if (event.target === welcomeModal) {
                // Don't allow closing welcome modal by clicking outside on first visit
                if (localStorage.getItem('hasVisited')) {
                    hideWelcomeModal();
                }
            }
            
            if (event.target === projectModal) {
                closeProjectModal();
            }
        });
        // Add smooth scrolling for better UX
        document.documentElement.style.scrollBehavior = 'smooth';
        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease';
        });