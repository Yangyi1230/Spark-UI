//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu

Router.route('/', function () {
    // render the Home template with a custom data context
    this.render('Welcome');
});

Router.route('/overall', function () {
    // render the Home template with a custom data context
    this.render('Overall');
});

//routers to different pages
Router.route('/active_repositories', function () {
    this.render('ActiveRepositories');
});

//dont want to waste time, just direct to home page for now
Router.route('/pushes_per_repository', function () {
    this.render('Overall');
});
Router.route('/questions_related', function () {
    this.render('Overall');
});
Router.route('/more_list_items', function () {
    this.render('Overall');
});