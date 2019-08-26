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
    "use strict";

    // test suite for RSS feed variable
    describe('RSS Feeds', function() {

        // Check if allFeeds variable is defiend and not empty
        it('valid', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Check if feed's url property is defined and not empty
        it('has url', function() {
            for(let feed of allFeeds) {
                expect(feed.url).not.toBe(undefined);
                expect(feed.url).not.toBe('');
            }
        });

        // Check if feed's name property is defined and not empty
        it('has name', function() {
            for(let feed of allFeeds) {
                expect(feed.name).not.toBe(undefined);
                expect(feed.name).not.toBe('');
            }
        });
    });
}());
