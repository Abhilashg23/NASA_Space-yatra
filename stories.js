// Stories Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeStoryCharacters();
    initializeStoryModal();
    initializeAnimations();
    
    console.log('Stories page initialized! 📚');
});

// Story data
const storyData = {
    farmer: {
        title: "Sun Flares and Tractor Spares: A Farmer's Tale",
        pages: [
            {
                content: `
                    <h3>Chapter 1: Meet Farmer Sam</h3>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop" alt="Farmer Sam">
                        <div class="image-caption">Farmer Sam working in his fields with modern farming equipment</div>
                    </div>
                    <p>Hello, kids! 👋</p>
                    <p>My name is Sam, and I'm 42 years old. I'm a farmer. Every day I wake up early to take care of my fields, my crops, and my animals. I love watching the sunrise while I'm out on the farm — the Sun feels like my best friend. 🌞🌱</p>
                    <p>But did you know… sometimes my best friend causes me trouble? It's because of something called space weather.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 2: What is Space Weather?</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/0300802/0300802~medium.jpg" alt="Solar flares and CMEs">
                        <div class="image-caption">NASA Image: Solar flares and coronal mass ejections</div>
                    </div>
                    <p>Now, you might be thinking, 'Sam, isn't weather just rain, clouds, or sunshine?' Well, that's Earth weather. Space weather is different. It happens when the Sun sends out giant bursts of energy, like solar flares and coronal mass ejections (CMEs). These storms race through space and reach Earth. And believe it or not, they affect me right here on my farm!</p>
                    <p>You see, I use GPS to guide my tractor across the fields. GPS helps me plant seeds in straight lines, save water, and know exactly where to put fertilizer. But when a space storm hits, GPS signals get all mixed up. Suddenly, my tractor thinks it's in the wrong place!</p>
                `
            },
            {
                content: `
                    <h3>Chapter 3: GPS Troubles</h3>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop" alt="GPS tractor farming">
                        <div class="image-caption">GPS-guided tractor in farming</div>
                    </div>
                    <p>Once, during a solar storm, my GPS stopped working for a whole morning. I had to guess my way through the fields, and let me tell you — my lines were all wiggly that day! 🚜😅</p>
                    <p>I also use satellites to check the weather forecast for my farm. Should I water the crops today? Will it rain tomorrow? But space weather can disturb satellites too. During a big storm, my weather app froze, and I couldn't see the forecast. That meant I had to take a chance — and oops, I watered the crops just before it rained! Double water for the plants. 🌧️🌱</p>
                `
            },
            {
                content: `
                    <h3>Chapter 4: The Bigger Picture</h3>
                    <div class="story-image">
                        <img src="https://media.istockphoto.com/id/978754758/photo/vineyard-sunset.jpg?s=612x612&w=0&k=20&c=xvJZ_Ldp_n_Ev0LjaNY_vgrLvdB_dBrT8SdRfPn6zd0=" alt="Farm fields">
                        <div class="image-caption">Beautiful farm fields and countryside</div>
                    </div>
                    <p>Space weather is tricky. It makes farming harder when I can't rely on GPS or weather data. But I also know it's not just me. Pilots, astronauts, and even people using the internet face problems during big solar storms.</p>
                    <p>And there's something magical too. When space weather gets strong, it makes the sky glow with bright colors, the auroras. I've never seen them from my farm, but I dream about it. One day, I'll travel north to watch those dancing lights for myself.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 5: Scientists Help Us</h3>
                    <div class="story-image">
                        <img src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=500&h=300&fit=crop" alt="Happy farmer">
                        <div class="image-caption">Farmer Sam with his successful harvest</div>
                    </div>
                    <p>That's why scientists watch the Sun closely. They give out warnings when a solar storm is coming. Thanks to them, I can plan my work better and protect my farm equipment.</p>
                    <p>So, kids, next time you think of farmers, remember this: it's not just rain and sunshine that matter to us. Even the Sun's storms in space can change the way I grow food for you!</p>
                    <p>Perfect 🚀 — here's the kids story for Pilot Captain Maya, written in her own voice, fun, clear, and showing the impacts of space weather on her job.</p>
                `
            }
        ]
    },
    pilot: {
        title: "Flying High with Captain Maya: A Space Weather Tale",
        pages: [
            {
                content: `
                    <h3>Chapter 1: Meet Captain Maya</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/jsc2025e012272/jsc2025e012272~medium.jpg" alt="Captain Maya">
                        <div class="image-caption">Captain Maya standing confidently in front of her airplane</div>
                    </div>
                    <p>Hello, young explorers! 👋</p>
                    <p>I'm Captain Maya, and I'm 38 years old. I fly big airplanes high up in the sky. Flying has always been my dream, and now I get to soar above the clouds every day. From my cockpit, I see the sunrise before anyone else, and sometimes I even fly under the stars. 🌅✨</p>
                    <p>But flying isn't always smooth. Sometimes I face something you can't see, can't hear, and can't touch… it's called space weather.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 2: What is Space Weather?</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001554/GSFC_20171208_Archive_e001554~small.jpg" alt="Solar flares and CMEs">
                        <div class="image-caption">NASA Image: Solar flares and coronal mass ejections</div>
                    </div>
                    <p>Space weather happens when the Sun throws out giant bursts of energy — flashes of light called solar flares and huge clouds of particles called CMEs. These storms race through space and reach Earth, shaking up our technology.</p>
                    <p>So how does that affect me, a pilot? Oh, let me tell you!</p>
                    <p>One time, I was flying over the North Pole. Suddenly, the radio started crackling, and I couldn't hear the ground control clearly. That's because space storms can mess with radio signals in the upper sky. For a pilot, that can be scary, because we need clear communication to keep all passengers safe.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 3: Navigation Problems</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/s110e5067/s110e5067~medium.jpg" alt="Airplane cockpit">
                        <div class="image-caption">Airplane cockpit with navigation instruments</div>
                    </div>
                    <p>Another time, during a solar storm, our GPS became unreliable. Imagine trying to fly across oceans without a clear map! My instruments got confused, and I had to depend on my training and backup systems.</p>
                    <p>Space weather can also disturb the magnetic field of Earth. That means my compass — the tool that always points north — can sometimes get mixed up. A confused compass can lead to a confused pilot, and that's not good when you're 35,000 feet above the ground!</p>
                `
            },
            {
                content: `
                    <h3>Chapter 4: The Beautiful Aurora</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/PIA11396/PIA11396~small.jpg" alt="Aurora from airplane">
                        <div class="image-caption">Aurora lights viewed from airplane window</div>
                    </div>
                    <p>But it's not all bad. During one flight at night, as we passed near the polar regions, I looked out of the cockpit window and saw the most magical sight: the sky glowing green and purple with auroras. It looked like curtains of light dancing just for us. The passengers gasped in wonder, and I felt like space weather had given us a gift.</p>
                    <p>That's why scientists are so important to my job. They watch the Sun carefully and warn us pilots when a solar storm is coming. If the storm is strong, we sometimes change our route to stay safe. Thanks to their work, I can keep flying and take people to their destinations safely.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 5: Signing Off</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/201409250011HQ/201409250011HQ~medium.jpg" alt="Captain Maya waving">
                        <div class="image-caption">Captain Maya waving goodbye</div>
                    </div>
                    <p>So kids, when you look up at an airplane in the sky, remember: we pilots don't just face clouds and winds. We also face the Sun's invisible storms. Space weather may be far away, but it travels right into my cockpit. And that's why understanding it helps keep everyone safe — on Earth and in the air.</p>
                    <p>This is Captain Maya, signing off. Keep your eyes on the skies, and maybe one day you'll fly with me through the wonders of the Sun and the stars! ✈️🌞🌍</p>
                `
            }
        ]
    },
    astronaut: {
        title: "Up in Space with Alex: Lights, Storms, and Auroras!",
        pages: [
            {
                content: `
                    <h3>Chapter 1: Hello from Space!</h3>
                    <div class="story-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcZFWRrNhhOEX-PfP84nuU0-MGZtpH_8EPA&s" alt="Commander Alex in space">
                        <div class="image-caption">Commander Alex floating in space with Earth in background</div>
                    </div>
                    <p>Hello, Earth kids! 👋</p>
                    <p>I'm Commander Alex, and I'm 35 years old. Right now, I'm living far above you on the International Space Station. My home zooms around Earth almost 16 times every single day! From up here, I can see the blue oceans, white clouds, and even the green glow of the northern lights. It's beautiful. 🌍✨</p>
                    <p>But life in space isn't always calm. Do you know why? Because of something called space weather.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 2: The Sun Gets Excited</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/0300802/0300802~medium.jpg" alt="Solar flares and CMEs">
                        <div class="image-caption">NASA Image: Solar flares and coronal mass ejections</div>
                    </div>
                    <p>Space weather is what happens when the Sun gets too excited. Sometimes the Sun bursts out with giant flashes of light called solar flares, or throws huge clouds of particles called coronal mass ejections (CMEs). These storms travel super fast, racing toward Earth and me up here in space.</p>
                    <p>And when that happens… oh boy, I feel it!</p>
                    <p>One time, while I was on a spacewalk fixing a solar panel, the scientists at NASA told me a solar storm was on the way. I had to stop everything and hurry back inside the space station. Why? Because those storms bring dangerous radiation that can hurt astronauts if we stay outside too long.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 3: Communication Problems</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/STS059-16-028/STS059-16-028~medium.jpg" alt="Radio communication">
                        <div class="image-caption">NASA Image: Radio communication equipment</div>
                    </div>
                    <p>Another time, a strong solar flare made our radios crackle and glitch. Talking to mission control on Earth became difficult. Imagine trying to call your parents, but the phone keeps cutting out — that's how it feels when space weather messes with our communications.</p>
                    <p>Even inside the station, space storms can make our computers flicker and some of our systems act strangely. We have backup plans for everything, but it still makes my job a lot harder.</p>
                    <p>So yes, space weather really impacts me:</p>
                    <ul>
                        <li>I can't stay outside too long during storms.</li>
                        <li>I may lose radio contact with Earth.</li>
                        <li>Our spacecraft systems can get disturbed.</li>
                    </ul>
                `
            },
            {
                content: `
                    <h3>Chapter 4: The Beautiful Aurora</h3>
                    <div class="story-image">
                        <img src="https://www.cnet.com/a/img/resize/85a2f418476754376e5738034eb6ec28c92213b8/hub/2024/10/09/eee7ab84-55c7-4d78-9b69-c36aa16f2ed4/dominickaurora.jpg?auto=webp&fit=crop&height=675&precrop=2184,1227,x0,y559&width=1200" alt="Aurora from space">
                        <div class="image-caption">NASA Image: Aurora lights viewed from space</div>
                    </div>
                    <p>But there's also something wonderful about space weather. When those Sun particles touch Earth's atmosphere, they create glowing lights in the sky — auroras. From space, I see them wrapping Earth like magical crowns of green and purple. They are the most beautiful things I've ever seen.</p>
                    <p>That's why scientists study the Sun so carefully. They warn us when a storm is coming, so I can stay safe, and you on Earth can keep your GPS, internet, and electricity running.</p>
                    <p>So, kids, the Sun may be 93 million miles away, but its storms can reach me up here and you down there. Space weather makes my life as an astronaut exciting, a little dangerous, but also magical.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 5: Signing Off</h3>
                    <div class="story-image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcZFWRrNhhOEX-PfP84nuU0-MGZtpH_8EPA&s" alt="Commander Alex waving">
                        <div class="image-caption">NASA Image: Commander Alex waving from space</div>
                    </div>
                    <p>This is Commander Alex, signing off — and reminding you: the Sun is full of surprises! 🚀🌞</p>
                    <p>Remember, space weather affects everyone on Earth too - your phones, GPS, and even the lights in your house! But don't worry, scientists are always watching and keeping us safe.</p>
                    <p>Keep looking up at the stars, and maybe one day you'll be up here with me, experiencing the magic of space weather firsthand!</p>
                `
            }
        ]
    },
    magical: {
        title: "The Magical Sun Storms: A Space Weather Tale",
        pages: [
            {
                content: `
                    <h3>Chapter 1: A Cozy Earth Morning</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/SSC-20070411-S00958/SSC-20070411-S00958~medium.jpg" alt="Children discovering the Sun's secrets through a telescope">
                        <div class="image-caption">Children discovering the Sun's secrets through a telescope</div>
                    </div>
                    <p>Once upon a time, on a cozy Earth morning, the Sun peeked over the hills like a big, smiling face. It warmed the grass, helped flowers bloom, and made everyone on Earth feel happy and full of energy.</p>
                    <p>"The Sun is so nice and quiet," thought little Mia, a girl with curly hair and a love for stars. She was playing in her garden with her best friend Leo, a boy who dreamed of flying rockets.</p>
                    <p>But high up in space, the Sun had a big secret. Hey, explorer! Can you guess what it is? Is the Sun always sleepy, or does it have wild tricks? Keep reading to see!</p>
                `
            },
            {
                content: `
                    <h3>Chapter 2: The Sun's Secret</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/SSC-20070411-S00958/SSC-20070411-S00958~medium.jpg" alt="Children discovering the Sun's secrets through a telescope">
                        <div class="image-caption">Children discovering the Sun's secrets through a telescope</div>
                    </div>
                    <p>Mia and Leo looked through Mia's toy telescope. "Whoa!" Leo said. "The Sun isn't calm—it's bubbling like hot soup on the stove! Look at those flashes!"</p>
                    <p>"That's right," Mia whispered. "The Sun throws out bright pops called solar flares, like giant fireworks. And sometimes, it puffs out huge clouds of speedy bits—charged particles zooming like race cars across space. When they zoom to Earth, that's space weather!"</p>
                    <p>Space weather? Leo tilted his head. "Like rain or snow, but in the stars?"</p>
                `
            },
            {
                content: `
                    <h3>Chapter 3: Earth's Magic Shield</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/PIA06347/PIA06347~orig.jpg" alt="Earth with magnetic field">
                        <div class="image-caption">Earth's magnetic field protecting our planet</div>
                    </div>
                    <p>"Yep! But you can't see it—it's invisible magic," Mia said. Earth has a special bubble shield around it, called the magnetosphere. It's like an invisible force field that keeps us safe.</p>
                    <p>When the Sun's storm clouds hit it --BOOM! -- the shield shakes like a big drum. Bang, bang!</p>
                    <p>What happens then? Satellites up in space might get dizzy and lose their way, so GPS on cars and phones says, "Oops, I'm lost!" Internet might blink out, like a TV turning off mid-show.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 4: Space Weather Effects</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/KSC-06pd0187/KSC-06pd0187~medium.jpg" alt="Technology affected by space weather">
                        <div class="image-caption">Technology affected by space weather</div>
                    </div>
                    <p>Airplanes over the cold north might hear radio silence—no chatter from the pilots. Power lines on the ground could buzz too much and cause lights to flicker, like a spooky Halloween party.</p>
                    <p>And brave astronauts in space stations? They hide in safe spots, like playing hide-and-seek from the Sun's tickly energy.</p>
                    <p>Oh no, friend! If you were an astronaut, what would you do in a space storm? Build a fort with blankets or sing a silly song? Pretend right now!</p>
                `
            },
            {
                content: `
                    <h3>Chapter 5: The Beautiful Aurora</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/iss030e119777/iss030e119777~medium.jpg" alt="Northern lights aurora">
                        <div class="image-caption">Beautiful Northern Lights aurora</div>
                    </div>
                    <p>But space weather isn't all scary—it's super pretty too! When those speedy Sun bits bump into Earth's air, they make the sky glow with colors.</p>
                    <p>Green waves, pink ribbons, purple swirls, and red sparkles dance like fairy curtains. That's the aurora! Northern lights up north, southern lights down south.</p>
                    <p>"It's like the sky is painting a rainbow party," Leo cheered.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 6: Why It Matters</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/KSC-2012-2039/KSC-2012-2039~medium.jpg" alt="Technology and gadgets">
                        <div class="image-caption">Modern technology and gadgets we use daily</div>
                    </div>
                    <p>"Why does it matter?" Mia asked, pointing to her phone and the lights in her house. "Space weather comes from millions of miles away, but it touches our fun every day. It can wiggle our gadgets and toys!"</p>
                    <p>Scientists are like superheroes with big eyes. They use telescopes and space cameras to watch the Sun. "Storm coming!" they say, like a weather report for rain. "Get ready!"</p>
                    <p>This helps fix phones fast, keep planes safe, and make sure lights stay on. No big worries—just smart plans.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 7: Sun Storm Spotters</h3>
                    <div class="story-image">
                        <img src="https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001646/GSFC_20171208_Archive_e001646~medium.jpg" alt="Children drawing and learning about space weather">
                        <div class="image-caption">Children drawing and learning about space weather</div>
                    </div>
                    <p>So, Mia and Leo made a game: Sun Storm Spotters! They drew the bubbling Sun, shaky shields, and dancing auroras on paper.</p>
                    <p>"The Sun's storms are part of our Earth story," Mia said. "They're wild, but they make magic too."</p>
                    <p>The next sunny day, the friends lay on the grass, staring up. "Thanks, Sun, for your warm hugs—and your secret adventures!" Leo said.</p>
                `
            },
            {
                content: `
                    <h3>Chapter 8: Your Turn!</h3>
                    <div class="story-image">
                        <img src="https://media.istockphoto.com/id/503458062/photo/childrens-imagination.jpg?s=612x612&w=0&k=20&c=QZ0OULz8Lb-RgZHZ8y8CZmj-PjG-F-UjCBsqWg7JD1Q=" alt="Children looking at stars">
                        <div class="image-caption">Children looking up at the stars and dreaming</div>
                    </div>
                    <p>What about you, star chaser? If you could talk to the Sun, what question would you ask? "Tell me a storm story!" or "Can I visit your bubbly party?"</p>
                    <p>Share with a friend and dream big! 🌈✨</p>
                    <p><strong>The end... until the next storm calls!</strong></p>
                `
            }
        ]
    }
};

