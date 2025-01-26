import './App.css';
import React, { useState } from 'react';
import HeroBlock from './components/HeroBlock';
import IntroBlock from './components/IntroBlock';
import StatsBlock from './components/StatsBlock';
import SelectedProjects from './components/SelectedProject';
import BrandExperience from './components/BrandExperience';
import Footer from './components/Footer';

export const App = () =>  {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = "W2xr79.&@36Gy@6" // Replace with your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setError('Password is required!');
    } else if (password === correctPassword) {
      setError('');
      setIsAuthenticated(true);
    } else {
      setError('Incorrect password!');
    }
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div className="form-container">
          <div className="form-card">
            <form onSubmit={handleSubmit} className="form-content">
              <h1 className="form-title">Enter Password</h1>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="form-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <main className="main-container">
          <HeroBlock />
          <IntroBlock />
          <StatsBlock />
          <SelectedProjects />
          <BrandExperience />
          <Footer />
        </main>
      )}
    </div>
  );
}

export default App;
