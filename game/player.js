

class playerC{
    constructor(name){
        this.name = name;
        this.level = 1;
    }
}
let player;
export function generatePlayer(name){
    player = new playerC(name);
}
