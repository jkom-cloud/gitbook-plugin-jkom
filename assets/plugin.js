require(["gitbook", "jQuery"], function(gitbook, $) {
    gitbook.events.bind('start', function (e, config) {
        var conf = config['jkom'];
        var label = conf.editLabel;
        var base = conf.editBase;
        var branch = conf.editBranch;
        var teamName = conf.teamName;

        console.log("conf", conf);
        // Add slash at the end if not present
        if (base.slice(-1) != "/") {
            base = base + "/";
        }

        gitbook.toolbar.createButton({
            icon: 'fa fa-edit',
            text: label,
            onClick: function() {
                var filepath = gitbook.state.filepath;
                window.open(base + 'edit/' + branch + '/' + filepath);
            }
        });

        // override menu footer
        $('.gitbook-link').text('By JKOM ' + teamName + ' Team').attr('href', 'https://github.com/njjkom').attr('target', "_blank");
    });

});