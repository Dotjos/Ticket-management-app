<?php

$page = $_GET['page'] ?? 'home';


switch ($page) {
  case 'login':
    echo $twig->render('auth/login.twig', ['title' => 'Login']);
    break;

  case 'signup':
    echo $twig->render('auth/signup.twig', ['title' => 'Signup']);
    break;

  case 'dashboard':
  case 'tickets':
    
    echo $twig->render("pages/{$page}.twig", ['title' => ucfirst($page)]);
    break;

  default:
    echo $twig->render('pages/homepage.twig', ['title' => 'Home']);
}
