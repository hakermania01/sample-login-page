<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>TECHNOHACKS Login</title>
</head>
<body>
    <div class="container">
        <h2>Welcome to TECHNOHACKS</h2>
        <form id="login-form" action="process_login.php" method="POST">
            <input type="text" id="username" name="username" placeholder="Username" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p id="error-message" class="error-message"></p>
        <a href="forgot_password.html">Forgot Password?</a>
    </div>
    <script src="script.js"></script>
</body>
</html>
