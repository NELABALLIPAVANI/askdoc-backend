//!for loop

for(let i=1; i<6; i++){
    console.log(i);
}

//!while loop

let j=0;
while(j < 6){
    console.log("hello");
    console.log("\n");
    j++;
}

//!do while

let i=1;
do{
    console.log(i);
    i++;
}while(i > 5)


//!break

for(let i=1; i<50; i++){
    if(i==50)break;
    console.log(i);
}

//!continue(skips the iteration)

for(let i=1; i<=50; i++){
    if(i==30)continue;
    console.log(i);
}

//!skipping 10,20,30,40,50 values

for(let i=1; i<=50; i++){
    // if(i==10 || i==20 || i==30 || i==40 || i==50)continue;
    if(i%10 == 0)continue;
    console.log(i);
}
for(let i=1; i<=100; i++){
    if(i%2 ==0)
    console.log(i);
}