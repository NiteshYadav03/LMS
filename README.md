# Genifinity LMS

Genifinity LMS is a full-stack Learning Management System (LMS) built with the MERN stack (MongoDB, Express.js, React, Node.js). It enables educators to create and manage courses, and allows students to enroll, learn, and track their progress in a modern, interactive environment.

---

## Features

### For Students
- **Browse Courses:** Explore a variety of published courses.
- **Course Details:** View course descriptions, chapters, and lectures.
- **Enroll & Learn:** Enroll in courses and access video lectures.
- **Progress Tracking:** Track completed lectures and course progress.
- **Course Ratings:** Rate courses and view average ratings.
- **Testimonials:** Read feedback from other learners.

### For Educators
- **Add Courses:** Create new courses with chapters and lectures.
- **Course Management:** Edit, publish/unpublish, and delete courses.
- **Student Analytics:** View enrolled students and earnings dashboard.

### General
- **Authentication:** Secure login/signup using Clerk.
- **Responsive UI:** Modern, mobile-friendly design.
- **Cloud Storage:** Course thumbnails and lecture videos managed via Cloudinary.
- **Newsletter:** Subscribe for updates (UI only).

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** Clerk
- **File Uploads:** Multer, Cloudinary
- **APIs:** RESTful endpoints for all major actions

---

## Folder Structure

```
client/
  src/
    assets/         # Images, icons, and static assets
    components/     # React components (student & educator)
    context/        # React context for global state
    pages/          # Page-level React components
    index.css       # Global styles (Tailwind + custom)
    main.jsx        # App entry point
  public/
    genifinity.png  # Favicon/logo
  package.json      # Frontend dependencies & scripts

server/
  controllers/      # Express route controllers
  models/           # Mongoose schemas (Course, User, Progress, etc.)
  middlewares/      # Auth and other middleware
  configs/          # DB and cloud configs
  routes/           # Express route definitions
  server.js         # Backend entry point
  package.json      # Backend dependencies & scripts
```

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database (local or Atlas)
- Cloudinary account (for media uploads)
- Clerk account (for authentication)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <repo-url>
   cd LMS
   ```

2. **Setup the backend:**
   ```sh
   cd server
   npm install
   # Configure .env with MongoDB URI, Cloudinary, Clerk secrets, etc.
   npm run dev
   ```

3. **Setup the frontend:**
   ```sh
   cd ../client
   npm install
   # Configure .env with VITE_BACKEND_URL and VITE_CLERK_PUBLISHABLE_KEY
   npm run dev
   ```

4. **Access the app:**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend: [http://localhost:5000](http://localhost:5000) (API)

---

## Environment Variables

### Client (`client/.env`)
```
VITE_BACKEND_URL=http://localhost:5000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

### Server (`server/.env`)
```
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLERK_SECRET_KEY=your_clerk_secret_key
```

---

## Scripts

### Client
- `npm run dev` – Start React app (Vite)
- `npm run build` – Build for production

### Server
- `npm run dev` – Start backend with nodemon
- `npm start` – Start backend (production)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Credits

- [Clerk](https://clerk.com/) for authentication
- [Cloudinary](https://cloudinary.com/) for media storage
- [Vite](https://vitejs.dev/) for fast React development

---

## Screenshots

_Add screenshots or GIFs here to showcase the UI and features._

---

## Contact

For questions or support, please contact [your-email@example.com].
