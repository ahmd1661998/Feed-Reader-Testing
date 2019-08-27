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

    // Test suite for RSS feed variable
    describe('RSS Feeds', function() {
        
        // Check if allFeeds variable is defined and not empty
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

    // Test suite for the apps menu functionality
    describe('The Menu', function() {

        // Check that default state of menu is hidden on page load
        it('hidden by default', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // Check that menu toggles on/off from multiple clicks
        it('toggles on/off', function() {
            const menu = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body');
            
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
            
        });
    });

    // Test suite for initial load of feed 
    describe('Initial Entries', function() {

       // Load feed and wait until work is done
        beforeEach(function(done) {
            loadFeed(0, done);
            loadFeed(1, done);
        });

        // Check that completed work contains content
        it('completes work', function() {
            const feed = document.querySelector('.feed');
            expect(feed.children.length > 0).toBe(true);
        });
    });

    // Test suite for loading new content after initial load
    describe('New Feed Selection', function() {

        const feed = document.querySelector('.feed');
        const firstFeed = [];

        // Load multiple feeds and compare content to ensure change
        beforeEach(function(done) {

            // Load first feed
            loadFeed(0);
            
            // Store values of first feed
            Array.from(feed.children).forEach(function(entry) {
                firstFeed.push(entry.innerText);
            })

            // Load second feed
            loadFeed(1, done);
        });
        
        // Compare first feed against new feed content
        it('content changes', function() {
            Array.from(feed.children).forEach( (entry, index) => {
                expect(entry.innerText !== firstFeed[index]).toBe(false);
            });
        });
    });
}());