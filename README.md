|------------- START : 01 -----------|

01 || Question : What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? .

01 || Answer   : 

|| getElementById :
   - It Does   : Finds a Specific single element by its ID
   - Id Unique : An Id cannot be used more than once on an HTML page.
   - Structure : document.getElementById("Name"); // A Name is given here, but mainly it is an ID. the “Name” represents the ID.
  

|| getElementsByClassName :
   - It Does   : Finds all matching elements by class name.
   - Advantage : Many elements of the same type can be manipulated together.
   - Structure : document.getElementsByClassName("className");
   

|| querySelector Vs querySelectorAll ||
 
|| querySelector :
   - It Does   : Finds the first element that matches a CSS selector.
   - Advantage : Quick access to a single element for manipulation.
   - Structure : document.querySelector("selector");

|| querySelectorAll  :  
   - It Does   : Finds all elements that match a CSS selector.
   - Advantage : Can manipulate multiple elements at once using loops or index.
   - Structure : document.querySelectorAll("selector");
   
|------------- END : 01 ---------------|
      

|------------- START : 02 -------------|

02 || Qestion : How do you create and insert a new element into the DOM?

02 || Answer  :

|| Create a Element :
   - Structure : document.createElement();
   - Example   : const newElement = document.createElement("div"); // Creates a <div> Element.
    
|| Insert Element  : 
   - Structure : parentElement.appendChild(); // Add New Element Inside od AppendChild().
   - Example   : document.getElementById("idName").appendChild(newElement);

|| Create & Insert Element :

|| Example :

|| HTML CODE :
  div > id ="container"

|| JS Dom :  
   || Create Element :
   const newElement = document.createElement("div");

   || Add Text Element :
   newElement.textContent = "Hello World";

   || Insert Text Element Into DOM :
   document.getElementById("container").appendChild(newElement);    

|| Output : 
   div > id="container"
     div > Hello World 

|---------------- END : 02 ------------|


|---------------- START : 03 -----------|

03 || Qestion : What is Event Bubbling? And how does it work?

03 || Answer  :

|| What is Event Bubbling :

|| It Does : When an event occurs on a child element, that event automatically propagates upward to its parent → grandparent → document.

|| how Does Bubbling  work :
|| When an event occurs on an element (such as a click), then:
 - The event listener of the target element is executed first.
 - The event then goes to its parent element.
 - Next, the event reaches the grandparent element.
 - The event can continue to propagate up to the document.

 - Event bubbling = child → parent → grandparent → document propagation.  

|---------------- END : 03 -------------|


|--------------- START : 04 ------------|

04 || Qestion : What is Event Delegation in JavaScript? Why is it useful?

04 || Answer  :

|| What is Event Delegation in JavaScript : Event Delegation is a technique where you place a single event listener on the parent element,
   and use that listener for its child elements.

|| Why is Event Delegation useful :

 - Only one listener is required on the parent instead of multiple child elements.
 - All events can be managed from one place.
 - New elements are automatically handled when the UI changes.
 - By checking the condition, specific child handling can be done from the parent listener.
 - Different event types can be handled in the same parent element.

|---------------- END : 04 -------------|


|---------- ---- START : 05 ------------|

05 || Qestion : What is the difference between preventDefault() and stopPropagation() methods?

05 || Answer  :

|| preventDefault() :
 - Stops default browser behavior.
 - Stops page reload on form submit or link click.
 - Its Used to control form submit or input behavior.
 - Its a Method of Event object.
 - Its Works with all event types.

|| stopPropagation() :
 - Does not stop the browser's default behavior.
 - Its Stops the default bubbling.
 - If the child element is clicked, the parent's listener will not be triggered.
 - Also Works even if new elements are added.
 - Default action and propagation can be controlled at the same time.

|---------------- END : 05 -------------|
