function ProfileCard({ name, photo, bio, umur, quote }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "10px",
        width: "220px",
        textAlign: "center",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        margin: "10px",
      }}
    >
      <img
        src={photo || "https://via.placeholder.com/100"}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Umur: {umur} tahun</p>

      <div>
        <h4>quote:</h4>
        {quote.map((quote, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#e4e4e4ff",
              margin: "5px",
              padding: "5px 10px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const profiles = [
    { id: 1, name: "Ahmad sahroni", photo: "https://i.pinimg.com/736x/39/a1/bf/39a1bff1989e4ac7646edd850e15ca7d.jpg", bio: "Suka korupsi", umur: 42, quote: ["rakyat sengsara gue bahagia"] },
    { id: 2, name: "Uya kuya", photo: "https://i.pinimg.com/1200x/e5/93/c8/e593c805b0b75ef4f7692ff1979a735c.jpg", bio: "suka korupsi ", umur: 40, quote: ["tetap hidup walaupun harus korupsi"] },
    { id: 3, name: "Nadiem makarim", photo: "https://i.pinimg.com/736x/cb/1f/29/cb1f29b8842bebf5f5fa528fcd05aff2.jpg", bio: "suka korupsi", umur: 38, quote: ["jadi menteri juga harus korupsi  "] },
    { id: 4, name: "megawati", photo: "https://i.pinimg.com/736x/69/1a/96/691a9600843ece2b41730fcef51662a4.jpg", bio: "Suka korupsi", umur: 50, quote: ["menjual pulau cepat kaya"] },
    { id: 5, name: "Harvei moeis", photo: "https://i.pinimg.com/736x/73/8a/b5/738ab51e77731b1da4773f54a447b9c0.jpg", bio: "Suka korupsi", umur: 40, quote: ["butuh pasangan korupsi"] },
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Daftar Profile</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", 
        }}
      >
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            photo={profile.photo}
            bio={profile.bio}
            umur={profile.umur}
            quote={profile.quote}
          />
        ))}
      </div>
    </div>
  );
}

export default App;