class Form{

    constructor(){}

    
    display(){
       
        this.title = createElement('h2')
        this.title.html("CAR RACING GAME")
       this.title.position(130,160)

       this.input = createInput("name")
       this.input.position(130,250)

       this.button = createButton("play")
       this.button.position(200,300)

       this.button.mousePressed( ()=>{
           this.input.hide()
           this.button.hide()

           var name = this.input.value()
           this.greetings = createElement('h1')
           this.greetings.html( "hi" + name)
           this.greetings.position(150,300)
       })
    }


}