function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
  }
  
  function changeIcon1(anchor) {
    var icon = anchor.querySelector("i");
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
    anchor.closest('.side-nav-wrapper').classList.toggle('active');
  }