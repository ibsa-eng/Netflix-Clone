

---

```md
# Netflix Clone

A fully functional Netflix Clone built with React and Firebase, replicating the core features of Netflix. Users can browse movies, watch trailers, and filter content by genres. Firebase is used for authentication and real-time data storage.

## Live Demo

Check out the live demo [here](https://netflix-clone-77c80.web.app).

## Features

- User authentication with Firebase (login/signup)
- Dynamic movie data fetching from the TMDB API
- Browse movies by categories (e.g., Trending, Top Rated, Action)
- Watch trailers with YouTube integration
- Responsive design for mobile, tablet, and desktop devices

## Technologies Used

- **Frontend**: React, React Hooks, Axios, CSS Modules
- **Backend**: Firebase Authentication, Firebase Firestore
- **External APIs**: TMDB API for movie data, YouTube API for trailers
- **Hosting**: Firebase Hosting

## Screenshots

### Home Page
![Home Page](./screenshots/home-page.png)

### Movie Trailer
![Movie Trailer](./screenshots/trailer.png)

## Getting Started

Follow the steps below to run this project locally.

### Prerequisites

- **Node.js**: Download and install from [here](https://nodejs.org/).
- **Firebase**: Create a Firebase project for authentication and Firestore.
- **TMDB API**: Sign up at [TMDB](https://www.themoviedb.org/) and get your API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   ```

2. Navigate into the project directory:
   ```bash
   cd netflix-clone
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase and TMDB API keys:
   ```bash
   REACT_APP_TMDB_API_KEY=your-tmdb-api-key
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure

```
netflix-clone/
├── public/
├── src/
│   ├── components/
│   ├── api/
│   ├── hooks/
│   ├── styles/
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── .env
```

## Usage

- **Login/Signup**: Users can sign in or create an account with Firebase Authentication.
- **Browse Movies**: Users can browse movies by various categories such as Trending or Top Rated.
- **Watch Trailers**: Click on a movie poster to view the trailer.

## API Reference

### TMDB API

The project fetches movie data from [The Movie Database (TMDB)](https://www.themoviedb.org/). You'll need an API key from TMDB.

### YouTube API

Movie trailers are fetched using the YouTube API.

## Deployment

This project is hosted on Firebase Hosting. To deploy:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase Hosting:
   ```bash
   firebase init
   ```

4. Deploy the project:
   ```bash
   firebase deploy
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

---

### Customization Steps:
- **Live Demo**:https://netflix-clone-77c80.web.app` 
- **API Keys**: Make sure to set up your `.env` file correctly with your TMDB and Firebase keys.
- **Screenshots**: If you have screenshots, replace the placeholder images or adjust/remove this section if not applicable.


