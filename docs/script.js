function showInfo(artist) {
  const infoBox = document.getElementById("info-box");

  if (artist === "frida") {
    infoBox.innerHTML = `
      <h2>Frida Kahlo</h2>
      <p>Frida's self-portraits explore identity, gender, and postcolonial Mexico. Her work blends indigenous culture with European surrealism.</p>
    `;
  } else if (artist === "modotti") {
    infoBox.innerHTML = `
      <h2>Tina Modotti</h2>
      <p>A revolutionary photographer, Modotti used art to speak to labor, class, and the female condition in early 20th-century Mexico.</p>
    `;
  }
}