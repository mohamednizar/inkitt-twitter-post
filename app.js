// twitter post sharing app
var quotearea = document.getElementById('artical')
var output = document.getElementById('output')
var tooltiptext = document.createElement('span');
var twitterUrl = 'https://twitter.com/intent/tweet?text=';

/**
 * helper function to pop window
 * @param {*} url 
 */
function popitup(url) {
    newwindow = window.open(url, 'name', 'height=400,width=600,top=200,left=400');
    if (window.focus) { newwindow.focus() }
    return false;
}
/**
 * helper funtionto set tooltip
 * @param {*} tooltiptext 
 * @param {*} sel 
 */
function setToolTip(tooltiptext, sel) {
    var range = sel.getRangeAt(0),        // the range at first selection group
        rect = range.getBoundingClientRect();
    this.tooltiptext = tooltiptext;
    this.tooltiptext.style.position = 'fixed';              // fixed positioning = easy mode
    this.tooltiptext.style.top = rect.top - 50 + 'px';       // set coordinates
    this.tooltiptext.style.left = rect.left + 'px';
    this.tooltiptext.style.height = rect.height + 'px'; // and size
    this.tooltiptext.style.width = rect.width + 'px';
    quotearea.appendChild(tooltiptext);
    var text = sel.toString() + '  ' + window.location.href
    var shareButton = document.getElementById('share-button');
    shareButton.addEventListener('mouseup', function () {
        tooltiptext.style.display = 'none';
        popitup(twitterUrl + text);
    })
}


// listen the selection add popup the tooltip for share
quotearea.addEventListener('mouseup', function () {
    var node = ''
    var tooltipSpan = document.getElementsByClassName('tooltiptext');

    if (document.getSelection) {
        // all browsers, except IE before version 9
        var sel = document.getSelection(),
            range = sel.getRangeAt(0),        // the range at first selection group
            rect = range.getBoundingClientRect(); // and convert this to useful data
        var text = sel.toString();
        if (140 >= text.length > 0) {
            tooltiptext.innerHTML = '<span class="tooltiptext"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i><a class="twitter-share-button"  > <i class="fa fa-twitter fa-lg" id="share-button"  aria-hidden="true"></i></a></span>';
            setToolTip(tooltiptext, sel);
        } else {
            tooltiptext.innerHTML = '<span class="tooltiptext">Selected text is grater than sharble content on tweet</span> '
            setToolTip(tooltiptext, sel);
        }

    }
    else {
        if (document.selection) {   // Internet Explorer before version 9
            var textRange = document.selection.createRange();
            if (140 >= sel.toString().length > 0) {
                tooltiptext.innerHTML = '<span class="tooltiptext"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i><a class="twitter-share-button" > <i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></span>';
                setToolTip(tooltiptext, sel);
            }
        } else {
            tooltiptext.innerHTML = '<span class="tooltiptext">Selected text is grater than sharble content on tweet</span> '
            setToolTip(tooltiptext, sel);
        }
    }
}, false)

// reset 
quotearea.addEventListener('mouseleave', function () {
    tooltiptext.innerHTML = '';
});





