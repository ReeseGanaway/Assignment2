//myEach function

function myEach(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i]);
    }
}

const arr1=[1,2,3,4,5];
myEach(arr1,(item)=>console.log(item)); 

/*
Expected output:
1
2
3
4
5
*/







//myMap function

function myMap(arr, callback){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

const arr2=[1,4,9,16];
let newArr=myMap(arr2,x=>x*2);
console.log(newArr);

/*
Expected output:
[2, 8, 18, 32]
*/









//myFilter function

function myFilter(words, callback){
    let newArr=[];
    for(let i=0;i<words.length;i++){
        if(callback(words[i])){
            newArr.push(words[i]);
        }
    }
    return newArr;
}

const arr3=['pray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
let newWords=myFilter(arr3,word=>word.length>6);
console.log(newWords);

/*
Expected output:
[ 'exuberant', 'destruction', 'present' ]
*/









//mySome function

function mySome(arr, callback){
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i])){
            return true;
        }
    }
    return false;
}

const arr4 = [1, 2, 3, 4, 5];
let even= mySome(arr4,(element) => element % 2 === 0);
console.log(even);

/*
Expected output:
true
*/










//myEvery function

function myEvery(arr,callback){
    for(let i=0;i<arr.length;i++){
        if(!callback(arr[i])){
            return false;
        }
    }
    return true;
}

const arr5 = [1, 30, 39, 29, 10, 13];
let bool=myEvery(arr5,(currentValue) => currentValue < 40);
console.log(bool);

/*
Expected output:
true
*/










//myReduce function

function myReduce(arr,callback){
let acc=0;
if(arr.length==1){
    return arr[0];
}
for(let i=0; i<arr.length;i++){
    acc=callback(acc,arr[i]);
}
return acc;

}

const arr6=[1, 2, 3, 4];
let result=myReduce(arr6, (previousValue, currentValue) => previousValue + currentValue);
console.log(result);

/*
Expected output:
10
*/











//myIncludes function

function myIncludes(arr, target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
}

const arr7 = [1, 2, 3];
bool=myIncludes(arr6,2);
console.log(bool);

/*
Expected output:
true
*/









//myIndexOf function

function myIndexOf(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i;
        }
    }
    return -1;
}

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
let index= myIndexOf(beasts,'bison');
console.log(index);

/*Expected output:
1
*/












// myPush function

function myPush(arr,elementToAdd){
    let newArr=arr;
    newArr[newArr.length]=elementToAdd;
    return newArr;
}

const animals = ['pigs', 'goats', 'sheep'];
newArr=myPush(animals,'cows');
console.log(newArr);

/*
Expected output:
["pigs", "goats", "sheep", "cows"]
*/












//myLastIndexOf function

function myLastIndexOf(arr, target){
    let lastIndex=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            lastIndex=i;
        }
    }
    return lastIndex;
}

const animals1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
lastIndex=myLastIndexOf(animals1, 'Dodo');
console.log(lastIndex);

/*
Expected outcome:
3
*/








//grabKeys function

let newObject={

   


    grabKeys: function(){
        let keyArr=[];
        for(key in this){
            keyArr.push(key);
            
        }
        return keyArr;
    },
    
    Reese: "Happy",
    Reese2: "Sad"
}

let keyArr=newObject.grabKeys();
console.log(keyArr);

/*
Expected output:
[ 'grabKeys', 'Reese', 'Reese2' ]
*/







//grabValues function

newObject={

    grabValues: function(){
        let valueArr=[];
        for(key in this){
            valueArr.push(this[key]);
            
        }
        return valueArr;
    },
    
    Reese: "Happy",
    Reese2: "Sad"
}

let valueArr=newObject.grabValues();
console.log(valueArr);


/*
Expected output:
[ [Function: grabValues], 'Happy', 'Sad' ]
 */


