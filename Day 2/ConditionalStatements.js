function LaunchBrowser()
{
    let BrowserName="Chrome";

    if(BrowserName=="Chrome")

        {
            console.log("This is Chrome Browser");
            
        }
        else{
            console.log("This is other browser");
            
        }
}

LaunchBrowser()

function runTests()
{
    let TestType="Regression";

    switch (TestType){

    case "Smoke":
    console.log( "This is Smoke Test");
    break;
    
    case "Sanity":
    console.log( "This is Smoke Test");
    break;

    case "Regression":
    console.log("This is Regression Test");
    break;

    default:
    console.log("This is Smoke Test");
    }
    
}
runTests();