// var stdate=new Date();
// for(i=0;i<100000;i++)
// {
//     console.log("looping");
// }
// var newdate=new Date()-stdate;
// console.log("ending time"+newdate);
// var i=0;
// function working(seconds)
// {
    
//     nowdate=new Date();
//     while((new Date()-nowdate)<=seconds)
//     {
//         console.log("printing");
//         i=i+1
//     }

// }
// working(1000);
// console.log("end");
// console.log("number of prints"+i)

function end()
{
    console.log("endtime");
}
console.log("started1");
setTimeout(end,9000)

console.log("started2");
setTimeout(end,1000);

console.log("started3");
setTimeout(end,5000)