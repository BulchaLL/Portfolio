    const navbar = document.querySelector(".navbar ul");
    const menuIcon = document.querySelector(".bx-menu");
    const navlnk = document.querySelectorAll(".navlnk");
    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
         menuIcon.classList.toggle("menu");
    });
          

        navlnk.forEach(lnk => {
            lnk.addEventListener("click", 
                () => {
                    navbar.classList.remove("active"); 
                      menuIcon.classList.remove("menu");
                }
            )
          });
      document.addEventListener("click", function(event) {
          if (event.target.closest(".navbar") === null && event.target !== menuIcon) {
              navbar.classList.remove("active");
                menuIcon.classList.remove("menu");
          }
     
      });

       // Smooth Scrolling
          document.querySelectorAll("a[href^='#']").forEach(anchor => {
              anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute("href")).scrollIntoView({
                  behavior: "smooth"
                });
              });
            });
    
        document.getElementById("exploreMyWorkBtn").addEventListener("click", function(){
            const portfolio = document.getElementById("portfolio");
            portfolio.scrollIntoView({
              behavior: "smooth"  
            });

        });

        document.getElementById("readMoreBtn").addEventListener("click", function() {
            const moreText = document.getElementById("moreText");
            const btn = document.getElementById("readMoreBtn");

            if (moreText.style.display === "none") {
                moreText.style.display = "inline";
                btn.textContent = "Read Less";

            } else{
                moreText.style.display = "none";
                btn.textContent = "Read More";
            }
        });

        const hireMeBtn = document.getElementById('hireMeBtn');
        const modal = document.getElementById('cvModal');
        const closeBtn = document.querySelector('.close');

        // Open modal
        hireMeBtn.onclick = () => {
        modal.style.display = 'flex';
        };

        // Close modal
        closeBtn.onclick = () => {
        modal.style.display = 'none';
        };

        // Close modal when clicking outside
        window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
        };



// Portfolio items
const Projects = [
    {
        id: 1,
        image: "images/newconsulting.png",
        title: "Consulting Website",
        discriotion: "A professional business consulting website for Gezahegn Consulting, featuring service listings, team profiles, and a modern, trustworthy look.",
        category: "UI/UX Design",
        link: "https://www.behance.net/gallery/228683047/Gezahegn-Business-Consulting",
    },
    {
        id: 2,
        image: "images/newconstruction.png",
        title: "Construction Website",
        discriotion: "A clean and user-friendly construction company website, focused on project showcases, service details, and easy contact options for clients.",
        category: "UI/UX Design",
        link: "https://bulchall.github.io/MtConstruction/",
    },
    {
        id: 3,
        image: "images/newphotography.png",
        title: "Photography Website",
        discriotion: "A visually engaging photography website, allowing users to browse portfolios, book sessions, and communicate with photographers seamlessly.",
        category: "UI/UX Design",
        link: "https://www.behance.net/gallery/225478483/Abrish-Photography-Website-Design",
    },
    {
        id: 4,
        image: "images/newresiden.png",
        title: "Real Estate Website",
        discriotion: "A responsive real estate website built with modern UI/UX Design, featuring property listings, search filters, and interactive maps.",
        category: "UI/UX Design",
        link: "https://www.behance.net/gallery/225472443/Skyline-Residence-website",
    },
    {
        id: 5,
        image: "images/newmusic.png",
        title: "Music Website",
        discriotion: "A music streaming platform UI/UX Design, allowing users to discover, play, and organize tracks with a sleek and intuitive interface.",
        category: "UI/UX Design",
        link: "https://www.figma.com/file/3k2b1d8j4f8s9d8f8s9d8f/Portfolio-Design?node-id=0%3A1&t=3k2b1d8j4f8s9d8f8s9d8f",
    },
    {
        id: 6,
        image: "images/newclinic.png",
        title: "Clinic Website",
        discriotion: "A modern clinic website design focused on appointment booking, doctor profiles, and patient resources for improved healthcare accessibility.",
        category: "Front End Development",
        link: "https://www.behance.net/gallery/225478483/Abrish-Photography-Website-Design",
    },
];

function displayItem(items) {
    document.querySelector('.cards').innerHTML = items.map(item => `
        <div class="portfolio-item">
            <div class='img-box'>
                <img class='image' src="${item.image}" alt="${item.title}">
            </div>
            <div class="layer">
                <h5>${item.title}</h5>
                <p>${item.discriotion}</p>
                <div class="s-icons">
                    <a href="${item.link}" target="_blank"><i class='bx bx-link-external'></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Show all cards on page load
displayItem(Projects);

        document.getElementById("contact").addEventListener("submit",
            function(event) {
                event.preventDefault();

                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const message = document.getElementById("message").value;

                if (!name || !email || !message ){
                    alert("please fill out the fields dfghjk ");
                    return;
                }
                
                alert(`Thank You, ${name}! your message has been submitted successfully.`);
               

                event.target.reset();
                let textarea = document.getElementById("message");
                textarea.value = '';
            }
            
        

        );



