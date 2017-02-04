console.log('wired up')
const pomodorTimerSecond = document.getElementById('pomodoro_timer_second');
const pomodorTimerMinute = document.getElementById('pomodoro_timer_minute');
const wordCountDiv = document.getElementById('word_count');
const textInputArea = document.getElementById('main_text_input');

//counter
(function countdown(){
    
    let minute = 24;
    let second= 59;
    pomodorTimerMinute.innerText = minute;

    decrementByOneSecond();

    function decrementByOneSecond(){
        if (second > 0){
            pomodorTimerSecond.innerText = second;
            second--;
            setTimeout(decrementByOneSecond, 1000);
        } else {
            decrementByOneMinute();
        }
    };

    function decrementByOneMinute(){
        if (minute > 0){
             pomodorTimerMinute.innerText = minute;
                minute--;
                 pomodorTimerMinute.innerText = minute;
                
                second= 59;
                decrementByOneSecond();
        }
    }
})();

//writing area
textInputArea.setAttribute("spellcheck", "false");
textInputArea.focus();

let wordcount = 0;
//word counter
const wordsArray = [];
const handleClick = function(e){
    if (e.keyCode === 32){
        wordcount++;
        wordCountDiv.innerText = wordcount;

    }
};
textInputArea.addEventListener('keypress', handleClick)
 
 const getBackGroundImage = function(){
    //return "url('imgs/Tunnel of trees.jpg')";
   // return "url('images/write.jpg')";
 return "url('images/guywritingwhilesmoking.png')";
    
}

 /**
 * Section adds additional HTML elements to the DIV containers
 */

// body
    let background_img = getBackGroundImage();
    document.body.style.backgroundImage  = background_img;
	document.body.style.backgroundSize = "cover";
