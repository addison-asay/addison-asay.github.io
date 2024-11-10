var age;

age = prompt("how old you is:")
if (age >= 65) {
    output = "ur old, we give you punch pass cuz you wont finish it!" 
    document.getElementById('verify').style.color = 'maroon';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    output = "Enjoy Music and Make Memories before they fade!"
}

document.getElementById("verify").innerHTML = output;

