// Quiz Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeQuiz();
    
    console.log('Quiz page initialized! 🌟');
});

// Quiz data for "The Magical Sun Storms: A Space Weather Tale"
const sunStormsQuiz = [
    {
        question: "Up close, how does the Sun really look?",
        options: [
            "Calm and sleepy like a pillow",
            "Bubbling like hot soup on the stove",
            "Dancing like a ballerina"
        ],
        correct: 1,
        explanation: "The Sun is bubbling like hot soup on the stove! It's full of energy and activity!"
    },
    {
        question: "What are solar flares like in the story?",
        options: [
            "Giant fireworks pops",
            "Soft whispers from stars",
            "Raindrops from space"
        ],
        correct: 0,
        explanation: "Solar flares are like giant fireworks pops - bright bursts of energy from the Sun!"
    },
    {
        question: "What's Earth's special bubble shield called?",
        options: [
            "The magnetosphere",
            "The rainbow wall",
            "The cozy blanket"
        ],
        correct: 0,
        explanation: "Earth's special bubble shield is called the magnetosphere - it protects us from space weather!"
    },
    {
        question: "During a space storm, what might happen to a car's GPS?",
        options: [
            "It starts singing songs",
            "It gets dizzy and says \"I'm lost!\"",
            "It turns into a magic map"
        ],
        correct: 1,
        explanation: "During space storms, GPS can get dizzy and say \"I'm lost!\" because signals get disrupted!"
    },
    {
        question: "How do scientists help during space weather?",
        options: [
            "They throw parties with the Sun",
            "They watch with telescopes and give storm alerts",
            "They draw pictures like Mia and Leo"
        ],
        correct: 1,
        explanation: "Scientists watch with telescopes and give storm alerts to help keep everyone safe!"
    }
];

// Quiz data for "Wave to Zoomy: The Satellite in the Sky"
const zoomyQuiz = [
    {
        question: "True or False? I'm Zoomy, and I circle Earth every 90 minutes taking pictures of cool stuff like beaches and mountains.",
        type: "truefalse",
        correct: true,
        explanation: "True! I zoom around super fast—faster than you can eat a cookie! 🚀"
    },
    {
        question: "What do my shiny wings catch to get power?",
        options: [
            "Raindrops",
            "Sunlight",
            "Star dust",
            "Moon cheese"
        ],
        correct: 1,
        explanation: "Sunlight – My solar panels love those sunny hugs! ☀️"
    },
    {
        question: "True or False? Solar flares are like super bright fireworks from the sun.",
        type: "truefalse",
        correct: true,
        explanation: "True! Bang—bright flashes that start the fun (or wobbles)! 💥"
    },
    {
        question: "What happens when a coronal mass ejection hits Earth's shield?",
        options: [
            "It makes a big rainbow",
            "It causes a geomagnetic storm and makes everything wobbly",
            "The sun takes a nap",
            "I get to eat space ice cream"
        ],
        correct: 1,
        explanation: "It causes a geomagnetic storm and makes everything wobbly – Shake, rattle, and roll! 🌪️"
    },
    {
        question: "What does space weather do to me, Zoomy? (Pick two!)",
        type: "multiselect",
        options: [
            "Makes my computers glitch and signals fuzzy",
            "Turns me into a dancing robot",
            "Makes me wobble like on a bumpy slide",
            "Gives me extra photos to take"
        ],
        correct: [0, 2],
        explanation: "Glitches and wobbles are my bumpy buddies during storms! 🤖"
    },
    {
        question: "True or False? Scientists use telescopes to watch the sun and warn me about storms.",
        type: "truefalse",
        correct: true,
        explanation: "True! They're like my ground team superheroes—always watching out! 👨‍🔬"
    }
];

// Quiz data for "Gigi the GPS: Lost in a Sunstorm Adventure!"
const gigiQuiz = [
    {
        question: "True or False? I'm Gigi, and I help find ice cream shops or grandma's house by chatting with satellites like Zoomy.",
        type: "truefalse",
        correct: true,
        explanation: "True! I'm your adventure sidekick, always pointing the fun way! 🗺️"
    },
    {
        question: "What do I use to draw paths on your phone screen?",
        options: [
            "Magic crayons",
            "Signals from sky satellites",
            "Bird maps",
            "Cloud drawings"
        ],
        correct: 1,
        explanation: "Signals from sky satellites – Ping-pong with the stars to keep you on track! 📡"
    },
    {
        question: "True or False? Solar flares are like surprise confetti pops from the sun.",
        type: "truefalse",
        correct: true,
        explanation: "True! Flashy fun that kicks off the signal slips! 🎉"
    },
    {
        question: "What does a geomagnetic storm do when it hits Earth's shield?",
        options: [
            "Makes everyone dance",
            "Starts a wiggly jumble in the sky's air layer (ionosphere)",
            "Turns phones into toys",
            "Gives free ice cream"
        ],
        correct: 1,
        explanation: "Starts a wiggly jumble in the sky's air layer (ionosphere) – Everything gets charged and bendy! ⚡"
    },
    {
        question: "What happens to me and internet during a storm? (Pick two!)",
        type: "multiselect",
        options: [
            "Signals get twisty and fade like windy whispers",
            "Videos freeze mid-laugh",
            "I draw perfect rainbows",
            "Maps say \"Lost!\" and cars go oops"
        ],
        correct: [0, 1],
        explanation: "Twisties and freezes are my stormy hiccups! 🌪️"
    },
    {
        question: "True or False? Scientists watch the sun with telescopes and tweak gadgets to fix storm mix-ups.",
        type: "truefalse",
        correct: true,
        explanation: "True! My hero team keeps us steady—high-fives to them! 👨‍🔬"
    }
];

