<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

session_start();

$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader);

require_once __DIR__ . '/../src/router.php';
