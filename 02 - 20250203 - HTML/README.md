# Class 2, 2025/02/03

## Intro (20min)

- *A website you like* (Jerome, Bengi, François)

## Presentation of exercise 1 (20min)

Everybody present their *XML snapshots* exercice (picture + scan of analogue code).

## Exercise 2, mapping elements (20min)

Based on the analogue code previously written. You are assigned someone else's previous *XML snapshot*.

- Draw a the structure of all elements as boxes on a piece of paper.
- Annotate each box by their tag name.
- Take a picture and/or scan this.
- Add it into the Teams folder corresponding to the right code.

## Tutorial: Visual Studio (15min)

Install VS code + set up a document (and do’s and don’t)

- Download and install: https://code.visualstudio.com <br>
- Set `word wrap` option on by going to `view` -> `word wrap`.

Shortcut for HTML template:

- When creating a new document, either select `HTML`, or if creating a new 'text file', then click on `choose language` and select (by typing) `html`.
- `Shift` + `1` and `Enter` to auto-populate HTML Doctype in HTML.

## Tutorial: HTML (1h15)

- HTML (1h)
- Overview of possible HTML tags, [W3school, by category](https://www.w3schools.com/TAGS/ref_byfunc.asp), [W3School, semantic HTML](https://www.w3schools.com/html/html5_semantic_elements.asp)
- - `<div>` and `<span>` vs. `<section>`, `<article>`, `<nav>`...
  - Paragraphs (`<p>`), headings (`<h1>`-`<h6>`), inline formatting (`<em>`, `<strong>`)
  - Hyperlinks (`<a>`), and its attributes
  - `<img>`, `<iframe>`, `<video>`, `<audio>`.
  - `<figure>`, `<figcaption>`
  - `<ul>`, `<ol>`, `<li>`
  - `<summary>` and `<details>`
- How to use developer tool (15min)
  - Google Chrome -> [Shift]+[Cmd]+[C], or `View -> Developer Tools` | Firefox -> [Alt]+[Cmd]+[I], or `Tools -> Browser tools -> Web development tools`.

### Small developer tool exercice

- Do 'command + shift + C' (the shortcut for accessing your browser's *developer tools*)
- Create a new stylesheet rule from your browser inspector (click on the '+' button in Chrome):

```
// '*' means 'every elements'

* {
 outline: 1px solid #F00;
}
```

Look at the page, resize it, and look at how blocks behave. Can you see each HTML tags?

## Tutorial: A clean working document (15min)

- Your project has its project own folder.
- Inside your project folder, you have an html file named `index.html`.
- Inside your project folder, you have a subfolder called `assets`, and in that folder, you have a subfolder for your `CSS`, and one for your `Javascript`.
- Inside your `css` subfolder you have your `style.css` file.
- Inside your `js` subfolder you have your `script.js` file.

```
your-project-folder

   ├── index.html
   ├── content
   └── assets
       ├── css
       │   └── style.css
       └── js
           └── script.js
```

You link your style.css and script.js files in your html document.

For `style.css`:

- For the `style.css` document, this should be inside the <head> of your html document.
- `<link rel="stylesheet" href="assets/css/style.css">`

For `script.js`:

- For the `script.js` document, this should be at the end of your html document.
- `<script src="assets/js/script.js"></script>`
