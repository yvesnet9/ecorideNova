// Menu burger
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// Validation inscription
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (pass !== confirm) {
      alert('❌ Les mots de passe ne correspondent pas.');
    } else {
      alert('✅ Inscription réussie !');
      registerForm.reset();
    }
  });
}

// Validation connexion
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('👋 Bienvenue sur EcoRideNova !');
    loginForm.reset();
  });
}

// Déconnexion simulée
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert("👋 Vous avez été déconnecté avec succès !");
    window.location.href = "connexion.html";
  });
}

// Simuler un utilisateur connecté
if (document.getElementById('userName')) {
  const userName = localStorage.getItem('userName') || "Marie Dupont";
  document.getElementById('userName').textContent = userName;
}

// Création de trajet (validation simple)
const createRideForm = document.getElementById('createRideForm');
if (createRideForm) {
  createRideForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const departure = document.getElementById('departure').value;
    const arrival = document.getElementById('arrival').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const price = document.getElementById('price').value;
    const seats = document.getElementById('seats').value;

    if (!departure || !arrival || !date || !time || !price || !seats) {
      alert("⚠️ Merci de remplir tous les champs obligatoires !");
      return;
    }

    alert(`✅ Trajet créé avec succès !
${departure} → ${arrival}
Le ${date} à ${time}, ${price}€ (${seats} places)`);

    createRideForm.reset();
  });
}

// =============================
// 🚗 US7 - LISTE DES TRAJETS
// =============================

const ridesContainer = document.getElementById("ridesContainer");

if (ridesContainer) {
  // Simulation de trajets (données locales)
  const rides = [
    {
      id: 1,
      from: "Paris",
      to: "Lyon",
      date: "12/11/2025",
      time: "08:00",
      price: 25,
      driver: "Marie Dupont",
      seats: 2,
    },
    {
      id: 2,
      from: "Toulouse",
      to: "Bordeaux",
      date: "15/11/2025",
      time: "09:30",
      price: 18,
      driver: "Marc Bernard",
      seats: 3,
    },
    {
      id: 3,
      from: "Nice",
      to: "Marseille",
      date: "18/11/2025",
      time: "07:15",
      price: 22,
      driver: "Sophie Leroy",
      seats: 1,
    },
  ];

  // Injection dynamique des cartes de trajets
  ridesContainer.innerHTML = rides
    .map(
      (ride) => `
      <div class="ride-card">
        <h3>${ride.from} → ${ride.to}</h3>
        <p><strong>Date :</strong> ${ride.date} – ${ride.time}</p>
        <p><strong>Prix :</strong> ${ride.price} €</p>
        <p><strong>Conducteur :</strong> ${ride.driver}</p>
        <p><strong>Places restantes :</strong> ${ride.seats}</p>
        <a href="details.html" class="btn">Voir le trajet</a>
      </div>
    `
    )
    .join("");
}

