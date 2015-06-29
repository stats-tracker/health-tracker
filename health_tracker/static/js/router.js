// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();


// function that appends our html to the .content-container class
function show (content){
	$('.content-container').html(content);
}

// grab our content from the fake scripts and hold in variables
//var homeContent = $('#activities').html();
//var pageOneContent = $('#').html();
//var pageTwoContent = $('#pageTwo').html();
//var pageThreeContent = $('#pageThree').html();

// the default route, which runs when the url is blank
router.route('', function () {

    $.ajax({
      url: 'activities/',
      method: 'GET'
      // title
    })
    .then(getData)
    .then(renderData);



   function getData(data) {
         // grab data from each ajax call here
         // probably just the title
         // and the link so we can reference the link in the view/render function?

         id = TBD; // grab id via ajax call
         title = TBD; // grab title via ajax call

    } // close getData


   function renderData(data){

        var mainView = '<a href="activities/"'+id+'/ />'+title+'"</a>"';
        $('.main-content').append(mainView); // go to main content div and append each item to the DOM

        } // close renderData

});

// all other routes
router.route( '', 'activities', function () {
  show(homeContent); // pass content to show function
});

router.route('activites/id', function () {
  show(pageOneContent); // pass content to show function
});

router.route('activities/id/edit', function () {
  show(pageTwoContent); // pass content to show function
});

router.route('page3', function () {
  show(pageThreeContent); // pass content to show function
});

// Kick off our initial route
Backbone.history.loadUrl();