let currentStory = null;
let currentPage = 0;

function initializeStoryCharacters() {
    const storyCharacters = document.querySelectorAll('.story-character');
    
    storyCharacters.forEach(character => {
        character.addEventListener('click', function() {
            const storyType = this.getAttribute('data-character');
            openStory(storyType);
        });
        
        // Add hover effects
        character.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        character.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click handlers to start story buttons
    const startButtons = document.querySelectorAll('.start-story-btn');
    startButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const storyType = this.getAttribute('data-story');
            openStory(storyType);
        });
    });
}

function initializeStoryModal() {
    const modal = document.getElementById('storyModal');
    const closeStory = document.getElementById('closeStory');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const storyTitle = document.getElementById('storyTitle');
    const storyBody = document.getElementById('storyBody');
    
    // Close modal
    closeStory.addEventListener('click', closeStoryModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeStoryModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeStoryModal();
        }
    });
    
    // Navigation buttons
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--;
            updateStoryDisplay();
        }
    });
    
    nextBtn.addEventListener('click', function() {
        if (currentStory && currentPage < currentStory.pages.length - 1) {
            currentPage++;
            updateStoryDisplay();
        } else {
            closeStoryModal();
        }
    });
    
    function closeStoryModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentStory = null;
        currentPage = 0;
    }
    
    // Store references for external use
    window.openStory = function(storyType) {
        currentStory = storyData[storyType];
        currentPage = 0;
        
        if (currentStory) {
            storyTitle.textContent = currentStory.title;
            updateStoryDisplay();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    function updateStoryDisplay() {
        if (!currentStory) return;
        
        const pages = currentStory.pages;
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        // Update navigation buttons
        prevBtn.disabled = currentPage === 0;
        
        if (currentPage === pages.length - 1) {
            nextBtn.innerHTML = 'Finish Story <i class="fas fa-check"></i>';
        } else {
            nextBtn.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
        }
        
        // Update story content
        storyBody.innerHTML = `
            <div class="story-page active">
                ${pages[currentPage].content}
            </div>
            <div class="story-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${((currentPage + 1) / pages.length) * 100}%"></div>
                </div>
                <span class="progress-text">Page ${currentPage + 1} of ${pages.length}</span>
            </div>
        `;
        
        // Add entrance animation
        const storyPage = storyBody.querySelector('.story-page');
        storyPage.style.opacity = '0';
        storyPage.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            storyPage.style.transition = 'all 0.5s ease';
            storyPage.style.opacity = '1';
            storyPage.style.transform = 'translateY(0)';
        }, 100);
    }
}

function initializeAnimations() {
    // Add staggered animation to story characters
    const storyCharacters = document.querySelectorAll('.story-character');
    storyCharacters.forEach((character, index) => {
        character.style.opacity = '0';
        character.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            character.style.transition = 'all 0.6s ease';
            character.style.opacity = '1';
            character.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Add floating animation to avatars
    const avatars = document.querySelectorAll('.avatar-image');
    avatars.forEach((avatar, index) => {
        avatar.style.animationDelay = (index * 0.5) + 's';
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
    
    // Observe story characters for scroll animations
    storyCharacters.forEach(character => {
        observer.observe(character);
    });
}

// Add CSS for animations and progress bar
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
    
    .story-progress {
        margin-top: 30px;
        text-align: center;
    }
    
    .progress-bar {
        width: 100%;
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .progress-fill {
        height: 100%;
        background: linear-gradient(45deg, #ffc107, #ff9800);
        border-radius: 3px;
        transition: width 0.3s ease;
    }
    
    .progress-text {
        color: #ffc107;
        font-size: 0.9rem;
        font-weight: 600;
    }
`;
document.head.appendChild(style);
