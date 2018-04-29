//Author: Dayou Du (2018) 
//Email : dayoudu@nyu.edu

FlowRouter.route('/', {
    name: 'welcome',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "welcome_content"});
    }
});

FlowRouter.route('/overall', {
    name: 'overall',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

FlowRouter.route('/issue', {
    name: 'issue',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "issue_content"});
    }
});

FlowRouter.route('/github_pull_request', {
    name: '/github_pull_request',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

FlowRouter.route('/github_push', {
    name: 'github_push',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

FlowRouter.route('/github_star', {
    name: 'github_star',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

FlowRouter.route('/post', {
    name: 'post',
    action() {
        BlazeLayout.render('main', {sidebar: "sidebar", content: "overall_content"});
    }
});

//routers to different pages
// Router.route('/issue', function () {
//     this.render('Issue');
// });
//
// Router.route('/github_pull_request', function () {
//     this.render('PullRequest');
// });
//
// Router.route('/github_push', function () {
//     this.render('Push');
// });
//
// Router.route('/github_star', function () {
//     this.render('Star');
// });
//
// Router.route('/post', function () {
//     this.render('Post');
// });