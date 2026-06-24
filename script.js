document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const generateBtn = document.getElementById('generateBtn');
    const qrcodeContainer = document.getElementById('qrcode');
    const qrPlaceholder = document.getElementById('qrPlaceholder');
    const instructions = document.getElementById('instructions');

    let qrcode = null;

    function generateQRCode() {
        const url = urlInput.value.trim();
        
        if (!url) {
            // Add a small shake animation to input to indicate error
            urlInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                urlInput.style.animation = '';
            }, 500);
            return;
        }

        // Hide placeholder
        qrPlaceholder.classList.add('hidden');
        
        // Clear previous QR code if it exists
        qrcodeContainer.innerHTML = '';
        qrcodeContainer.classList.remove('show');
        instructions.classList.remove('show');
        
        // Generate new QR code
        setTimeout(() => {
            // Create QR code
            qrcode = new QRCode(qrcodeContainer, {
                text: url,
                width: 200,
                height: 200,
                colorDark : "#0f172a",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });
            
            // Show QR code and instructions with animation
            setTimeout(() => {
                qrcodeContainer.classList.add('show');
                instructions.classList.add('show');
            }, 100);
            
        }, 300); // Small delay for smooth transition
    }

    // Generate on button click
    generateBtn.addEventListener('click', generateQRCode);

    // Generate on enter key
    urlInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateQRCode();
        }
    });
});

// Add shake animation style dynamically
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}
`;
document.head.appendChild(style);
