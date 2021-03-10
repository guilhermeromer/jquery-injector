
$('#injectJquery').click(function (e) { 
    e.preventDefault();
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        chrome.tabs.executeScript(null, {file: 'jquery.js'}, function(result){
            chrome.tabs.executeScript(null, 
                {
                    code:   ` 
                                    javascript:(function() {
                                        function l(u, i) {
                                            var d = document;
                                            if (!d.getElementById(i)) {
                                                var s = d.createElement('script');
                                                s.src = u;
                                                s.id = i;
                                                d.body.appendChild(s);
                                            }
                                        }
                                        l('//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', 'jquery');
                                    })();
                                    alert('jQuery injected.');

                            `
                }
            );
        });
    });
});
