class Question {

    constructor() {
      this.input1 = createInput("Enter Your Name");
      this.input2 = createInput("correct option");
      this.button = createButton('submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');

      this.title = createElement('h2');
      this.reset = createButton('reset');
    }
    hide(){
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("My Quiz game");
      this.title.position(displayWidth/2 - 50, 0);
      this.question.html("who is the prime minister of india")
      this.question.position(150,80);
      this.option1.html("1:abraham")
      this.option2.html("2: Narendra Modi");
      this.option3.html("3: Ann");
      this.option4.html("4: mahatma gandhi");

      this.input1.position(150,230);
      this.input2.position(350,230);
      this.button.position(290,300);
      this.reset.position(displayWidth/2 - 100, 20);
  
  2
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();

        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
       //this.greeting.html("Hello " + player.name)
       // this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
      this.reset.mousePressed(()=>{
        contestant.updateCount(0);
        quiz.update(0);
      });
    }
  }
  