






function name(n) {
    return function(a) {
      return `${n} likes ${a}`;
    };
}

const member = {
    name: "Kangrok",
    age: 20,
    major: "Biz",
    isFreshman: true
}

const memArr = [];
memArr.push({name: "이강록", age: 20, isFreshman: true});
memArr.unshift({name: "뽀로로", age: 5, isFreshman: false});

console.log(memArr);

function printMembers (passArr) {
    const len = passArr.length;
    for(i=0;i<len;i++) {
        console.log(passArr[i].name);
        console.log(passArr[i].age);
        console.log(passArr[i].isFreshman);
    }
}
printMembers(memArr);









let user = {name: "이강록", age: 20};

//"key" in object
console.log("name" in user); //true
console.log("height" in user); //false












const student=[{
    name: "J",
    age: 20,
},
{
    name :"k",
    age:21,
}
]
function studentInfo(){
    for(i=0;i<student.length;i++){
        return [student[i].name, student[i].age];
    }
}








function printMembers2 (passArr) {
    for(key in passArr) {
        console.log(key, passArr[key]);
    };
}


const compareNum = {
    bigger: (a,b) => {return (a>b)?a:b},
    smaller: (a,b) => {return (a<b)?a:b},
    isSame: (a,b) => {return (a===b)}
}

const compareNum2 = {
    bigger: function (a, b) {
        if(a>b)
            return a;
        else    
            return b;
    },
    smaller: function (a, b) {
        if(a<b)
            return a;
        else    
            return b;
    },
    isSame: function (a, b) {
        return (a===b);
    }
}

console.log(compareNum.bigger(3,9));
console.log(compareNum.isSame(3,9));




const compareNum3 = {
    bigger: (a,b,c) => {
        if(a>=b && a>=c)
            return a;
        if(b>=a && b>=c)
            return b;
        if(c>=a && c>=b)
            return c;
    },
    smaller: (a,b,c) => {
        if(a<=b && a<=c)
            return a;
        if(b<=a && b<=c)
            return b;
        if(c<=a && c<=b)
            return c;
    },
    //isSame: (a,b,c) => {return((a==b) && (b==c) && (c==a))}
    isSame: (a,b,c) => {return(a==b && b==c && c==a)}
}











