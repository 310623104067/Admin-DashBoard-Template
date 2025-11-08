# Admin-DashBoard-Template
1. Login System
HTML Form: Username and password fields with a login button.

JS Validation:

On submit, check if entered credentials match predefined ones (Karthik, Karthik@2005).

If correct, redirect to dashboard and store login status in localStorage.

If incorrect, show error message.

Session Persistence: Use localStorage.setItem("isLoggedIn", true) to keep user logged in across refreshes.

💾 2. LocalStorage for Users & Products
Saving Data:

On adding/editing users/products, update localStorage with JSON.stringify(dataArray).

Loading Data:

On page load, check localStorage.getItem("users") or "products" and parse it.

Persistence: Ensures data remains even after browser refresh or tab close.

📊 3. Weekly Revenue Graph
Library: Use Chart.js or Google Charts.

Data Source: Pull weekly revenue from localStorage or hardcoded array.

Chart Type: Line or bar chart showing revenue per day.

Dynamic Update: Re-render chart when new revenue data is added.

🔍 4. Search & Filter
Search Bar: Input field above user/product tables.

JS Logic:

On keyup, filter table rows by matching input with name/email/product.

Filter Options: Dropdowns for category, status, etc.

Combined Filters: Apply both search and dropdown filters together using array .filter().

📤 5. Export to PDF / Excel
PDF Export:

Use jsPDF or html2pdf.js to convert table HTML to downloadable PDF.

Excel Export:

Use SheetJS (xlsx library) to convert table data to .xlsx format.

Buttons: Add “Export to PDF” and “Export to Excel” buttons above each table.

🧠 6. Dashboard Architecture
Pages:

login.html: Login form

dashboard.html: Main admin panel

Sections:

Sidebar: Navigation (Users, Products, Revenue)

Main Panel: Tables, Charts, Search, Export

JS Modules:

auth.js: Login logic

storage.js: LocalStorage handlers

charts.js: Revenue graph

table.js: Search, filter, export

CSS:

Responsive layout with Flexbox/Grid

Dark/light mode toggle (optional)
