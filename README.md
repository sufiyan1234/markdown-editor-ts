# 📝 Markdown Editor (React + TypeScript + Express)

A **real-time Markdown editor** with live preview, built using **React (TypeScript)** for the frontend and **Node.js (Express + TypeScript)** for the backend. The app supports real-time Markdown conversion, error validation, and syntax highlighting.

## 🚀 Features

✔ **Real-time Markdown Preview** – Instantly converts Markdown to HTML.  
✔ **Syntax Validation** – Highlights incorrect Markdown syntax with **red squiggly lines**.  
✔ **Error Boundaries** – Prevents UI crashes by handling errors gracefully.  
✔ **REST API Integration** – Backend handles Markdown conversion using `marked.js`.  
✔ **TypeScript Support** – Ensures type safety and better maintainability.  
✔ **Docker-Ready** – Easily deployable in a **Docker container**.  
✔ **Production-Ready** – Clean structure with optimized builds.

---

## 🚀 How to Clone and Run Locally

### **1️⃣ Clone the Repository**

git clone https://github.com/sufiyan1234/markdown-editor-ts.git
cd markdown-editor-ts

### **2️⃣ Install the backend packages**

cd backend
npm install

### **3️⃣ Install the backend packages**

cd frontend
npm install

### **4️⃣ Start the Backend**

cd backend
npx tsc
node dist/server.js

### **4️⃣ Start the Frontend**

cd frontend
npm start
