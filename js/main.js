// --- GLOBAL SOUND CONTROLS FOR SCENARIOS ONLY ---

// Define Audio object for button click sound effect
const globalButtonClickSFX = new Audio('../assets/audio/button_click.mp3'); // Fixed path for scenarios

// Get reference to the global background music audio element
const globalBGM = document.getElementById('global-bgm');
const globalToggleSoundButton = document.getElementById('toggle-global-sound-button');

// Function to play button click sound effect
// This function will be called by scenario-specific button clicks
function playButtonClickSFX() {
    // Clone node to allow multiple rapid clicks to play the sound
    const sfxClone = globalButtonClickSFX.cloneNode();
    sfxClone.volume = 0.5; // Set a suitable volume for clicks, adjust as needed
    sfxClone.play().catch(e => console.log("Button click SFX prevented:", e));
}

// Function to handle global BGM play after first user interaction
function handleInitialBGMPlay() {
    if (globalBGM && globalBGM.paused && !globalBGM.muted) {
        globalBGM.play().catch(e => console.log("Global BGM autoplay prevented:", e));
    }
}

// On scenario load, always start BGM from beginning and muted
function initScenarioBGM() {
    if (globalBGM) {
        globalBGM.currentTime = 0;
        globalBGM.muted = true;
        globalBGM.pause();
        globalToggleSoundButton.textContent = "🔇 Sound Off";
    }
}

// Event listener for the global sound toggle button
document.addEventListener("DOMContentLoaded", () => {
    if (globalToggleSoundButton && globalBGM) {
        // Always start muted and from beginning
        initScenarioBGM();

        globalToggleSoundButton.addEventListener('click', () => {
            if (globalBGM.muted) {
                globalBGM.currentTime = 0;
                globalBGM.muted = false;
                globalBGM.play().catch(e => console.log("Global BGM play prevented on unmute:", e));
                globalToggleSoundButton.textContent = "🔊 Sound On";
            } else {
                globalBGM.muted = true;
                globalToggleSoundButton.textContent = "🔇 Sound Off";
                globalBGM.pause();
            }
        });
    }
});

// IMPORTANT: Attaching a click listener to the entire document or body
// to capture the *very first* user interaction. This helps bypass autoplay policies.
document.body.addEventListener('click', handleInitialBGMPlay, { once: true });
document.body.addEventListener('keydown', handleInitialBGMPlay, { once: true }); // Also for keyboard interaction


