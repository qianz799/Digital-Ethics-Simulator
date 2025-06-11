// --- SCENE DATA FOR SCENARIO 2 ---
// Each key is a unique ID for a scene/decision point.
// Each scene object contains:
// - title: The scene title
// - text: The main narrative text
// - image: Path to the image for this scene (placeholders used, replace with your assets)
// - choices: An array of choice objects. Each choice has:
//   - text: The button text
//   - nextSceneId: The ID of the scene to load if this choice is made
// - reflection: (Optional) A prompt for reflection
// - isEnding: (Optional) true if this is an ending scene, to show end buttons

const scenes = {
    "start": {
        title: "Data Privacy & The 'Free' Game: Shadow Legends",
        text: `You're Leo, a 14-year-old avid mobile gamer. The latest trending game, "Shadow Legends," has just dropped, and it's free! You're excited to download it and jump in.

        However, before you can start playing, you're presented with a long list of permission requests: access to your contacts, microphone, camera, location, photos, and usage data. It seems like a lot for a game.`,
        image: "../assets/images/scenario2/leo_permissions.png", // Placeholder image
        reflection: "What are your immediate thoughts when a 'free' app asks for so many permissions?",
        choices: [
            { text: "A. Accept all permissions without reading. 'Just want to play the game!'", nextSceneId: "pathA_1" },
            { text: "B. Skim the permissions, feel a little uneasy, but accept. 'Everyone does this, right?'", nextSceneId: "pathB_1" },
            { text: "C. Read through the permissions carefully and question the necessity of some.", nextSceneId: "pathC_1" }
        ]
    },
    // --- PATH A: Accepted All Permissions ---
    "pathA_1": {
        title: "Path A: Blind Acceptance",
        text: `You quickly tap "Accept All" without a second thought. The game loads, and you immediately lose yourself in the thrilling world of "Shadow Legends." Days turn into weeks, and you're hooked.

        But then, strange things start happening. Your contacts begin receiving weird spam messages, sometimes with your name attached. You also notice highly personalized (and sometimes intrusive) ads popping up everywhere – ads for things you only talked about casually near your phone.`,
        image: "../assets/images/scenario2/leo_spam.png", // Placeholder image
        reflection: "How might granting extensive app permissions lead to these kinds of unexpected issues?",
        choices: [
            { text: "Proceed to the next event.", nextSceneId: "pathA_2_confronted" }
        ]
    },
    "pathA_2_confronted": {
        title: "Path A.2: The Spam Call",
        text: `Your phone rings. It's your friend, clearly annoyed. "Leo, why did I just get a spam text with your name attached, telling me to download some weird app? Is that you?"`,
        image: "", // Placeholder image for friend calling
        reflection: "How do you respond when confronted about something that happened due to your online actions?",
        choices: [
            { text: "A.2.1. Deny knowing anything. 'That wasn't me!'", nextSceneId: "pathA_3_deny" }, // Leads to new intermediate
            { text: "A.2.2. Apologize and say you just accepted the game's permissions.", nextSceneId: "pathA_3_apologize" }, // Leads to new intermediate
            { text: "A.2.3. Suspect the game but ignore it. 'It'll probably stop soon.'", nextSceneId: "pathA_3_ignore" } // Leads to new intermediate
        ]
    },
    "pathA_3_deny": { // NEW INTERMEDIATE SCENE for A.2.1
        title: "Path A.3: Denying Involvement",
        text: `You quickly deny it. "No way, that wasn't me! My phone must be glitching or something," you tell your friend, trying to sound convincing. Your friend sounds skeptical but drops the issue. However, you feel a knot in your stomach, knowing you weren't fully honest, and the spam continues to spread to other contacts.`,
        image: "", // Placeholder image for denial
        reflection: "What are the short-term and long-term consequences of dishonesty, especially when it involves technology?",
        choices: [
            { text: "See Outcome (Negative)", nextSceneId: "outcome_negative_A1" }
        ]
    },
    "pathA_3_apologize": { // NEW INTERMEDIATE SCENE for A.2.2
        title: "Path A.3: Admitting the Mistake",
        text: `You sigh. "Look, I'm really sorry. I honestly just accepted all the permissions when I downloaded Shadow Legends, I didn't even think about it." Your friend is still annoyed but accepts your apology, and you both agree to be more careful. You decide to check your phone settings right away.`,
        image: "", // Placeholder image for apologizing
        reflection: "What's the value of taking responsibility for unintended consequences of your digital actions?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_A2" }
        ]
    },
    "pathA_3_ignore": { // NEW INTERMEDIATE SCENE for A.2.3
        title: "Path A.3: Ignoring the Problem",
        text: `You shrug it off. "Huh, that's weird. Probably just a random spam," you tell your friend, dismissing your own suspicion. You tell yourself it'll stop on its own, but the weird ads and occasional spam texts to your contacts continue, and you find yourself increasingly irritated by the constant digital noise around you.`,
        image: "", // Placeholder image for ignoring
        reflection: "What are the risks of ignoring minor red flags in your digital life?",
        choices: [
            { text: "See Outcome (Negative)", nextSceneId: "outcome_negative_A3" }
        ]
    },
    // --- PATH B: Skimmed & Accepted ---
    "pathB_1": {
        title: "Path B: Uneasy Acceptance",
        text: `You skim through the permissions, a slight unease bubbling up. "Access to microphone? Why?" you wonder. But then you shrug. "Everyone uses these apps. It's probably fine." You tap "Accept."

        You enjoy "Shadow Legends," but you start noticing something unsettling. Ads that pop up on other apps or websites seem to know exactly what you've been talking about, even things you only mentioned aloud to friends. You also get ads for very specific products you've only discussed in person, nowhere online.`,
        image: "../assets/images/scenario2/leo_targeted_ads.png", // Placeholder image
        reflection: "How might your online activity be linked to your real-world conversations and interactions?",
        choices: [
            { text: "Proceed to the next event.", nextSceneId: "pathB_2_suspicious_request" }
        ]
    },
    "pathB_2_suspicious_request": {
        title: "Path B.2: The Strange Friend Request",
        text: `One day, a "friend" request from a stranger appears on your social media. Their profile is blank, but their message mentions a very specific, obscure achievement you just unlocked in "Shadow Legends" – something only someone monitoring your real-time gameplay activity would know.`,
        image: "", // Placeholder image for suspicious request
        reflection: "What does your gut tell you about this request? How do you react to someone knowing private details about your online activity?",
        choices: [
            { text: "B.2.1. Accept the request. 'Maybe they're just a super fan.'", nextSceneId: "pathB_3_accept_stranger" }, // Leads to new intermediate
            { text: "B.2.2. Ignore the request but feel totally creeped out.", nextSceneId: "pathB_3_ignore_stranger" }, // Leads to new intermediate
            { text: "B.2.3. Report the request and try to understand how this happened.", nextSceneId: "pathB_3_investigate" }
        ]
    },
    "pathB_3_accept_stranger": { // NEW INTERMEDIATE SCENE for B.2.1
        title: "Path B.3: Trusting a Stranger",
        text: `Despite your unease, you accept the friend request. "Maybe they're just a super fan," you hope. The stranger immediately starts asking more personal questions about your gaming habits, school, and even your friends, trying to extract more details. You realize this person knows too much about you for comfort.`,
        image: "", // Placeholder image for stranger chat
        reflection: "What are the dangers of accepting requests from unknown individuals who seem to know about your personal life?",
        choices: [
            { text: "See Outcome (Negative)", nextSceneId: "outcome_negative_B1" }
        ]
    },
    "pathB_3_ignore_stranger": { // NEW INTERMEDIATE SCENE for B.2.2
        title: "Path B.3: Lingering Unease",
        text: `You delete the request and block the user, feeling a chill run down your spine. While you avoid direct interaction, the incident leaves you feeling uneasy and exposed. You continue to see eerily precise ads, constantly reminded that your data is being used in ways you don't fully understand.`,
        image: "", // Placeholder image for creepy ads
        reflection: "Even if you avoid direct harm, how can subtle data collection impact your sense of privacy and safety online?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_B2" }
        ]
    },
    "pathB_3_investigate": { // Renamed from pathB_2_report
        title: "Path B.3: Taking Action",
        text: `This is too weird. You report the suspicious friend request. You then delve into your phone's privacy settings and the "Shadow Legends" app permissions. You discover that even though you skimmed them, you did grant permissions for microphone and usage data. You research "data brokers" and "app privacy policies," realizing how much information you inadvertently shared. You feel violated but empowered by your new understanding.`,
        image: "", // Placeholder image
        reflection: "What actions can you take to protect your privacy when an app asks for extensive permissions?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_B" }
        ]
    },
    // --- PATH C: Read Carefully & Questioned ---
    "pathC_1": {
        title: "Path C: Informed Scrutiny",
        text: `You take a deep breath and start reading through the permissions. Access to contacts? Why? Microphone? Camera? You start comparing these requests to what a game would reasonably need. It quickly becomes clear that "Shadow Legends" is asking for far more access than it needs to function.

        You find an option to "customize permissions," and you're able to deny access to your contacts, camera, and microphone. However, access to your location and usage data are marked as "mandatory" to play the game.`,
        image: "../assets/images/scenario2/leo_reading_permissions.png", // Placeholder image
        reflection: "What does it mean when an app makes certain permissions 'mandatory'? What are the implications?",
        choices: [
            { text: "Proceed to your final decision.", nextSceneId: "pathC_2_final_decision" }
        ]
    },
    "pathC_2_final_decision": {
        title: "Path C.2: The Ultimate Choice",
        text: `You've understood the implications of the mandatory permissions. You know your location and usage data will still be collected if you play. Now, you have to make a final decision: Is playing "Shadow Legends" worth the remaining privacy cost?`,
        image: "", // Placeholder image for thinking
        reflection: "How do you weigh the enjoyment of a game against your personal data privacy?",
        choices: [
            { text: "C.2.1. Don't play the game, and warn friends about it.", nextSceneId: "pathC_3_no_play" }, // Leads to new intermediate
            { text: "C.2.2. Play the game with limited permissions, and be very careful about conversations near your device.", nextSceneId: "pathC_3_play_cautiously" }, // Leads to new intermediate
            { text: "C.2.3. Play the game, but actively seek out alternative, more privacy-friendly games.", nextSceneId: "pathC_3_seek_alternatives" } // Leads to new intermediate
        ]
    },
    "pathC_3_no_play": { // NEW INTERMEDIATE SCENE for C.2.1
        title: "Path C.3: Prioritizing Privacy",
        text: `You decide that even the "mandatory" data collection is too much. You delete the app and send messages to your friends, explaining why you won't be playing "Shadow Legends" and warning them about the extensive permissions. You feel good about your decision to prioritize your privacy over a trending game.`,
        image: "", // Placeholder image for deleting app
        reflection: "What is the value of standing firm on your privacy principles, and how can you influence others?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_C1" }
        ]
    },
    "pathC_3_play_cautiously": { // NEW INTERMEDIATE SCENE for C.2.2
        title: "Path C.3: Navigating the Trade-off",
        text: `You decide to play, but with extreme caution. You avoid mentioning anything personal near your device while the game is open, and you review your phone's privacy settings regularly. You enjoy the game, but it comes with a constant background awareness of data collection.`,
        image: "", // Placeholder image for cautious play
        reflection: "What are the challenges of constantly managing your privacy in a data-driven world?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_C2" }
        ]
    },
    "pathC_3_seek_alternatives": { // NEW INTERMEDIATE SCENE for C.2.3
        title: "Path C.3: Smart Digital Consumption",
        text: `You decide to play "Shadow Legends" for now, but your experience has changed your perspective. You actively research and explore other mobile games, looking for those with transparent privacy policies and fewer excessive permissions. You find a few great alternatives and start sharing your discoveries with friends, encouraging more ethical gaming choices.`,
        image: "", // Placeholder image for smart consumer
        reflection: "How can consumer choices collectively influence technology companies to adopt more ethical practices?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_C3" }
        ]
    },
    // --- ENDING SCENES ---
    "outcome_negative_A1": {
        title: "Outcome: Betrayed Trust (Negative)",
        text: `By denying your involvement, you shift the blame, but the spam continues for your friends, and the intrusive ads for you. You don't address the root cause, and your digital footprint remains vulnerable. Your friends might start to distrust you for denying something they know is linked to you.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_negative_A3": {
        title: "Outcome: Unchecked Exposure (Negative)",
        text: `You hoped the issues would just go away, but they don't. The spam continues, and the personalized ads become more aggressive and unsettling. Your personal information has been compromised, leading to ongoing privacy breaches and a feeling of being constantly watched. You failed to protect yourself.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_negative_B1": {
        title: "Outcome: Escalated Risk (Negative)",
        text: `By accepting the suspicious friend request, you've opened yourself up to further targeting. This individual might be part of a phishing scam, or trying to gather more personal information to exploit you. Your sense of unease grows, and you've put yourself at greater risk online.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_B": {
        title: "Outcome: Awakened Privacy Advocate (Positive)",
        text: `Your decision to report the suspicious activity and investigate the app's permissions transforms you into a privacy advocate. You gain a deep understanding of data collection and its implications. You start making informed choices about the apps you use, adjusting privacy settings, and educating your friends about protecting their digital selves.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_C1": {
        title: "Outcome: Proactive Protection (Positive)",
        text: `You decide the privacy cost is too high. You delete "Shadow Legends" and actively warn your friends about its excessive permissions. You've made an informed choice to protect your data and influence others to do the same, demonstrating excellent digital citizenship.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_C3": {
        title: "Outcome: Informed Choices (Positive)",
        text: `You play "Shadow Legends" with limited permissions, but your eyes are now open. You actively seek out and discover other, more privacy-friendly games and apps, comparing their data practices. You use your experience to educate your friends on how to find alternatives that respect their privacy, becoming a smart digital consumer.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_A2": {
        title: "Outcome: Acknowledged Mistake (Mixed)",
        text: `You apologized to your friend and admitted to accepting the permissions blindly. While you addressed the immediate social consequence, the underlying data vulnerability remains. You've learned a lesson, but now face the ongoing challenge of mitigating the risks of past permissions and being more careful in the future.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_B2": {
        title: "Outcome: Creeping Unease (Mixed)",
        text: `You ignored the friend request, but the feeling of being watched lingers. You continue to use "Shadow Legends" and other apps without fully understanding or controlling your data. You've avoided immediate engagement but live with a growing sense of discomfort about your digital privacy.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_C2": {
        title: "Outcome: Controlled Risk (Mixed)",
        text: `You decided to play with limited permissions, accepting the mandatory ones. You become hyper-aware of your device's presence during conversations. While you've reduced your risk, the "mandatory" permissions still mean some of your data is being collected. You've found a balance, but it requires constant vigilance.`,
        image: "", // Placeholder image
        isEnding: true
    }
};

