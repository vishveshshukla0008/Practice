//  Access Start card :
let btnsDiv = document.querySelector(".btns-wrapper");
let startBtn = document.querySelector("#startBtn");
let startCard = document.querySelector(".start-Card");

//  Access Questions card:

let questionCard = document.querySelector(".question-card");
let currentQuestionCount = document.querySelector("#currentQuestion");
let allQuestionCount = document.querySelector("#allQuestion");
let question = document.querySelector("#question");
let optionsDiv = document.querySelector(".optionsWrapper");
let nextBtn = document.querySelector("#nextBtn");
let levelText = document.querySelector(".level-text");

// Access Result Card :

let resultCard = document.querySelector(".result-card");
let statusText = document.querySelector(".status");
let scoreText = document.querySelector(".score");
let testAgain = document.querySelector("#testAgain");

// Questions - Array :

const easyQuestionsArr = [
    {
        id: 1,
        level: "Easy",
        question: "What is the correct full form of HTML?",
        options: [
            "Hyper Text Markup Language",
            "High Text Marking Level",
            "Hyperlinks Text Managing Language",
            "Home Tool Marking Language",
        ],
        answer: "Hyper Text Markup Language",
    },
    {
        id: 2,
        level: "Easy",
        question: "Which tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>",
    },
    {
        id: 3,
        level: "Easy",
        question: "Which tag is used to display an image?",
        options: ["<image>", "<img>", "<pic>", "<src>"],
        answer: "<img>",
    },
    {
        id: 4,
        level: "Easy",
        question: "Which tag is used for the largest heading?",
        options: ["<h6>", "<heading>", "<h1>", "<head>"],
        answer: "<h1>",
    },
    {
        id: 5,
        level: "Easy",
        question: "Which attribute specifies an image path?",
        options: ["link", "src", "href", "path"],
        answer: "src",
    },
    {
        id: 6,
        level: "Easy",
        question: "Which tag is used to make text bold?",
        options: ["<strong>", "<bold>", "<b>", "<fat>"],
        answer: "<b>",
    },
    {
        id: 7,
        level: "Easy",
        question: "Which tag is used to insert a line break?",
        options: ["<lb>", "<break>", "<br>", "<line>"],
        answer: "<br>",
    },
    {
        id: 8,
        level: "Easy",
        question: "Which element contains the visible page content?",
        options: ["<body>", "<html>", "<head>", "<section>"],
        answer: "<body>",
    },
    {
        id: 9,
        level: "Easy",
        question: "Which tag is used to create an ordered list?",
        options: ["<ol>", "<ul>", "<list>", "<order>"],
        answer: "<ol>",
    },
    {
        id: 10,
        level: "Easy",
        question: "Which HTML tag is used to input text from users?",
        options: ["<input>", "<type>", "<textbox>", "<form>"],
        answer: "<input>",
    },
];

const mediumQuestions = [
    {
        question: "What is the purpose of the <meta> tag in HTML?",
        options: [
            "To display images",
            "To provide metadata about the document",
            "To create hyperlinks",
            "To add headings",
        ],
        answer: "To provide metadata about the document",
    },
    {
        question: "Which attribute is used to open a link in a new tab?",
        options: ["_blank", "_self", "_new", "_open"],
        answer: "_blank",
    },
    {
        question: "What does the 'defer' attribute do in a script tag?",
        options: [
            "Executes script immediately",
            "Executes script after HTML parsing",
            "Prevents script execution",
            "Loads script only on user interaction",
        ],
        answer: "Executes script after HTML parsing",
    },
    {
        question: "Which HTML element is used for marking up keyboard inputs?",
        options: ["<kbd>", "<code>", "<input>", "<key>"],
        answer: "<kbd>",
    },
    {
        question: "Which attribute is used to associate a label with an input?",
        options: ["for", "id", "name", "label"],
        answer: "for",
    },
    {
        question: "Which HTML element is used to define a client-side image map?",
        options: ["<img>", "<map>", "<area>", "<canvas>"],
        answer: "<map>",
    },
    {
        question: "Which tag is used to embed another webpage inside your webpage?",
        options: ["<iframe>", "<frame>", "<embed>", "<object>"],
        answer: "<iframe>",
    },
    {
        question: "Which input type is used for selecting multiple options?",
        options: ["checkbox", "radio", "select", "button"],
        answer: "checkbox",
    },
    {
        question: "What is the correct HTML element for playing video?",
        options: ["<media>", "<video>", "<movie>", "<player>"],
        answer: "<video>",
    },
    {
        question: "Which tag is used to group items in a dropdown list?",
        options: ["<optgroup>", "<group>", "<option>", "<fieldset>"],
        answer: "<optgroup>",
    },
    {
        question: "Which attribute is used to make an input field mandatory?",
        options: ["required", "mandatory", "validate", "must"],
        answer: "required",
    },
    {
        question: "Which tag represents self-contained content like a blog post?",
        options: ["<section>", "<div>", "<article>", "<main>"],
        answer: "<article>",
    },
    {
        question:
            "Which HTML element is used to display scalar measurements within a known range?",
        options: ["<progress>", "<meter>", "<range>", "<scale>"],
        answer: "<meter>",
    },
    {
        question: "What happens if you use multiple <main> elements in HTML5?",
        options: [
            "It works normally",
            "Browser will crash",
            "It is invalid and should only appear once",
            "It disables semantic meaning",
        ],
        answer: "It is invalid and should only appear once",
    },
    {
        question: "Which attribute makes an audio/video play automatically?",
        options: ["autoplay", "start", "auto", "loop"],
        answer: "autoplay",
    },
];

