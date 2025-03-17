function openGame(game) {
    let url = "";
    let video = document.getElementById("bg-video");

    // Set the correct video & game URL
    if (game === "coc") {
        url = "clashofclans://";
        video.src = "VID_20250317_210005.mp4"; // Change to Clash of Clans video
    } else if (game === "mlbb") {
        url = "mobilelegends://";
        video.src = "VID_20250317_205806.mp4"; // Change to Mobile Legends video
    } else if (game === "freefire") {
        url = "freefire://";
        video.src = "VID_20250317_205702.mp4"; // Change to Free Fire video
    }

    // Play the selected game video
    video.play();

    // Fade out content (optional)
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0.5";

    // Wait 10 seconds, then open the game
    setTimeout(() => {
        window.location.href = url;
    }, 10000); // 10 seconds
}
