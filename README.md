### AI BLog App

A blog platform where only the admin can create and publish posts, and users can interact through comments that are moderated before being visible.

This project focuses on content control, moderation workflows, and clean role-based architecture.


## Features

* 👤 Admin-controlled publishing
  * Only admin can create, edit, and delete blog posts
* 💬 User comments system
  * Users can comment on blog posts
  * Comments are not visible immediately
* ✅ Comment moderation
  * Admin must approve comments before they appear publicly
  * Unapproved comments remain hidden or can be deleted
* 🔐 Authentication & authorization
  * Role-based access (Admin vs Users)
* 🧹 Content management
  * Clean separation between public content and moderated content


##  Project Structure

ai-blog-app/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── BlogCard.jsx
│   │   │   ├── BlogList.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Newsletter.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   │
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── server/
│   ├── configs/
│   │   ├── db.js
│   │   ├── gemini.js
│   │   └── imageKit.js
│   │
│   ├── controllers/
│   │   ├── adminController.js
│   │   └── blogController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── multer.js
│   │
│   ├── models/
│   │   ├── Blog.js
│   │   └── Comment.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   └── blogRoutes.js
│   │
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md


## ⚙️ Installation

# 1. Clone the repository

```bash
git clone https://github.com/Viku4780/ai-blog-app.git
cd ai-blog-app
```

# 2. Install dependencies

```bash
cd client
npm install
cd ..
cd server
npm install
```

## 🔐 Environment Setup

Create a .env file in server:

```env
# Admin credentials
ADMIN_EMAIL = "your_admin_email"
ADMIN_PASSWORD = "your_admin_password"

#mongodb

MONGO_URI = "your_mongodb_url"

# jwt secret
JWT_SECRET = 'your_secret_key'

# Imagekit
IMAGEKIT_PUBLIC_KEY = 'your_imagekit_public_key'
IMAGEKIT_PRIVATE_KEY = 'your_imagekit_private_key'
IMAGEKIT_URL_ENDPOINT = 'your_imagekit_url_endpoint'

# gemini api key
GEMINI_API_KEY = 'your_gemini_api_key'

#port
APP_PORT = your_port_no""

# client link
CLIENT_LINK='http://localhost:5173'
```

Create a .env file in client:

```env
VITE_BASE_URL = your_base_url
```

## Usage

Client
```Bash
npm run dev
```

server
```Bash
npm run server
```

## Application Workflow

# 📝 Blog Creation
1. Admin logs in
2. Admin creates a blog post
3. Post is published and visible to all users

# 💬 Comment Flow
1. User submits a comment
2. Comment is stored as pending
3. Admin reviews the comment:
  * ✅ Approve → comment becomes visible
  * ❌ Reject/Delete → comment stays hidden or removed

# 🧠 Core Concepts Implemented
* Role-based access control (RBAC)
* Moderation pipeline
* CRUD operations for blog posts
* Controlled user-generated content
* Backend-driven validation

# 📌 Use Cases
* Personal blogging platform
* Admin-controlled publishing systems
* Content moderation systems
* Learning full-stack backend architecture

# 🛠️ Tech Stack
* Frontend - React, motion, TailwindCSS, quill, marked and react-hot-toast
* Backend - NodeJS, express , cors, imagekit, mongoose, multer and dotenv
* Database - MongoDB



## 📜 License

This project is licensed under the MIT License.



## 🤝 Contributing

Contributions are welcome:

```Bash
# Fork the repo
# Create a branch
# Make changes
# Submit PR
```


## Contact
* Github: https://github.com/Viku4780


## ⭐ Support

If you like this project:
* ⭐ Star the repo
* 🍴 Fork it
* 💡 Suggest improvements



## 💡 Future Improvements

- ✍️ Allow users to create, edit, and delete their own blog posts
- 🔐 Role-based access control (Admin vs Author vs User)
- ✅ Blog approval system for user-generated content
- 🧑‍💻 User dashboard to manage personal blogs
- 🖋️ Rich text editor (for better content creation)
- 🔑 User authentication with OAuth (Google, GitHub)
- 👍 Like / Dislike system
- 🛡️ Spam detection for comments and blogs
- 📊 Admin dashboard UI for content moderation
