let num = 37555;

function setup() {
    noCanvas();

    let bot = new RiveScript();
    bot.loadFile("brain.rive", brainReady, brainError);

    function brainReady() {
        console.log('chatbot ready!');
        bot.sortReplies();
    }

    function brainError() {
        console.log('chatbot error!')
    }

    let button = select('#submit');
    let user_input = select('#user_input');
    let output = select('#output');

    button.mousePressed(chat);

    function chat() {
        let input = user_input.value();
        let reply = bot.reply("local-user", input);

        output.html(reply);

    }

}