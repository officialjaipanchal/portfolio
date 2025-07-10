// script.js - Updated for separate pages
document.addEventListener("DOMContentLoaded", function () {
  // Project card click handling (only for projects.html)
  document.querySelectorAll(".project-card").forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", function (e) {
      // Prevent navigation if 'Read more' link is clicked
      if (e.target.classList.contains("read-more")) {
        return;
      }
      // Get the project name as used in the 'Read more' link
      const readMore = card.querySelector(".read-more");
      if (readMore && readMore.getAttribute("href")) {
        window.location.href = readMore.getAttribute("href");
      }
    });
  });
});

// Responsive animated colorful dots background
(function () {
  const canvas = document.getElementById("bg-dots-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  let mouse = { x: width / 2, y: height / 2 };

  // Responsive dot configuration
  function getDotConfig() {
    const screenArea = width * height;
    const isMobile = width <= 768;
    const isTablet = width > 768 && width <= 1024;
    const isLandscape = width > height;

    let dotsCount, maxRadius, speedMultiplier, mouseEffectRadius;

    if (isMobile) {
      dotsCount = Math.floor(screenArea / 40000); // Fewer dots on mobile
      maxRadius = 1.5;
      speedMultiplier = 0.3; // Slower on mobile for better performance
      mouseEffectRadius = 80;
    } else if (isTablet) {
      dotsCount = Math.floor(screenArea / 35000);
      maxRadius = 2;
      speedMultiplier = 0.5;
      mouseEffectRadius = 100;
    } else {
      dotsCount = Math.floor(screenArea / 30000); // More dots on desktop
      maxRadius = 2.5;
      speedMultiplier = 0.8;
      mouseEffectRadius = 120;
    }

    // Adjust for landscape orientation
    if (isLandscape && isMobile) {
      dotsCount = Math.floor(dotsCount * 0.7); // Fewer dots in landscape
      mouseEffectRadius = 60;
    }

    // Ensure minimum and maximum dots
    dotsCount = Math.max(20, Math.min(dotsCount, 100));

    return { dotsCount, maxRadius, speedMultiplier, mouseEffectRadius };
  }

  const colors = [
    "#7ecfff",
    "#ffb347",
    "#ff5eae",
    "#7fff7e",
    "#ffd47e",
    "#7eafff",
    "#ff7e7e",
  ];

  let dots = [];
  let animationId;
  let config = getDotConfig();

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Recalculate dot configuration on resize
    config = getDotConfig();

    // Recreate dots with new configuration
    createDots();
  }

  function createDots() {
    dots = [];
    for (let i = 0; i < config.dotsCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1 + Math.random() * config.maxRadius,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * config.speedMultiplier,
        dy: (Math.random() - 0.5) * config.speedMultiplier,
      });
    }
  }

  window.addEventListener("resize", resize);
  window.addEventListener("orientationchange", () => {
    // Wait for orientation change to complete
    setTimeout(resize, 100);
  });

  // Throttle resize events for better performance
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resize, 250);
  });

  canvas.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Touch support for mobile
  canvas.addEventListener("touchmove", function (e) {
    e.preventDefault();
    const touch = e.touches[0];
    mouse.x = touch.clientX;
    mouse.y = touch.clientY;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    for (let dot of dots) {
      // Mouse effect: dots near mouse grow and brighten
      let dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
      let maxDist = config.mouseEffectRadius;
      let grow = dist < maxDist ? 1 + (1 - dist / maxDist) * 1.5 : 1;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.r * grow, 0, Math.PI * 2);

      // Adjust opacity based on distance and device performance
      const baseOpacity = dist < maxDist ? "cc" : "88";
      ctx.fillStyle = dot.color + baseOpacity;

      // Add shadow effect (reduced on mobile for performance)
      if (dist < maxDist && width > 768) {
        ctx.shadowColor = dot.color;
        ctx.shadowBlur = 8;
      } else {
        ctx.shadowBlur = 0;
      }

      ctx.fill();
      ctx.shadowBlur = 0;

      // Move dots
      dot.x += dot.dx;
      dot.y += dot.dy;

      // Bounce off edges with smooth wrapping
      if (dot.x < 0) dot.x = width;
      if (dot.x > width) dot.x = 0;
      if (dot.y < 0) dot.y = height;
      if (dot.y > height) dot.y = 0;
    }

    animationId = requestAnimationFrame(draw);
  }

  // Initialize
  resize();
  draw();

  // Cleanup on page unload
  window.addEventListener("beforeunload", () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });

  // Pause animation when tab is not visible (save battery)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    } else {
      if (!animationId) {
        draw();
      }
    }
  });
})();

