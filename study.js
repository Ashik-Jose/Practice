console.log("5");       //JS Output


//JS let
var num1 = 5  //Global Variable

function Scopes1()
{
  let num1 = 7  
  var num2 = 10;
  var num3 = num1 +num2;
  console.log(num1);
  console.log(num2);
  console.log(num3);
}
Scopes1();
console.log(num1);


//JS const
const x = 2;
var y = 3;
function Scopes2()
{
    const y = 5;
    console.log(x);
    console.log(y);
}
Scopes2();
console.log(x);
console.log(y);

const Student = {
    Name:"ABC",
    Batch:1,
    Branch:"COmpuer Science"
};
console.log(Student.Name);
Student.Name = "XYZ";
console.log(Student.Name);


//JS Functions
function Trial(a,b,c)
{
    a+=1;
    b-=2;
    c*=3;
    return a*b*c;
}
var txt = "The product of three modified numbers is " + Trial(6,7,8) + ".";
console.log(txt);



//JS Objects
var Student2 = 
{
    Name:"EFG",
    Batch:2,
    Branch:"Electrical and electronics",
    Fullname: function()
            {
                return "The fullname of the student is " + this.Name + " HIJ "
            }
};
console.log(Student2.Branch);
console.log(Student2["Batch"]);
console.log(Student2.Fullname());
