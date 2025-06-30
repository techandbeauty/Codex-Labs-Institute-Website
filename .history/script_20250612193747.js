// Course data
const courseData = {
    'scratch-storytelling': {
        title: 'Creative Storytelling with Scratch',
        price: 299,
        duration: '8 weeks',
        level: 'Beginner',
        ageGroup: 'Ages 5-8',
        tools: [
            { name: 'Scratch Programming', url: 'https://scratch.mit.edu/' },
            { name: 'Project Gallery', url: '#gallery' },
            { name: 'Story Templates', url: '#templates' }
        ]
    },
    'makecode-games': {
        title: 'Game Development Basics',
        price: 399,
        duration: '10 weeks',
        level: 'Intermediate',
        ageGroup: 'Ages 9-12',
        tools: [
            { name: 'MakeCode Arcade', url: 'https://arcade.makecode.com/' },
            { name: 'Game Assets Library', url: '#assets' },
            { name: 'Sprite Editor', url: '#sprites' }
        ]
    },
    'robotics-microbit': {
        title: 'Robotics & Microcontrollers',
        price: 499,
        duration: '12 weeks',
        level: 'Advanced',
        ageGroup: 'Ages 13-17',
        tools: [
            { name: 'MakeCode micro:bit', url: 'https://makecode.microbit.org/' },
            { name: 'Hardware Simulator', url: '#simulator' },
            { name: 'Robot Control Panel', url: '#robot-control' }
        ]
    },
    'interactive-art': {
        title: 'Interactive Art & Animation',
        price: 349,
        duration: '8 weeks',
        level: 'Intermediate',
        ageGroup: 'Ages 9-12',
        tools: [
            { name: 'Scratch Programming', url: 'https://scratch.mit.edu/' },
            { name: 'Art Resources', url: '#art-resources' },
            { name: 'Animation Tools', url: '#animation' }
        ]
    },
    'logic-puzzles': {
        title: 'Logic & Problem Solving',
        price: 249,
        duration: '6 weeks',
        level: 'Beginner',
        ageGroup: 'Ages 5-8',
        tools: [
            { name: 'Scratch Programming', url: 'https://scratch.mit.edu/' },
            { name: 'Logic Games', url: '#logic-games' },
            { name: 'Puzzle Library', url: '#puzzles' }
        ]
    },
    'teen-web-dev': {
        title: 'Web Development for Teens',
        price: 549,
        duration: '14 weeks',
        level: 'Advanced',
        ageGroup: 'Ages 13-17',
        tools: [
            { name: 'CodePen Online IDE', url: 'https://codepen.io/' },
            { name: 'Web Templates', url: '#templates' },
            { name: 'Developer Tools', url: '#dev-tools' }
        ]
    },
    'python-fundamentals': {
        title: 'Python Fundamentals',
        price: 799,
        duration: '12 weeks',
        level: 'Beginner',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'PyCharm IDE', url: '#pycharm' },
            { name: 'Jupyter Notebooks', url: '#jupyter' },
            { name: 'Python Documentation', url: 'https://docs.python.org/' }
        ]
    },
    'ios-development': {
        title: 'iOS App Development',
        price: 1199,
        duration: '16 weeks',
        level: 'Intermediate',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'Xcode IDE', url: '#xcode' },
            { name: 'iOS Simulator', url: '#ios-simulator' },
            { name: 'Swift Playgrounds', url: '#swift-playgrounds' }
        ]
    },
    'fullstack-web': {
        title: 'Full-Stack Web Development',
        price: 1499,
        duration: '20 weeks',
        level: 'Advanced',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'Visual Studio Code', url: '#vscode' },
            { name: 'CodePen Online IDE', url: 'https://codepen.io/' },
            { name: 'GitHub Codespaces', url: '#codespaces' }
        ]
    },
    'data-science': {
        title: 'Data Science & Analytics',
        price: 999,
        duration: '14 weeks',
        level: 'Intermediate',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'Jupyter Lab', url: '#jupyter-lab' },
            { name: 'Google Colab', url: 'https://colab.research.google.com/' },
            { name: 'Python IDE', url: '#python-ide' }
        ]
    },
    'java-enterprise': {
        title: 'Java Enterprise Development',
        price: 1299,
        duration: '18 weeks',
        level: 'Advanced',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'IntelliJ IDEA', url: '#intellij' },
            { name: 'Spring Tools', url: '#spring-tools' },
            { name: 'Docker Environment', url: '#docker' }
        ]
    },
    'react-frontend': {
        title: 'React & Modern Frontend',
        price: 899,
        duration: '12 weeks',
        level: 'Intermediate',
        ageGroup: 'Ages 18-40',
        tools: [
            { name: 'Visual Studio Code', url: '#vscode' },
            { name: 'React DevTools', url: '#react-devtools' },
            { name: 'CodeSandbox', url: 'https://codesandbox.io/' }
        ]
    }
};

