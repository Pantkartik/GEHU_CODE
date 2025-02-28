// Open links when clicking resource cards
function openLink(url) {
    window.open(url, "_blank");
}

// Show Step 1 Content
function showStep1() {
    let content = document.querySelector(".step1_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Step 1 content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Show Step 2 Content
function showStep2() {
    let content = document.querySelector(".step2_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Step 2 content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Show Step 3 Content
function showStep3() {
    let content = document.querySelector(".step3_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Step 3 content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Show Step 4 Content
function showStep4() {
    let content = document.querySelector(".step4_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Step 4 content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Show Step 5 Content
function showStep5() {
    let content = document.querySelector(".step5_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Step 5 content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Show Pro Tips Content
function showProTips() {
    let content = document.querySelector(".pro_tips_content");
    content.style.display = "block";
    setTimeout(() => {
        content.style.opacity = "1";
    }, 100);

    // Scroll smoothly to the Pro Tips content
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    document.getElementById('backToTopBtn').style.display = 'block';
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show the "Back to Top" button when the user scrolls down
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
};
