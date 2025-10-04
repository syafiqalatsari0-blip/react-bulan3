import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ name = "Dien Syafiq", location = "Jambi" }) {
  return (
    <article className="profile-card">
      <header className="profile-header">
        <img
          className="avatar"
          src="https://i.pravatar.cc/150?img=3"
          alt={`${name} avatar`}
        />
        <h2 className="profile-name">{name}</h2>
      </header>

      <p className="profile-bio">Halo! Saya dari {location} — selamat datang di vlog santai saya.</p>

      <footer className="profile-footer">
        <button className="btn primary">Follow</button>
        <button className="btn">Message</button>
      </footer>
    </article>
  );
}
