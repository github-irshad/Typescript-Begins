//Intersection types
type Draggable = {
    drag : ()=>void
}
type Resize = {
    resize : ()=>void
}

type Widget = Draggable & Resize;
let textBox:Widget = {
    drag() {
        
    },
    resize() {
        
    },
}