// MOBILE MENU


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');

    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

// SMOOTH SCROLL

document.querySelectorAll('a[href*="#"]').forEach(link => {

  link.addEventListener('click', function (e) {

    const href = this.getAttribute('href');

    if (href.includes('#')) {

      const id = href.split('#')[1];

      const target = document.getElementById(id);

      if (target && window.location.pathname === this.pathname) {

        e.preventDefault();

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        navLinks?.classList.remove('open');

      }

    }

  });

});

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

  if (!navbar) return;

  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

});

// REVEAL ANIMATION

const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 80) {
      element.classList.add('active');
    }

  });

};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// BACK TO TOP

const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {

  if (!backToTop) return;

  if (window.scrollY > 250) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }

});

if (backToTop) {

  backToTop.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}

// ACTIVE NAV LINK

const activePage =
window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.nav-links a').forEach(link => {

  const linkPage = link.getAttribute('href').split('#')[0];

  if (linkPage === activePage) {
  link.classList.add('active');
}

});

// FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const question = item.querySelector('.faq-question');

  if (question) {

    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });

  }

});

// TESTIMONIAL SLIDER

const testimonialSlider =
document.getElementById('testimonialSlider');

if (testimonialSlider) {

  const testimonialCards =
  testimonialSlider.querySelectorAll('.testimonial-card');

  if (testimonialCards.length > 1) {

    let testimonialIndex = 0;

    setInterval(() => {

      testimonialCards[testimonialIndex]
      .classList.remove('active');

      testimonialIndex =
      (testimonialIndex + 1) % testimonialCards.length;

      testimonialCards[testimonialIndex]
      .classList.add('active');

    }, 3500);

  }

}

// COUNTERS

const counters = document.querySelectorAll('.counter');

const runCounters = () => {

  counters.forEach(counter => {

    const target =
    +counter.getAttribute('data-target');

    const speed = 50;

    const updateCount = () => {

      const count = +counter.innerText;

      const increment = Math.ceil(target / speed);

      if (count < target) {

        counter.innerText =
        count + increment > target
        ? target
        : count + increment;

        setTimeout(updateCount, 35);

      } else {

        if (target === 120) {
          counter.innerText = target + '%';
        } else if (target === 8) {
          counter.innerText = target + '/10';
        } else if (target === 30) {
          counter.innerText = target + '+';
        }

      }

    };

    updateCount();

  });

};

window.addEventListener('load', runCounters);

// CONTACT FORM VALIDATION

const contactForm =
document.getElementById('contactForm');

if (contactForm) {

  contactForm.addEventListener('submit', function (e) {

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const errors =
    contactForm.querySelectorAll('.form-error');

    errors.forEach(error => error.textContent = '');

    let isValid = true;

    if (!name.value.trim()) {

      name.nextElementSibling.textContent =
      'Please enter your full name.';

      isValid = false;

    }

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {

      email.nextElementSibling.textContent =
      'Please enter your email.';

      isValid = false;

    } else if (!emailPattern.test(email.value.trim())) {

      email.nextElementSibling.textContent =
      'Please enter a valid email address.';

      isValid = false;

    }

    if (!message.value.trim()) {

      message.nextElementSibling.textContent =
      'Please enter your project details.';

      isValid = false;

    }

    if (!isValid) {
      e.preventDefault();
    }

  });

}

// DARK MODE

const themeToggle =
document.getElementById('themeToggle');

if (themeToggle) {

  if (localStorage.getItem('theme') === 'dark') {

    document.body.classList.add('dark-mode');

    themeToggle.innerHTML = '☀️';

  } else {

    themeToggle.innerHTML = '🌙';

  }

  themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {

      localStorage.setItem('theme', 'dark');

      themeToggle.innerHTML = '☀️';

    } else {

      localStorage.setItem('theme', 'light');

      themeToggle.innerHTML = '🌙';

    }

  });

}
const userContainer = document.getElementById("userData");

console.log("JS FILE CONNECTED");

userContainer.innerHTML = `
  <div style="
    color:white;
    padding:30px;
    font-size:24px;
  ">
    TEST SUCCESS 😄🔥
  </div>
`;

 

window.addEventListener("load", function () {

  const loader = document.querySelector(".loader-wrapper");

  if (loader) {
    loader.style.display = "none";
  }

});






const saveButtons =
document.querySelectorAll(".save-btn");

saveButtons.forEach(button => {

  button.addEventListener("click", function () {

    const serviceName =
    this.parentElement.querySelector("h3").innerText;

    
    let savedServices =
    JSON.parse(
      localStorage.getItem("savedServices")
    ) || [];


    if(!savedServices.includes(serviceName)){

      savedServices.push(serviceName);

      localStorage.setItem(
        "savedServices",
        JSON.stringify(savedServices)
      );

      alert(serviceName + " saved!");

    } else {

      alert("Service already saved!");

    }

    showSavedServices();

  });

});
const savedText =
document.getElementById("savedServiceText");
if(savedText){

  showSavedServices();

}

function showSavedServices(){

  if(!savedText) return;

  let savedServices =
  JSON.parse(
    localStorage.getItem("savedServices")
  ) || [];

  if(savedServices.length > 0){

    savedText.innerHTML =
    savedServices.join("<br>");

  } else {

    savedText.innerText =
    "No service saved yet";

  }

}

showSavedServices();
const removeBtn =
document.getElementById("removeServiceBtn");

if(removeBtn){

  removeBtn.addEventListener("click", function(){

    localStorage.removeItem("savedServices");

    showSavedServices();

    alert("All saved services removed!");

  });

}
const detailsButtons =
document.querySelectorAll(".details-btn");

