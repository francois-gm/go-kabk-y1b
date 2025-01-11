# Class 2, 2024/09/16

## Intro (30min)

- *A website you like* (Lucile, Sam, François)
- Round table, each present their *XML snapshots* exercice

## Tutorial: Visual Studio (15min)

Install VS code + set up a document (and do’s and don’t)

- Download and install: https://code.visualstudio.com <br>
- Set `word wrap` option on by going to `view` -> `word wrap`.

Shortcut for HTML template:

- When creating a new document, either select `HTML`, or if creating a new 'text file', then click on `choose language` and select (by typing) `html`.
- `Shift` + `1` and `Enter` to auto-populate HTML Doctype in HTML.

## Exercice 1, *revisions* (60min)

Each student gets the previous *XML snapshot* of another student.

### a) Retranscribe the code in an html file (15min)

First, write the code in VS studio and save the file as `y1a-01-firstname.html` (see example file). Think about respecting indentation.

Then save a **second version** with the name `y1a-01-firstname-revisedby-yourfirstname.html`.

*So, if I would revise Lucile's code, it would be:*

- `y1a-01-lucile.html`.
- `y1a-01-lucile-revisedby-francois.html`.
  
### b) Do a revision of the code (30min)
  
You will review their code, and perform revisions on their code:

#### Step 1:

- Verify that the syntax of HTML/XML is respected:
  - Tags **opened** and **closed**, `<tag></tag>` is formatted, with closing tag having a `/` (slash).
  - Formatting of attributes: `attribute="value"` with `="`, `value` and `"`.
- Make amendments to naming of tags if it can be made in a way that is clearer?
- Restructure code if it makes sense to you (does the grouping makes sense)?
- *What piece of information might be relevant but is not present?* **Add 2-3 elements or attributes** based on the pictures you think are worth being present.

#### Step 2:

- Highlight your changes by wrapping them in `<span>` tags and adding a style="color:red;"` inline CSS attribute (replace the red by the color of your choice, but keep that color consistent).
- Add some general CSS 'inline' styling properties to both documents.

Example of CSS properties to play with:
- Color: [CSS color property](https://www.w3schools.com/cssref/pr_text_color.php), [CSS background-color property](https://www.w3schools.com/cssref/pr_background-color.php) and [possible CSS color values](https://www.w3schools.com/cssref/css_colors.php)
- Text decoration, [on W3School](https://www.w3schools.com/cssref/pr_text_text-decoration.php), and on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration)
- Text shadow, [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)

#### Round table presentation of the revisions (15min)

- Add these to the Teams folder

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
