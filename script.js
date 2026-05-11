function showRecipe(id) {
    let recipes = document.querySelectorAll('.recipe');

    recipes.forEach(r => r.style.display = "none");

    let selected = document.getElementById(id);
    selected.style.display = "block";
}

function closeRecipe(id) {
    document.getElementById(id).style.display = "none";
}



function toggleMenu() {
    let nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
