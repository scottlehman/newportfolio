//Set background and greeting
(function setGreetBackground() {
    let today = new Date(),
        hour = today.getHours();
    
    if (hour < 12 ) {
        //Morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    } else if (hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
})();
