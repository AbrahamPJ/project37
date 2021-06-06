class Quiz {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide();
      
      Contestant.getPlayerInfo();
      
      if(allcontestants !== undefined){
        background(rgb(198,135,103));
       // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
        
        var display_position = 230;
        fill("blue");
        textSize(20);
        text("correct answers are in green",130,230);
        
        
  
        for(var plr in allcontestants){          
        var correctAns = "2";

        if (correctAns === allcontestants[plr].answer){
        fill("green");
        }else {
        fill ("red")
        }

        display_position+=30;
  
        
         
          textSize(20);
          text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 120,display_position)
        }
  
      }
  
      drawSprites();
    }
  
  }
  