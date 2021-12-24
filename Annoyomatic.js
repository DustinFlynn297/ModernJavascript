const annoyer = {
    phrases: ["literally", "Swag", "Drip", "Fire", "YOLO", "Most Def", "Cray"],
    pickPhrase(){
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index]
    },
    start(){
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase())
        }, 3000)
    },
    stop() {
        clearInterval(this.timerId);
    }
}

annoyer.start()
annoyer.stop()

