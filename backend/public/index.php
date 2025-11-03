<?php
// backend/public/index.php

require_once __DIR__ . '/../config/database.php';

// Exemple de réponse basique
echo "<h1>🌿 Bienvenue sur EcoRideNova</h1>";
echo "<p>Votre serveur PHP est opérationnel !</p>";
echo "<p>Base de données connectée : " . htmlspecialchars($db) . "</p>";
