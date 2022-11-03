function prime(number){
var count=0;
for(i=0;i<(number**1/2);i++)
{
 if(number%i==0){
    count++
}
if(count==1)
{
console.log("Not a prime no.");
}
else
{
console.log("prime no.");
}
}