function addToCart() {
  let count = document.getElementById('cart-count');
  count.textContent = parseInt(count.textContent) + 1;
  showToast();
}
function showToast() {
  let toast = document.getElementById("toast");
  toast.className = "toast show";
  setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}
document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
