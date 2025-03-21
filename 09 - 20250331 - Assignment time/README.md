# Class 9, 2025/03/31

## Tutorial: web extension starter kit (2h)

1) Create a folder named `my-extension-project`.
2) Create your `manifest.json` file inside your project folder.

Add this in your file:

```
{
    "manifest_version": 3,
    "name": "My extension project",
    "description": "My extension description",
    "version": "1.0",
    "icons": {
      "16": "images/icon/icon.png",
      "32": "images/icon/icon.png",
      "48": "images/icon/icon.png",
      "128": "images/icon/icon.png"
    },
    "action": {
        "default_icon": {
            "16": "images/icon/icon.png",
            "32": "images/icon/icon.png",
            "48": "images/icon/icon.png",
            "128": "images/icon/icon.png"
        }
    },
    "content_scripts": [
        {   
            "matches": [
                "<all_urls>"
            ],
            "js": ["script.js"],
            "css" : ["style.css"]
        }
    ]
}
```

The `manifest.json` is an essential file for your project. A bit like the `head` of your HTML document, it provides metadata regarding your project.

In this example, we linked a `script.js` and `style.css` file, these apply to **all** URLs visited by us. By changing the value of `matches` or setting an `exclude_matches` name/value, we can choose which URLs apply our scripts and styles. We can also offer different stylesheets based on different URLs. See the full documentation on [manifest.json on the MDN website](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Examples with matches:

```
            ...
            "matches": [
                "https://www.theguardian.com/*",
                "https://www.hetparool.com/*"
            ],
            "exclude_matches": [
                "https://www.theguardian.com/help/terms-of-service"
            ],
            ...
```

...applies to the two websites mentionned in *matches* (the `*` is called a *wildcard*, and it means that all URLs after the slash will work as well), but excludes a specific terms-of-service subpage.

If you are using files in your project (webfonts, images), they need to be preconnected within your manifest.json file by using the `web_accessible_resources` key.

```
    ...
    "web_accessible_resources": [
        "images/my-image.png",
        "images/my-image-2.png",
        "fonts/my-font.woff2",
    ]
    ...
```

3) Create a new file named `scripts.js`, located in the root of your `my-extension-project` folder.
4) Create a new file named `style.css`, located in the root of your `my-extension-project` folder.
5) Create a `images` folder in the root of your `my-extension-project` folder. Create an `icon` folder inside this new `images` folder. Inside that `icon` folder, drop a file called `icon.png`.

## Extension structure, a primer

(anatomy of an extension)

## Installing and debugging your web extension

https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/

https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab?hl=en

## Extensions, further ressources:

https://developer.chrome.com/docs/extensions/get-started/tutorial/scripts-activetab?hl=en

https://developer.chrome.com/docs/extensions/get-started?hl=en

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Examples

## *Web intervention* assignment time, small group talks, sign-up sheet

| Time slot (25min per group) | Student |
| -- | -------------- |
| 15h25 | –, –, –, –, – |
| 15h50 | –, –, –, –, – |
| 16h15 | –, –, –, –, – |
| 16h40 | –, –, –, –, – |
| 17h05 | –, –, –, – |

