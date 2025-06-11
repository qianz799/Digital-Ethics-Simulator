// --- SCENE DATA FOR SCENARIO 3 ---
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
        title: "Cyberbullying & The Bystander: The Group Chat",
        text: `You're Sam, a 16-year-old student, generally quiet but active in your online school groups. After a particularly shaky presentation in class, your classmate Alex is being targeted in the main class group chat.

        A few popular students start posting rude comments, laughing emojis, and even some mean memes making fun of Alex's presentation. You see Alex's profile picture, and they look visibly upset and embarrassed.`,
        image: "../assets/images/scenario3/sam_group_chat.png", // Placeholder image
        reflection: "What are the different ways someone can react when witnessing cyberbullying? What are the potential consequences of each?",
        choices: [
            { text: "A. Stay silent. 'It's not my problem. I don't want to get involved.'", nextSceneId: "pathA_1" },
            { text: "B. Privately message Alex to offer support.", nextSceneId: "pathB_1" },
            { text: "C. Post a message in the group chat defending Alex.", nextSceneId: "pathC_1" }
        ]
    },
    // --- PATH A: Stay Silent ---
    "pathA_1": {
        title: "Path A: Silent Observer",
        text: `You decide to stay silent. "It's not my problem," you tell yourself. "I don't want to get involved." You close the group chat, hoping it will just blow over.

        Unfortunately, your silence is taken as a sign of acceptance by the bullies. Their attacks on Alex escalate. They even create a separate, private group chat, deliberately excluding Alex, to continue mocking and sharing embarrassing content.`,
        image: "../assets/images/scenario3/sam_isolated_alex.png", // Placeholder image
        reflection: "How can the 'bystander effect' contribute to the escalation of bullying online?",
        choices: [
            { text: "Proceed to the next event.", nextSceneId: "pathA_2_cryptic_message" }
        ]
    },
    "pathA_2_cryptic_message": {
        title: "Path A.2: Alex's Desperate Post",
        text: `Days later, Alex posts a cryptic message on their public social media profile, something hinting at feeling hopeless and isolated: "Feeling completely invisible and alone." You see it, and a pang of guilt hits you.`,
        image: "", // Placeholder image
        reflection: "When someone signals distress online, what is your responsibility, even if you weren't directly involved in the cause?",
        choices: [
            { text: "A.2.1. Still do nothing. 'Someone else will handle it.'", nextSceneId: "pathA_3_do_nothing_preview" }, // Leads to a preview scene
            { text: "A.2.2. Talk to a trusted adult (teacher, parent, counselor) about what's happening.", nextSceneId: "pathA_3_talk_adult_preview" }, // Leads to a preview scene
            { text: "A.2.3. Try to tell Alex to ignore them (via private message).", nextSceneId: "pathA_3_tell_ignore_preview" } // Leads to a preview scene
        ]
    },
    // --- PATH B: Private Support ---
    "pathB_1": {
        title: "Path B: Private Support",
        text: `You decide to offer support discreetly. You send Alex a private message: "Hey Alex, I saw what happened in the group chat. I'm really sorry about those comments. Your presentation was good, don't listen to them."

        Alex replies, thanking you and expressing how much they appreciate it. However, the public bullying in the group chat continues, though it doesn't seem to escalate as rapidly.`,
        image: "../assets/images/scenario3/sam_private_message.png", // Placeholder image
        reflection: "What are the pros and cons of offering private support versus public intervention in a bullying situation?",
        choices: [
            { text: "Proceed to the next event.", nextSceneId: "pathB_2_bully_messages" }
        ]
    },
    "pathB_2_bully_messages": {
        title: "Path B.2: The Bully's Warning",
        text: `A few days later, one of the main bullies from the group chat directly messages you, with a curt "Mind your own business, Sam." They've clearly noticed your quiet support for Alex.`,
        image: "", // Placeholder image for bully warning
        reflection: "How do you respond when a bully tries to intimidate you into silence?",
        choices: [
            { text: "B.2.1. Block the bully and continue to only offer private support to Alex.", nextSceneId: "pathB_3_block_continue_preview" }, // Leads to a preview scene
            { text: "B.2.2. Confront the bully privately and tell them to stop.", nextSceneId: "pathB_3_private_confront_preview" }, // Leads to a preview scene
            { text: "B.2.3. Share the bully's message with a trusted adult.", nextSceneId: "pathB_3_share_adult_preview" } // Leads to a preview scene
        ]
    },
    // --- PATH C: Public Defense ---
    "pathC_1": {
        title: "Path C: Public Defense",
        text: `You take a deep breath and decide to speak up publicly. You type a message in the group chat: "Hey everyone, that's not cool. Alex worked hard on their presentation. Let's be supportive, not hurtful."

        Your public defense initially draws some negative attention from the bullies, who immediately turn on you with sarcastic remarks. However, your bravery encourages a few other quieter classmates to speak up in support of Alex and agree with you. The group chat briefly becomes a battleground of opinions.`,
        image: "../assets/images/scenario3/sam_public_stand.png", // Placeholder image
        reflection: "What are the risks and rewards of being a public ally in a cyberbullying situation?",
        choices: [
            { text: "Proceed to the next event.", nextSceneId: "pathC_2_rumors_about_sam" }
        ]
    },
    "pathC_2_rumors_about_sam": {
        title: "Path C.2: Targeting the Ally",
        text: `Suddenly, the main bully tries to turn the group against you, spreading rumors about you in the chat that are untrue and hurtful. They're trying to shift the focus and punish you for speaking up.`,
        image: "", // Placeholder image for Sam targeted
        reflection: "When you become a target, how do you protect yourself while still upholding your ethical stance?",
        choices: [
            { text: "C.2.1. Back down and apologize to the bullies to make it stop.", nextSceneId: "pathC_3_back_down_preview" }, // Leads to a preview scene
            { text: "C.2.2. Document everything and report the entire conversation to a teacher or school administration.", nextSceneId: "pathC_3_document_report_preview" }, // Leads to a preview scene
            { text: "C.2.3. Engage in a heated argument with the bully.", nextSceneId: "pathC_3_heated_argument_preview" } // Leads to a preview scene
        ]
    },

    // --- NEW PREVIEW SCENES (A.3.x) ---
    "pathA_3_do_nothing_preview": {
        title: "Path A.3.1: Persistent Inaction",
        text: `You see Alex's desperate post, but you still choose to do nothing. You convince yourself that it's not your place, or that someone else will surely step in. You scroll past, trying to forget what you saw, but the guilt gnaws at you. The bullying continues, and Alex's online presence becomes increasingly withdrawn.`,
        image: "", // Placeholder image for ignoring post
        reflection: "What is the long-term impact of choosing inaction when faced with online distress?",
        choices: [{ text: "See Outcome (Negative)", nextSceneId: "outcome_negative_A1" }]
    },
    "pathA_3_talk_adult_preview": {
        title: "Path A.3.2: Seeking Adult Help",
        text: `Despite your earlier hesitation, Alex's message makes you realize the severity of the situation. You gather your courage and approach a trusted teacher or school counselor, explaining everything you've witnessed in the group chat and showing them Alex's concerning post. Your direct action sets wheels in motion.`,
        image: "", // Placeholder image for talking to counselor
        reflection: "Why is involving a trusted adult often a critical step in addressing cyberbullying effectively?",
        choices: [{ text: "See Outcome (Positive)", nextSceneId: "outcome_positive_A2" }]
    },
    "pathA_3_tell_ignore_preview": {
        title: "Path A.3.3: Offering Simple Advice",
        text: `You privately message Alex: "Hey, saw your post. Don't let those guys get to you, just ignore them. They're not worth it." Alex thanks you for the message, but you notice their public posts continue to be subdued, and the bullying in the group chat doesn't stop. Your advice, while well-intentioned, has limited impact.`,
        image: "", // Placeholder image for private advice
        reflection: "Is telling someone to 'just ignore' bullying always effective, and what might be missing from that advice?",
        choices: [{ text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_A3" }]
    },

    // --- NEW PREVIEW SCENES (B.3.x) ---
    "pathB_3_block_continue_preview": {
        title: "Path B.3.1: Continued Private Support",
        text: `You block the bully and continue to privately support Alex. While this prevents further direct harassment towards you and offers Alex a lifeline, the public bullying of Alex remains. You've managed your own safety, but the broader issue in the group chat persists.`,
        image: "", // Placeholder image
        reflection: "How effective is private support when the bullying is happening publicly?",
        choices: [{ text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_B1" }]
    },
    "pathB_3_private_confront_preview": {
        title: "Path B.3.2: Private Confrontation",
        text: `You privately message the bully, telling them to stop. They might back off for a while, fearing exposure, or they might just dismiss you. This direct approach can sometimes be effective, but without broader support or official intervention, the bullying might just go underground or resurface later.`,
        image: "", // Placeholder image
        reflection: "What are the limitations of confronting a bully one-on-one online?",
        choices: [{ text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_B2" }]
    },
    "pathB_3_share_adult_preview": {
        title: "Path B.3.3: Empowered Action",
        text: `You share the bully's direct message with a trusted adult. This concrete evidence allows the adult to address the situation effectively. The school takes action against the bullies, and Alex receives the support they need. You've learned that documenting and reporting are powerful tools for ethical digital citizenship.`,
        image: "", // Placeholder image
        reflection: "Why is concrete evidence important when reporting online misconduct?",
        choices: [{ text: "See Outcome (Positive)", nextSceneId: "outcome_positive_B3" }]
    },

    // --- NEW PREVIEW SCENES (C.3.x) ---
    "pathC_3_back_down_preview": {
        title: "Path C.3.1: Personal Backdown",
        text: `You chose to apologize and back down, hoping to end the personal attacks. While the rumors about you might subside, you've effectively shown the bullies that their tactics work. Alex continues to be targeted, and you've missed an opportunity to stand up against injustice, reinforcing the power of the bullies.`,
        image: "", // Placeholder image
        reflection: "What are the long-term consequences of backing down to bullies online?",
        choices: [{ text: "See Outcome (Negative)", nextSceneId: "outcome_negative_C1" }]
    },
    "pathC_3_document_report_preview": {
        title: "Path C.3.2: Courageous Advocate",
        text: `You diligently document all the conversations and rumors, then report everything to a teacher or school administration. Your comprehensive report provides clear evidence, allowing the school to take decisive action against the bullies. Alex feels supported, and your courageous stand contributes to a safer online environment for everyone.`,
        image: "", // Placeholder image
        reflection: "How can documenting evidence strengthen your position when reporting cyberbullying?",
        choices: [{ text: "See Outcome (Positive)", nextSceneId: "outcome_positive_C2" }]
    },
    "pathC_3_heated_argument_preview": {
        title: "Path C.3.3: Escalated Conflict",
        text: `Your argument with the bully devolves into a heated, public shouting match in the group chat. This only fuels the drama and provides more ammunition for the bully, drawing more attention to the negative situation. The conflict escalates, potentially involving more students and creating a very toxic online space, with no real resolution to the bullying.`,
        image: "", // Placeholder image
        reflection: "Why can engaging in a heated argument online often worsen a situation rather than resolve it?",
        choices: [{ text: "See Outcome (Negative)", nextSceneId: "outcome_negative_C3" }]
    },


    // --- ORIGINAL ENDING SCENES (NOW TARGETS OF PREVIEWS) ---
    "outcome_negative_A1": {
        title: "Outcome: Complicit Silence (Negative)",
        text: `Your continued inaction makes you a silent participant in the bullying. Alex suffers significant emotional distress, and their cry for help goes unanswered. The bullying continues, unchecked, creating a hostile environment for Alex and reinforcing the bullies' behavior. You carry the weight of knowing you could have acted.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_negative_C1": {
        title: "Outcome: Personal Backdown (Negative)",
        text: `You chose to apologize and back down, hoping to end the personal attacks. While the rumors about you might subside, you've effectively shown the bullies that their tactics work. Alex continues to be targeted, and you've missed an opportunity to stand up against injustice, reinforcing the power of the bullies.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_negative_C3": {
        title: "Outcome: Escalated Conflict (Negative)",
        text: `Your argument with the bully devolves into a heated, public shouting match in the group chat. This only fuels the drama and provides more ammunition for the bully, drawing more attention to the negative situation. The conflict escalates, potentially involving more students and creating a very toxic online space, with no real resolution to the bullying.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_A2": {
        title: "Outcome: Timely Intervention (Positive)",
        text: `Seeing Alex's desperate message, you know you can't stay silent. You immediately talk to a trusted teacher or counselor, explaining everything that's happened in the group chat. The school takes swift action, intervening with the bullies and providing support to Alex, demonstrating how crucial adult intervention can be.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_B3": {
        title: "Outcome: Empowered Action (Positive)",
        text: `You share the bully's direct message with a trusted adult. This concrete evidence allows the adult to address the situation effectively. The school takes action against the bullies, and Alex receives the support they need. You've learned that documenting and reporting are powerful tools for ethical digital citizenship.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_positive_C2": {
        title: "Outcome: Courageous Advocate (Positive)",
        text: `You diligently document all the conversations and rumors, then report everything to a teacher or school administration. Your comprehensive report provides clear evidence, allowing the school to take decisive action against the bullies. Alex feels supported, and your courageous stand contributes to a safer online environment for everyone.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_A3": {
        title: "Outcome: Limited Impact (Mixed)",
        text: `You privately advise Alex to ignore the bullies. While Alex appreciates your advice, it doesn't stop the public bullying or the feeling of isolation. Alex feels a little better knowing someone cares, but the core problem remains unaddressed, highlighting the limits of individual advice without intervention.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_B1": {
        title: "Outcome: Continued Private Support (Mixed)",
        text: `You block the bully and continue to privately support Alex. While this prevents further direct harassment towards you and offers Alex a lifeline, the public bullying of Alex remains. You've managed your own safety, but the broader issue in the group chat persists.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_B2": {
        title: "Outcome: Private Confrontation (Mixed)",
        text: `You privately message the bully, telling them to stop. They might back off for a while, fearing exposure, or they might just dismiss you. This direct approach can sometimes be effective, but without broader support or official intervention, the bullying might just go underground or resurface later.`,
        image: "", // Placeholder image
        isEnding: true
    }
};

// --- CORE LOGIC (Same as previous scenarios, ensures it's self-contained) ---
let currentSceneId = "start"; // Start with the first scene for this scenario
let visitedScenes = new Set(); // Track visited scenes for progress

function updateProgress() {
    visitedScenes.add(currentSceneId);
    const totalScenes = Object.keys(scenes).length;
    const percent = Math.round((visitedScenes.size / totalScenes) * 100);
    // Update the new progress bar and label at the bottom
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

    // Get references to HTML elements
    const sceneTitle = document.getElementById("scene-title");
    const sceneImage = document.getElementById("scene-image");
    const sceneText = document.getElementById("scene-text");
    const choicesContainer = document.getElementById("choices-container");
    const reflectionPrompt = document.getElementById("reflection-prompt");
    const restartButton = document.getElementById("restart-button");
    const backToMenuButton = document.getElementById("back-to-menu-button");

    // Update current scene and progress
    currentSceneId = sceneId;
    updateProgress();

    // Update HTML elements with scene data
    sceneTitle.textContent = scene.title;
    sceneText.innerHTML = scene.text.replace(/\n/g, '<br><br>');

    // Image show/hide logic (match scenario1.js)
    if (scene.image) {
        sceneImage.src = scene.image;
        sceneImage.alt = scene.title;
        sceneImage.classList.remove('hidden');
    } else {
        sceneImage.src = "";
        sceneImage.alt = "";
        sceneImage.classList.add('hidden');
    }

    // Clear previous choices
    choicesContainer.innerHTML = '';

    // Add new choices if they exist
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

    // Update reflection prompt
    if (scene.reflection) {
        reflectionPrompt.innerHTML = `<em>Reflection: ${scene.reflection}</em>`;
        reflectionPrompt.classList.remove('hidden');
    } else {
        reflectionPrompt.classList.add('hidden');
    }

    // Show/hide end buttons based on 'isEnding' property
    if (scene.isEnding) {
        restartButton.classList.remove('hidden');
        backToMenuButton.classList.remove('hidden');
        restartButton.onclick = () => { playButtonClickSFX(); loadScene('start'); };
        backToMenuButton.onclick = () => { playButtonClickSFX(); window.location.href = '../index.html'; };
    } else {
        restartButton.classList.add('hidden');
        backToMenuButton.classList.add('hidden');
        restartButton.onclick = null;
        backToMenuButton.onclick = null;
    }

    window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
    loadScene(currentSceneId);
    // Info hub toggle logic
    const infoHubToggle = document.getElementById('info-hub-toggle');
    const infoHub = document.getElementById('info-hub');
    const infoHubClose = document.getElementById('info-hub-close');
    if (infoHubToggle && infoHub && infoHubClose) {
        infoHubToggle.addEventListener('click', () => {
            infoHub.classList.add('active');
        });
        infoHubClose.addEventListener('click', () => {
            infoHub.classList.remove('active');
        });
        document.addEventListener('mousedown', (e) => {
            if (infoHub.classList.contains('active') && !infoHub.contains(e.target) && e.target !== infoHubToggle) {
                infoHub.classList.remove('active');
            }
        });
    }
});
