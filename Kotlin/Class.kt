class Apple(color: String, shape: String){
    init {
        println("color: $color, shape: $shape")
    }
}
fun main(args: Array<String>){
    var fruit = Apple("Red", "circular")
}
