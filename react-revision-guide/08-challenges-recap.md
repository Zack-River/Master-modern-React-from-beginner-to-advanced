# 🏆 Section 08: The Challenges Recap

You did a LOT of practice! Here is what you learned from each of the 9 challenges in the course so far, explained simply.

## Challenge 1: Developer Card
**What we built:** A simple card showing your name, picture, and the skills you have.
**What we learned:** 
We practiced the very basics of components and props. We learned how to pass a list of skills as props into a `SkillList` component, and then map over them to create individual `Skill` components. It was our first real Lego set!

## Challenge 2: Date Counter v1
**What we built:** A counter that adds or subtracts days from the current date.
**What we learned:**
We practiced `useState`. We had a state for the `step` (how many days to jump) and a state for the `count` (total days from today). We learned how to use the callback function inside `setCount` (`setCount(c => c + step)`) to safely update state based on the current state.

## Challenge 3: Flash Cards
**What we built:** A grid of flashcards. Clicking one flips it over to show the answer.
**What we learned:**
We learned about **Conditional Rendering** and keeping track of an "active" ID. We stored the ID of the clicked card in state (`selectedId`). Then, when rendering the cards, we checked `if (card.id === selectedId)`. If it was true, we showed the answer; if false, we showed the question!

## Challenge 4: Date Counter v2
**What we built:** We upgraded the Date Counter to use a sliding bar (range input) and a text box.
**What we learned:**
We learned about **Controlled Elements**. We connected the `<input type="range">` and the `<input type="text">` to our `useState` variables. We also added a "Reset" button that simply sets all states back to their starting values.

## Challenge 5: Accordion v1
**What we built:** A list of items where clicking on one opens it to show more text (like a FAQ section).
**What we learned:**
We practiced passing props deep down. The main `Accordion` component mapped through the data and rendered `AccordionItem` components. Each item needed its own state `isOpen` to know if it should show the text or not.

## Challenge 6: Tip Calculator
**What we built:** A calculator where you input the bill, rate the service, your friend rates the service, and it calculates the total tip.
**What we learned:**
We learned about **Derived State**. We didn't create a state for the "total tip". Instead, we just calculated it using the bill state and the percentage states right inside the render phase. We also practiced **Lifting State Up**: the individual rating dropdowns needed to share their data with the final calculation area, so we lifted their state up to the parent `TipCalculator` component.

## Challenge 7: Eat N Split
**What we built:** An app to keep track of who owes who money when you go out with friends.
**What we learned:**
This was a complex one! We learned how to manage a list of friends in state, how to add a new friend to that array (using the spread operator `[...friends, newFriend]`), and how to select a specific friend. We also practiced splitting the bill and updating the balance of the selected friend without mutating the original array (using `map`).

## Challenge 8: Mini Trello
**What we built:** A simple task board with columns (like "To Do", "Doing", "Done").
**What we learned:**
We practiced moving data between components. We had to manage a list of tasks in state and figure out how to update a specific task's "status" property when it moved between columns. We used `map` to find the task and change it, while keeping everything else the same.

## Challenge 9: Text Expander
**What we built:** A component that takes a long piece of text and shortens it. It adds a "Show more" button to expand it, and "Show less" to shrink it again.
**What we learned:**
We learned how to make a highly reusable component. We passed a LOT of props to control how it looks: `collapsedNumWords`, `expandButtonText`, `buttonColor`, etc. We used the `children` prop to pass the raw text in between the component tags (`<TextExpander> This is the long text </TextExpander>`). And we used the `.split()` and `.slice()` array methods to actually cut the text down to size!
