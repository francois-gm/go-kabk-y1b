# Class 4, 2024/09/30

## Intro (15min)

- A website you like (Nell, Khulan, François)

## Recap (15min)

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
  
## Exercise 1, HTML/CSS selector based on specificity (30min)

You are assigned with a *specificity* value.

1. Define a CSS selector that matches with the assigned value.

| Specificity | Name |
| --------  | --------------------- |
| `0`-`0`-`0`-`1` | Lucile, Matilde |
| `0`-`0`-`0`-`3` | Sam, Jeungin |
| `0`-`0`-`1`-`1` | Nell, Timmy |
| `0`-`0`-`1`-`2` | Khulan, Fedja |
| `0`-`0`-`2`-`1` | Duru, Kaja |
| `0`-`0`-`2`-`3` | Yoonjin, Max |
| `0`-`0`-`4`-`2` | Yalizah, Alexandr |
| `0`-`1`-`0`-`1` | Femke, Olya |
| `0`-`1`-`2`-`3` | Maria, Isaac |
| `0`-`2`-`1`-`0` | Mani, Amy |
| `0`-`2`-`3`-`2` | Myrto, Andrei |

2. Exchange your CSS selector with someone. Now, write the HTML markup that corresponds to the selector you received.
3. To make sure that the selector targets the HTML element you wrote, give that selector some CSS properties/values (the `color` or `background-color` properties as examples).

## Class time to work on the *Ode to CSS* assignment (1h30)

Make **small groups** based on your CSS property, and present your `property` to the other members of the group. 

- How about giving the other's property a try?
- Would some of these help you in your own project?

Afterwards, sketch some ideas about how you can 'conceptually' use your property and display all its variations in a playful way.

Questions to think about related to your property:

- How you declare your property?
- What are the possible options of that property (color, accepted units, other options)?
- How does it look when applied to HTML elements?
- If applicable, to which HTML elements does the property works on?
- How can you leverage the property and make a page that displays the various possibilites of it?

I will join the conversation at the following times:

| Time slot | Group |
| -- | -------------- |
| 15h40 | Nell, Jeungin, Timmy, Sam, Mathilde |
| 16h10 | Khulan, Lucile, Andrei, Max, Yalizah, Alexandr |
| 16h40 | Yoonjin, Fedja, Duru, Myrto, Kaja, Femke |
| 17h10 | Maria, Olya, Issac, Mani, Amy |

[See dedicated page](https://github.com/francois-gm/go-kabk-y1a/tree/main/03%20-%20Assignment%201%20(ode%20to%20CSS))
