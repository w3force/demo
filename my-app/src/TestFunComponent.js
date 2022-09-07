import React, { forwardRef }from "react";
const TestFunComponent = ()  => {
    
    const sayHello = () => {
        console.log('Hello from function!');
    }


    return (
        <div id= "testNode" data-testid="testNode" > TestComponent </div>
    );

}


export default TestFunComponent;
