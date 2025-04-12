document.addEventListener("DOMContentLoaded", function () {
  // Navigation Menu Toggle for Hamburger Icon
  const menuIcon = document.querySelector(".menu-icon");
  const navLinks = document.querySelector(".nav-links");

  if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      // Optional: Toggle "open" class for animation effect
      menuIcon.classList.toggle("open");
    });
  }

  // Gallery Modal Functionality for Existing Gallery
  const galleryImages = document.querySelectorAll('.gallery-image');

  galleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const modalId = image.getAttribute('data-modal'); // Get the modal ID
      const modal = document.getElementById(modalId);   // Find the modal

      if (modal) {
        modal.style.display = 'block'; // Show the modal

        // Close modal when clicking the close button or outside the image
        const closeBtn = modal.querySelector('.close');
        closeBtn.onclick = () => modal.style.display = 'none';
        modal.onclick = (event) => {
          if (event.target === modal) modal.style.display = 'none';
        };
      }
    });
  });

  // Custom Gallery Modal Functionality for "Paniniwala at Gawi"
  const customGalleryImages = document.querySelectorAll('.custom-gallery-image');

  customGalleryImages.forEach(image => {
    image.addEventListener('click', () => {
      const modalId = image.getAttribute('data-modal'); // Get the modal ID
      const modal = document.getElementById(modalId);   // Find the modal

      if (modal) {
        modal.style.display = 'block'; // Show the modal

        // Close modal when clicking the close button or outside the image
        const closeBtn = modal.querySelector('.custom-close');
        closeBtn.onclick = () => modal.style.display = 'none';
        modal.onclick = (event) => {
          if (event.target === modal) modal.style.display = 'none';
        };
      }
    });
  });

  // New Gallery Modal Functionality for 18 Photos
  const photoImages = document.querySelectorAll('.photo-image');

  photoImages.forEach(image => {
    image.addEventListener('click', () => {
      const modalId = image.getAttribute('data-modal'); // Get the modal ID
      const modal = document.getElementById(modalId);   // Find the modal

      if (modal) {
        modal.style.display = 'block'; // Show the modal

        // Close modal when clicking the close button or outside the image
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.onclick = () => modal.style.display = 'none';
        modal.onclick = (event) => {
          if (event.target === modal) modal.style.display = 'none';
        };
      }
    });
  });
});

// Search Function
document.getElementById("search-button").addEventListener("click", function () {
  const searchText = document.getElementById("search-input").value.toLowerCase();
  const content = document.querySelector("main"); // Search inside <main> content
  const sections = content.querySelectorAll(".box, .custom-gallery-card, section"); // Add any wrappers for search

  let foundAny = false;

  // Clear old highlights before searching again
  document.querySelectorAll("mark").forEach((mark) => {
    const parent = mark.parentNode;
    parent.replaceChild(document.createTextNode(mark.textContent), mark);
    parent.normalize(); // Merge adjacent text nodes
  });

  if (searchText.trim() === "") {
    sections.forEach(section => {
      section.style.display = "block"; // Show all sections if search is cleared
    });
    return; // Exit function if no search text
  }

  sections.forEach(section => {
    const text = section.innerText.toLowerCase();

    if (text.includes(searchText)) {
      section.style.display = "block";
      foundAny = true;

      // Highlight matching text inside this section
      const textElements = section.querySelectorAll("p, li, h1, h2, h3");
      textElements.forEach(el => {
        el.innerHTML = el.textContent.replace(
          new RegExp(`(${searchText})`, "gi"),
          "<mark>$1</mark>"
        );
      });
    } else {
      section.style.display = "none";
    }
  });

  if (!foundAny && searchText.trim() !== "") {
    alert("Walang resulta para sa iyong hinanap.");
  }
});

document.getElementById("search-input").addEventListener("input", function () {
  // When the input changes, trigger search
  document.getElementById("search-button").click();
});

document.getElementById("search-input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    document.getElementById("search-button").click();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentPage = decodeURIComponent(window.location.pathname.split('/').pop().split('?')[0]);

  if (!currentPage || currentPage === '') {
    currentPage = 'index.html';
    currentPage = 'Pahayag ng Impormante.html';// fallback if you are on root
  }

  navLinks.forEach(link => {
    let href = link.getAttribute('href').split('?')[0]; // remove params from href too

    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});





