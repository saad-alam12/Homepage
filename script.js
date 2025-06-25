document.addEventListener('DOMContentLoaded', () => {
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