// --- CORE LOGIC ---
let currentSceneId = "start"; // Start with the first scene
let visitedScenes = new Set(); // Track visited scenes for progress

// Function to toggle info hub visibility
function toggleInfoHub() {
    const infoHub = document.getElementById('info-hub');
    const infoHubToggle = document.getElementById('info-hub-toggle');

    if (infoHub.classList.contains('hidden')) {
        infoHub.classList.remove('hidden');
        infoHubToggle.textContent = '📚 Close Info';
    } else {
        infoHub.classList.add('hidden');
        infoHubToggle.textContent = '📚 Info Hub';
    }
}

function updateProgress() {
    visitedScenes.add(currentSceneId);
    const totalScenes = Object.keys(scenes).length;
    const percent = Math.round((visitedScenes.size / totalScenes) * 100);
    const bar = document.getElementById('progress-bar-inner');
    const label = document.getElementById('progress-label');
    if (bar) bar.style.width = percent + '%';
    if (label) label.textContent = percent + '%';
}

function loadScene(sceneId) {
    const scene = scenes[sceneId];
    if (!scene) {
        console.error("Scene not found:", sceneId);
        return;
    }

    currentSceneId = sceneId;
    updateProgress();

    // Get reference to the image element
    const sceneImage = document.getElementById("scene-image");

    // Update scene content
    document.getElementById("scene-title").textContent = scene.title;
    document.getElementById("scene-text").innerHTML = scene.text.replace(/\n/g, '<br><br>');

    // Image display logic (robust and safe)
    if (scene.image && scene.image.trim() !== "") {
        sceneImage.src = scene.image;
        sceneImage.alt = scene.title;
        sceneImage.classList.remove('hidden');
    } else {
        sceneImage.removeAttribute("src");
        sceneImage.alt = "";
        sceneImage.classList.add('hidden');
    }

    // Update choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = '';
    if (scene.choices && scene.choices.length > 0) {
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => {
                playButtonClickSFX();
                loadScene(choice.nextSceneId);
            };
            choicesContainer.appendChild(button);
        });
        choicesContainer.classList.remove('hidden');
    } else {
        choicesContainer.classList.add('hidden');
    }

    // Update reflection
    const reflectionPrompt = document.getElementById("reflection-prompt");
    if (scene.reflection) {
        reflectionPrompt.innerHTML = `<em>Reflection: ${scene.reflection}</em>`;
        reflectionPrompt.classList.remove('hidden');
    } else {
        reflectionPrompt.classList.add('hidden');
    }

    // Handle ending buttons
    const restartBtn = document.getElementById("restart-button");
    const backBtn = document.getElementById("back-to-menu-button");
    if (scene.isEnding) {
        restartBtn.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        restartBtn.onclick = () => { playButtonClickSFX(); loadScene('start'); };
        backBtn.onclick = () => { playButtonClickSFX(); window.location.href = '../index.html'; };
    } else {
        restartBtn.classList.add('hidden');
        backBtn.classList.add('hidden');
        restartBtn.onclick = null;
        backBtn.onclick = null;
    }

    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    loadScene(currentSceneId);

    // Info hub toggle setup
    const infoHubToggle = document.getElementById('info-hub-toggle');
    if (infoHubToggle) {
        infoHubToggle.addEventListener('click', toggleInfoHub);
    }
});
