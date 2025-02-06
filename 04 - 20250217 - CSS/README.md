# Class 4, 2025/02/17

## Intro (20min)

- A website you like (David, Klara, François)

## Recap (15min)
<!--
- Why would one wants to add some `CSS` in project / what can CSS bring more to a `HTML` project?
- Name three ways to add CSS styles in an HTML document. Can you tell us the plus and minuses of each method?
- What is the "cascade"?
- *I want to write a `CSS` selector to target an `HTML` element so I can style it...*
  - Name a **general** way of selecting that element
  - Name a **more specific** way of selecting that element (using **one** HTML `attribute`)
  - Name a **very specific** way to selecting that element (using **one** HTML `attribute`)
- **True** or **false**...
  - When writing a `CSS` selector, you can combine different `class` under one selector.
  - When writing a `CSS` selector, you can combine diffrent `id` under one selector.
  - You can give multiple `id` values to one `HTML` element.
  - Each HTML element needs to have its individual selector in order to be *styled* by CSS.
  - **General** `CSS` selector are **more important** than **specific ones** (and their styling overwrite specific ones).
- **Name three** examples of CSS properties and **what** they visually do.

Bonus:

- What was the most **common** coding "issue" experienced during our last class (guess: it's not really a ~~coding~~ mistake)?
-->
## Tutorial: extending on CSS selectors (15min)

Last class, we saw several ways of writing *CSS selectors* to style our HTML elements.

In short: The more the combination is specific, the more it has 'cascade points' and the more it has precedence over other CSS rules.

But how does the 'CSS algorithm' actually works?

<img src="css-specificity.svg" width="600px">

- Inline CSS = `1`-`0`-`0`-`0`
- Id = `0`-`1`-`0`-`0` (added for each in a matching selector)
- Class, pseudo-class, attribute = `0`-`0`-`1`-`0` (added for each in a matching selector)
- Element, pseudo-element, `0`-`0`-`0`-`1` (added for each in a matching selector)

### Read more

- [All CSS selectors on W3school](https://www.w3schools.com/cssref/css_selectors.php)
- [CSS selectors on web.dev](https://web.dev/learn/css/selectors?hl=en)
- [More about how specificity gets calculated](https://webdesign.tutsplus.com/what-is-css-specificity--cms-34141t)
- [Visual examples on specificity](https://www.w3schools.com/cssref/trysel.php?)
- Practice your selectors by [playing the CSS Diner](https://flukeout.github.io) game!
- ... or play [this other game](https://toolness.github.io/css-selector-game/)

## Tutorial: layouting basics with CSS (1h)

We start with the blank template that we made in the previous class (download on this page). You can [download it there](https://github.com/francois-gm/go-kabk-y1b/blob/main/06%20-%2020250217%20-%20CSS/my-project-template.zip).

First, let's do a [CSS reset](https://meyerweb.com/eric/tools/css/reset/) or a [CSS normalize](https://nicolasgallagher.com/about-normalize-css/)

Then:

- Let's make a basic page layout with a *header*, a *sidebar*, a *main content section*, and a *footer*.
- We will use: relative positioning, absolute/fixed/sticky positioning.
- We will add some visual differentiation across elements.

We start with the blank template that we made in the previous class (download on this page). You can [download it there](https://github.com/francois-gm/go-kabk-y1b/blob/main/04%20-%2020250217%20-%20CSS/my-project-template.zip).

(click on the three dots button `...` on the top right of your screen and then `download`)
  
- Layout properties: `display`, `position`, `float`, `clear`.
- Size: `width`, `height`.
- More styling properties (what would you like to see?)

## Time for assignment (individual and/or small groups) (2h30) (TBC)
<!--
| Time slot | Group |
| -- | -------------- |
| 15h45 | -, -, -, - |
| 16h05 | -, -, -, - |
| 16h25 | -, -, -, - |
| 16h45 | -, -, -, - |
| 17h05 | -, -, -, - |
| 17h25 | -, -, -, - |
-->