const hardQuestions = [
    {
        question:
            "Which HTML element defines a description for items in a <figure>?",
        options: ["<figcaption>", "<caption>", "<description>", "<figuretext>"],
        answer: "<figcaption>",
    },
    {
        question: "What is the purpose of the 'sandbox' attribute in an <iframe>?",
        options: [
            "To improve video quality",
            "To isolate iframe content for security",
            "To resize the iframe automatically",
            "To load external CSS",
        ],
        answer: "To isolate iframe content for security",
    },
    {
        question:
            "Which HTML API allows checking if the document is visible to the user?",
        options: [
            "Page Visibility API",
            "DOM Events API",
            "Window Focus API",
            "Document State API",
        ],
        answer: "Page Visibility API",
    },
    {
        question: "What does the 'async' attribute do in script loading?",
        options: [
            "Executes script after DOM load",
            "Executes script before parsing HTML",
            "Downloads script in parallel and executes immediately",
            "Blocks HTML parsing",
        ],
        answer: "Downloads script in parallel and executes immediately",
    },
    {
        question: "What does <template> tag do?",
        options: [
            "Creates a reusable HTML block not rendered immediately",
            "Creates server-side templates",
            "Renders shadow DOM",
            "Creates a cached HTML structure",
        ],
        answer: "Creates a reusable HTML block not rendered immediately",
    },
    {
        question: "What is the purpose of the <slot> element?",
        options: [
            "For embedding media",
            "For declaring multiple style blocks",
            "For projecting light DOM content into shadow DOM",
            "For lazy loading HTML",
        ],
        answer: "For projecting light DOM content into shadow DOM",
    },
    {
        question: "Which attribute enables lazy loading for images?",
        options: ["loading='lazy'", "lazyload='true'", "defer", "async"],
        answer: "loading='lazy'",
    },
    {
        question:
            "What is the default display type of <summary> in a <details> element?",
        options: ["inline", "block", "list-item", "flex"],
        answer: "list-item",
    },
    {
        question: "Which tag is used to declare custom elements in HTML?",
        options: [
            "Custom tags aren't supported",
            "Use <custom-element>",
            "Define them via JavaScript using customElements.define()",
            "Use <component>",
        ],
        answer: "Define them via JavaScript using customElements.define()",
    },
    {
        question: "Which HTML element is NOT allowed inside <table>?",
        options: ["<script>", "<caption>", "<colgroup>", "<tbody>"],
        answer: "<script>",
    },
    {
        question: "What is the purpose of <output> tag?",
        options: [
            "Shows result of a calculation",
            "Outputs console logs",
            "Displays server responses",
            "Shows form validation messages",
        ],
        answer: "Shows result of a calculation",
    },
    {
        question:
            "Which attribute prevents a form from submitting when pressing Enter?",
        options: [
            "novalidate",
            "prevent",
            "onsubmit='return false'",
            "submit='false'",
        ],
        answer: "onsubmit='return false'",
    },
    {
        question: "What does the 'nonce' attribute do in <script>?",
        options: [
            "Executes script multiple times",
            "Protects against CSP attacks by validating script",
            "Improves performance",
            "Caches script",
        ],
        answer: "Protects against CSP attacks by validating script",
    },
    {
        question: "What is the purpose of the <dialog> element?",
        options: [
            "Creates a new HTML document",
            "Defines a modal or popup",
            "Creates a loading screen",
            "Defines a comment section",
        ],
        answer: "Defines a modal or popup",
    },
    {
        question:
            "Which HTML tag supports the 'is' attribute for customized built-in elements?",
        options: ["<button>", "<div>", "<table>", "<p>"],
        answer: "<button>",
    },
    {
        question: "What is the correct nesting rule for <details> and <summary>?",
        options: [
            "summary must be inside details and be the first element",
            "summary must be outside details",
            "summary must not exist inside details",
            "summary can appear anywhere",
        ],
        answer: "summary must be inside details and be the first element",
    },
    {
        question:
            "Which tag defines a document or section cited from another source?",
        options: ["<blockquote>", "<q>", "<cite>", "<ref>"],
        answer: "<blockquote>",
    },
    {
        question: "Shadow DOM belongs to which HTML specification?",
        options: ["HTML4", "DOM Level 2", "Web Components", "ECMAScript"],
        answer: "Web Components",
    },
    {
        question:
            "Which HTML element is used to define pre-rendered HTML fragments that browsers can use later?",
        options: ["<cache>", "<template>", "<fragment>", "<prerender>"],
        answer: "<template>",
    },
    {
        question:
            "What does the 'referrerpolicy' attribute in <a> or <img> control?",
        options: [
            "Caching behavior",
            "Information included in HTTP Referrer header",
            "Redirect permissions",
            "Image optimization",
        ],
        answer: "Information included in HTTP Referrer header",
    },
];

