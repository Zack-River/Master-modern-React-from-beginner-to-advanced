# 👀 Section 02: First Look at React

Why do we even use React? Let's take a look under the hood!

## The Old Way vs The React Way

Imagine you are playing a game of "Simon Says" with your computer.
In the old days (Vanilla JavaScript), you had to tell the computer exactly how to move every single muscle to raise an arm.
"Move the elbow up 10 degrees, then move the shoulder up 5 degrees, then squeeze the hand..."

This is called **Imperative** programming. It's giving exact, step-by-step instructions.

React is different. React is **Declarative**.
Instead of giving step-by-step instructions, you just show React a picture of what you want.
You say: "React, I want the arm to be up here."
And React figures out all the complex muscle movements behind the scenes to make it happen!

You just declare (say) what the UI should look like based on the current data (state), and React makes it happen.

## Pure React (No Magic Spells)

Normally we use JSX (that HTML looking code from Section 1).
But React can actually be written without it using `React.createElement`.

```javascript
// This is the hard way
const myTitle = React.createElement("h1", null, "Hello World!");
```

We don't usually write code this way because it's messy. JSX is a friendly disguise that gets translated into `React.createElement` automatically behind the scenes!

## The Virtual DOM (The Blueprint)

Here is React's biggest secret weapon: The **Virtual DOM**.

Let's go back to our Lego castle.
If you wanted to see if a red roof looked better than a blue roof, taking the whole castle apart to try it would be slow.

Instead, React keeps a **Blueprint** (a drawing) of the castle in its memory. This is the Virtual DOM.
When you change something (like clicking a button to change a color), React draws a new, updated blueprint in its memory first.

Then, it compares the NEW blueprint with the OLD blueprint.
"Ah ha! Only the roof changed color!"

Then, it goes to the actual Lego castle (the Real DOM on the screen) and ONLY swaps out the roof pieces. This makes React incredibly fast! This process is called **Reconciliation** (or "spot the difference").
