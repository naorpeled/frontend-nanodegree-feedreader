/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* A test that makes sure the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have defined URLs', function() {
			let allContainURL = true;
            for(let feed of allFeeds){
				if(allContainURL){
					if(typeof feed.url === undefined){
						allContainURL = false;
					}
				}
			}
			expect(allContainURL).toBeTruthy();
        });
        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
		it('have defined names', function() {
			let allContainNames = true;
            for(let feed of allFeeds){
				if(allContainNames){
					if(typeof feed.name === undefined){
						allContainNames = false;
					}
				}
			}
			expect(allContainNames).toBeTruthy();
        });
    });
    /* This is our second test suite. This suite is all about the Menu
    * element. */
    describe('The menu', function() {
		 /* A test that ensures the menu element is
         * hidden by default. 
         */
		it('hidden by default', function() {
			const isHidden = document.getElementsByTagName('body')[0].classList.contains('menu-hidden');
			expect(isHidden).toBeTruthy();
		});
		  /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
		  */
		it('toggled when the nav-icon is clicked', function() {
			const toggleIcon = document.getElementsByClassName('menu-icon-link')[0];
			const bodyElement = document.getElementsByTagName('body')[0];
			// First click, should make the navigation visible
			toggleIcon.click(); 
			expect(bodyElement.classList.contains('menu-hidden')).toBeFalsy();
			// Second click, should make the navigation hidden
			toggleIcon.click(); 
			expect(bodyElement.classList.contains('menu-hidden')).toBeTruthy();
		});
	});

    describe('Initial Entries', function() {
		const feed = document.getElementsByClassName('feed')[0];
		let entry;
		beforeEach(function(done) {
			loadFeed(1, function(){
				done();
			});
		
		});
		/* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
		 */
		 it('feed loads the information correctly', function(done) {
				let entry = document.getElementsByClassName('entry')[0];
				const condition = feed.contains(entry);
				expect(condition).toBeTruthy;
				done();
		 });
	});
	/*

	*/
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
