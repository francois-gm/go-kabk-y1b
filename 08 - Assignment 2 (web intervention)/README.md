# A web intervention (assignment 2)

## In short

- Make a **browser extension** (for Chrome) with the help of HTML, CSS and Javascript.
- Your extension can be designed for one specific website, or *all* websites.
- Think about what your extension will do: **enhance/complement** a website, add **fun and personality** to a website, **add/change/remove** contents, add new **functionalities**?...
- But also, conceptually, what can your extension bring to website(s)? Do you make a statement, either hands-on, activist, conceptually, artististically? What can you add, remove, or change to a website but also **why you would want to do that** and **what does this mean**?
- We will have a look at basic potentialities with JavaScript and CSS (add/remove elements from page, and change their styling).
- Because browser extensions have to be installed, you will also have to think about how to present/showcase it to your peers online. Think about your extension's **name**, its product **presentation page** (you do a separate HTML page to promote it), and **download/installation instructions**.

Schedule:

- **24 March**: introduction of the assignment
- **31 March**: small group follow-up on the assignment (2h) (*you have an idea, and can discuss it with sketches*) 
- **7 April**: individual follow-up on the assignment (4h) (*you have a working document and started sketching/coding in your document*)
- **14 April**: small group follow-up on the assignment (2h) + (*your project does what is is supposed to do, you are fine-tuning it and gathering user feedback*)
- **12 May**: individual/small group follow-up on the assignment (*you have a presentation page as well for your extension*)
- **19 May**: delivery and presentation of the assignment in class
  
## Presentation

In the past weeks, we have touched upon HTML and CSS, learning how to place basic HTML content elements and style them. For this assignment, we will combine what we’ve learned with a new programming language, JavaScript, and will create an intervention on existing web pages.

### What is a browser (web) extension?

A browser extension is a piece of code that is read by your browser on **top** of a current webpage. Extensions can add functionality, manipulate, style differently, or obfuscate elements of an already existing webpage (or all webpages).

One of the most famous examples is the “Ad blocker”. An “ad blocker” is a piece of script and CSS that checks for various elements in the page that appear as advertisement (via the use of specific ids, classes, or functions on them) and makes them “dissapear” either via scripts and/or CSS. A very primitive example of this would be a JavaScript function that adds the CSS “display:none;” property to all html elements that have an attribute with the word “ad” in it.

### Types of extensions

> - **Enhance or complement a website**: Use an add-on to deliver additional in-browser features or information from your website. Allow users to collect details from pages they visit to enhance the service you offer.
> - **Let users show their personality**: Browser extensions can manipulate the content of web pages; for example, letting users add their favorite logo or picture as a background to every page they visit. Extensions may also enable users to update the look of the Firefox UI, the same way standalone theme add-ons do.
> - **Add or remove content from web pages**: You might want to help users block intrusive ads from web pages, provide access to a travel guide whenever a country or city is mentioned in a web page, or reformat page content to offer a consistent reading experience. With the ability to access and update both a page's HTML and CSS, extensions can help users see the web the way they want to.
> - **Add tools and new browsing features**: Add new features to a taskboard, or generate QR code images from URLs, hyperlinks, or page text. With flexible UI options and the power of the WebExtensions APIs you can easily add new features to a browser. And, you can enhance almost any website's features or functionality, it doesn't have to be your website.

Read more at [What are extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/What_are_WebExtensions) on Mozilla Developper Network.

### Examples

- [Ethicly](https://www.ethicly.info/): *provides boycott recommendation for products from unethical companies*
- [Terms of service, didn’t read](https://tosdr.org/en): *rephrases terms and conditions on websites in an understandable language*
- [Leaf](https://chromewebstore.google.com/detail/leaf-browser/kppcmdpolcfihnkfbngahdofkdnfbkan/related): *shows a leaf on webpages*
- [Bad connection simulator](https://chromewebstore.google.com/detail/bad-connection-simulator/gflankmgolakfdeiponkgmbhbhpdmjlg): *simulate bad internet during in-browser video calls*
- [Ponyhoff](https://jointheherd.little.my): *transforms webpages into pony-pages*
- [Catblock](https://getcatblock.com/): *Adblock but switch ads for cats)*
- [Abstract browsing, Rafaël Rozendaal](https://www.abstractbrowsing.net/): *Styles the whole website with saturated colors and no content*
- [Safebook](https://bengrosser.com/projects/safebook/): *Facebook without the content*
- [Reload the love](https://bengrosser.com/projects/reload-the-love/): *Artificially inflate your facebook likes and messages*
- [Bylines](https://www.are.na/kira-simon-kennedy/bylines): *paywall popup when 10 articles written by men in a row are read*
- [Make Trump tweets 8 again](https://addons.mozilla.org/en-US/firefox/addon/make-trump-tweets-eight-again/?src=search): *changes the typeface of Donald Trump's tweets for a child-like handwriting*
- [Oops all Elons!](https://chromewebstore.google.com/detail/oops-all-elons/eapgijmimbcjmkjcnmngngdjhaimjhdg?hl=en&authuser=0): *changes all facebook user's images and names for Elon Musk*
- [Choice language](https://chromewebstore.google.com/detail/choice-language/bfpnbfcglkogjgceechnidfcmpchobmd): *replaces the term "pro-life" by "anti-choice" on any websites*
- [The Revolving Internet](https://therevolvinginternet.com/): *makes the website rotates on itself (uses iframes)*

### Things to keep in mind

- Be aware of your skills
- Be playful
- A "concept" is the first step (attention to details can come later)
- The "functionality" direction can prove more challenging that initially thought
- It does not work, it's too complicated? Then don't stick to it: find alternative ways of expressing your ideas.
- Test, test, test
- Involve your classmates (!)

## Getting started

We'll start by [building a starterkit](https://github.com/francois-gm/go-kabk-y1b/tree/main/09%20-%2020250331%20-%20Assignment%20time).


