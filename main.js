// managed-check.js
(function() {
    // 1. Inject the anti-flash style rule immediately to hide the page before it can render
    const style = document.createElement('style');
    style.id = 'anti-flash-lock';
    style.innerHTML = 'html { display: none !important; }';
    document.documentElement.appendChild(style);
    // 2. Perform the fast YouTube check once the basic document frame loads
    window.addEventListener('DOMContentLoaded', async () => {
        const youtubeAssetUrl = 'https://wandera.com';
        
        try {
            // Set a tight 1.5-second timeout window
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1500);

            await fetch(youtubeAssetUrl, { 
                mode: 'no-cors', 
                cache: 'no-store', 
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            // PASS: Remove the lock and show the regular site instantly
            const lock = document.getElementById('anti-flash-lock');
            if (lock) lock.remove();
            
        } catch (error) {
            // FAIL: Overwrite the body instantly and unlock the screen to show the block message
            document.body.innerHTML = '<h1 style="font-family: sans-serif; text-align: center; margin-top: 25vh; color: #ff3333;">I don\'t allow access to School Or Professional eviorments </h1>';
            document.body.style.width = "100%"
            document.body.style.height = "100%"
            const lock = document.getElementById('anti-flash-lock');
            if (lock) lock.remove();
        }
    });
})();
