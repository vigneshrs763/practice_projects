function rolldice() {
    const numofdice = (document.getElementById("numofdice").value);
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");

    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" style="width: 50px; margin: 5px;">`);
    }

 
    const allSame = values.every(val => val === values[0]);

    diceresult.textContent = `Dice: ${values.join(', ')}${allSame ? ' — 🎉 You win!' : ''}`;
    diceimages.innerHTML = images.join('');
}
