var stu1 = {
    name : 'Muhib',
    age : 22,
    contact : +923463334943,
    institute : 'University of Karachi',
    Result : 1,
    Semester : 'VII',
   
}
var stu2 = {
    name : 'Salman',
    age : 20,
    contact : +92346275344,
    institute : 'UOK',
    Result : 0,
    Semester : 'University of Karachi',
    
}
var stu3 = {
    name : 'Noman',
    age : 23,
    contact : +923452499053,
    institute : 'University of Karachi',
    Result : 1,
    Semester : 'VII',
   

}
var stu4 = {
    name : 'Shehryar',
    age : 21,
    contact : +923323888648,
    institute : 'University of Karachi',
    Result : 0,
    Semester : 'VII'
}
var stu5 = {
    name : 'Umer',
    age : 24,
    contact : +923453394548,
    institute : 'University of Karachi',
    Result : 1,
    Semester : 'VII'
}
var stu6 = {
    name : 'Uzair',
    age : 25,
    contact : +923158911725,
    institute : 'University of Karachi',
    Result : 0,
    Semester : 'VII'
}
var stu7 = {
    name : 'Yousuf',
    age : 25,
    contact : +923321852333,
    institute : 'University of Karachi',
    Result : 1,
    Semester : 'IV'
}
var stu8 = {
    name : 'Rafay',
    age : 24,
    contact : +923160987654,
    institute : 'University of Karachi',
    Result : 0,
    Semester : 'VII'
}
var stu9 = {
    name : 'Rayyan',
    age : 18,
    contact : +923239876543,
    institute : 'Hamdard University',
    Result : 1,
    Semester : 'III'
}
var stu10 = {
    name : 'Raheel',
    age : 18,
    contact : +923428030207,
    institute : 'Hamdard University',
    Result : 0,
    Semester : 'III'
}


var arr = [stu1,stu2,stu3,stu4,stu5,stu6,stu7,stu8,stu9,stu10]
console.log(arr)

for(var i = 0 ; i<arr.length ; i++){
    arr[i].rollNum = i + 1;
}
console.log(arr)


for(var i = 0 ; i <arr.length ; i++){
    if(arr[i].Result === 0){
        arr[i].final = 'Fail'
    }else if(arr[i].Result === 1){
        arr[i].final = 'Pass'
    }
}
console.log(arr)


var a = document.getElementById('inp')
var b = document.getElementById('displayname')
var c = document.getElementById('displayresult')
var d = document.getElementById('Roll')
var e = document.getElementById('semester')
var f = document.getElementById('age')
var g = document.getElementById('inst')
var h = document.getElementById('con')


function searchResult(){
    for(var j=0 ; j<arr.length ; j++){
        if(arr[j].rollNum == a.value){
            // console.log(arr[j])
            if(arr[j].Result){
                b.innerHTML = arr[j].name
                d.innerHTML = arr[j].rollNum
                e.innerHTML = arr[j].Semester
                f.innerHTML = arr[j].age
                g.innerHTML = arr[j].institute
                h.innerHTML = arr[j].contact
                c.innerHTML = 'Pass'
            }else{
                b.innerHTML = arr[j].name
                d.innerHTML = arr[j].rollNum
                e.innerHTML = arr[j].Semester
                f.innerHTML = arr[j].age
                g.innerHTML = arr[j].institute
                h.innerHTML = arr[j].contact
                c.innerHTML = 'Fail'
            }
        
        }
    }
}