// Program selection and navigation
function showPrograms(type) {
    const pathSelection = document.getElementById('path-selection');
    const miniCatalog = document.getElementById('mini-catalog');
    const nextgenCatalog = document.getElementById('nextgen-catalog');
    
    pathSelection.style.display = 'none';
    
    if (type === 'mini') {
        miniCatalog.style.display = 'block';
        nextgenCatalog.style.display = 'none';
    } else if (type === 'nextgen') {
        nextgenCatalog.style.display = 'block';
        miniCatalog.style.display = 'none';
    }
    
    // Reset filters when switching between catalogs
    clearFilters();
}

function showSelection() {
    const pathSelection = document.getElementById('path-selection');
    const miniCatalog = document.getElementById('mini-catalog');
    const nextgenCatalog = document.getElementById('nextgen-catalog');
    
    pathSelection.style.display = 'block';
    miniCatalog.style.display = 'none';
    nextgenCatalog.style.display = 'none';
}

// Course filtering functionality
function clearFilters() {
    const filterInputs = document.querySelectorAll('.filter-checkbox');
    filterInputs.forEach(input => {
        input.checked = false;
    });
    filterCourses();
}

function filterCourses() {
    const activeFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked'))
        .map(input => input.value.toLowerCase());
    
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach(card => {
        if (activeFilters.length === 0) {
            card.style.display = 'block';
            return;
        }
        
        const cardData = {
            level: card.dataset.level || '',
            tool: card.dataset.tool || '',
            age: card.dataset.age || '',
            language: card.dataset.language || '',
            environment: card.dataset.environment || '',
            type: card.dataset.type || ''
        };
        
        const cardText = card.textContent.toLowerCase();
        const matchesFilter = activeFilters.some(filter => 
            Object.values(cardData).some(value => value.includes(filter)) ||
            cardText.includes(filter)
        );
        
        card.style.display = matchesFilter ? 'block' : 'none';
    });
}

// Course enrollment
function enrollCourse(courseId) {
    const course = courseData[courseId];
    if (!course) {
        alert('Course not found. Please try again.');
        return;
    }
    
    showEnrollmentForm(course, courseId);
}

function showEnrollmentForm(course, courseId) {
    const modal = document.getElementById('enrollment-modal');
    const title = document.getElementById('enrollment-title');
    const summary = document.getElementById('course-summary');
    
    title.textContent = `Enroll in ${course.title}`;
    
    const discountedPrice = Math.round(course.price * 0.9);
    const monthlyPrice = Math.round(course.price / 4);
    
    summary.innerHTML = `
        <h3>${course.title}</h3>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Level:</strong> ${course.level}</p>
        <p><strong>Age Group:</strong> ${course.ageGroup}</p>
        <div class="course-price">$${course.price}</div>
    `;
    
    // Update pricing in the form
    const fullPriceEl = document.getElementById('full-price');
    const installmentPriceEl = document.getElementById('installment-price');
    
    if (fullPriceEl) {
        fullPriceEl.textContent = `$${discountedPrice} (Save $${course.price - discountedPrice})`;
    }
    if (installmentPriceEl) {
        installmentPriceEl.textContent = `$${monthlyPrice}/month`;
    }
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Store course ID for form submission
    modal.dataset.courseId = courseId;
}

