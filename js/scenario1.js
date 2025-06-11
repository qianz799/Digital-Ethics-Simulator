// --- SCENE DATA ---
// Each key is a unique ID for a scene/decision point.
// Each scene object contains:
// - title: The scene title
// - text: The main narrative text
// - image: Path to the image for this scene (set to "" if no image desired)
// - choices: An array of choice objects. Each choice has:
//   - text: The button text
//   - nextSceneId: The ID of the scene to load if this choice is made
// - reflection: (Optional) A prompt for reflection
// - isEnding: (Optional) true if this is an ending scene, to show end buttons

const scenes = {
    "start": {
        title: "The Algorithm's Choice: Your College Path",
        text: `You're Alex, a 17-year-old high school student. You and your friend, Sam, both have similar grades and ambitions. You're both using "FutureMatch," a new AI-powered platform that promises to revolutionize college applications by recommending the "perfect fit."

        But as you compare your recommended lists, a disturbing pattern emerges. Sam's list is filled with prestigious, highly selective universities, while yours features mostly local and state colleges. Yet, your academic records are almost identical.

        You notice the platform seems to be highlighting certain demographic information: your zip code (from a less affluent neighborhood), your less common surname, and your public high school. Sam lives in a wealthier suburb, has a common surname, and attends a well-known private school.`,
        image: "../assets/images/scenario1/alex_sam_comparing.png",
        reflection: "What might explain the difference in recommendations? What assumptions might the AI be making?",
        choices: [
            { text: "A. Accept the AI's recommendations (they seem 'realistic')", nextSceneId: "pathA_1" },
            { text: "B. Challenge the system and demand transparency", nextSceneId: "pathB_1" },
            { text: "C. Game the system by changing your profile information", nextSceneId: "pathC_1" }
        ]
    },
    "pathA_1": {
        title: "Path A: Trusting the Algorithm",
        text: `You decide to trust the AI's judgment. "Maybe the algorithm knows something I don't," you rationalize. "These schools are still good, and they seem realistic for me. Why fight it?" You proceed with applications to the colleges on FutureMatch's list.

        You get accepted to all of them, a sense of relief washing over you. However, a lingering doubt persists, especially when Sam shares their acceptance letters from dream universities.

        Later, during a casual chat with other students from your high school, you hear similar stories: their FutureMatch recommendations were also "safer" and less ambitious, unlike those of students from wealthier feeder schools.`,
        image: "../assets/images/scenario1/alex_applying.png",
        reflection: "By accepting the initial recommendations, what is Alex implicitly trusting? What are the potential long-term consequences of this trust, or lack thereof?",
        choices: [
            { text: "A.1. Dismiss it as coincidence. 'It's probably just how things are.'", nextSceneId: "pathA_2_dismiss_coincidence_preview" }, // Leads to new preview
            { text: "A.2. Feel disappointed but choose not to act. 'It's too late for me now.'", nextSceneId: "pathA_2_disappointed_inaction_preview" }, // Leads to new preview
            { text: "A.3. Realize the potential bias and consider speaking up, even though it's after your own application process.", nextSceneId: "pathA_2_positive" }
        ]
    },
    // Example: If you want to remove the image for 'pathA_2_positive'
    "pathA_2_positive": {
        title: "Path A.3: Delayed Action",
        text: `The pattern is undeniable. You realize you can't just ignore this, even if it's too late for your own applications. You decide to gather the courage to speak to your school counselor about the disparities you and your friends experienced with FutureMatch. You highlight the potential for AI bias and suggest they investigate.`,
        image: "", // <--- Set to empty string to hide image for this scene
        reflection: "Even if you can't change your past, what ethical responsibility do you have towards others facing similar issues?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_A" }
        ]
    },
    // --- NEW PREVIEW SCENES (A.2.x leading to outcomes) ---
    "pathA_2_dismiss_coincidence_preview": {
        title: "Path A.1: Dismissing the Pattern",
        text: `You decide to dismiss the pattern as mere coincidence. "It's probably just how things are," you tell yourself, shrugging off the nagging feeling of unfairness. You focus on your current college plans, pushing away thoughts of what might have been.`,
        image: "", // Placeholder image for dismissing
        reflection: "What are the risks of dismissing potential biases or systemic issues without investigation?",
        choices: [
            { text: "See Outcome (Negative)", nextSceneId: "outcome_negative_A" } // Leads to actual outcome
        ]
    },
    "pathA_2_disappointed_inaction_preview": {
        title: "Path A.2: Disappointed Inaction",
        text: `You feel a deep sense of disappointment and a growing suspicion of bias, but you choose not to act. "It's too late for me now," you think, feeling resigned. You accept your fate, but the experience leaves you with a lingering sense of resentment and missed opportunities.`,
        image: "", // Placeholder image for disappointment
        reflection: "How can inaction, even if understandable, contribute to the perpetuation of unfair systems?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_A_resigned" } // Leads to a new mixed outcome
        ]
    },
    // --- PATH B ---
    "pathB_1": {
        title: "Path B: Demanding Transparency",
        text: `This doesn't sit right with you. "This doesn't feel right," you tell Sam. "I need to understand how this AI works and why it's making these choices."

        You start by contacting FutureMatch's support, then your school counselor. You delve into online forums, searching for any information about the platform's algorithm. You find vague assurances about "holistic reviews" but no real specifics.

        Then, you stumble upon a blog post by a former FutureMatch intern, who alludes to "socioeconomic indicators" being heavily weighted. Further digging uncovers a leaked internal memo (or a student forum discussion referencing it) suggesting that the AI strongly considers zip codes and a "diversity metric" that disproportionately affects certain surnames from less privileged areas. You also learn that Sam's *family income* was a factor in their "higher potential" score.`,
        image: "../assets/images/scenario1/alex_researching.png",
        reflection: "What are the ethical responsibilities of someone who discovers a potential injustice in a system? What is the balance between individual risk and collective benefit?",
        choices: [
            { text: "B.1. Report the findings immediately to school administration and potentially to media/online forums, knowing it could cause delays or scrutiny.", nextSceneId: "pathB_2_positive" },
            { text: "B.2. Wait until applications are processed to avoid personal risk.", nextSceneId: "pathB_2_mixed" },
            { text: "B.3. Try to gather more concrete evidence before taking action.", nextSceneId: "pathB_2_further_investigation" }
        ]
    },
    "pathB_2_positive": {
        title: "Path B.1: Immediate Report",
        text: `You decide the bias is too significant to ignore. You immediately compile your findings and report them to your school administration, also anonymously posting your concerns on a student forum. Your actions cause a stir. Applications are temporarily frozen by the school, and FutureMatch is forced to issue a statement acknowledging an internal review. This delays your application process, but you've potentially sparked a significant change.`,
        image: "",
        reflection: "What are the potential personal costs and collective benefits of whistleblowing or exposing injustice?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_B" }
        ]
    },
    "pathB_2_mixed": {
        title: "Path B.2: Playing it Safe",
        text: `You decide to prioritize your own application process. You hold onto the information you've found, hoping to deal with it after your college acceptances are secured. While you avoid immediate personal risk, the algorithm continues to operate unchecked, potentially affecting countless other students.`,
        image: "",
        reflection: "Is it always ethical to prioritize personal safety over collective well-being?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_B" }
        ]
    },
    "pathB_2_further_investigation": {
        title: "Path B.3: Digging Deeper",
        text: `You believe a stronger case is needed. You reach out to a local consumer protection agency and an organization specializing in ethical AI. They guide you on how to systematically document the bias and gather more compelling evidence. This process takes time but promises a more impactful report.`,
        image: "",
        reflection: "What skills are important for effective advocacy and challenging complex systems?",
        choices: [
            { text: "See Outcome (Positive)", nextSceneId: "outcome_positive_B_stronger" }
        ]
    },
    // --- PATH C ---
    "pathC_1": {
        title: "Path C: Gaming the Algorithm",
        text: `"If the AI is going to judge me on my address or my name, I'll just change them," you think, a flicker of defiance in your eyes. "It's just to get a fair shot, right?"

        You decide to manipulate your profile. You temporarily change your zip code to Sam's, use a more common, "neutral-sounding" version of your name (perhaps a middle name), and even slightly exaggerate an extracurricular to match the profile of a student from a wealthier school.

        To your surprise, it works. Your new recommendations from FutureMatch significantly more prestigious, aligning with Sam's original list. You feel a mix of relief and profound guilt. But then, a few days later, an email from "FutureMatch" appears: "Inconsistent Data Detected. Please Provide Proof of Residence."`,
        image: "../assets/images/scenario1/alex_on_computer_secret.png",
        reflection: "What are the ethical implications of dishonesty, even when driven by a desire for fairness? Does the end justify the means?",
        choices: [
            { text: "C.1. Admit to the deception and apologize, explaining your motivation.", nextSceneId: "pathC_2_mixed" },
            { text: "C.2. Try to come up with an excuse or a fake document.", nextSceneId: "pathC_2_negative" },
            { text: "C.3. Withdraw the application entirely and apply manually elsewhere.", nextSceneId: "pathC_2_mixed_withdraw" }
        ]
    },
    "pathC_2_mixed": {
        title: "Path C.1: Honest Confession",
        text: `You decide honesty is the best policy. You reply to FutureMatch, admitting to the changes you made and explaining that you felt the system was biased against you based on your true demographic information. While FutureMatch warns you about policy violations, your frank explanation might prompt an internal review of their bias detection, though your application is likely to be flagged.`,
        image: "",
        reflection: "Can admitting wrongdoing lead to positive change, even with personal consequences?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_C" }
        ]
    },
    "pathC_2_negative": {
        title: "Path C.2: Further Deception",
        text: `You attempt to create fake documents or come up with a elaborate excuse. However, FutureMatch's systems are sophisticated. Your deception is quickly uncovered, leading to your application being immediately rejected and a permanent ban from the platform. Your school is also notified, potentially leading to disciplinary action.`,
        image: "",
        reflection: "What are the risks of escalating dishonesty when caught?",
        choices: [
            { text: "See Outcome (Negative)", nextSceneId: "outcome_negative_C" }
        ]
    },
    "pathC_2_mixed_withdraw": {
        title: "Path C.3: Bailing Out",
        text: `Realizing the trouble you're in, you immediately withdraw your application from FutureMatch. You decide it's not worth the risk and commit to applying to colleges the traditional way, manually submitting applications. You've avoided immediate consequences but also missed an opportunity to highlight the system's flaws.`,
        image: "",
        reflection: "When faced with an unethical system, is avoiding it enough, or is there a responsibility to challenge it?",
        choices: [
            { text: "See Outcome (Mixed)", nextSceneId: "outcome_mixed_C_withdraw" }
        ]
    },
    // --- ENDING SCENES ---
    "outcome_positive_A": {
        title: "Outcome: A Small Victory (Positive)",
        text: `Your courage in speaking up, even after your own applications were submitted, prompts your school counselor to initiate a discussion with FutureMatch. While immediate changes aren't guaranteed, your actions raise crucial awareness about algorithmic bias among students and faculty, potentially leading to fairer systems for future applicants. You've become a quiet but effective digital citizen.`,
        image: "",
        isEnding: true
    },
    "outcome_positive_B": {
        title: "Outcome: Systemic Change (Positive)",
        text: `Your immediate and brave report forces FutureMatch to acknowledge and investigate the bias in their algorithm. News spreads, sparking a wider conversation about fairness in AI in college admissions. While your own application process was tumultuous, you played a direct role in pushing for more ethical and transparent AI systems, benefiting countless future students.`,
        image: "",
        isEnding: true
    },
    "outcome_positive_B_stronger": {
        title: "Outcome: Impactful Advocacy (Positive)",
        text: `Your thorough investigation provided irrefutable evidence of the algorithm's bias. The consumer protection agency and ethical AI organization take up the case, leading to a public outcry and potential legal action against FutureMatch. Your commitment to justice directly resulted in a powerful push for accountability and ethical AI development.`,
        image: "",
        isEnding: true
    },
    "outcome_mixed_A_resigned": { // NEW MIXED OUTCOME FOR PATH A.2
        title: "Outcome: Resigned Acceptance (Mixed)",
        text: `You chose to accept the situation with disappointment, and while you avoid any direct conflict, the algorithm's bias remains unchecked. You feel a personal sense of missed opportunity and carry a lingering bitterness about the unfairness, but no systemic change occurs.`,
        image: "", // Placeholder image
        isEnding: true
    },
    "outcome_mixed_B": {
        title: "Outcome: Missed Opportunity (Mixed)",
        text: `You secured your college spot, but the information about the bias remains unaddressed. While you personally avoided risk, the flawed algorithm continues to operate, silently affecting other students. You carry the weight of knowing about an injustice without having acted.`,
        image: "",
        isEnding: true
    },
    "outcome_mixed_C": {
        title: "Outcome: Consequences & Reflection (Mixed)",
        text: `Your honest confession, while leading to potential scrutiny of your application, also forced FutureMatch to confront the reasons behind your actions. You faced personal consequences for your deception, but your experience highlighted a flaw in the system that might prompt them to improve their bias detection or review their algorithms. A tough lesson learned.`,
        image: "",
        isEnding: true
    },
    "outcome_mixed_C_withdraw": {
        title: "Outcome: A Narrow Escape (Mixed)",
        text: `You managed to avoid severe consequences by withdrawing, but you also missed an opportunity to bring attention to the AI's bias. You're left to navigate the college application process the hard way, with a newfound skepticism about automated systems. You learned the hard way that cutting corners has risks.`,
        image: "",
        isEnding: true
    },
    "outcome_negative_A": {
        title: "Outcome: Invisible Injustice (Negative)",
        text: `By dismissing the discrepancies as coincidence, you unknowingly accepted the limitations imposed by a biased algorithm. You may always wonder "what if," and the system continues to perpetuate inequities, leaving many students unaware of how their digital identities are shaping their opportunities.`,
        image: "",
        isEnding: true
    },
    "outcome_negative_C": {
        title: "Outcome: Damaged Reputation (Negative)",
        text: `Your attempt to deceive the system backfired severely. Your application was rejected, your reputation at school potentially tarnished, and you faced a permanent ban from the platform. This painful experience underscores the serious repercussions of unethical digital behavior, even when attempting to address a perceived injustice.`,
        image: "",
        isEnding: true
    }
};

