# Class 9, 2025/03/31

## Tutorial: web extension starter kit (2h)

1) Create a folder named `my-extension-project`
2) Create a new file inside and name it `manifest.json`

Add this in your file:

```
{
    "manifest_version": 3,
    "name": "My extension project",
    "description": "My extension description",
    "version": "1.0",
    "icons": {
      "16": "images/icon/icon-16.png",
      "32": "images/icon/icon-32.png",
      "48": "images/icon/icon-48.png",
      "128": "images/icon/icon-128.png"
    }
}
```

And then add this after the closing curly bracket of `icons` (don't forget to add a comma).

```
    "background": {
      "service_worker": "background.js"
    }
```

3) Then create a new file named `background.js`

And add this in your file:

`

`


https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab?hl=en

## Extensions, ressources:

https://developer.chrome.com/docs/extensions/get-started?hl=en

## *Web intervention* assignment time, small group talks, sign-up sheet

| Time slot (25min per group) | Student |
| -- | -------------- |
| 15h25 | –, –, –, –, – |
| 15h50 | –, –, –, –, – |
| 16h15 | –, –, –, –, – |
| 16h40 | –, –, –, –, – |
| 17h05 | –, –, –, – |

