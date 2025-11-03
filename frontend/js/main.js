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

