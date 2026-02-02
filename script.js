const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
if (burger && nav) {
    burger.addEventListener("click", () => nav.classList.toggle("open"));
}

const copyBtn = document.getElementById("copyBtn");
const copyHint = document.getElementById("copyHint");
if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
        try {
            await navigator.clipboard.writeText("https://zngl.me");
            if (copyHint) copyHint.textContent = "Kopyalandı ✅";
            setTimeout(() => { if (copyHint) copyHint.textContent = ""; }, 1600);
        } catch (e) {
            if (copyHint) copyHint.textContent = "Kopyalanamadı (tarayıcı izin vermedi).";
        }
    });
}

const mailBtn = document.getElementById("mailBtn");
if (mailBtn) {
    // Workspace doğrulana kadar Gmail'e yönlendirelim
    mailBtn.href = "mailto:hello@zngl.me?subject=ZNGL%20-%20Merhaba&body=Merhaba%20ZNGL%20ekibi,%0D%0A%0D%0A";
}

// Fallback initials on thumbnails
document.querySelectorAll(".thumb").forEach(el => {
    const fb = el.getAttribute("data-fallback") || "ZN";
    el.textContent = fb;
});