// Quiz data for "Aurora Annie: The Dancing Lights of Space"
const auroraQuiz = [
    {
        question: "True or False? I'm Annie, a swirly ribbon of green and pink that dances up in the chilly north.",
        type: "truefalse",
        correct: true,
        explanation: "True! Wavy and colourful, ready to party in the dark sky! 🌈"
    },
    {
        question: "Where do I start before lighting up the sky?",
        options: [
            "In a candy factory",
            "As tiny zingy bits from the sun on a solar wind ride",
            "Under a rainbow bridge",
            "In a star's pocket"
        ],
        correct: 1,
        explanation: "As tiny zingy bits from the sun on a solar wind ride – Zooming adventure to Earth! 🌟"
    },
    {
        question: "True or False? Solar flares are like surprise fireworks that send speedy particles my way.",
        type: "truefalse",
        correct: true,
        explanation: "True! Flashy pops to start my dance party! 🎆"
    },
    {
        question: "What do the sun's particles bump into to wake me up?",
        options: [
            "Earth's cozy shield called the magnetosphere",
            "A big pillow fort",
            "Moon's trampoline",
            "Cloud blankets"
        ],
        correct: 0,
        explanation: "Earth's cozy shield called the magnetosphere – Bump and glow time! 🛡️"
    },
    {
        question: "True or False? A geomagnetic storm makes me brighter than a birthday cake during a big sun sneeze.",
        type: "truefalse",
        correct: true,
        explanation: "True! Extra shake means extra sparkle—whoopee! 🎂"
    }
];

let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let selectedAnswers = [];
let isAnswered = false;

function initializeQuiz() {
    console.log('=== INITIALIZING QUIZ ===');
    
    // Quiz selection handlers
    const selectQuizBtns = document.querySelectorAll('.select-quiz-btn');
    console.log('Found', selectQuizBtns.length, 'quiz selection buttons');
    selectQuizBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const quizType = this.dataset.quiz;
            console.log('Quiz selected:', quizType);
            selectQuiz(quizType);
        });
    });
    
    // Back to selection handler
    const backToSelectionBtn = document.getElementById('backToSelectionBtn');
    if (backToSelectionBtn) {
        backToSelectionBtn.addEventListener('click', backToSelection);
        console.log('Back to selection button handler attached');
    }
    
    // Start quiz handler
    const startBtn = document.getElementById('startQuizBtn');
    if (startBtn) {
        startBtn.addEventListener('click', startQuiz);
        console.log('Start quiz button handler attached');
    } else {
        console.error('Start quiz button not found!');
    }
    
    // Retry button handler
    const retryBtn = document.getElementById('retryBtn');
    if (retryBtn) {
        retryBtn.addEventListener('click', resetQuiz);
        console.log('Retry button handler attached');
    }
    
    // Next question button handler
    const nextBtn = document.getElementById('nextQuestionBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
        console.log('Next button event listener attached');
    } else {
        console.error('Next button not found!');
    }
    
    // Test quiz data
    console.log('Sun Storms Quiz Data:', sunStormsQuiz);
    console.log('Quiz initialization complete');
}

function selectQuiz(quizType) {
    currentQuiz = quizType;
    
    // Hide selection screen and show start screen
    document.getElementById('quizSelection').style.display = 'none';
    document.getElementById('quizStart').style.display = 'block';
    
    // Update start screen content based on quiz type
    const quizIcon = document.getElementById('quizIcon');
    const quizTitle = document.getElementById('quizTitle');
    const quizDescription = document.getElementById('quizDescription');
    const questionCount = document.getElementById('questionCount');
    
    if (quizType === 'sun-storms') {
        quizIcon.innerHTML = '<i class="fas fa-sun"></i>';
        quizTitle.textContent = 'Hey, star explorer!';
        quizDescription.textContent = 'Ready to zoom through the story of The Sun\'s Secret Storms? Answer these fun questions to see if you\'re a super space weather spotter like Mia and Leo. Pick the best answer for each one.';
        questionCount.textContent = '5 Questions';
    } else if (quizType === 'zoomy') {
        quizIcon.innerHTML = '<i class="fas fa-satellite"></i>';
        quizTitle.textContent = 'Hey there, space buddy!';
        quizDescription.textContent = 'Ready to learn about satellites and space weather with Zoomy? Answer these fun questions to see if you understand how space weather affects satellites like me!';
        questionCount.textContent = '6 Questions';
    } else if (quizType === 'gigi') {
        quizIcon.innerHTML = '<i class="fas fa-map-marked-alt"></i>';
        quizTitle.textContent = 'Hey there, navigation explorer!';
        quizDescription.textContent = 'Ready to navigate through GPS adventures with Gigi? Answer these fun questions to see if you understand how space weather affects GPS and navigation systems!';
        questionCount.textContent = '6 Questions';
    } else if (quizType === 'aurora') {
        quizIcon.innerHTML = '<i class="fas fa-palette"></i>';
        quizTitle.textContent = 'Hey there, sky dancer!';
        quizDescription.textContent = 'Ready to dance with the aurora lights? Answer these fun questions to see if you understand how space weather creates Earth\'s beautiful sky shows!';
        questionCount.textContent = '5 Questions';
    }
}

