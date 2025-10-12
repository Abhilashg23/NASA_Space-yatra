// Live Data Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    initializeLiveData();
    initializeVisualizations();
    initializeCharts();
    initializeAlerts();
    
    console.log('Live Data page initialized! 📊');
});

// Simulated real-time data (in a real app, this would come from APIs)
let liveData = {
    windSpeed: 450,
    windDensity: 8.5,
    kpIndex: 3,
    sunspotNumber: 45,
    activeRegions: 3,
    solarFlares: 2,
    auroraActivity: 'Medium'
};

let chart = null;
let isSunAnimating = false;
let isMagnetAnimating = false;

function initializeLiveData() {
    // Update data every 5 seconds
    updateLiveData();
    setInterval(updateLiveData, 5000);
    
    // Initial data load
    updateAllDisplays();
}

function updateLiveData() {
    // Simulate real-time data changes
    liveData.windSpeed = Math.floor(Math.random() * 200) + 300; // 300-500 km/s
    liveData.windDensity = (Math.random() * 10 + 5).toFixed(1); // 5-15 protons/cm³
    liveData.kpIndex = Math.floor(Math.random() * 6) + 1; // 1-6 Kp
    liveData.sunspotNumber = Math.floor(Math.random() * 50) + 20; // 20-70 spots
    liveData.activeRegions = Math.floor(Math.random() * 5) + 1; // 1-5 regions
    liveData.solarFlares = Math.floor(Math.random() * 4); // 0-3 flares
    
    // Update aurora activity based on Kp index
    if (liveData.kpIndex <= 2) {
        liveData.auroraActivity = 'Low';
    } else if (liveData.kpIndex <= 4) {
        liveData.auroraActivity = 'Medium';
    } else {
        liveData.auroraActivity = 'High';
    }
    
    updateAllDisplays();
    updateLastUpdated();
}

function updateAllDisplays() {
    // Update wind speed
    document.getElementById('windSpeed').textContent = liveData.windSpeed;
    updateGauge('windGauge', (liveData.windSpeed - 300) / 200 * 100);
    
    // Update wind density
    document.getElementById('windDensity').textContent = liveData.windDensity;
    updateGauge('densityGauge', (liveData.windDensity - 5) / 10 * 100);
    
    // Update Kp index
    document.getElementById('kpIndex').textContent = liveData.kpIndex;
    updateKpGauge(liveData.kpIndex);
    
    // Update sunspot number
    document.getElementById('sunspotNumber').textContent = liveData.sunspotNumber;
    updateSunspots(liveData.sunspotNumber);
    
    // Update active regions and flares
    document.getElementById('activeRegions').textContent = liveData.activeRegions;
    document.getElementById('solarFlares').textContent = liveData.solarFlares;
    
    // Update aurora activity
    document.getElementById('auroraActivity').textContent = liveData.auroraActivity;
    updateAuroraDescription();
    
    // Update weather status
    updateWeatherStatus();
}

function updateGauge(gaugeId, percentage) {
    const gauge = document.getElementById(gaugeId);
    gauge.style.width = Math.min(100, Math.max(0, percentage)) + '%';
}

function updateKpGauge(kpValue) {
    const kpBars = document.querySelectorAll('.kp-bar');
    const kpIndicator = document.getElementById('kpIndicator');
    
    // Reset all bars
    kpBars.forEach(bar => {
        bar.classList.remove('active', 'storm');
    });
    
    // Update active bars
    for (let i = 0; i <= kpValue; i++) {
        const bar = document.querySelector(`[data-level="${i}"]`);
        if (bar) {
            if (i >= 5) {
                bar.classList.add('storm');
            } else {
                bar.classList.add('active');
            }
        }
    }
    
    // Update indicator position
    const indicatorPosition = (kpValue / 9) * 100;
    kpIndicator.style.left = indicatorPosition + '%';
}

function updateSunspots(count) {
    const sunspots = document.querySelectorAll('.sunspot');
    
    sunspots.forEach((spot, index) => {
        if (index < Math.min(count / 15, 3)) { // Show up to 3 spots
            spot.classList.add('active');
        } else {
            spot.classList.remove('active');
        }
    });
}

function updateAuroraDescription() {
    const description = document.getElementById('auroraDescription');
    const activity = liveData.auroraActivity;
    
    const descriptions = {
        'Low': 'Aurora activity is minimal',
        'Medium': 'Aurora may be visible in northern regions',
        'High': 'Aurora should be visible in many areas'
    };
    
    description.textContent = descriptions[activity] || 'Aurora activity is moderate';
}

function updateWeatherStatus() {
    const statusIcon = document.getElementById('statusIcon');
    const statusText = document.getElementById('statusText');
    const statusDescription = document.getElementById('statusDescription');
    
    let status, icon, description;
    
    if (liveData.kpIndex <= 2) {
        status = 'Calm';
        icon = 'fas fa-sun';
        description = 'Space weather is calm today';
    } else if (liveData.kpIndex <= 4) {
        status = 'Active';
        icon = 'fas fa-cloud-sun';
        description = 'Moderate space weather activity';
    } else {
        status = 'Stormy';
        icon = 'fas fa-bolt';
        description = 'High space weather activity - storms possible';
    }
    
    statusIcon.innerHTML = `<i class="${icon}"></i>`;
    statusText.textContent = status;
    statusDescription.textContent = description;
}

