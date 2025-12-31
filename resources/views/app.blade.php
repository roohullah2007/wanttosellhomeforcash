<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta name="theme-color" content="#053E78">
        <meta name="mobile-web-app-capable" content="yes">

        <!-- Critical CSS - Inline for faster first paint -->
        <style>
            body{margin:0;font-family:'Instrument Sans',system-ui,-apple-system,sans-serif}
            .min-h-screen{min-height:100vh}
            .bg-white{background-color:#fff}
            .bg-primary{background-color:#053E78}
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- DNS Prefetch for external resources -->
        <link rel="dns-prefetch" href="https://images.pexels.com">
        <link rel="dns-prefetch" href="https://fonts.googleapis.com">
        <link rel="dns-prefetch" href="https://fonts.gstatic.com">
        <link rel="preconnect" href="https://images.pexels.com" crossorigin>

        <!-- Fonts - Optimized (only load weights actually used) -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Lora:ital,wght@1,400;1,500&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
        <noscript><link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Lora:ital,wght@1,400;1,500&display=swap" rel="stylesheet"></noscript>

        <!-- Preload critical assets -->
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp">
        <link rel="preload" href="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" as="image" media="(max-width: 768px)">
        <link rel="preload" href="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1280" as="image" media="(min-width: 769px)">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
