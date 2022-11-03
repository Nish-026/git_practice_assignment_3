function prime(num){
var count=0;
for(i=2;i<(num**1/2);i++)
{
 if(num%i==0){
    count++
}
if(count==1)
{
return false;
}
else
{
return true;
}
}