function closeEnrollment() {
    const modal = document.getElementById('enrollment-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form
        const form = document.querySelector('.enrollment-form-content');
        if (form) {
            form.reset();
        }
    }
}

// Age-based parent section visibility
function toggleParentSection() {
    const ageSelect = document.getElementById('age');
    const parentSection = document.getElementById('parent-section');
    
    if (!ageSelect || !parentSection) return;
    
    const parentInputs = parentSection.querySelectorAll('input');
    const age = parseInt(ageSelect.value);
    const isMinor = age && age < 18;
    
    parentSection.style.display = isMinor ? 'block' : 'none';
    
    // Toggle required attribute for parent fields
    parentInputs.forEach(input => {
        if (isMinor) {
            input.setAttribute('required', '');
        } else {
            input.removeAttribute('required');
        }
    });
}

// Course preview
function previewCourse(courseId) {
    const course = courseData[courseId];
    if (!course) {
        alert('Course preview not available.');
        return;
    }
    
    const toolsList = course.tools.map(t => t.name).join(', ');
    alert(`Course Preview: ${course.title}\n\nDuration: ${course.duration}\nLevel: ${course.level}\nTools: ${toolsList}\n\nThis preview will include:\n- Sample lessons\n- Learning objectives\n- Project examples\n- Instructor introduction\n\nFull preview coming soon!`);
}

// Canvas LMS simulation
function showCanvas(course) {
    const modal = document.getElementById('canvas-modal');
    const courseTitle = document.getElementById('course-title');
    const toolsContainer = document.getElementById('course-tools');
    
    if (!modal || !courseTitle || !toolsContainer) return;
    
    courseTitle.textContent = course.title;
    
    // Populate development tools
    toolsContainer.innerHTML = '<h3>Development Tools</h3>';
    course.tools.forEach(tool => {
        const toolLink = document.createElement('a');
        toolLink.href = tool.url;
        toolLink.className = 'tool-link';
        toolLink.textContent = `🔗 ${tool.name}`;
        toolLink.target = '_blank';
        toolsContainer.appendChild(toolLink);
    });
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeCanvas() {
    const modal = document.getElementById('canvas-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Form submission
function handleEnrollmentSubmit(event) {
    event.preventDefault();
    
    const modal = document.getElementById('enrollment-modal');
    const courseId = modal.dataset.courseId;
    const course = courseData[courseId];
    
    if (!course) {
        alert('Error: Course information not found');
        return;
    }
    
    // Simulate form processing
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Enrollment successful!\n\nWelcome to ${course.title}!\n\nYou will receive:\n- Course access email within 24 hours\n- Welcome packet with learning materials\n- Calendar invite for orientation session\n\nCheck your email for Canvas login instructions.`);
        
        closeEnrollment();
        
        // Show Canvas simulation
        setTimeout(() => {
            showCanvas(course);
        }, 1000);
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Setup filter functionality
    const filterInputs = document.querySelectorAll('.filter-checkbox');
    filterInputs.forEach(input => {
        input.addEventListener('change', filterCourses);
    });
    
    // Setup age change listener
    const ageSelect = document.getElementById('age');
    if (ageSelect) {
        ageSelect.addEventListener('change', toggleParentSection);
    }
    
    // Setup form submission
    const enrollmentForm = document.querySelector('.enrollment-form-content');
    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', handleEnrollmentSubmit);
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
    }
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle (simplified)
const logo = document.querySelector('.logo');
const navLinks = document.querySelector('.nav-links');

if (window.innerWidth <= 768 && logo && navLinks) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const canvasModal = document.getElementById('canvas-modal');
    const enrollmentModal = document.getElementById('enrollment-modal');
    
    if (canvasModal && e.target === canvasModal) {
        closeCanvas();
    }
    
    if (enrollmentModal && e.target === enrollmentModal) {
        closeEnrollment();
    }
});