function backToSelection() {
    // Show selection screen and hide start screen
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizSelection').style.display = 'block';
    
    // Reset quiz state
    currentQuiz = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    selectedAnswers = [];
    isAnswered = false;
}

function startQuiz() {
    // Hide start screen and show questions
    document.getElementById('quizStart').style.display = 'none';
    document.getElementById('quizQuestions').style.display = 'block';
    
    // Reset quiz state
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    selectedAnswers = [];
    isAnswered = false;
    
    // Load first question
    loadQuestion();
}

function getCurrentQuizData() {
    if (currentQuiz === 'sun-storms') {
        return sunStormsQuiz;
    } else if (currentQuiz === 'zoomy') {
        return zoomyQuiz;
    } else if (currentQuiz === 'gigi') {
        return gigiQuiz;
    } else if (currentQuiz === 'aurora') {
        return auroraQuiz;
    }
    return sunStormsQuiz; // fallback
}

function loadQuestion() {
    const quizData = getCurrentQuizData();
    const question = quizData[currentQuestionIndex];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressFill = document.getElementById('progressFill');
    const currentQuestionSpan = document.getElementById('currentQuestion');
    const totalQuestionsSpan = document.getElementById('totalQuestions');
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = quizData.length;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Debug logging
    console.log('Loading question:', question);
    console.log('Question type:', question.type || 'multiple choice');
    
    // Create options based on question type
    if (question.type === 'truefalse') {
        createTrueFalseOptions(question);
    } else if (question.type === 'multiselect') {
        createMultiSelectOptions(question);
    } else {
        // Default to multiple choice for Sun Storms quiz
        createMultipleChoiceOptions(question);
    }
    
    // Reset state
    selectedAnswer = null;
    selectedAnswers = [];
    isAnswered = false;
    
    // Hide feedback and ensure it's properly hidden
    const feedback = document.getElementById('quizFeedback');
    if (feedback) {
        feedback.style.display = 'none';
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(20px)';
    }
    
    console.log('Question loaded successfully');
}

