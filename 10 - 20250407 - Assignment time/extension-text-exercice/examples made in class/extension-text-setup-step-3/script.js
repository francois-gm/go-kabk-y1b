


// 4) Last example, we filter the text for words that we replace with other words

const wordMap = {
    "President": "Village Idiot",
    "president": "village idiot",
    "Prime Minister": "Chief Fool",
    "Chancellor": "Head Clown",
    "Minister": "Court Jester"
}

const regex = new RegExp(`\\b(${Object.keys(wordMap).join("|")})\\b`, "g");

function replaceTextInNode(textNode){
    textNode.nodeValue = textNode.nodeValue.replace(regex, match => wordMap[match]);
}

function scanAndReplace(){
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    // loop through all nodes
    while((textNode = walker.nextNode())) {
        replaceTextInNode(textNode);
    }
}

scanAndReplace();