function updateLastUpdated() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('lastUpdated').textContent = `Last updated: ${timeString}`;
}

function initializeVisualizations() {
    // Sun model controls
    const sunToggle = document.getElementById('sunToggle');
    sunToggle.addEventListener('click', function() {
        isSunAnimating = !isSunAnimating;
        const sunCore = document.getElementById('sunCore');
        
        if (isSunAnimating) {
            sunCore.style.animationPlayState = 'running';
            this.innerHTML = '<i class="fas fa-pause"></i>';
            this.classList.add('active');
        } else {
            sunCore.style.animationPlayState = 'paused';
            this.innerHTML = '<i class="fas fa-play"></i>';
            this.classList.remove('active');
        }
    });
    
    // Magnetosphere controls
    const magnetToggle = document.getElementById('magnetToggle');
    magnetToggle.addEventListener('click', function() {
        isMagnetAnimating = !isMagnetAnimating;
        const magnetField = document.getElementById('magnetField');
        const solarWind = document.getElementById('solarWind');
        
        if (isMagnetAnimating) {
            magnetField.style.animationPlayState = 'running';
            solarWind.style.animationPlayState = 'running';
            this.innerHTML = '<i class="fas fa-pause"></i>';
            this.classList.add('active');
        } else {
            magnetField.style.animationPlayState = 'paused';
            solarWind.style.animationPlayState = 'paused';
            this.innerHTML = '<i class="fas fa-play"></i>';
            this.classList.remove('active');
        }
    });
}

function initializeCharts() {
    const ctx = document.getElementById('solarWindChart').getContext('2d');
    
    // Generate sample data for the last 24 hours
    const hours = [];
    const windSpeedData = [];
    const windDensityData = [];
    
    for (let i = 23; i >= 0; i--) {
        const hour = new Date();
        hour.setHours(hour.getHours() - i);
        hours.push(hour.getHours() + ':00');
        
        // Generate realistic data with some variation
        windSpeedData.push(Math.floor(Math.random() * 100) + 400);
        windDensityData.push((Math.random() * 5 + 6).toFixed(1));
    }
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: hours,
            datasets: [
                {
                    label: 'Wind Speed (km/s)',
                    data: windSpeedData,
                    borderColor: '#4ecdc4',
                    backgroundColor: 'rgba(78, 205, 196, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Wind Density (protons/cm³)',
                    data: windDensityData,
                    borderColor: '#ff6b6b',
                    backgroundColor: 'rgba(255, 107, 107, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: '#ffffff'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ffffff'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: '#4ecdc4'
                    },
                    grid: {
                        color: 'rgba(78, 205, 196, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    ticks: {
                        color: '#ff6b6b'
                    },
                    grid: {
                        drawOnChartArea: false,
                    }
                }
            }
        }
    });
}

function initializeAlerts() {
    const alertCard = document.getElementById('alertCard');
    const alertClose = document.getElementById('alertClose');
    
    alertClose.addEventListener('click', function() {
        alertCard.style.display = 'none';
    });
    
    // Check for alert conditions every 10 seconds
    setInterval(checkAlerts, 10000);
}

function checkAlerts() {
    const alertCard = document.getElementById('alertCard');
    const alertTitle = document.getElementById('alertTitle');
    const alertMessage = document.getElementById('alertMessage');
    
    // Check for high Kp index (storm conditions)
    if (liveData.kpIndex >= 6) {
        alertTitle.textContent = '⚡ Geomagnetic Storm Alert!';
        alertMessage.textContent = 'High geomagnetic activity detected. Radio communications may be affected.';
        alertCard.style.display = 'flex';
        
        // Auto-hide after 10 seconds
        setTimeout(() => {
            alertCard.style.display = 'none';
        }, 10000);
    }
    
    // Check for high solar wind speed
    if (liveData.windSpeed >= 600) {
        alertTitle.textContent = '🌪️ High Solar Wind Alert!';
        alertMessage.textContent = 'Very high solar wind speeds detected. Aurora activity may be enhanced.';
        alertCard.style.display = 'flex';
        
        setTimeout(() => {
            alertCard.style.display = 'none';
        }, 10000);
    }
    
    // Check for solar flares
    if (liveData.solarFlares >= 3) {
        alertTitle.textContent = '☀️ Solar Flare Alert!';
        alertMessage.textContent = 'Multiple solar flares detected. Space weather conditions are active.';
        alertCard.style.display = 'flex';
        
        setTimeout(() => {
            alertCard.style.display = 'none';
        }, 10000);
    }
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .data-card {
        transition: all 0.3s ease;
    }
    
    .data-card:hover {
        transform: translateY(-5px);
    }
    
    .gauge-fill {
        transition: width 0.5s ease;
    }
    
    .kp-bar {
        transition: all 0.3s ease;
    }
    
    .sunspot {
        transition: opacity 0.5s ease;
    }
    
    .status-icon {
        transition: all 0.3s ease;
    }
    
    .alert-card {
        animation: alert-slide 0.5s ease;
    }
`;
document.head.appendChild(style);
