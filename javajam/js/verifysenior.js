var age;

age = prompt("enter your age to see if you qualify:")
if (age >= 65) {
    output = "Free Coffee for you every Friday night!"
    document.getElementById("verify").style.color = "green";
    document.getElementById("verify").style.fontVariantCaps = "large-caps";
    document.getElementById("verify").style.fontSize = "76px";
    document.getElementById("verify").style.fontStyle = "bold";
} else {
    output = "Come in and enjoy live Music and Make Memories"
}

document.getElementById("verify").innerHTML = output;
