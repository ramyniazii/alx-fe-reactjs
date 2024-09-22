import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import UserProfile from './components/UserProfile';
import { fetchGitHubUser } from './services/github';

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const userData = await fetchGitHubUser(username);
    setUser(userData);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchInput onSearch={handleSearch} />
      <UserProfile user={user} />
    </div>
  );
};

export default App;
