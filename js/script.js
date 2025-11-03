 document.addEventListener('DOMContentLoaded', () => {
    // 1. WhatsApp Channel Icon Fix
    // Simple script to inject the WhatsApp icon (for simplicity, using text here)
    document.querySelectorAll('.whatsapp-button .channel-icon-placeholder').forEach(el => {
        el.innerHTML = '&#x1F4F1;'; // Placeholder for a phone/mobile icon
        // For the real WhatsApp logo, you would use an image or an icon font
    });

    // 2. NPV Cloud Copy Functionality
    const copyButtons = document.querySelectorAll('.copy-button');
    const statusMessage = document.getElementById('copy-status');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const configText = button.getAttribute('data-config');
            
            if (!configText) {
                statusMessage.textContent = 'SYSTEM ERROR: CONFIG DATA NOT FOUND.';
                statusMessage.style.color = 'red';
                return;
            }

            try {
                // Use the modern clipboard API
                await navigator.clipboard.writeText(configText);
                
                // Success feedback
                statusMessage.textContent = `✅ [ ${configText.substring(0, 20)}... ] COPIED!`;
                
                // Reset status after delay
                setTimeout(() => {
                    statusMessage.textContent = 'System Ready.';
                }, 2000);

            } catch (err) {
                // Fallback for failed copy
                statusMessage.textContent = 'ACCESS DENIED: MANUAL COPY REQUIRED.';
                statusMessage.style.color = 'orange';
            }
        });
    });
});
 
