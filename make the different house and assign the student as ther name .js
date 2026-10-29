let na=["sarban","hariom","om","karichan","baijaanathmahato"]

let house=[];

for (const item of na) {

    if(item.length<6){
        house.push("Gryffindor6")
    }
    else if(item.length<8){
        house.push("Hufflepuff8")
    }
    else if(item.length<12){
        house.push("Ravenclaw12")
    }
    else{
        house.push("slytherin")
    }
}
console.log(house)