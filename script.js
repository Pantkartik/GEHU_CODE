// Open links when clicking resource cards
function openLink(url) {
    window.open(url, "_blank");
}

// Show DSA Content
function showDSAContent() {
    let content = document.querySelector(".dsa_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the DSA content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Aptitude Content
function showAptitudeContent() {
    let content = document.querySelector(".aptitude_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Aptitude content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Core CS Content
function showCoreCSContent() {
    let content = document.querySelector(".core_cs_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Core CS content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Learning Language Content
function showLearningLanguageContent() {
    let content = document.querySelector(".learning_language_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Learning Language content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Resume Building Content
function showResumeBuildingContent() {
    let content = document.querySelector(".resume_building_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Resume Building content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Interview Questions Content
function showInterviewQuestionsContent() {
    let content = document.querySelector(".interview_questions_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Interview Questions content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Interview Experience Content
function showInterviewExperienceContent() {
    let content = document.querySelector(".interview_experience_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Interview Experience content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Cold Emailing Content
function showColdEmailingContent() {
    let content = document.querySelector(".cold_emailing_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Cold Emailing content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Projects Content
function showProjectsContent() {
    let content = document.querySelector(".projects_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Projects content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show FAQ Content
function showFAQContent() {
    let content = document.querySelector(".faq_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the FAQ content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Google Interview Details
function showGoogleInterviewDetails() {
    let details = document.getElementById("googleInterviewDetails");
    details.style.display = "block";
    setTimeout(() => {
        details.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Google Interview Details
    details.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show Atlassian Interview Details
function showAtlassianInterviewDetails() {
    let details = document.getElementById("atlassianInterviewDetails");
    details.style.display = "block";
    setTimeout(() => {
        details.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Atlassian Interview Details
    details.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