function createTrueFalseOptions(question) {
    const optionsContainer = document.getElementById('optionsContainer');
    
    console.log('Creating True/False options for:', question);
    
    // Clear any existing options first
    optionsContainer.innerHTML = '';
    
    const trueOption = document.createElement('div');
    trueOption.className = 'option truefalse-option';
    trueOption.textContent = 'True';
    trueOption.setAttribute('data-value', 'true');
    trueOption.style.cursor = 'pointer';
    trueOption.style.pointerEvents = 'auto';
    trueOption.style.userSelect = 'none';
    
    const clickHandlerTrue = function(e) {
        console.log('=== TRUE OPTION CLICKED ===');
        console.log('isAnswered:', isAnswered);
        
        if (isAnswered) {
            console.log('Already answered, ignoring click');
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        // Visual feedback
        trueOption.style.transform = 'scale(0.98)';
        setTimeout(() => {
            trueOption.style.transform = 'scale(1)';
        }, 150);
        
        console.log('Calling selectTrueFalse with true');
        selectTrueFalse(true);
    };
    
    trueOption.addEventListener('click', clickHandlerTrue);
    optionsContainer.appendChild(trueOption);
    
    const falseOption = document.createElement('div');
    falseOption.className = 'option truefalse-option';
    falseOption.textContent = 'False';
    falseOption.setAttribute('data-value', 'false');
    falseOption.style.cursor = 'pointer';
    falseOption.style.pointerEvents = 'auto';
    falseOption.style.userSelect = 'none';
    
    const clickHandlerFalse = function(e) {
        console.log('=== FALSE OPTION CLICKED ===');
        console.log('isAnswered:', isAnswered);
        
        if (isAnswered) {
            console.log('Already answered, ignoring click');
            return;
        }
        
        e.preventDefault();
        e.stopPropagation();
        
        // Visual feedback
        falseOption.style.transform = 'scale(0.98)';
        setTimeout(() => {
            falseOption.style.transform = 'scale(1)';
        }, 150);
        
        console.log('Calling selectTrueFalse with false');
        selectTrueFalse(false);
    };
    
    falseOption.addEventListener('click', clickHandlerFalse);
    optionsContainer.appendChild(falseOption);
    
    console.log('True/False options created successfully');
}

function createMultiSelectOptions(question) {
    const optionsContainer = document.getElementById('optionsContainer');
    
    console.log('Creating multiselect options for:', question);
    console.log('Options:', question.options);
    
    // Clear any existing options first
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option multiselect-option';
        optionElement.setAttribute('data-index', index);
        
        // Create checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `option-${index}`;
        checkbox.value = index;
        checkbox.style.marginRight = '15px';
        checkbox.style.transform = 'scale(1.2)';
        
        // Create label
        const label = document.createElement('label');
        label.htmlFor = `option-${index}`;
        label.textContent = option;
        label.style.cursor = 'pointer';
        label.style.flex = '1';
        
        // Add elements to option
        optionElement.appendChild(checkbox);
        optionElement.appendChild(label);
        
        // Make sure the element is clickable
        optionElement.style.cursor = 'pointer';
        optionElement.style.pointerEvents = 'auto';
        optionElement.style.userSelect = 'none';
        
        // Add click event listener
        const clickHandler = function(e) {
            console.log('=== MULTISELECT OPTION CLICKED ===');
            console.log('Index:', index);
            console.log('Option:', option);
            console.log('isAnswered:', isAnswered);
            
            if (isAnswered) {
                console.log('Already answered, ignoring click');
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle checkbox
            checkbox.checked = !checkbox.checked;
            
            // Update selected answers array
            if (checkbox.checked) {
                if (!selectedAnswers.includes(index)) {
                    selectedAnswers.push(index);
                }
            } else {
                selectedAnswers = selectedAnswers.filter(i => i !== index);
            }
            
            // Update UI
            optionElement.classList.toggle('selected', checkbox.checked);
            
            console.log('Selected answers:', selectedAnswers);
            
            // Visual feedback
            optionElement.style.transform = 'scale(0.98)';
            setTimeout(() => {
                optionElement.style.transform = 'scale(1)';
            }, 150);
        };
        
        optionElement.addEventListener('click', clickHandler);
        
        // Also handle checkbox change directly
        checkbox.addEventListener('change', function(e) {
            e.stopPropagation();
            console.log('Checkbox changed:', index, checkbox.checked);
            
            if (!isAnswered) {
                if (checkbox.checked) {
                    if (!selectedAnswers.includes(index)) {
                        selectedAnswers.push(index);
                    }
                } else {
                    selectedAnswers = selectedAnswers.filter(i => i !== index);
                }
                
                optionElement.classList.toggle('selected', checkbox.checked);
                console.log('Updated selected answers:', selectedAnswers);
            }
        });
        
        optionsContainer.appendChild(optionElement);
        console.log('Added multiselect option element:', index, option);
    });
    
    // Add submit button for multiselect questions
    const submitButton = document.createElement('button');
    submitButton.className = 'submit-multiselect-btn';
    submitButton.innerHTML = '<i class="fas fa-check"></i> Submit Answer';
    submitButton.style.marginTop = '20px';
    submitButton.style.width = '100%';
    submitButton.style.maxWidth = '300px';
    
    submitButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        console.log('Submit button clicked');
        console.log('Selected answers:', selectedAnswers);
        console.log('isAnswered:', isAnswered);
        
        if (!isAnswered && selectedAnswers.length > 0) {
            isAnswered = true;
            console.log('Submitting multiselect answer');
            setTimeout(() => {
                checkAnswer(selectedAnswers);
            }, 300);
        } else if (selectedAnswers.length === 0) {
            console.log('No answers selected');
            alert('Please select at least one option before submitting.');
        }
    });
    
    optionsContainer.appendChild(submitButton);
    
    console.log('Multiselect options created successfully. Total options:', optionsContainer.children.length - 1);
}

function createMultipleChoiceOptions(question) {
    const optionsContainer = document.getElementById('optionsContainer');
    
    console.log('Creating multiple choice options for:', question);
    console.log('Options:', question.options);
    
    if (!question.options || question.options.length === 0) {
        console.error('No options found for question:', question);
        return;
    }
    
    // Clear any existing options first
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option multiple-choice-option';
        optionElement.textContent = option;
        optionElement.setAttribute('data-index', index);
        optionElement.setAttribute('data-option', option);
        
        // Make sure the element is clickable
        optionElement.style.cursor = 'pointer';
        optionElement.style.userSelect = 'none';
        optionElement.style.pointerEvents = 'auto';
        
        // Add click event listener with better handling
        const clickHandler = function(e) {
            console.log('=== OPTION CLICKED ===');
            console.log('Index:', index);
            console.log('Option:', option);
            console.log('Event:', e);
            console.log('isAnswered:', isAnswered);
            
            if (isAnswered) {
                console.log('Already answered, ignoring click');
                return;
            }
            
            e.preventDefault();
            e.stopPropagation();
            
            // Visual feedback immediately
            optionElement.style.transform = 'scale(0.98)';
            setTimeout(() => {
                optionElement.style.transform = 'scale(1)';
            }, 150);
            
            console.log('Calling selectAnswer with index:', index);
            selectAnswer(index);
        };
        
        optionElement.addEventListener('click', clickHandler);
        
        // Add touch events for mobile
        optionElement.addEventListener('touchstart', function(e) {
            e.preventDefault();
            console.log('Touch start on option:', index);
        });
        
        optionElement.addEventListener('touchend', function(e) {
            e.preventDefault();
            console.log('Touch end on option:', index);
            clickHandler(e);
        });
        
        // Add keyboard support
        optionElement.setAttribute('tabindex', '0');
        optionElement.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Keyboard activation on option:', index);
                clickHandler(e);
            }
        });
        
        optionsContainer.appendChild(optionElement);
        console.log('Added option element:', index, option);
    });
    
    console.log('Multiple choice options created successfully. Total options:', optionsContainer.children.length);
    
    // Test if options are clickable
    setTimeout(() => {
        const testOptions = document.querySelectorAll('.multiple-choice-option');
        console.log('Test: Found', testOptions.length, 'clickable options');
        testOptions.forEach((opt, i) => {
            console.log(`Option ${i}:`, opt.textContent, 'Clickable:', opt.style.pointerEvents);
        });
    }, 100);
}

