import React from 'react';
import './Artical.css'

const Artical = () => {
    return (
        <div className='artical'>
            <h1>How does ReactJS work ?</h1>
            <li>
                React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.
            </li>
            <h1>What is the  difference between state and props ?</h1>
            <li>
                The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event.
            </li>
            <br />
            <li>
                Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function.
            </li>
            <h1>what is useeffect ?</h1>
            <li>
                UseEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

                This is not what we want. There are several ways to control when side effects run.

                We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
            </li>
        </div>
    );
};

export default Artical;