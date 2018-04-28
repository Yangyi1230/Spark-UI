//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu

FlowRouter.route('/', {
    name: 'Welcome',
    action() {
        BlazeLayout.render('Welcome');
    }
});

FlowRouter.route('/overall', {
    name: 'Overall',
    action() {
        BlazeLayout.render('Overall');
    }
});

//routers to different pages
Router.route('/issue', function () {
    this.render('Issue');
});

Router.route('/github_pull_request', function () {
    this.render('PullRequest');
});

Router.route('/github_push', function () {
    this.render('Push');
});

Router.route('/github_star', function () {
    this.render('Star');
});

Router.route('/post', function () {
    this.render('Post');
});