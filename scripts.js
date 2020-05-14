var scoreCard=documet.getElementById('scoreCard');
var quizBox=document.getElementById('questionBox');
var opt1=document.getElementById('opt1');
var opt2=document.getElementById('opt2');
var opt3=document.getElementById('opt3');
var opt4=document.getElementById('opt4');


    var app={
        questions:[
                    {q:'What is dog translated in french?',options:['chat','chien',
                    'souris','cochon'],answer:2},

                    {q:'What is dog translated in french?',options:['chat','chien',
                    'souris','cochon'],answer:2},

                    {q:'What is dog translated in french?',options:['chat','chien',
                    'souris','cochon'],answer:2},
                 ],
                 index:0,
                 load:function(){
                        quizBox.innerHTML=this.questions[this.index].q;
                        opt1.innerHTML=this.questions[this.index].options[0];
                        opt2.innerHTML=this.questions[this.index].options[1];
                        opt3.innerHTML=this.questions[this.index].options[2];
                        opt4.innerHTML=this.questions[this.index].options[3];
                        scoreCard.innerHTML=this.questions.length+"/"+this.score;
             },
                 check:function(ele){

                    var id=ele.id.split('');

                    if(id[id.length-1]==this.questions[this.index].answer){
                        
                        ele.addClass="correct";
                        ele.InnerHTML="Correct";
                    }
                    else{
                        ele.className="wrong";
                        ele.innerHTML="Wrong";
                    }
                    }
                 },
                 score:0
                
            }

            window.onload=app.load();

            function button(ele){
                app.check(ele);
            }
