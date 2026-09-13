function mula() {

    const loading = document.getElementById("loadingScreen");

    loading.style.display = "flex";

    setTimeout(function () {
        window.location.href = "dashboard.html";
    }, 1500);

}