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

Then the *props* defined within the **Square** component are used where 9 **Square** components are created (split into 3 chunks of 3 within a 'board-row' div). Each *val* is set to the respective element of the **squares** array. Meanwhile, the *onSquareClick* prop is set to be a lambda function, which runs the *handleClick* function taking in the same number element from *val*.  

> **Important note for the lambda function reasoning:** you might be thinking, "Wait, isn't the *onSquareClick* prop *supposed* to take in a function which handles what happens on click, which is what *handleClick* does?" Following this logic would mean that we would only need to pass in the *handleClick(0)* part. However, doing this, ends up with an error from the DOM console which reads as "Too many re-renders." This means, an infinite loop is being created somewhere. It turns out, passing the function directly into the prop will immediately (upon rendering of the **Square** component inside the **Board** component) *call* the function, which also updates the state of the **Board**, which causes a *Rerendering* of the same **Square** component. To avoid this, a *lambda function* (or, in JS, an *arrow function*) is passed as the prop, which essentially puts off the *calling* of the *handleClick* function until the corresponding **Square** component is actually *clicked*!  

And with this, you are all caught up to speed with my process so far! Now, I shall chug my way through the rest of this Tic Tac Toe creation, WOOT WOOT!!!  

## Introducing Turn Taking

Now, to implement the game part of Tic tac toe, the "O" player. Before, dealing with the "O" character, we must have a way to tell whether it is player X's turn or Player O's turn. To do this, we can just ask a boolean type question: "Is it player X's turn?" which we can store in a new state *isXTurn*. By default, the game will start with player X, therefore, the default value will be set to *True*.  

To implement the alternating logic of turn taking, the turn changes upon the *clicking* of a **Sqaure**, therefore, we turn back to the *handleClick* function. The purpose of this function is now to decide *which* letter gets place on **Square** *i*. So, using the *boolean* state of whether it is X's turn or not, an *if-else* block is used to update the underlying array of **Sqaures**. After this update is done, **DO NOT** forget to update the boolean value of X's turn accordingly with the *setNextTurn* function.  

This change only deals with creating the *alternating* part of a game, however, a new problem arises... either player can replace the other player's letter!  

This is an easy fix, we simply just check *before placing the alternate letter* on the clicked **Sqaure** *if* there is a letter already placed. In which case, nothing happens, therefore the function *returns* nothing (maybe I can work on displaying a message for this later, just need to get the basics done first).  

## Winner Winner Chicken Dinner!

With alternating behavior being incorporated, a win condition function is to be implemented to determine who wins! Because this is a *normal* implementation of Tic Tac Toe, the win condition is *are there three squares in the same row, column, or diagonal, which are the same letter?* As soon as this condition is found to be true, our *handleClick* function will be updated to *return* a message indicating which player won!  

### winnerCheck

So a new helper function will be made to handle the *win condition*. This new function is *winnerCheck*, which will take in the array representation of the board, and the slot, *i*, which has just been updated with the click from the *handleClick* function.  

Within *winnerCheck*, we want to check if the **Sqaure** in the given slot, *i*, creates a **Board** which satisfies the *win condition* of having the same letters in the same row, column, or diagonal. Through analyzing the *remainder* of the given *i* divided by 3, we can see, *where* in a *row* the new letter has been placed. 
- If *i* % 3 = 0 --> *i* is placed in the left column
- If *i* % 3 = 1 --> *i* is placed in the middle column
- If *i* % 3 = 2 --> *i* is placed in the right column  

Therefore, this value can be utilized as the *columnNumber* constant. Meanwhile, determining the *rowNumber* is as easy as taking the *floor* of dividing *i* by 3. Now,
- if *rowNumber* = 0 --> *i* is in the top row
- if *rowNumber* = 1 --> *i* is in the middle row
- if *rowNumber* = 2 --> *i* is in the bottom row  

Now that we have a way of locating our slot on the **Board** in this new function, we can get into checking the *relevant* row, column, and diagonal (if necessary). Starting with checking the *row*, then checking the *column*, then checking if a *diagonal* is necessary, then returning *null*.  

### Incorporating the win condition

As mentioned previously, this check for the win should be done upon handling a user's click, meaning the *handleClick* function has to be updated to know when this win condition has been met. This would be a perfect time to add another *state* to keep track of: *isGameOver*. This state is set to *false* by default, and is updated within the *handleClick* function, while the *handleClick* function should *only* work when the game is indeed *not* over.  

The next thing to check for, is whether there has been a tie or not, which can simply be done by iterating through the array representation of the **Board** and checking that *all* values are *not* null. In the interest of keeping game logic *separate* from the rendering of the **Board**, we can add this new check within the *winnerCheck* function. So now, the *winnerCheck* function can also return the string "T" for tie.