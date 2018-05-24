// noinspection JSAnnotator
function check(){
    // Henter values fra de valgte punkter i quizzen
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;

    // Tjekker om det valgte svar er det rigtige
    if(question1 === "Skygge, solcreme, solhat"){
        correct++;
    }
    if(question2 === "40 ml"){
        correct++;
    }
    if(question3 === "3 eller derover"){
        correct++;
    }
    if(question4 === "12-15"){
        correct++;
    }
    if(question5 === "Løst siddende tøj af tæt vævet stof"){
        correct++;
    }

    // Gemte beskeder til brugerbesked afhængig af rigtige svar (array)
    var messages = ["Perfekt! Du kan finde ud af at opholde dig i solen", "Det var helt fint. Du ved en del om solen og solbeskyttelse", "Okay. Det kunne være bedre", "Du skal måske lige læse lidt op på solbeskyttelse inden du begiver dig ud i solen igen", "Det er vist en ommer"];
    // Sætter scoren til default 4, som er "Det er vist en ommer"-beskeden
    var score;

    // Tjekker på hvor mange korrekte svar brugeren har, der angiver hvilken besked brugeren skal have
    // Hvis det korrekte antal er mindre end 2 (0 eller 1 rigtige) giver fejlbesked 4 i arrayet messages
    if( correct < 2){
        score = 4;
    }
    // Hvis det korrekte antal er lig med 2 giver det fejlbesked 3 i arrayet messages
    if(correct === 2){
        score = 3;
    }
    // Hvis det korrekte antal er lig med 3 giver det fejlbesked 2 i arrayet messages
    if(correct === 3){
        score = 2;
    }
    // Hvis det korrekte antal er lig med 4 giver det fejlbesked 1 i arrayet messages
    if(correct === 4){
        score = 1;
    }
    // Hvis det korrekte antal er lig med 5 giver det fejlbesked 0 i arrayet messages
    if(correct === 5){
        score = 0;
    }

    // Sætter den skjulte div#after_submit til at være synlig
    document.getElementById("after_submit").style.visibility = "visible";

    // Tilføjer score og besked til tomme p-tags
    document.getElementById('message').innerHTML = messages[score];
    document.getElementById('number_correct').innerHTML = "Du fik " + correct + " rigtige svar";
}
