// Sidebar
// document.querySelectorAll('.dropdown-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const submenu = button.nextElementSibling;
//         submenu.classList.toggle('show');
//         button.classList.toggle('rotate');
//     });
// });

document.querySelectorAll(".dropdown-btn").forEach((button) => {
  button.addEventListener("click", () => {
    // Close all open submenus and remove rotate class from all buttons
    document.querySelectorAll(".dropdown-btn").forEach((btn) => {
      if (btn !== button) {
        const submenu = btn.nextElementSibling;
        submenu.classList.remove("show");
        btn.classList.remove("rotate");
      }
    });

    // Toggle current submenu and button
    const submenu = button.nextElementSibling;
    submenu.classList.toggle("show");
    button.classList.toggle("rotate");
  });
});
