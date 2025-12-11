 function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.classList.toggle('expanded');
        }

        function showProject(projectId) {
            document.getElementById('portfolio-view').style.display = 'none';
            document.getElementById('project-detail-view').classList.add('active');
            window.scrollTo(0, 0);
            
            const projects = {
                drawing1: {
                    title: 'Série de portraits',
                    meta: 'Dessin traditionnel | 2024',
                    description: 'Cette série explore les expressions humaines à travers le dessin traditionnel. En utilisant diverses techniques de crayonnage et d\'ombrage, j\'ai cherché à capturer l\'essence émotionnelle de chaque sujet.'
                },
                animation1: {
                    title: 'Court métrage animé',
                    meta: 'Animation 2D, After Effects | 2023',
                    description: 'Un court métrage d\'animation explorant les thèmes de la mémoire et de l\'identité culturelle. Créé avec After Effects et Premiere Pro, ce projet combine narration visuelle et design sonore.'
                },
                web1: {
                    title: 'Site portfolio CV',
                    meta: 'HTML, CSS, JavaScript | 2025',
                    description: 'Un site portfolio responsive mettant en valeur mon parcours professionnel. Le design minimaliste met l\'accent sur la lisibilité et l\'expérience utilisateur, avec une attention particulière à l\'accessibilité.'
                }
            };
            
            if (projects[projectId]) {
                document.getElementById('project-title').textContent = projects[projectId].title;
                document.getElementById('project-meta').textContent = projects[projectId].meta;
                document.getElementById('project-description').textContent = projects[projectId].description;
            }
        }

        function hideProject() {
            document.getElementById('portfolio-view').style.display = 'block';
            document.getElementById('project-detail-view').classList.remove('active');
            window.scrollTo(0, 0);
        }