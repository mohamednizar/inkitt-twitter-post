/**
 * helper function to pop window
 * @param {*} url 
 */
function popitup(url) {
    newwindow = window.open(url, 'name', 'height=400,width=600,top=200,left=400');
    if (window.focus) { newwindow.focus() }
    return false;
}

var quotearea = document.getElementById('artical')
var output = document.getElementById('output')
var tooltiptext = document.createElement('span');
var twitterUrl = 'https://twitter.com/intent/tweet?text=';

// listen the selection add popup the tooltip for share
quotearea.addEventListener('mouseup', function () {
    var node = ''
    var tooltipSpan = document.getElementsByClassName('tooltiptext');

    if (document.getSelection) {    // all browsers, except IE before version 9
        var sel = document.getSelection(),
            range = sel.getRangeAt(0),        // the range at first selection group
            rect = range.getBoundingClientRect(); // and convert this to useful data
        if (140 >= sel.toString().length > 0) {
            tooltiptext.innerHTML = '<span class="tooltiptext"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i><a class="twitter-share-button"  > <i class="fa fa-twitter fa-lg" id="share-button"  aria-hidden="true"></i></a></span>';
            tooltiptext.style.position = 'fixed';              // fixed positioning = easy mode
            tooltiptext.style.top = rect.top - 50 + 'px';       // set coordinates
            tooltiptext.style.left = rect.left + 'px';
            tooltiptext.style.height = rect.height + 'px'; // and size
            tooltiptext.style.width = rect.width + 'px';
            quotearea.appendChild(tooltiptext);
            var text = sel.toString() + '  ' + window.location.href
            var shareButton = document.getElementById('share-button');
            shareButton.addEventListener('mouseup', function () {
                tooltiptext.style.display = 'none';
                popitup(twitterUrl + text);
            })
        } else {
            tooltiptext.innerHTML = '<span class="tooltiptext">Selected text is grater than sharble content on tweet</span> '
            tooltiptext.style.position = 'fixed';              // fixed positioning = easy mode
            tooltiptext.style.top = rect.top - 50 + 'px';       // set coordinates
            tooltiptext.style.left = rect.left + 'px';
            tooltiptext.style.height = rect.height + 'px'; // and size
            tooltiptext.style.width = rect.width + 'px';
            quotearea.appendChild(tooltiptext);
        }

    }
    else {
        if (document.selection) {   // Internet Explorer before version 9
            var textRange = document.selection.createRange();
            tooltiptext.innerHTML = '<span class="tooltiptext"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i><a class="twitter-share-button" > <i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a></span>';
            tooltiptext.style.position = 'fixed';              // fixed positioning = easy mode
            tooltiptext.style.top = rect.top - 50 + 'px';       // set coordinates
            tooltiptext.style.left = rect.left + 'px';
            tooltiptext.style.height = rect.height + 'px'; // and size
            tooltiptext.style.width = rect.width + 'px';
            quotearea.appendChild(tooltiptext);
            var shareButton = document.getElementById('share-button');
            shareButton.addEventListener('mouseup', function () {
                tooltiptext.style.display = 'none';
                popitup(twitterUrl + textRange.text);
            })
        } else {
            tooltiptext.innerHTML = '<span class="tooltiptext">Selected text is grater than sharble content on tweet</span> '
            tooltiptext.style.position = 'fixed';              // fixed positioning = easy mode
            tooltiptext.style.top = rect.top - 50 + 'px';       // set coordinates
            tooltiptext.style.left = rect.left + 'px';
            tooltiptext.style.height = rect.height + 'px'; // and size
            tooltiptext.style.width = rect.width + 'px';
            quotearea.appendChild(tooltiptext);
        }
    }
}, false)

// reset 
quotearea.addEventListener('mouseleave', function () {
    tooltiptext.innerHTML = '';
});