const modal =
document.getElementById("serviceModal");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const closeModal =
document.getElementById("closeModal");

if(modal && closeModal){

  detailsButtons.forEach(button => {

    button.addEventListener("click", function(){

      const serviceCard =
      this.parentElement;

      const serviceName =
      serviceCard.querySelector("h3").innerText;

      modalTitle.innerText =
      serviceName;

      modalDescription.innerText =
      serviceName +
      " is one of our premium digital marketing services designed to help businesses grow faster.";

      modal.classList.add("active");

    });

  });

  closeModal.addEventListener("click", function(){

    modal.classList.remove("active");

  });

  modal.addEventListener("click", function(e){

    if(e.target === modal){

      modal.classList.remove("active");

    }

  });

}
const filterBtns =
document.querySelectorAll(".filter-btn");

const portfolioCards =
document.querySelectorAll(".portfolio-card");

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const filter =
    btn.dataset.filter;

    portfolioCards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {

        card.style.display = "block";

      } else {

        card.style.display = "none";

      }

    });

  });

});
let allUsers = [];

let currentPage = 1;

const usersPerPage = 5;

const loadUsersBtn =
document.getElementById("loadUsersBtn");

const apiUsers =
document.getElementById("apiUsers");

const loader =
document.getElementById("loader");

const errorMessage =
document.getElementById("errorMessage");

const searchInput =
document.getElementById("searchInput");

const prevBtn =
document.getElementById("prevBtn");

const nextBtn =
document.getElementById("nextBtn");

const pageNumber =
document.getElementById("pageNumber");

const userModal =
document.getElementById("userModal");

const closeUserModal =
document.getElementById("closeUserModal");

const userModalTitle =
document.getElementById("userModalTitle");

const userModalInfo =
document.getElementById("userModalInfo");

const sortAZ =
document.getElementById("sortAZ");

const sortZA =
document.getElementById("sortZA");

function renderUsers(users){

  apiUsers.innerHTML = "";

  const start =
  (currentPage - 1) * usersPerPage;

  const end =
  start + usersPerPage;

  const paginatedUsers =
  users.slice(start, end);

  paginatedUsers.forEach(user => {

    apiUsers.innerHTML += `
      <div class="service-card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.phone}</p>

  <button
    class="delete-user-btn"
    data-id="${user.id}">
    Delete User
  </button>

<button
  class="view-user-btn"
  data-id="${user.id}">
  View Details
</button>

      </div>
    `;

  });

  pageNumber.innerText =
  `Page ${currentPage}`;

  const deleteButtons =
document.querySelectorAll(
  ".delete-user-btn"
);

deleteButtons.forEach(button => {

  button.addEventListener("click", () => {

    const userId =
    Number(
      button.dataset.id
    );

    allUsers =
    allUsers.filter(user =>
      user.id !== userId
    );

    renderUsers(allUsers);

  });

});

const viewButtons =
document.querySelectorAll(
  ".view-user-btn"
);

viewButtons.forEach(button => {

  button.addEventListener("click", () => {

    const userId =
    Number(button.dataset.id);

    const selectedUser =
    allUsers.find(user =>
      user.id === userId
    );

    userModalTitle.innerText =
    selectedUser.name;

    userModalInfo.innerHTML = `
      <strong>Email:</strong>
      ${selectedUser.email}
      <br><br>

      <strong>Phone:</strong>
      ${selectedUser.phone}
      <br><br>

      <strong>Website:</strong>
      ${selectedUser.website}
      <br><br>

      <strong>Company:</strong>
      ${selectedUser.company.name}
      <br><br>

      <strong>City:</strong>
      ${selectedUser.address.city}
    `;

    userModal.classList.add("active");

  });

});

}

if(loadUsersBtn){

  loadUsersBtn.addEventListener("click", () => {

    errorMessage.innerHTML = "";

    loader.style.display = "block";

    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    .then(users => {

      allUsers = users;

      currentPage = 1;

      loader.style.display = "none";

      renderUsers(allUsers);

    })

    .catch(error => {

      loader.style.display = "none";

      errorMessage.innerHTML =
      "❌ Failed to load users. Please try again.";

    });

  });

}

if(searchInput){

  searchInput.addEventListener("input", function(){

    const value =
    this.value.toLowerCase();

    const filteredUsers =
    allUsers.filter(user => {

      return user.name
      .toLowerCase()
      .includes(value);

    });

    currentPage = 1;

    renderUsers(filteredUsers);

  });

}

if(nextBtn){

  nextBtn.addEventListener("click", () => {

    const totalPages =
    Math.ceil(
      allUsers.length /
      usersPerPage
    );

    if(currentPage < totalPages){

      currentPage++;

      renderUsers(allUsers);

    }

  });

}

if(prevBtn){

  prevBtn.addEventListener("click", () => {

    if(currentPage > 1){

      currentPage--;

      renderUsers(allUsers);

    }

  });

}

if(sortAZ){

  sortAZ.addEventListener("click", () => {

    allUsers.sort((a,b) =>
      a.name.localeCompare(b.name)
    );

    currentPage = 1;

    renderUsers(allUsers);

  });

}

if(sortZA){

  sortZA.addEventListener("click", () => {

    allUsers.sort((a,b) =>
      b.name.localeCompare(a.name)
    );

    currentPage = 1;

    renderUsers(allUsers);

  });

}

if(closeUserModal){

  closeUserModal.addEventListener(
    "click",
    () => {

      userModal.classList.remove(
        "active"
      );

    }
  );

}