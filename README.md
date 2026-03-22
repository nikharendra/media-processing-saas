# 🚀 Media Processing SaaS

A full-stack SaaS application that allows users to upload, compress, transform, and download images & videos using cloud-based processing.

---

## 🧠 Features

* 📤 Upload images and videos
* 🎯 Automatic compression & optimization
* 🖼️ Image transformation (resize, crop, aspect ratio)
* 🎥 Video preview generation
* 📥 Download optimized media
* 🔐 User authentication
* 📊 File size comparison (original vs compressed)

---

## 🛠️ Tech Stack

* **Frontend & Backend:** Next.js
* **Styling:** Tailwind CSS + DaisyUI
* **Media Processing:** Cloudinary
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** Clerk
* **HTTP Client:** Axios

---

## ⚙️ How It Works

1. User uploads media
2. File is sent to backend API
3. Cloudinary stores & processes media
4. Metadata stored in database
5. Media is displayed with transformations
6. User can preview and download optimized version

---

## 🔗 Live Demo

👉 https://your-live-link.vercel.app

---

## 📂 Project Structure

```
app/
 ├── api/
 │    ├── image-upload/
 │    └── video-upload/
 ├── components/
 │    └── VideoCard.tsx
 ├── (pages)
lib/
 └── prisma.ts
```

---

## 🧪 Environment Variables

Create `.env.local`:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
DATABASE_URL=your_database_url
```

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```

---

## 📸 Screenshots

![App Screenshot](./public/images/screenshot.png)

---

## 📌 Key Learnings

* Cloud-based media transformation using URL parameters
* Handling large file uploads efficiently
* Full-stack development with Next.js
* Debugging real-world integration issues

---

## 👨‍💻 Author

Harendra Singh Yadav
GitHub: https://github.com/nikharendra