function selectTrueFalse(value) {
    if (isAnswered) return;
    
    selectedAnswer = value;
    isAnswered = true;
    
    // Update UI
    const options = document.querySelectorAll('.truefalse-option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if ((index === 0 && value === true) || (index === 1 && value === false)) {
            option.classList.add('selected');
        }
    });
    
    // Check answer after a short delay
    setTimeout(() => {
        checkAnswer(value);
    }, 500);
}

// toggleMultiSelect function removed - now handled directly in createMultiSelectOptions

function selectAnswer(answerIndex) {
    console.log('selectAnswer called with:', answerIndex);
    console.log('isAnswered:', isAnswered);
    
    if (isAnswered) {
        console.log('Already answered, ignoring click');
        return;
    }
    
    selectedAnswer = answerIndex;
    isAnswered = true;
    
    console.log('Selected answer:', selectedAnswer);
    
    // Update UI
    const options = document.querySelectorAll('.option');
    console.log('Found options:', options.length);
    
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === answerIndex) {
            option.classList.add('selected');
            console.log('Added selected class to option:', index);
        }
    });
    
    // Check answer after a short delay
    setTimeout(() => {
        console.log('Checking answer...');
        checkAnswer(answerIndex);
        
        // Fallback: if feedback doesn't show after 1 second, force it
        setTimeout(() => {
            const feedback = document.getElementById('quizFeedback');
            if (feedback && feedback.style.display === 'none') {
                console.log('Fallback: forcing feedback to show');
                const quizData = getCurrentQuizData();
                const question = quizData[currentQuestionIndex];
                const isCorrect = answerIndex === question.correct;
                showFeedback(isCorrect, question.explanation, question);
            }
        }, 1000);
    }, 500);
}

function checkAnswer(selectedValue) {
    console.log('checkAnswer called with:', selectedValue);
    
    const quizData = getCurrentQuizData();
    const question = quizData[currentQuestionIndex];
    
    console.log('Current question:', question);
    console.log('Question correct answer:', question.correct);
    console.log('Question type:', question.type || 'multiple choice');
    
    let isCorrect = false;
    
    if (question.type === 'multiselect') {
        // Check if selected answers match correct answers
        const correctAnswers = question.correct;
        isCorrect = selectedAnswers.length === correctAnswers.length && 
                   selectedAnswers.every(answer => correctAnswers.includes(answer));
        console.log('Multiselect check:', { selectedAnswers, correctAnswers, isCorrect });
    } else {
        isCorrect = selectedValue === question.correct;
        console.log('Single answer check:', { selectedValue, correct: question.correct, isCorrect });
    }
    
    if (isCorrect) {
        score++;
        console.log('Correct! Score is now:', score);
    } else {
        console.log('Incorrect. Score remains:', score);
    }
    
    // Update option styles
    updateOptionStyles(question, selectedValue);
    
    // Show feedback
    showFeedback(isCorrect, question.explanation, question);
}

function updateOptionStyles(question, selectedValue) {
    const options = document.querySelectorAll('.option');
    
    // First, clear all previous styling
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect', 'selected');
    });
    
    if (question.type === 'truefalse') {
        options.forEach((option, index) => {
            const isCorrectAnswer = (index === 0 && question.correct === true) || 
                                  (index === 1 && question.correct === false);
            const isSelected = (index === 0 && selectedValue === true) || 
                             (index === 1 && selectedValue === false);
            
            if (isCorrectAnswer) {
                option.classList.add('correct');
            } else if (isSelected && !isCorrectAnswer) {
                option.classList.add('incorrect');
            }
            if (isSelected) {
                option.classList.add('selected');
            }
        });
    } else if (question.type === 'multiselect') {
        options.forEach((option, index) => {
            const isCorrect = question.correct.includes(index);
            const isSelected = selectedAnswers.includes(index);
            
            if (isCorrect) {
                option.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                option.classList.add('incorrect');
            }
            if (isSelected) {
                option.classList.add('selected');
            }
        });
    } else {
        options.forEach((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = index === selectedValue;
            
            if (isCorrect) {
                option.classList.add('correct');
            } else if (isSelected && !isCorrect) {
                option.classList.add('incorrect');
            }
            if (isSelected) {
                option.classList.add('selected');
            }
        });
    }
}

