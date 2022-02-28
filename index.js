// Your code here

class Polygon{
    constructor(array){
        this.array = array
        this.total = this.array.length
    }
    get countSides(){
        return this.total
    }

    get perimeter(){
        if (!Array.isArray(this.array)) return;
       return this.array.reduce((total,side) => total+side,0)
    }

}



class Triangle extends Polygon{

    
    get isValid(){
        if (!Array.isArray(this.array)) return;
        if (this.total !== 3) return;
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]

        return ((side1+side2 > side3)&&(side2+side3>side1)&&(side3+side1>side2)) 

    }
}



class Square extends Polygon{

    get isValid() {
        if (!Array.isArray(this.array)) return;
        if (this.total !== 4) return;
        let side1 = this.array[0]
        let side2 = this.array[1]
        let side3 = this.array[2]
        let side4 = this.array[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        if(!Array.isArray(this.array)) return
        if(this.total !== 4) return 
        let a = this.array[0]
        return(a*a)


    }

}

