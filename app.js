document.addEventListener('DOMContentLoaded', function () {
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
        this.tooltiptext.style.top = rect.top - 40 + 'px';       // set coordinates
        this.tooltiptext.style.left = rect.left + 'px';
        this.tooltiptext.style.height = rect.height + 'px'; // and size
        this.tooltiptext.style.width = rect.width + 'px';
        quotearea.appendChild(this.tooltiptext);
        var text = sel.toString() + '  ' + window.location.href
        var shareButton = document.getElementById('share-button');
        if (shareButton !== null) {
            shareButton.addEventListener('mouseup', function () {
                popitup(twitterUrl + text);
            })
        }
    }

    /**
     * main function, do the logic
     */
    function select() {
        // listen the selection add popup the tooltip for share
        var node = ''
        var tooltipSpan = document.getElementsByClassName('tooltiptext');

        if (document.getSelection) {
            // all browsers, except IE before version 9
            var sel = document.getSelection(),
                range = sel.getRangeAt(0),        // the range at first selection group
                rect = range.getBoundingClientRect(); // and convert this to useful data
            var text = sel.toString();
            if (text.length <= 140 && text.length > 0) {
                console.log(text.length)
                tooltiptext.innerHTML = '<span class="tooltiptext"><a><span class="icon "><i class="fa fa-paint-brush fa-lg" aria-hidden="true"></i><span></a><a><span class="icon "><i class="fa fa-comment fa-lg" aria-hidden="true"></i></span></a><a><span  class="icon "><i class="fa fa-twitter fa-lg" id="share-button"  aria-hidden="true"></i><span></a><div class="arrow-clip"><span class="tooltip-arrow"></span></div></span>';
                setToolTip(tooltiptext, sel);
            } else if (text.length > 140) {
                tooltiptext.innerHTML = '<span class="tooltiptext"><small>It\'s too large to share</small><div class="arrow-clip"><span class="tooltip-arrow"></span></div></span> '
                setToolTip(tooltiptext, sel);
            } else {
                tooltiptext.innerHTML = '';
            }

        }
        else {
            if (document.selection) {   // Internet Explorer before version 9
                var textRange = document.selection.createRange();
                if (sel.toString().length <= 140 && sel.toString().length > 0) {
                    tooltiptext.innerHTML = '<span class="tooltiptext"><a><span class="icon "><i class="fa fa-paint-brush fa-lg" aria-hidden="true"></i><span></a><a><span class="icon "><i class="fa fa-comment fa-lg" aria-hidden="true"></i></span></a><a><span  class="icon "><i class="fa fa-twitter fa-lg" id="share-button"  aria-hidden="true"></i><span></a><div class="arrow-clip"><span class="tooltip-arrow"></span></div></span>';
                    setToolTip(tooltiptext, sel);
                }
            } else if (sel.toString().length > 140) {
                tooltiptext.innerHTML = '<span class="tooltiptext"><small>It\'s too large to share</small><div class="arrow-clip"><span class="tooltip-arrow"></span></div></span> '
                setToolTip(tooltiptext, sel);
            } else {
                tooltiptext.innerHTML = '';
            }
        }
    }

    /**
     * listen and fire the pop on select
     */
    quotearea.addEventListener('click', function (ev) {
        select();
    })




});




