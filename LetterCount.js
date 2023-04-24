import React, { useState } from "react";

function CountLetters() {
  const [name, setName] = useState("");
  const [letterCounts, setLetterCounts] = useState({});

  function handleNameChange(event) {
    const nameValue = event.target.value;
    setName(nameValue);
    setLetterCounts(countLetters(nameValue));
  }

  function countLetters(name) {
    const counts = {};
    for (let i = 0; i < name.length; i++) {
      const letter = name[i].toLowerCase();
      if (counts[letter]) {
        counts[letter]++;
      } else {
        counts[letter] = 1;
      }
    }
    return counts;
  }

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <div>
        {Object.entries(letterCounts).map(([letter, count]) => (
          <p key={letter}>{`${letter}: ${count}`}</p>
        ))}
      </div>
    </div>
  );
}

export default CountLetters;
