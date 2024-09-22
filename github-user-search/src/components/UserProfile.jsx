import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserProfile;
