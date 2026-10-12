function StudentScore()
{ let StudentScore=70;
    switch(StudentScore)
    {
        case (StudentScore<=90):
            console.log("The Student's Grade is A");
            break;
        case (StudentScore<=80):
            console.log("The Student's Grade is B");
            break;
            default:
                console.log("The student's Grade is C");
                break;
            
            
    }
}
StudentScore();