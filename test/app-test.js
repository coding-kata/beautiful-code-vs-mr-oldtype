// LICENSE : MIT
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require('power-assert');
var AppPage = require("./page-objects/app-page");
describe("app", function () {
    before(injectBrowser());
    var page;
    beforeEach(function () {
        page = new AppPage(this.browser);
    });
    // Run http://gyazo.com/b7e1593ef11326f5d6bf788d25e1bd6d.gif
    describe("when click new version", function () {
        var inputNew;
        var index = 1;
        beforeEach(function () {
            inputNew = page.selectNewVersionAt(index);
        });
        it('then corresponding old version is checked', function () {
            var inputOld = page.getOldVersionAt(index);
            assert(inputNew.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
    describe("when click old version", function () {
        var inputOld;
        var defaultCheckedButton;
        beforeEach(function () {
            defaultCheckedButton = page.getNewVersionAt(0);
            assert(defaultCheckedButton.get("checked"));
        });
        beforeEach(function () {
            inputOld = page.selectOldVersionAt(1);
        });
        it("then all new versions didn't changed", function () {
            assert(defaultCheckedButton.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
});
