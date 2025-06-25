document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const contactIcons = document.querySelectorAll('.contact-links img');

    const setLightMode = (isLight) => {
        if (isLight) {
            body.classList.add('light-mode');
            themeToggle.textContent = 'Switch to Dark Mode';
            contactIcons.forEach(icon => {
                icon.classList.add('light-mode-icon');
            });
        } else {
            body.classList.remove('light-mode');
            themeToggle.textContent = 'Switch to Light Mode';
            contactIcons.forEach(icon => {
                icon.classList.remove('light-mode-icon');
            });
        }
    };

    themeToggle.addEventListener('click', () => {
        const isLight = body.classList.contains('light-mode');
        setLightMode(!isLight);
        localStorage.setItem('theme', !isLight ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        setLightMode(true);
    }

    const projects = [
        {
            title: 'Project 1',
            description: 'A brief description of your first project.',
            link: '#'
        },
        {
            title: 'Project 2',
            description: 'A brief description of your second project.',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'A brief description of your third project.',
            link: '#'
        },
        {
            title: 'Project 4',
            description: 'A brief description of your fourth project.',
            link: '#'
        }
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">View Project</a>
        `;
        projectGrid.appendChild(projectCard);
    });
});