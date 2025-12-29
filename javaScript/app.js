/* Take mark of five subject from user using prompt */
let mark1 = Number(prompt("Enter the mark of first subject"));
let mark2 = Number(prompt("Enter the mark of second subjext"));
let mark3 = Number(prompt("Enter the mark of third subject"));
let mark4 = Number(prompt("Enter the mark of fourth Subject"));
let mark5 = Number(prompt("Enter the mark of Fifth Subject"));

/* Calculate total and average mark*/
let totalMark = mark1 + mark2 + mark3 + mark4 + mark5;
let averageMark = totalMark/5;
let grade;

/* Assign grade using if esle ladder*/
if(averageMark >= 90){
    grade = "A+";
}else if(averageMark >= 80){
    grade = "A";
}else if(averageMark >= 70){
    grade = "B";
}else if(averageMark >= 60){
    grade = "C";
}else if(averageMark >= 50){
    grade = "D";
}else{
    grade = "F";
}

/* print results using alert*/
alert("Total Mark : "+totalMark + " | Average Mark : "+ averageMark + " | Grade : "+ grade);

