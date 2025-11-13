# 🌍 Import Export Hub  

### 🚀 Live Website: [https://import-export-hub-nk.netlify.app/](https://import-export-hub-nk.netlify.app/)  
### 🌐 Server Hosted on: [https://import-export-hub-api-server-ftj3klzdb-nilandus-projects.vercel.app](https://import-export-hub-api-server-ftj3klzdb-nilandus-projects.vercel.app)

---

## 📖 Project Overview  

**Import Export Hub** is a modern web platform designed to simplify global trade management. Users can browse exportable products, import items directly into their personal dashboard, and manage exports with ease — all within a single, secure, and responsive web application.  

This is a **single-page application (SPA)** built with a clean and modern UI, real-time synchronization, and Firebase authentication for secure user management.

---

## ✨ Key Features  

- 🔐 **Secure Authentication System:**  
  Register, log in, and authenticate with Google using Firebase Auth. Users remain logged in on reload without redirection issues.

- 🏷️ **Product Management:**  
  Browse global export products, view product details, and import desired items instantly with stock validation.

- 📦 **My Imports Dashboard:**  
  Manage all imported products — view, track, or remove them directly with real-time database updates.

- 🚚 **My Exports Dashboard:**  
  Add, update, and delete export products with live UI sync. The update form uses a dynamic modal for editing.

- 🧭 **Clean Navigation System:**  
  Includes routes for Home, All Products, My Exports, My Imports, and Add Export pages — with a responsive header and footer.

- 💬 **Custom Toast Notifications:**  
  All success/error messages use custom toast alerts instead of browser default alerts.

- 🌈 **Responsive & Modern Design:**  
  Fully responsive layout with smooth transitions and a user-friendly interface across all devices.

---

## 🏗️ Tech Stack  

### **Frontend (Client Side)**  
- ⚛️ React (Vite)  
- 🧭 React Router DOM  
- 🔥 Firebase Authentication  
- 🍞 React Hot Toast / SweetAlert2 for notifications  
- 🎨 Tailwind CSS for styling  

### **Backend (Server Side)**  
- 🟢 Node.js  
- ⚙️ Express.js  
- 🍃 MongoDB with Mongoose for database  
- 🔐 JWT for route protection  
- 🪄 dotenv, cors, and middleware for secure configuration  

---

## ⚙️ Functional Routes  

| Route | Description | Access |
|-------|--------------|--------|
| `/` | Home page with banner & latest 6 products | Public |
| `/all-products` | Browse all available export products | Public |
| `/product/:id` | Product details & Import option | Private |
| `/my-imports` | View and manage imported products | Private |
| `/my-exports` | View, edit, and delete exported products | Private |
| `/add-export` | Add new product to exports | Private |
| `/login` | Login page | Public |
| `/register` | Register page | Public |

---

## 🔒 Private Route Rules  

- Access restricted to logged-in users only.  
- JWT token authentication used on server routes.  
- Logged-in users remain on their pages even after reloading.  

---

## 🧑‍💻 Deployment  

- **Client:** Deployed on **Netlify / Firebase / Surge**  
- **Server:** Hosted on **Vercel**  
- **Database:** MongoDB Atlas (Cloud Database)  

---

## 📝 Commit Guidelines  

- **Client Side:** Minimum **15+ notable commits** (e.g., feature implementation, layout updates, route setup).  
- **Server Side:** Minimum **8+ notable commits** (e.g., API routes, database integration, authentication setup).  

---

## 📞 Contact  

**Developed by:** [Nilandu Kumar Das]  
**Email:** nknilandu@gmail.com 


---

✅ *This project follows all assignment requirements — including authentication, hosting, CRUD operations, and responsive SPA routing without reload errors.*
