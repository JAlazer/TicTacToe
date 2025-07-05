# Tic Tac Toe

## Hai there!

I am currently a React noob, however, my goal for the summer is to become as super cracked and awesome as possible with React and other stuff!

So, to start my journey in learning, what better place to learn than the 
BEAUTIFUL [documentation itself](https://react.dev/)! 

It turns out the react documentation has a tutorial on how to make Tic Tac Toe as a hands-on learning experience, perfection!

To ensure that I am not just reading and copying code, at each step I shall take note of what I am doing and the thought process behind what changes are made and why!

## Getting Started: Kinda

Unfortunately, I did get started on this documentation a bit late into this process, soooo the section which I will be starting this notetaking stuff is where this webapp is made up of two components:  
- the board 
- the squares which make up the board.  

So far, I have gotten into the heart of React concepts: components, hooks, and props! I'm sure there is much more to come, and I can't wait! From here, the **sqaures** have been made to be *buttons* while the **board** holds each of these **square** components in a 3x3 manner ofc. Because the **squares** have been made to be buttons, there must be a click event handler, but since we want this click event to occur for each **square** on the **board** we must, as the React gods say:

> "Lift state up"  

which involves the use of props with the **square** component:
- the **val** prop --> which is just the value the *button* displays
- the **onSquareClick** prop --> which is the click event handler function

That covers what's going on in the **square** component. Now, for the **Board** component, beyond just laying out the **squares**, *useState* is utilized which was my introduction to *hooks* in React!  

> Basically, *hooks* are *functions* which allow for the concise handling of *complex behavior* from a component. Here, as the name suggests, *useState* is the hook which handles the state of a certain variable in a component. Perhaps, these are called *hooks* because the behavior is *hooked* onto the component through these *functions*.  

Here, the *useState* hook syntax is something like:  

> `const [squares, setSquare] = useState(Array(9).fill(null))`

On the Left Hand Side (LHS), is JS syntax, where the first element of the array is the *name of the state* the **Board** component cares about, while the second element is the *function* which takes in an updated version of the *state* to update the *state* the **Board** component works with.  

On the Right Hand Side (RHS) is the default value of the *squares* state defined on the LHS with the syntax of *useState* which takes in an empty ( null) array of 9 indecies, which are just the amount of **squares** on a Tic Tac Toe board!  

Next, the *handleClick* function is defined to take in a value *i* (the pointer to a specific **square** on the **board**), while updating the state of the **squares** array to have the *ith element* set to an 'X' (for now ofc).  

Then the *props* defined within the **Square** component are used where 9 **Square** components are created (split into 3 chunks of 3 within a 'board-row' div). Each *val* is set to the respective element of the **squares** array. Meanwhile, 