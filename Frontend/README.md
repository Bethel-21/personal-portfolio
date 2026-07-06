# Bethelhem Daniel – Personal Portfolio

A modern, full-stack portfolio built to showcase my work as a Backend Engineer and AI enthusiast. The project combines a React frontend with a Django REST API backend, featuring a dynamic blog, contact form, and responsive user experience.

## Features

* Modern React + Vite frontend
* Django REST Framework backend
* Dynamic blog powered by a REST API
* Contact form with messages stored in the Django admin dashboard
* Responsive design for desktop, tablet, and mobile
* Dark and light mode support
* Smooth animations with Framer Motion
* TypeScript for improved maintainability
* Tailwind CSS for clean, modern styling

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Framer Motion
* React Router DOM
* Lucide React

### Backend

* Django
* Django REST Framework
* SQLite (development)

## Project Structure

```text
personal-portfolio/
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── blog/
│   ├── contact/
│   ├── core/
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

## Getting Started

### Prerequisites

* Node.js 18+
* Python 3.12+ (or compatible version)
* pip
* Git

### Clone the Repository

```bash
git clone <repository-url>
cd personal-portfolio
```

## Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

To build for production:

```bash
npm run build
```

## Backend Setup

```bash
cd Backend

python -m venv venv

# Activate the virtual environment

# Linux/macOS
source venv/bin/activate

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

## Backend Features

### Contact API

Visitors can submit messages through the contact form. Messages are stored in the Django admin panel for easy management.

### Blog API

Blog posts are managed through Django Admin and served dynamically to the React frontend using Django REST Framework.

## Future Improvements

* Image uploads for blog posts
* Rich text/Markdown editor
* Blog search and categories
* PostgreSQL for production
* User authentication for admin features
* Email notifications for contact submissions

## About

This portfolio reflects my journey from frontend development to backend engineering while documenting projects, technical learning, and experiments in AI. It is designed to evolve as I continue building software and sharing what I learn.

## License

This project is open source and available under the MIT License.
