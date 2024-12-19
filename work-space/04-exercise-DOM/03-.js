// Alarma Sonora
export function alarm (sound, btnPlay, btnStop) {
    const d = document;
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;


d.addEventListener("click", (e) => {
    if(e.target.matches(btnPlay)) {
    alarmTempo = setTimeout(() => {
        $alarm.play();
    }, 2000);
    e.target.disabled = true;
}

if(e.target.matches(btnStop)) {
    clearTimeout(alarmTempo);
    $alarm.pause();
    $alarm.currentTime = 0;
    d.querySelector(btnPlay).disabled = false;
}
});
}