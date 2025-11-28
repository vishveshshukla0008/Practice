const reelsArr = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./reels/video 1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop"
    },
    {
        username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./reels/video 2.mp4",
        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./reels/video 3.mp4",
        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./reels/video 4.mp4",
        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./reels/video 5.mp4",
        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    }
];

// GENERATE HTML
let sum = "";
function addData() {
    reelsArr.forEach((elem, idx) => {
        sum += `
    <div class="reel">
        <i class="ri-volume-mute-fill speaker-icon"></i>
        <video class="reel-video" autoplay muted loop src="${elem.video}"></video>

        <div class="bottom">
            <div class="top">
                <img src="${elem.userprofile}">
                <p>${elem.username}</p>
                <button>Follow</button>
            </div>
            <p>${elem.caption}</p>
        </div>

        <div class="sidebar" >
            <div class="like-wrapper">
                <i id=${idx} class="${elem.isLiked ? "ri-heart-2-fill" : "ri-heart-2-line"}"></i>
                <span>${elem.likeCount}</span>
            </div>
            <div class="comment-wrapper">
                <i class="ri-chat-3-line"></i>
                <span>${elem.commentCount}</span>
            </div>
            <div class="share-wrapper">
                <i class="ri-send-plane-line"></i>
                <span>${elem.shareCount}</span>
            </div>
            <div class="save-wrapper">
                <i class="ri-save-line"></i>
            </div>
        </div>
    </div>`;
    });

    document.querySelector(".all-reels").innerHTML = sum;
}

addData()


const reels = document.querySelectorAll(".reel");


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const video = entry.target.querySelector(".reel-video");


        if (entry.isIntersecting) {
            video.play();
        } else {
            video.pause();
        }

        let isPaused = false;
        video.addEventListener("click", () => {
            if (!isPaused) {
                // rok do
                video.pause();
                isPaused = true;
                return;
            }
            // chalaa do
            video.play()
            isPaused = false;
        })
    });
}, { threshold: 0.2 });

reels.forEach((reel) => observer.observe(reel));



const allVideos = document.querySelectorAll(".reel-video");
const allSpeakerIcons = document.querySelectorAll(".speaker-icon");

let isMuted = true; 



allSpeakerIcons.forEach((icon) => {
    icon.addEventListener("click", () => {

        isMuted = !isMuted; 
        allVideos.forEach((video) => video.muted = isMuted);

        // Update ALL icons
        allSpeakerIcons.forEach((ic) => {
            if (isMuted) {
                ic.classList.remove("ri-volume-up-fill");
                ic.classList.add("ri-volume-mute-fill");
            } else {
                ic.classList.remove("ri-volume-mute-fill");
                ic.classList.add("ri-volume-up-fill");
            }
        });
    });
});


let allLikeBtns = document.querySelectorAll(".like-wrapper i");

allLikeBtns.forEach((icon) => {
    icon.addEventListener("click", (el) => {
        const id = el.target.id;
        if (!id) return;

        const countSpan = el.target.nextElementSibling;

        if (reelsArr[id].isLiked) {
            reelsArr[id].isLiked = false;
            reelsArr[id].likeCount--;
            el.target.classList.remove("ri-heart-2-fill");
            el.target.classList.add("ri-heart-2-line");
        } else {
            reelsArr[id].isLiked = true;
            reelsArr[id].likeCount++;
            el.target.classList.remove("ri-heart-2-line");
            el.target.classList.add("ri-heart-2-fill");
        }

        countSpan.textContent = reelsArr[id].likeCount;
    });
});

