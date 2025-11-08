/* ✅ SIDEBAR COLLAPSE */
const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");

document.getElementById("toggleSidebar").onclick = () => {
  sidebar.classList.toggle("collapsed");
  main.classList.toggle("shrink");
};

/* ✅ DARK MODE */
document.getElementById("darkMode").onclick = () => {
  document.body.classList.toggle("dark");
};

/* ✅ PAGE SWITCHING */
const menuItems = document.querySelectorAll(".menu-item");
const pages = document.querySelectorAll(".page");
const pageTitle = document.getElementById("pageTitle");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    pages.forEach(p => p.classList.remove("active"));
    const pageId = item.getAttribute("data-page");
    document.getElementById(pageId).classList.add("active");

    pageTitle.textContent = item.innerText.trim();
  });
});

/* ✅ USER MODAL */
const modal = document.getElementById("modal");
document.getElementById("addUserBtn").onclick = () => modal.style.display = "flex";
document.getElementById("closeModal").onclick = () => modal.style.display = "none";

/* ✅ ADD USER */
document.getElementById("saveUser").onclick = () => {
  const name = document.getElementById("userName").value;
  const email = document.getElementById("userEmail").value;

  if (!name || !email) {
    alert("All fields required!");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>Active</td>
    <td><button class="deleteBtn">Delete</button></td>
  `;

  document.getElementById("userTable").appendChild(row);
  modal.style.display = "none";

  row.querySelector(".deleteBtn").onclick = () => row.remove();
};

/* ✅ DELETE EXISTING USERS */
document.querySelectorAll(".deleteBtn").forEach(btn => {
  btn.onclick = function () {
    this.parentElement.parentElement.remove();
  };
});

/* ✅ PRODUCT MODAL */
const productModal = document.getElementById("productModal");
document.getElementById("addProductBtn").onclick = () => productModal.style.display = "flex";
document.getElementById("closeProductModal").onclick = () => productModal.style.display = "none";

/* ✅ ADD PRODUCT */
document.getElementById("saveProduct").onclick = () => {
  const pName = document.getElementById("productName").value;
  const pCategory = document.getElementById("productCategory").value;
  const pPrice = document.getElementById("productPrice").value;
  const pStock = document.getElementById("productStock").value;

  if (!pName || !pCategory || !pPrice || !pStock) {
    alert("All fields required!");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${pName}</td>
    <td>${pCategory}</td>
    <td>$${pPrice}</td>
    <td>${pStock}</td>
    <td><button class="deleteProduct">Delete</button></td>
  `;

  document.getElementById("productTable").appendChild(row);
  productModal.style.display = "none";

  row.querySelector(".deleteProduct").onclick = () => row.remove();
};

/* ✅ DELETE EXISTING PRODUCTS */
document.querySelectorAll(".deleteProduct").forEach(btn => {
  btn.onclick = function () {
    this.parentElement.parentElement.remove();
  };
});

/* ✅ REPORTS PAGE – CHARTS */
setTimeout(() => {
  const salesChart = new Chart(document.getElementById("salesChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
        label: "Sales ($)",
        data: [3000, 5000, 7000, 6000, 9000],
        backgroundColor: ["#2563eb"]
      }]
    }
  });

  const userChart = new Chart(document.getElementById("userChart"), {
    type: "pie",
    data: {
      labels: ["Active", "Inactive"],
      datasets: [{
        data: [80, 20],
        backgroundColor: ["#10b981", "#ef4444"]
      }]
    }
  });
}, 500);
