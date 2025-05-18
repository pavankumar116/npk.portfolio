
//Start About page 

// Open popup and load about.html
    function openAboutPopup() {
      document.getElementById("about-popup").style.display = "block";

      fetch('about.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("about-popup-body").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("about-popup-body").innerText = "Failed to load content.";
        });
    }

    // Close popup
    function closeAboutPopup() {
      document.getElementById("about-popup").style.display = "none";
    }

    // ✅ Close popup when clicking outside the content box
    window.addEventListener("click", function(event) {
      const popup = document.getElementById("about-popup");
      const content = document.getElementById("about-popup-content");

      // If popup is open and click is outside content box, close it
      if (event.target === popup) {
        closeAboutPopup();
      }
    });

    /// End about page


//Start skills page 

// Open popup and load skills.html
    function openSkillsPopup() {
      document.getElementById("skills-popup").style.display = "block";

      fetch('skills.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("skills-popup-body").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("skills-popup-body").innerText = "Failed to load content.";
        });
    }

    // Close popup
    function closeSkillsPopup() {
      document.getElementById("skills-popup").style.display = "none";
    }

    // ✅ Close popup when clicking outside the content box
    window.addEventListener("click", function(event) {
      const popup = document.getElementById("skills-popup");
      const content = document.getElementById("skills-popup-content");

      // If popup is open and click is outside content box, close it
      if (event.target === popup) {
        closeSkillsPopup();
      }
    });

    /// End about page

    //start Skills  - popup js 
    function toggleDesc(btn) {
      const desc = btn.nextElementSibling;
      if (desc.style.display === "block") {
        desc.style.display = "none";
        btn.textContent = "+";
      } else {
        desc.style.display = "block";
        btn.textContent = "−";
      }
    }
    // end skills - popup js 


    // start popup projects page

    // Open popup and load projects.html
    function openProjectsPopup() {
      document.getElementById("projects-popup").style.display = "block";

      fetch('Projects.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("projects-popup-body").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("projects-popup-body").innerText = "Failed to load content.";
        });
    }

    // Close popup
    function closeProjectsPopup() {
      document.getElementById("projects-popup").style.display = "none";
    }

    // ✅ Close popup when clicking outside the content box
    window.addEventListener("click", function(event) {
      const popup = document.getElementById("projects-popup");
      const content = document.getElementById("projects-popup-content");

      // If popup is open and click is outside content box, close it
      if (event.target === popup) {
        closeProjectsPopup();
      }
    });

    /// End projects popup page 



// start popup achievements page

    // Open popup and load projects.html
    function openAchievementsPopup() {
      document.getElementById("achievements-popup").style.display = "block";

      fetch('achievements.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("achievements-popup-body").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("achievements-popup-body").innerText = "Failed to load content.";
        });
    }

    // Close popup
    function closeAchievementsPopup() {
      document.getElementById("achievements-popup").style.display = "none";
    }

    // ✅ Close popup when clicking outside the content box
    window.addEventListener("click", function(event) {
      const popup = document.getElementById("achievements-popup");
      const content = document.getElementById("achievements-popup-content");

      // If popup is open and click is outside content box, close it
      if (event.target === popup) {
        closeAchievementsPopup();
      }
    });

    /// End achievements popup page





// start popup contact page

    // Open popup and load projects.html
    function openContactPopup() {
      document.getElementById("contact-popup").style.display = "block";

      fetch('contact.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("contact-popup-body").innerHTML = data;
        })
        .catch(() => {
          document.getElementById("contact-popup-body").innerText = "Failed to load content.";
        });
    }

    // Close popup
    function closeContactPopup() {
      document.getElementById("contact-popup").style.display = "none";
    }

    // ✅ Close popup when clicking outside the content box
    window.addEventListener("click", function(event) {
      const popup = document.getElementById("contact-popup");
      const content = document.getElementById("contact-popup-content");

      // If popup is open and click is outside content box, close it
      if (event.target === popup) {
        closeContactPopup();
      }
    });

    /// End contact popup page


    //// projects page starts ########################################### 

    fetch('https://script.google.com/macros/s/AKfycbxFXe0Sr9penYCSNt8I0CRhMwTOyDoPhA9xkMkEI0ux9BVL4Ku3di27dDw0LBym87OH/exec')
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById('projects');
        data.forEach(project => {
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="skill">
                    <strong>${project.title}</strong>
                            <button onclick="toggleDesc(this)">+</button>
                            <div class="description">
                                <ul class="no-dots">
                                    <li>${project.description}</li>
                                    <li><a href="${project.link}" target="_blank">View Project</a> </li>
                                </ul>
                            </div>
                        </div>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => {
        console.error('Error loading projects:', err);
      });
    
//// projects page ends ########################################### 


   