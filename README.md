1. getElementById is used to select a single element based on its unique ID. Since IDs are supposed 
to be unique in an HTML document this method always returns only one element or null if no element 
is found. It is simple and very fast.

getElementsByClassName is used to select elements based on their class name. It returns a 
collection of all elements that have the specified class. Even if there is only one matching 
element it still returns a collection not a single element.

querySelector and querySelectorAll are more flexible because they use CSS selectors. querySelector 
returns the first element that matches the selector while querySelectorAll returns all matching 
elements as a NodeList. These methods allow selecting elements by ID, class, tag name, or more 
complex CSS selectors.

2. To create a new element in JavaScript we use the document.createElement() method. This method 
creates a new HTML element but does not add it to the page immediately.
After creating the element we can set its content using properties like innerText or innerHTML. 
Then we insert it into the DOM using methods such as appendChild(), append(), or prepend().

3. Event bubbling is a concept in JavaScript where an event starts from the target element and then 
propagates upward through its parent elements in the DOM hierarchy.
For example if you click a button that is inside a div the click event first runs on the button 
then on the div and then on the body and so on up to the document. This upward movement of the 
event is called bubbling. This happens because events in JavaScript follow a specific flow first 
capturing phase then target phase and finally bubbling phase. By default most event listeners work 
in the bubbling phase.

4. Event delegation is a technique where instead of attaching event listeners to multiple child 
elements we attach a single event listener to their parent element. Because of event bubbling when
an event occurs on a child element it bubbles up to the parent. The parent can then check which 
child triggered the event and respond accordingly.
This is useful because it improves performance and reduces memory usage especially when dealing 
with many elements. It is also helpful when dynamically adding new elements to the DOM since we do 
not need to attach new event listeners to them individually.

5. preventDefault() is used to stop the default behavior of an element. For example if we click on 
a link the browser normally navigates to another page. By using preventDefault() we can stop this 
navigation.
stopPropagation() is used to stop the event from moving up or down the DOM tree. In other words it 
prevents event bubbling and capturing.
The main difference is that preventDefault() stops the default browser action while stopPropagation
() stops the event from propagating to parent elements. They serve different purposes and are often 
used together depending on the situation.
