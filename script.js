document.getElementById('calculate-btn').addEventListener('click', calculateGoldValue);

function calculateGoldValue() {
    // 1. Get raw input values
    const ratePerGram = parseFloat(document.getElementById('gold-rate').value) || 0;
    let weight = parseFloat(document.getElementById('weight').value) || 0;
    const unit = document.getElementById('weight-unit').value;
    const purityMultiplier = parseFloat(document.getElementById('karat').value);

    // 2. Standardize all weight variations to grams
    // 1 Ounce = 31.1035 grams | 1 Tola = 11.6638 grams
    if (unit === 'ounces') {
        weight = weight * 31.1035;
    } else if (unit === 'tola') {
        weight = weight * 11.6638;
    }

    // 3. Compute final calculations
    const pureWeight = weight * purityMultiplier;
    const totalValue = pureWeight * ratePerGram;

    // 4. Update the visual UI display
    document.getElementById('total-value').innerText = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(totalValue);
}
