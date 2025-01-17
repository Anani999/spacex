
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sideBar = document.querySelector('.side-bar');
    const sideBarItems = document.querySelectorAll('.side-bar ul li');
    
    let isSideBarVisible = false;

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        isSideBarVisible = !isSideBarVisible;
        if (isSideBarVisible) {
            sideBar.classList.add('show');
            sideBarItems.forEach((item, index) => {
                item.style.setProperty('--delay', `${index * 0.2}s`);
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';

            });
        } else {
            sideBar.classList.remove('show');
            sideBarItems.forEach((item) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                });

        }
    });



// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the show class when the element is in view
function handleScroll() {
    const elements = document.querySelectorAll('.info');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);

// Initial check in case the elements are already in view
handleScroll();


let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hide');
    } else {
        // Scrolling up
        header.classList.remove('hide');
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});


// Hmaburger 

document.addEventListener('DOMContentLoaded', () => {
    const sidebarItems = document.querySelectorAll('.side-bar ul li');
    const hamburgerMenu = document.querySelector('.hamburger-menu'); // Assuming you have a class for the hamburger menu
  
    // Function to show sidebar items with animation
    const showSidebarItems = () => {
      sidebarItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 200); // Delay each item by 200ms
      });
    };
  
    // Function to make sidebar visible and trigger animations
    const showSidebar = () => {
      document.querySelector('.side-bar ul').style.display = 'block';
      showSidebarItems();
    };
  
    // Event listener for the hamburger menu click
    hamburgerMenu.addEventListener('click', showSidebar);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
  
    const changeHeaderBg = () => {
      if (window.scrollY >= window.innerHeight) {
        header.style.backgroundColor = 'black';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };
  
    window.addEventListener('scroll', changeHeaderBg);
  });
  