// Toggle function for expandable sections
function toggleSection(sectionId) {
  const content = document.getElementById(sectionId);
  const header = content.previousElementSibling;
  const icon = header.querySelector(".expand-icon");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    icon.textContent = "−";
    icon.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "none";
    icon.textContent = "+";
    icon.style.transform = "rotate(0deg)";
  }
}

// Toggle function for job descriptions
function toggleDescription(descriptionId) {
  const content = document.getElementById(descriptionId);
  const header = content.previousElementSibling;
  const icon = header.querySelector(".expand-icon");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    icon.textContent = "−";
    icon.style.transform = "rotate(0deg)";
  } else {
    content.style.display = "none";
    icon.textContent = "+";
    icon.style.transform = "rotate(0deg)";
  }
}

// Experience modal functions
function showExperienceModal(jobTitle, company, duration, location, type) {
  const modal = document.getElementById("experience-modal");
  const modalTitle = document.getElementById("modal-job-title");
  const modalCompany = document.getElementById("modal-company");
  const modalDuration = document.getElementById("modal-duration");
  const modalLocation = document.getElementById("modal-location");
  const modalDescription = document.getElementById("modal-description");

  // Set modal content
  modalTitle.textContent = jobTitle;
  modalCompany.textContent = company;
  modalDuration.textContent = duration;
  modalLocation.textContent = location;

  // Set description based on type
  if (type === "software-dev") {
    modalDescription.innerHTML = `
      <ul>
        <li>Developed scalable RESTful APIs using Node.js, Firebase enabling real-time data synchronization for web-applications</li>
        <li>Integrated Firebase Authentication, Cloud Functions, and Firestore, improving login reliability and reducing server-side latency by 25%</li>
        <li>Collaborated across teams to ensure high performance and stability of cross-platform apps, achieving a 20% crash rate reduction</li>
        <li>Led testing and deployment pipelines, implementing CI/CD practices that cut release times by 30% and improved release stability</li>
        <li>Built interactive games using Unity, improving user engagement by 40% through gamified features and smooth UI transitions</li>
        <li>Managed cloud integration with Firebase services for seamless backend operations, contributing to secure architectures</li>
        <li>Conducted regular code reviews, and mentored junior developers, enhancing code quality and team productivity</li>
      </ul>
    `;
  } else if (type === "internship") {
    modalDescription.innerHTML = `
      <ul>
        <li>Designed and deployed an eCommerce backend platform with secure session handling and role management</li>
        <li>Developed admin dashboards using AJAX and Blade templating for inventory and order control</li>
        <li>Enhanced transactional reliability through structured data validation and error handling</li>
        <li>Took the initiative to propose and help design a new course focused on modern frontend development using React.js.</li>

      </ul>
    `;
  } else if (type === "ta-asu") {
    modalDescription.innerHTML = `
      <ul>
        <li>Part-time teaching assistant role focusing on grading and attention to detail</li>
        <li>Mentored students in programming assignments, debugging code, and applying best practices</li>
        <li>Supported courses in software development and IT, helping students strengthen coding and design skills</li>
        <li>Provided guidance on documentation, version control, and testing practices</li>
      </ul>
    `;
  } else if (type === "ta-ganpat") {
    modalDescription.innerHTML = `
      <ul>
        <li>Instructed technical labs focused on web technology and IT peripheral tools</li>
        <li>Employed innovative teaching methods and technologies to keep students engaged and motivated</li>
      </ul>
    `;
  }

  // Show modal
  modal.classList.remove("hidden");
}

function closeExperienceModal() {
  const modal = document.getElementById("experience-modal");
  modal.classList.add("hidden");
}

// Close modal when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("experience-modal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeExperienceModal();
      }
    });
  }
});
