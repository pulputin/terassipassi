
import React, { useState } from "react";

export default function TerassiApp() {
  const [terassi, setTerassi] = useState("");
  const [list, setList] = useState([]);
  const [ratings, setRatings] = useState({ food: 3, drinks: 3, milieu: 3 });

  function addTerassi() {
    if (terassi.trim() !== "") {
      setList([...list, { name: terassi, ratings }]);
      setTerassi("");
      setRatings({ food: 3, drinks: 3, milieu: 3 });
    }
  }

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '1rem' }}>
      <h1>Terassipassi 2025</h1>
      <input
        placeholder="Terassin nimi"
        value={terassi}
        onChange={(e) => setTerassi(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />

      {['food', 'drinks', 'milieu'].map((key) => (
        <div key={key}>
          <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={ratings[key]}
            onChange={(e) => setRatings({ ...ratings, [key]: Number(e.target.value) })}
          />
          <span>{ratings[key]}</span>
        </div>
      ))}

      <button onClick={addTerassi} style={{ marginTop: '1rem' }}>Lisää terassi</button>

      <ul>
        {list.map((t, i) => (
          <li key={i}>
            <h3>{t.name}</h3>
            <p>Ruoka: {t.ratings.food} Juoma: {t.ratings.drinks} Miljöö: {t.ratings.milieu}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
