<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laravel Project - Innovation</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
</head>

<body>

    <nav class="navbar">
        <div class="logo">Aura</div>
        <div class="nav-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/showcases">Showcases</a>
            <a href="/blog">Blog</a>
            <a href="/contact" class="btn-nav">Contact</a>
        </div>
    </nav>

    <main>
        {{ $slot }}
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="{{ asset('js/animation.js') }}"></script>
</body>

</html>