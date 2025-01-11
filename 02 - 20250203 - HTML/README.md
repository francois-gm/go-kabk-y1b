# Class 2, 2025/02/03

## Intro (30min)

- *A website you like* (Jerome, Bengi, François)
- Round table, each present their *XML snapshots* exercice

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