// --- CORE LOGIC ---
let currentSceneId = "start"; // Start with the first scene
let visitedScenes = new Set(); // Track visited scenes for progress

// No longer defining local audio objects, they are now global in main.js
// const buttonClickSFX = new Audio('../assets/audio/button_click.mp3');
// const scenarioBGM = document.getElementById('scenario-bgm');

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

    // Update current scene and progress
    currentSceneId = sceneId;
    updateProgress();

    // Get reference to the image element
    const sceneImage = document.getElementById("scene-image");

    // Update HTML elements
    document.getElementById("scene-title").textContent = scene.title;
    document.getElementById("scene-text").innerHTML = scene.text.replace(/\n/g, '<br><br>'); // For line breaks

    // Logic for image display (remains unchanged)
    if (scene.image) { // Check if an image path is provided
        sceneImage.src = scene.image;
        sceneImage.alt = scene.title; // Use scene title for alt text for accessibility
        sceneImage.classList.remove('hidden'); // Ensure image is visible
    } else {
        sceneImage.src = ""; // Clear the src to prevent broken image icon
        sceneImage.alt = ""; // Clear alt text as well
        sceneImage.classList.add('hidden'); // Hide the image element if no image path
    }

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = '';

    // Add new choices if they exist
    if (scene.choices && scene.choices.length > 0) {
        scene.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            // Play global button click SFX before loading next scene
            button.onclick = () => {
                // Always try to play SFX, regardless of BGM state
                    playButtonClickSFX();
                loadScene(choice.nextSceneId);
            };
            choicesContainer.appendChild(button);
        });
        choicesContainer.classList.remove('hidden'); // Ensure choices are visible
    } else {
        choicesContainer.classList.add('hidden'); // Hide if no choices (e.g., at an ending)
    }

    // Update reflection prompt
    const reflectionPrompt = document.getElementById("reflection-prompt");
    if (scene.reflection) {
        reflectionPrompt.innerHTML = `<em>Reflection: ${scene.reflection}</em>`;
        reflectionPrompt.classList.remove('hidden');
    } else {
        reflectionPrompt.classList.add('hidden');
    }

    // Show/hide end buttons
    const restartBtn = document.getElementById("restart-button");
    const backBtn = document.getElementById("back-to-menu-button");
    if (scene.isEnding) {
        restartBtn.classList.remove('hidden');
        backBtn.classList.remove('hidden');
        // Add sound to both buttons
        restartBtn.onclick = () => { playButtonClickSFX(); loadScene('start'); };
        backBtn.onclick = () => { playButtonClickSFX(); window.location.href = '../index.html'; };
    } else {
        restartBtn.classList.add('hidden');
        backBtn.classList.add('hidden');
        restartBtn.onclick = null;
        backBtn.onclick = null;
    }

    window.scrollTo(0, 0); // Scroll to top on new scene
}

// Initial load when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadScene(currentSceneId);

    // Add event listener for info hub toggle
    const infoHubToggle = document.getElementById('info-hub-toggle');
    if (infoHubToggle) {
        infoHubToggle.addEventListener('click', toggleInfoHub);
    }
});
