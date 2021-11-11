const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
        <img src="image/LogoMakr-0bpXDt.png" class="brand logo" alt="logo" height=47 width=119>
            <div class="nav-items">
            
                <div class="search">
                <input type="text" class="search-box" placeholder="search product">
                <button class="search-btn">search</button>
            </div>
            <a href="#"><img src="image/avatar.png" alt="user"></a>
                <a href="#"><img src="image/logo-cart.png" alt="cart"></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">Laptops & desktops</a></li>
            <li class="link-item"><a href="#" class="link">Components</a></li>
            <li class="link-item"><a href="#" class="link">monitors</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
            <li class="link-item"><a href="#" class="link">gaming</a></li>
            <li class="link-item"><a href="#" class="link">brands</a></li>
            <li class="link-item"><a href="#" class="link">Contact</a></li>
        </ul>
    `;
}

createNav();