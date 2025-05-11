// Notification system for Biohealth

// Health reminders
const healthReminders = [
    "Il est temps de prendre votre médicament.",
    "N'oubliez pas de boire de l'eau régulièrement.",
    "Avez-vous mangé vos fruits et légumes aujourd'hui?",
    "Pensez à faire une petite marche après le repas.",
    "Vérifiez votre tension artérielle si nécessaire."
];

// Show random health reminder
function showRandomReminder() {
    const randomIndex = Math.floor(Math.random() * healthReminders.length);
    showNotification(healthReminders[randomIndex], 5000);
}

// Schedule random reminders (every 30-60 minutes)
function scheduleReminders() {
    // Initial reminder after 5 minutes
    setTimeout(showRandomReminder, 5 * 60 * 1000);
    
    // Subsequent reminders every 30-60 minutes
    setInterval(() => {
        showRandomReminder();
    }, (30 + Math.random() * 30) * 60 * 1000);
}

// Initialize notification system
document.addEventListener('DOMContentLoaded', function() {
    // Only schedule reminders if the user is logged in (in a real app)
    const isLoggedIn = false; // This would be set based on actual auth status
    
    if (isLoggedIn) {
        scheduleReminders();
    }
    
    // Demo notification after 10 seconds
    setTimeout(() => {
        showNotification("Astuce santé : Les légumes locaux de saison sont particulièrement nutritifs en ce moment.", 5000);
    }, 10000);
});