# 🎬 Movie Recommendation App

A full-stack movie recommendation application built with **Spring Boot** (Java) backend and **React.js** frontend, containerized with Docker for easy deployment.

![Movie Recommendation App](https://raw.githubusercontent.com/nodirkh/movie-recommender/refs/heads/main/image.png)

## 🚀 Features

- **Movie Database**: Browse through a curated collection of movies
- **RESTful API**: Clean API endpoints for movie data retrieval
- **Responsive Frontend**: Modern React.js interface
- **Containerized Backend**: Docker support for easy deployment
- **Real-time Recommendations**: Get personalized movie suggestions

## 🛠️ Tech Stack

### Backend
- **Java** with **Spring Boot**
- **RESTful API** architecture
- **Docker** containerization

### Frontend
- **React.js**
- **JavaScript/ES6+**
- **npm** package management

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)
- [Java JDK](https://www.oracle.com/java/technologies/downloads/) (v11 or higher)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/movie-recommendation-app.git
cd movie-recommendation-app
```

### 2. Install Frontend Dependencies
```bash
npm install
```

### 3. Build Docker Image for Backend
```bash
sudo docker build -t movie-recommendation-backend .
```

### 4. Run the Backend Service
```bash
sudo docker run -p 8080:8080 movie-recommendation-backend
```

### 5. Start the Frontend Application
```bash
npm start
```

The frontend will be available at `http://localhost:3000` and will automatically open in your browser.

## 🌐 API Endpoints

### Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/movies` | Retrieve all movies from the database |

### Example API Call
```bash
curl -X GET http://localhost:8080/api/movies
```

## 🧪 Testing

### Manual Testing
1. **Backend Health Check**: Send a GET request to `http://localhost:8080/api/movies`
2. **Frontend Testing**: Navigate to `http://localhost:3000` to interact with the UI
3. **Integration Testing**: Use the frontend to verify API connectivity

### Using curl
```bash
# Test the movies endpoint
curl -X GET http://localhost:8080/api/movies

# Expected response: JSON array of movie objects
```

## 📁 Project Structure

```
movie-recommendation-app/
├── src/                    # React frontend source code
│   └── main/              # Spring Boot backend
├── public/                 # Public assets
├── Dockerfile            # Docker configuration
├── package.json          # Frontend dependencies
├── README.md            # Project documentation
└── image.png            # Application screenshot
```

## 🐳 Docker Commands

```bash
# Build the image
sudo docker build -t movie-recommendation-backend .

# Run the container
sudo docker run -p 8080:8080 movie-recommendation-backend

# Run in detached mode
sudo docker run -d -p 8080:8080 movie-recommendation-backend

# Stop all containers
sudo docker stop $(sudo docker ps -q)
```

## 🚀 Deployment

### Development
1. Follow the installation steps above
2. Backend runs on `http://localhost:8080`
3. Frontend runs on `http://localhost:3000`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**Happy Movie Watching! 🍿**