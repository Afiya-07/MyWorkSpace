let genderType="Male";

function PrintGender()
{
    let colour="Brown";
    if(genderType=="Female")
    {
        var age=30;
        let colour="Pink";
        console.log("Print the colour-if block",colour);
        
    }
    else
    {
        var age=35;

        console.log("Print the colour-else block",colour);
        
    }
    console.log("The value of age-function block:",age);
    
}

PrintGender()

console.log("The value of genderType-globally:",genderType);
