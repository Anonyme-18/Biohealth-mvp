// Geolocation functions for Biohealth

// Detect user's region based on timezone (simplified for demo)
function detectUserRegion() {
    return new Promise((resolve) => {
        // In a real app, this would use actual geolocation or IP detection
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let region = '';
        
        // Simplified region detection based on timezone
        if (timezone.includes('Europe')) {
            region = 'europe';
        } else if (timezone.includes('Africa')) {
            region = 'afrique';
        } else if (timezone.includes('Asia') || timezone.includes('India')) {
            region = 'asie';
        } else if (timezone.includes('America')) {
            region = 'amerique';
        }
        
        // Update UI
        const regionResult = document.getElementById('regionResult');
        if (regionResult) {
            regionResult.style.display = 'block';
            regionResult.innerHTML = `
                <p>Nous avons détecté que vous êtes en <strong>${getRegionName(region)}</strong>. Voici nos recommandations adaptées :</p>
                <div class="region-tags">
                    <span class="region-tag">Aliments locaux</span>
                    <span class="region-tag">Recettes traditionnelles</span>
                    <span class="region-tag">Produits de saison</span>
                </div>
            `;
        }
        
        resolve(region);
    });
}

// Get readable region name
function getRegionName(regionCode) {
    const regions = {
        'europe': 'Europe',
        'afrique': 'Afrique',
        'asie': 'Asie',
        'amerique': 'Amérique'
    };
    
    return regions[regionCode] || 'votre région';
}

// Update regional advice (connected to select change in conseils.html)
function updateRegionalAdvice(region) {
    // This function is defined in conseils.html as it needs to update specific elements
    console.log(`Region updated to: ${region}`);
}