var r = document.getElementById('r');
var p = document.getElementById('p');
var s = document.getElementById('s');

// click event listeners
r.addEventListener('click', function(){
    choice('r')
})
p.addEventListener('click', function(){
    choice('p');
})
s.addEventListener('click', function(){
    choice('s');
})

// computer choice
var computerPlay = () => {
    var possibity = ['r','p','s']
    var play = Math.floor(Math.random() * 3);
    return possibity[play];
    }
// main function
function choice(userPlay){
    let computerChoice = computerPlay();
    console.log('You took ' + userPlay, 'Ai took ' + computerChoice);
    
    switch(userPlay + computerChoice){
        case 'rp':
        case 'ps':
        case 'sr':
            window.alert('AI WINS! Better luck next time.');
            break;
        case 'pr':
        case 'sp':
        case 'rs':
            window.alert('CONGRATULATIONS! You Win');
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            window.alert('Draw Game')
            break;
        default: console.log('You are a Hacker')
    }
}






