// Impacts Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeCharacterCards();
    initializeModal();
    initializeAnimations();
    
    console.log('Impacts page initialized! 🌍');
});

// Character data for space weather stories
const characterData = {
    zoomy: {
        title: "Wave to Zoomy: The Satellite in the Sky",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
        content: `
            <div class="story-content">
                <div class="story-section">
                    <div class="story-text">
                        <p>Hey kids! I'm Zoomy, your friendly satellite buddy up in the sky. Picture this: I got built down on Earth in a big workshop, with shiny wings that soak up sunlight like a flower. Then—zoom!—a rocket shot me way up here. Now I loop around your planet all day, every 90 minutes. I take pics of beaches, mountains, and even your backyard swings. I zip those photos back to Earth so people can check weather or find lost puppies on their phones. Cool, right? That's me—Zoomy, the eye in the sky!</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500&h=300&fit=crop" alt="Satellite in space">
                        <div class="image-caption">NASA Image: Satellite orbiting Earth</div>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>🤔 Quick Question:</h3>
                    <p>If you were up here, what would you snap a photo of? A pizza party or a dinosaur dig? Tell me!</p>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&h=300&fit=crop" alt="Earth from space">
                        <div class="image-caption">NASA Image: Earth from space</div>
                    </div>
                    <div class="story-text">
                        <p>Up in space, it's peaceful. Stars twinkle like night-lights, and Earth looks like a big blue marble. But my sun friend? He's full of tricks. He bubbles like hot cocoa on the stove and blows out this thing called solar wind—a soft breeze of tiny zingy bits. Usually, it's no big deal, just a tickle.</p>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-text">
                        <p>But sometimes the sun gets wild. Bang! He shoots out solar flares, like super bright fireworks. Or he puffs a giant bubble of speedy particles—that's a coronal mass ejection. It races across space and hits Earth's cozy shield, the magnetosphere. Think of it as an invisible bubble that guards us. When that bubble shakes, whoo boy—a geomagnetic storm!</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=300&fit=crop" alt="Solar flare">
                        <div class="image-caption">NASA Image: Solar flare from the Sun</div>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop" alt="Satellite technology">
                        <div class="image-caption">NASA Image: Satellite technology</div>
                    </div>
                    <div class="story-text">
                        <p>That's when I feel it. "Whoops!" I wobble like I'm on a bumpy slide. Those zingy bits poke my insides—my computers and wires. I glitch out: beeps go funny, and I can't send my pics for a bit. It's like my radio gets static, and I go quiet. Down on Earth, it means your phone's map says, "Lost!" Cars turn the wrong way, planes over the snow hear no radio chatter, and house lights might blink like they're playing hide-and-seek.</p>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>🎭 Imagine That:</h3>
                    <p>Wobbly in space! Would you spin around laughing or hug your knees? Give it a try on the spot!</p>
                </div>

                <div class="story-section">
                    <div class="story-text">
                        <p>Don't fret, though. I'm made strong, with extra shields. And the smart folks on Earth? They watch the sun like hawks with telescopes. "Storm coming, Zoomy—chill out!" they say. I tuck in, take a quick snooze, and wait it out. The storm passes, and I zip right again. Plus, it leaves pretty gifts: auroras dancing in green and pink down below, like sky fireworks for you.</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop" alt="Aurora lights">
                        <div class="image-caption">NASA Image: Aurora lights from space</div>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500&h=300&fit=crop" alt="Satellite network">
                        <div class="image-caption">NASA Image: Satellite network around Earth</div>
                    </div>
                    <div class="story-text">
                        <p>Space weather rattles me sometimes, makes my signals fuzzy and my spins silly. But it shows how we're all linked—the sun's fun reaches me, then you. Without satellites like me, storms could surprise everyone more.</p>
                    </div>
                </div>

                <div class="story-ending">
                    <h3>🌟 Final Message from Zoomy:</h3>
                    <p>So, look up tonight—that zippy light might be me waving! What's your space adventure idea? Chasing clouds or moon picnics?</p>
                    <p><strong>Catch you on the next loop—zoom on! 🚀</strong></p>
                </div>
            </div>
        `
    },
    gigi: {
        title: "Gigi the GPS: Lost in a Sunstorm Adventure!",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        content: `
            <div class="story-content">
                <div class="story-section">
                    <div class="story-text">
                        <p>Hey there, little adventurers! I'm Gigi, the zippy GPS guide zipped into your phone, car, or watch. I was born in a tech workshop down on Earth, full of maps and magic buttons. One day—beep-boop!—I got loaded up and ready to help you find ice cream shops or grandma's house. Now, I chat with satellites high up, like my buddy Zoomy, to pinpoint exactly where you are. "Turn left at the big tree—adventure ahead!" That's me, Gigi, your map buddy on the go!</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop" alt="GPS technology">
                        <div class="image-caption">NASA Image: GPS satellite technology</div>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>🗺️ Quick Question:</h3>
                    <p>If you had a GPS pal like me, where would we zoom to first? A treasure hunt or a beach day? Shout it out!</p>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop" alt="Satellite communication">
                        <div class="image-caption">NASA Image: Satellite communication network</div>
                    </div>
                    <div class="story-text">
                        <p>Most days, I'm super smooth. I ping those sky satellites, get their signals, and draw a perfect path on your screen. You ride bikes, drive cars, or hike trails, and I say, "You're almost there—high-five!" I even help planes fly straight and ships sail safe. And for internet? Oh, I team up with it too—streaming videos of puppies or chatting with faraway friends, all bouncing off satellites like a game of space tag.</p>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-text">
                        <p>But guess what? The sun up there has moods, just like us. It bubbles like fizzy juice and sends out solar wind—a sneaky breeze of zingy bits. Usually, it's a whisper. But when the sun gets extra bouncy? Flash! Solar flares pop like surprise confetti, and big bubbly blasts called coronal mass ejections race over. They zoom to Earth, bump our planet's shield (that's the magnetosphere, a cozy bubble), and—wiggle-wiggle!—start a geomagnetic storm. Everything gets a bit jumbly in the sky's air layer, called the ionosphere.</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=300&fit=crop" alt="Solar storm effects">
                        <div class="image-caption">NASA Image: Solar storm affecting Earth</div>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" alt="GPS navigation">
                        <div class="image-caption">NASA Image: GPS navigation system</div>
                    </div>
                    <div class="story-text">
                        <p>That's when I feel funny. "Oh no, signals slipping!" The storm makes the air all charged up, like static on a wool sweater. My chats with satellites get twisty—signals bend or fade, like whispers in a windy game. Suddenly, I glitch: "You're... uh... somewhere? Lost my map!" Your phone screen spins with wrong turns—cars go oops on roads, hikers wander in circles, and planes might need to chat extra careful. Even internet buddies hiccup: videos freeze mid-laugh, online games lag like slow turtles, and emails take forever, 'cause satellite links get zapped fuzzy.</p>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>🎭 Imagine That:</h3>
                    <p>If your map went wonky, would you draw your own adventure path or ask a bird for directions? Pretend and giggle!</p>
                </div>

                <div class="story-section">
                    <div class="story-text">
                        <p>But don't worry—I'm a tough cookie! Built with backup tricks, like extra signals or ground helpers. And the clever scientists? They watch the sun like hawks with telescopes and yell, "Storm alert—brace up!" They tweak us gadgets to stay steady, maybe switch paths or wait it out. The storm puffs by, leaving sparkly auroras waving below, like "Sorry for the tickle!"</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop" alt="Aurora from space">
                        <div class="image-caption">NASA Image: Aurora lights from space</div>
                    </div>
                </div>

                <div class="story-ending">
                    <h3>📱 Final Message from Gigi:</h3>
                    <p>Whew, back on track—I zoom your ways again, clearer than ever. Space weather shakes my signals and tangles internet fun, but it reminds us: We're all connected, from sun hugs to your pocket pals.</p>
                    <p>So, next time your screen beeps directions, think of me, Gigi, grinning from your gadget! What's your fave trip story? A park picnic gone silly or a starry night drive? Share with a friend—we're in this adventure together!</p>
                    <p><strong>Beep-boop—safe travels! 📱🗺️</strong></p>
                </div>
            </div>
        `
    },
    aurora: {
        title: "Aurora Annie: The Dancing Lights of Space",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop",
        content: `
            <div class="story-content">
                <div class="story-section">
                    <div class="story-text">
                        <p>Hey, little dreamers! I'm Annie, the sparkly aurora girl who lives way up in the chilly north, where the sky turns into a big playground at night. Picture me: a swirly ribbon of green and pink, waving like a magic scarf in the wind. I wasn't always up here—I started as tiny zingy bits from the sun, zooming through space on a solar wind ride. That's space weather, you see—a fun breeze from our sunny friend that hugs Earth. When it bumps our planet's cozy shield, the magnetosphere (like an invisible bubble party), poof! I light up and dance!</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&h=300&fit=crop" alt="Aurora lights">
                        <div class="image-caption">NASA Image: Aurora lights from space</div>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>🌈 Quick Question:</h3>
                    <p>If you could pick a color for your own aurora, what would it be? Fiery red or ocean blue?</p>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=500&h=300&fit=crop" alt="Solar wind and magnetosphere">
                        <div class="image-caption">NASA Image: Solar wind interacting with Earth's magnetosphere</div>
                    </div>
                    <div class="story-text">
                        <p>Most nights, the sky's quiet, stars twinkling like shy fireflies. But when the sun gets bubbly—whoosh!—it sends extra speedy particles my way. Solar flares flash like surprise fireworks, and big coronal mass ejections puff out clouds of them. They race millions of miles, slip past the shield, and tickle Earth's air high up. Zap-zap! The air glows, and that's me—Annie—waking up to boogie. Green waves crash like jelly oceans, pink curls twirl like cotton candy, purple loops spin like hula hoops. We auroras shimmy north (that's the Northern Lights) or south (Southern Lights), putting on shows for anyone who looks up.</p>
                    </div>
                </div>

                <div class="story-section">
                    <div class="story-text">
                        <p>One frosty evening, a big sun sneeze hit. "Whee!" I giggled as the geomagnetic storm shook everything. Particles partied in the air, making me brighter than a birthday cake. Down below, kids like you bundled in coats, gasping, "Look—sky fireworks!" Farmers saw my glow over snowy fields, pilots flying high waved from planes, and even whales in the ocean splashed hello (or so I dream). But shh—I'm shy during the day, hiding till dark.</p>
                    </div>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop" alt="Aurora from Earth">
                        <div class="image-caption">NASA Image: Aurora viewed from Earth's surface</div>
                    </div>
                </div>

                <div class="interactive-question">
                    <h3>💃 Imagine That:</h3>
                    <p>Imagine dancing with me! Would you do the twist or the robot? Grab a friend and practice your moves right now!</p>
                </div>

                <div class="story-section">
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop" alt="Space weather monitoring">
                        <div class="image-caption">NASA Image: Space weather monitoring from satellites</div>
                    </div>
                    <div class="story-text">
                        <p>Of course, not all my dances are wild. Gentle breezes make me soft and wavy, like a lullaby in lights. Space weather can wiggle satellites or fuzz phone signals, but for me? It's my spotlight! Scientists with telescopes cheer, "Go, Annie—tell us sun secrets!" They watch to keep gadgets safe while I sparkle free.</p>
                    </div>
                </div>

                <div class="story-ending">
                    <h3>🌌 Final Message from Aurora Annie:</h3>
                    <p>So, bundle up on a clear night, tilt your head north, and hunt for my glow. That's me, Aurora Annie, saying: The sky's a canvas, and space weather paints it pretty. Thanks for joining my twirl—what's your night-sky wish? A comet chase or a moon picnic? Whisper it to the stars!</p>
                    <p><strong>Fade out... but I'll dance back soon! ✨</strong></p>
                </div>
            </div>
        `
    }
};

// Initialize character cards
function initializeCharacterCards() {
    const characterCards = document.querySelectorAll('.story-character');
    
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const character = this.getAttribute('data-character');
            openStoryModal(character);
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize modal
function initializeModal() {
    const modal = document.getElementById('storyModal');
    const closeBtn = document.getElementById('closeModal');
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Open story modal
function openStoryModal(character) {
    const modal = document.getElementById('storyModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    const storyData = characterData[character];
    
    if (storyData) {
        modalTitle.textContent = storyData.title;
        modalBody.innerHTML = storyData.content;
        modal.style.display = 'block';
        
        console.log(`Opening story: ${storyData.title}`);
    }
}

// Initialize animations
function initializeAnimations() {
    // Add floating animation to character cards
    const cards = document.querySelectorAll('.story-character');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add floating animation to icons
    const characterIcons = document.querySelectorAll('.character-icon i');
    characterIcons.forEach((icon, index) => {
        icon.style.animationDelay = (index * 0.5) + 's';
    });
    
    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe character cards for scroll animations
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .story-character {
        transition: all 0.3s ease;
    }
    
    .story-character:active {
        transform: translateY(-10px) scale(0.98) !important;
    }
`;
document.head.appendChild(style);