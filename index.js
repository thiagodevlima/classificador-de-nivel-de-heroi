let nome = ["Aragorn", "Legolas", "Gimli", "Gandalf"];
let xp = [750, 3500, 9500, 12000];

for (let i = 0; i < nome.length; i++) {
    let nivel = "";

    if (xp[i] < 1000) nivel = "Ferro";
    else if (xp[i] <= 2000) nivel = "Bronze";
    else if (xp[i] <= 5000) nivel = "Prata";
    else if (xp[i] <= 7000) nivel = "Ouro";
    else if (xp[i] <= 8000) nivel = "Platina";
    else if (xp[i] <= 9000) nivel = "Ascendente";
    else if (xp[i] <= 10000) nivel = "Imortal";
    else nivel = "Radiante";

    console.log("O Herói de nome " + nome[i] + " está no nível de " + nivel);
}