function showFeedback(isCorrect, explanation, question) {
    console.log('showFeedback called:', { isCorrect, explanation, question });
    
    const feedback = document.getElementById('quizFeedback');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const correctAnswerDiv = document.getElementById('correctAnswer');
    const correctAnswerText = document.getElementById('correctAnswerText');
    const nextQuestionBtn = document.getElementById('nextQuestionBtn');
    
    console.log('Feedback elements found:', {
        feedback: !!feedback,
        feedbackIcon: !!feedbackIcon,
        feedbackText: !!feedbackText,
        correctAnswerDiv: !!correctAnswerDiv,
        correctAnswerText: !!correctAnswerText,
        nextQuestionBtn: !!nextQuestionBtn
    });
    
    // Ensure all elements exist before proceeding
    if (!feedback || !feedbackIcon || !feedbackText || !correctAnswerDiv || !correctAnswerText || !nextQuestionBtn) {
        console.error('Missing feedback elements!');
        return;
    }
    
    // Update feedback content
    if (isCorrect) {
        feedbackIcon.innerHTML = '<i class="fas fa-star"></i>';
        feedbackIcon.className = 'feedback-icon correct';
        feedbackText.textContent = 'Correct! Great job! 🌟';
        correctAnswerDiv.style.display = 'none';
        console.log('Set correct feedback message');
    } else {
        feedbackIcon.innerHTML = '<i class="fas fa-thumbs-up"></i>';
        feedbackIcon.className = 'feedback-icon incorrect';
        feedbackText.textContent = 'Not quite right. Better luck next time! 👍';
        
        // Show correct answer for different question types
        if (question.type === 'truefalse') {
            correctAnswerText.textContent = question.correct ? 'True' : 'False';
        } else if (question.type === 'multiselect') {
            const correctOptions = question.correct.map(i => question.options[i]).join(', ');
            correctAnswerText.textContent = correctOptions;
        } else {
            // For multiple choice questions (like Sun Storms quiz)
            correctAnswerText.textContent = question.options[question.correct];
        }
        correctAnswerDiv.style.display = 'block';
        console.log('Set incorrect feedback message with correct answer:', correctAnswerText.textContent);
    }
    
    // Force show feedback and next button immediately
    feedback.style.display = 'block';
    feedback.style.opacity = '1';
    feedback.style.transform = 'translateY(0)';
    feedback.style.transition = 'all 0.3s ease';
    
    nextQuestionBtn.style.display = 'block';
    nextQuestionBtn.style.visibility = 'visible';
    nextQuestionBtn.style.opacity = '1';
    
    console.log('Feedback displayed immediately');
    
    // Add a slight delay to ensure visibility
    setTimeout(() => {
        console.log('Feedback should be fully visible now');
        // Scroll feedback into view
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function nextQuestion() {
    console.log('nextQuestion called');
    console.log('Current question index:', currentQuestionIndex);
    
    currentQuestionIndex++;
    const quizData = getCurrentQuizData();
    
    console.log('New question index:', currentQuestionIndex);
    console.log('Total questions:', quizData.length);
    
    if (currentQuestionIndex < quizData.length) {
        console.log('Loading next question...');
        loadQuestion();
    } else {
        console.log('Quiz complete, showing results...');
        showResults();
    }
}

function showResults() {
    // Hide questions and show results
    document.getElementById('quizQuestions').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';
    
    // Calculate results
    const quizData = getCurrentQuizData();
    const correctCount = score;
    const incorrectCount = quizData.length - score;
    
    // Update result displays
    document.getElementById('scoreNumber').textContent = score;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    
    // Set score text based on performance
    const scoreText = document.getElementById('scoreText');
    const totalQuestions = quizData.length;
    
    if (score === totalQuestions) {
        scoreText.textContent = currentQuiz === 'zoomy' ? 
            'Outstanding! You\'re a satellite space whiz! 🛰️' : 
            currentQuiz === 'gigi' ?
            'Outstanding! You\'re a direction dynamo! 🗺️' :
            currentQuiz === 'aurora' ?
            'Outstanding! You\'re an aurora ace! 🌈' :
            'Outstanding! You\'re a super space weather spotter! 🌟';
    } else if (score >= totalQuestions * 0.8) {
        scoreText.textContent = currentQuiz === 'zoomy' ? 
            'Great job! You know your satellites! ⭐' : 
            currentQuiz === 'gigi' ?
            'Great job! You know your GPS! ⭐' :
            currentQuiz === 'aurora' ?
            'Great job! You know your auroras! ⭐' :
            'Great job! You know your space weather! ⭐';
    } else if (score >= totalQuestions * 0.6) {
        scoreText.textContent = currentQuiz === 'zoomy' ? 
            'Good work! Keep learning about satellites! 🌙' : 
            currentQuiz === 'gigi' ?
            'Good work! Keep learning about GPS! 🌙' :
            currentQuiz === 'aurora' ?
            'Good work! Keep learning about auroras! 🌙' :
            'Good work! Keep learning about space weather! 🌙';
    } else {
        scoreText.textContent = currentQuiz === 'zoomy' ? 
            'Keep exploring! Satellites are fascinating! 🚀' : 
            currentQuiz === 'gigi' ?
            'Keep exploring! GPS is fascinating! 🚀' :
            currentQuiz === 'aurora' ?
            'Keep exploring! Auroras are fascinating! 🚀' :
            'Keep exploring! Space weather is fascinating! 🚀';
    }
    
    // Update answer key based on current quiz
    updateAnswerKey();
    
    // Add entrance animation
    const resultsContent = document.querySelector('.results-content');
    resultsContent.style.opacity = '0';
    resultsContent.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        resultsContent.style.transition = 'all 0.6s ease';
        resultsContent.style.opacity = '1';
        resultsContent.style.transform = 'translateY(0)';
    }, 100);
}

function updateAnswerKey() {
    const answerKeySection = document.querySelector('.answer-key-section');
    const answerKey = document.querySelector('.answer-key');
    
    if (currentQuiz === 'sun-storms') {
        answerKeySection.querySelector('h3').textContent = 'Answer Key (Spoiler Alert!)';
        answerKey.innerHTML = `
            <div class="answer-item">
                <span class="question-num">1.</span>
                <span class="answer-text">b) Bubbling like hot soup on the stove</span>
            </div>
            <div class="answer-item">
                <span class="question-num">2.</span>
                <span class="answer-text">a) Giant fireworks pops</span>
            </div>
            <div class="answer-item">
                <span class="question-num">3.</span>
                <span class="answer-text">a) The magnetosphere</span>
            </div>
            <div class="answer-item">
                <span class="question-num">4.</span>
                <span class="answer-text">b) It gets dizzy and says "I'm lost!"</span>
            </div>
            <div class="answer-item">
                <span class="question-num">5.</span>
                <span class="answer-text">b) They watch with telescopes and give storm alerts</span>
            </div>
        `;
    } else if (currentQuiz === 'zoomy') {
        answerKeySection.querySelector('h3').textContent = 'Zoomy\'s Answer Key! (High-five if you got most right—you\'re a space whiz!)';
        answerKey.innerHTML = `
            <div class="answer-item">
                <span class="question-num">1.</span>
                <span class="answer-text">True! I zoom around super fast—faster than you can eat a cookie.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">2.</span>
                <span class="answer-text">b) Sunlight – My solar panels love those sunny hugs!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">3.</span>
                <span class="answer-text">True! Bang—bright flashes that start the fun (or wobbles).</span>
            </div>
            <div class="answer-item">
                <span class="question-num">4.</span>
                <span class="answer-text">b) It causes a geomagnetic storm and makes everything wobbly – Shake, rattle, and roll!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">5.</span>
                <span class="answer-text">a) and c) – Glitches and wobbles are my bumpy buddies during storms.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">6.</span>
                <span class="answer-text">True! They're like my ground team superheroes—always watching out.</span>
            </div>
        `;
    } else if (currentQuiz === 'gigi') {
        answerKeySection.querySelector('h3').textContent = 'Gigi\'s Answer Key! (Woo-hoo if you nailed it—you\'re a direction dynamo!)';
        answerKey.innerHTML = `
            <div class="answer-item">
                <span class="question-num">1.</span>
                <span class="answer-text">True! I'm your adventure sidekick, always pointing the fun way.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">2.</span>
                <span class="answer-text">b) Signals from sky satellites – Ping-pong with the stars to keep you on track!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">3.</span>
                <span class="answer-text">True! Flashy fun that kicks off the signal slips.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">4.</span>
                <span class="answer-text">b) Starts a wiggly jumble in the sky's air layer (ionosphere) – Everything gets charged and bendy!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">5.</span>
                <span class="answer-text">a) and b) – Twisties and freezes are my stormy hiccups.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">6.</span>
                <span class="answer-text">True! My hero team keeps us steady—high-fives to them!</span>
            </div>
        `;
    } else if (currentQuiz === 'aurora') {
        answerKeySection.querySelector('h3').textContent = 'Annie\'s Answer Key! (Yay if you glowed through it—you\'re an aurora ace!)';
        answerKey.innerHTML = `
            <div class="answer-item">
                <span class="question-num">1.</span>
                <span class="answer-text">True! Wavy and colourful, ready to party in the dark sky.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">2.</span>
                <span class="answer-text">b) As tiny zingy bits from the sun on a solar wind ride – Zooming adventure to Earth!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">3.</span>
                <span class="answer-text">True! Flashy pops to start my dance party.</span>
            </div>
            <div class="answer-item">
                <span class="question-num">4.</span>
                <span class="answer-text">a) Earth's cozy shield called the magnetosphere – Bump and glow time!</span>
            </div>
            <div class="answer-item">
                <span class="question-num">5.</span>
                <span class="answer-text">True! Extra shake means extra sparkle—whoopee!</span>
            </div>
        `;
    }
}

function resetQuiz() {
    // Reset all state
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    selectedAnswers = [];
    isAnswered = false;
    
    // Show start screen
    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizStart').style.display = 'block';
}

// Debug function for testing quiz
window.debugQuiz = function() {
    console.log('=== QUIZ DEBUG INFO ===');
    console.log('Current quiz:', currentQuiz);
    console.log('Current question index:', currentQuestionIndex);
    console.log('Score:', score);
    console.log('Selected answer:', selectedAnswer);
    console.log('Is answered:', isAnswered);
    
    const options = document.querySelectorAll('.option');
    console.log('Found options:', options.length);
    options.forEach((opt, i) => {
        console.log(`Option ${i}:`, opt.textContent, 'Clickable:', opt.style.pointerEvents);
    });
    
    const feedback = document.getElementById('quizFeedback');
    console.log('Feedback element:', feedback ? 'Found' : 'Not found');
    console.log('Feedback display:', feedback ? feedback.style.display : 'N/A');
    
    const nextBtn = document.getElementById('nextQuestionBtn');
    console.log('Next button:', nextBtn ? 'Found' : 'Not found');
    console.log('Next button display:', nextBtn ? nextBtn.style.display : 'N/A');
    
    console.log('=== END DEBUG INFO ===');
};

// Test function to simulate clicking an option
window.testQuizOption = function(index) {
    console.log('Testing quiz option:', index);
    const options = document.querySelectorAll('.option');
    if (options[index]) {
        console.log('Clicking option:', options[index].textContent);
        options[index].click();
    } else {
        console.error('Option not found at index:', index);
    }
};

// Add CSS for animations and new elements
const style = document.createElement('style');
style.textContent = `
    .quiz-start,
    .quiz-questions,
    .quiz-results,
    .quiz-selection {
        animation: fadeIn 0.6s ease;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .option {
        transition: all 0.3s ease;
    }
    
    .option:active {
        transform: scale(0.98);
    }
    
    .quiz-warning {
        background: rgba(255, 193, 7, 0.1);
        border: 2px solid rgba(255, 193, 7, 0.3);
        border-radius: 10px;
        padding: 15px;
        margin: 20px 0;
        text-align: center;
        color: #ffc107;
        font-weight: 600;
    }
    
    .quiz-warning i {
        margin-right: 8px;
    }
    
    .answer-key-section {
        margin: 30px 0;
        padding: 25px;
        background: rgba(78, 205, 196, 0.1);
        border-radius: 15px;
        border: 2px solid rgba(78, 205, 196, 0.3);
    }
    
    .answer-key-section h3 {
        color: #4ecdc4;
        font-family: 'Orbitron', monospace;
        margin-bottom: 20px;
        text-align: center;
    }
    
    .answer-key {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    
    .answer-item {
        display: flex;
        align-items: center;
        padding: 10px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        border-left: 4px solid #4ecdc4;
    }
    
    .question-num {
        font-weight: bold;
        color: #4ecdc4;
        margin-right: 15px;
        min-width: 25px;
    }
    
    .answer-text {
        color: #ffffff;
    }
    
    .next-question-btn {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        border: none;
        border-radius: 25px;
        padding: 12px 25px;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Orbitron', monospace;
        box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
        margin-top: 20px;
    }
    
    .next-question-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(78, 205, 196, 0.5);
    }
    
    .next-question-btn i {
        margin-left: 8px;
    }
    
    .back-to-selection-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 25px;
        padding: 12px 25px;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Orbitron', monospace;
        margin-top: 15px;
    }
    
    .back-to-selection-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
    }
    
    .back-to-selection-btn i {
        margin-right: 8px;
    }
    
    .quiz-selection {
        padding: 60px 20px;
        text-align: center;
    }
    
    .selection-content h2 {
        font-family: 'Orbitron', monospace;
        font-size: 2.5rem;
        color: #4ecdc4;
        margin-bottom: 20px;
    }
    
    .selection-content p {
        font-size: 1.2rem;
        color: #ffffff;
        margin-bottom: 40px;
        opacity: 0.9;
    }
    
    .quiz-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 30px;
        max-width: 800px;
        margin: 0 auto;
    }
    
    .quiz-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 20px;
        padding: 30px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        cursor: pointer;
    }
    
    .quiz-card:hover {
        transform: translateY(-10px);
        border-color: rgba(78, 205, 196, 0.5);
        box-shadow: 0 20px 40px rgba(78, 205, 196, 0.2);
    }
    
    .quiz-card-icon {
        font-size: 3rem;
        color: #4ecdc4;
        margin-bottom: 20px;
    }
    
    .quiz-card h3 {
        font-family: 'Orbitron', monospace;
        font-size: 1.5rem;
        color: #4ecdc4;
        margin-bottom: 15px;
    }
    
    .quiz-card p {
        color: #ffffff;
        margin-bottom: 20px;
        opacity: 0.9;
        line-height: 1.6;
    }
    
    .quiz-card .quiz-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
        font-size: 0.9rem;
        color: #4ecdc4;
    }
    
    .quiz-card .quiz-info span {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .select-quiz-btn {
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border: none;
        border-radius: 25px;
        padding: 12px 25px;
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Orbitron', monospace;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        width: 100%;
    }
    
    .select-quiz-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.5);
    }
    
    .select-quiz-btn i {
        margin-right: 8px;
    }
    
    .truefalse-option {
        font-size: 1.2rem;
        font-weight: 600;
        padding: 20px;
        margin: 10px 0;
    }
    
    .multiselect-option {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        margin: 10px 0;
        cursor: pointer;
    }
    
    .multiselect-option input[type="checkbox"] {
        width: 20px;
        height: 20px;
        accent-color: #4ecdc4;
    }
    
    .multiselect-option label {
        cursor: pointer;
        flex: 1;
    }
    
    .submit-multiselect-btn {
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        border: none;
        border-radius: 25px;
        padding: 15px 30px;
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: 'Orbitron', monospace;
        box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
        margin-top: 20px;
        width: 100%;
        max-width: 300px;
    }
    
    .submit-multiselect-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 20px rgba(78, 205, 196, 0.5);
    }
    
    .submit-multiselect-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
    }
    
    .submit-multiselect-btn i {
        margin-right: 8px;
    }
    
    @media (max-width: 768px) {
        .quiz-cards {
            grid-template-columns: 1fr;
            gap: 20px;
        }
        
        .quiz-card {
            padding: 25px;
        }
        
        .selection-content h2 {
            font-size: 2rem;
        }
        
        .quiz-card .quiz-info {
            flex-direction: column;
            gap: 10px;
        }
    }
`;
document.head.appendChild(style);