// Start card events Only - started

let questionLevel = null;

btnsDiv.addEventListener("click", (event) => {
    if (event.target.tagName == "BUTTON") {
        let clickedBtn = event.target;
        const allBtns = btnsDiv.querySelectorAll("button");

        allBtns.forEach((el) => {
            el.style.border = "none";
            el.style.backgroundColor = "";
        });

        clickedBtn.style.border = "1px solid white";
        clickedBtn.style.backgroundColor = "#2F459C";
        questionLevel = clickedBtn.id;
    }
});

startBtn.addEventListener("click", startQuiz);

// Start card events Only - ended

let selectedArray = null;
let currentIndex = 0;
let score = 0;
let totalQuestions = selectedArray?.length;

function startQuiz() {
    if (!questionLevel) {
        alert("Please select the question level first :");
        return;
    }

    if (questionLevel == "easy") {
        selectedArray = easyQuestionsArr;
    } else if (questionLevel == "medium") {
        selectedArray = mediumQuestions;
    } else {
        selectedArray = hardQuestions;
    }

    startCard.style.display = "none";
    questionCard.style.display = "flex";

    renderQuestion(selectedArray);
}

optionsDiv.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") return;

    const allBtns = optionsDiv.querySelectorAll("button");
    allBtns.forEach((btn) => btn.classList.remove("selected"));
    event.target.classList.add("selected");

    showAnswer(event);
});

function showAnswer(e) {
    if (e.target.textContent == selectedArray[currentIndex].answer) {
        setTimeout(() => {
            e.target.style.backgroundColor = "rgb(28, 231, 28)";
            nextBtn.disabled = false;
        }, 1300);
        freezeOptionsButton();
    } else {
        setTimeout(() => {
            e.target.style.backgroundColor = "red";
            nextBtn.disabled = false;
        }, 1300);
        // search the correct button :

        const allBtns = optionsDiv.querySelectorAll("button");
        allBtns.forEach((btn) => {
            if (btn.textContent == selectedArray[currentIndex].answer) {
                setTimeout(() => {
                    btn.style.backgroundColor = "rgb(28, 231, 28)";
                }, 1300);
            }
        });

        freezeOptionsButton();
    }
}

function renderQuestion(arr) {
    // Find the questions count :
    allQuestionCount.textContent = `/${arr.length}`;
    currentQuestionCount.textContent = currentIndex + 1;

    // find the actual question-object in array first :
    let currQuestion = arr[currentIndex]; // current object

    question.textContent = currQuestion.question; //actual question :

    optionsDiv.innerHTML = "";

    // Make the options div empty and create via dom refering the object :
    currQuestion.options.forEach((element) => {
        let btn = document.createElement("button");
        btn.innerText = element;
        optionsDiv.appendChild(btn);
    });

    nextBtn.disabled = true;
}

nextBtn.addEventListener("click", function () {
    deFreezeOptionsButton();
    let selectedBtn = document.querySelector(".selected");
    if (selectedBtn.textContent === selectedArray[currentIndex].answer) {
        score++;
    }

    currentIndex++;

    if (currentIndex >= selectedArray.length) {
        showResult();
        return;
    }

    renderQuestion(selectedArray);
});

function showResult() {
    questionCard.style.display = "none";
    resultCard.style.display = "block";

    const percentage = ((score / selectedArray.length) * 100).toFixed(1);
    console.log(percentage)
    if (percentage > 90) {
        statusText.textContent = "Congradulations, Excellent Performance";
        statusText.style.color = "#15ff00";
    } else if (percentage > 80) {
        statusText.textContent = "Congradulations, Good Performance ! Keep it up";
        statusText.style.color = "#15ff00";
    } else if (percentage > 70) {
        statusText.textContent = "Good Performance";
        statusText.style.color = "greenyellow";
    } else if (percentage > 60) {
        statusText.textContent = "Average Performance";
        statusText.style.color = "yellow";
    } else if (percentage > 50) {
        statusText.textContent = "You need to practice more";
        statusText.style.color = "yellow";
    } else if (percentage > 40) {
        statusText.textContent = "Not Good, Study well";
    } else {
        statusText.textContent = "FAILED";
        statusText.style.color = "red";
    }

    scoreText.textContent = `score : ${score}/${selectedArray.length} (${percentage}%)`;
}

testAgain.addEventListener("click", resetQuiz);
function resetQuiz() {
    questionLevel = null;
    selectedArray = null;
    currentIndex = 0;
    score = 0;
    totalQuestions = 0;

    resultCard.style.display = "none";
    startCard.style.display = "flex";
}

function freezeOptionsButton() {
    optionsDiv.querySelectorAll("button").forEach((el) => {
        el.disabled = true;
    });
}

function deFreezeOptionsButton() {
    optionsDiv.querySelectorAll("button").forEach((el) => {
        el.disabled = false;
    });
}
