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
    describe("when click New(2nd)", function () {
        var inputNew;
        beforeEach(function () {
            inputNew = page.selectNewVersionAt(1);
        });
        it('then Old(2nd) is checked', function () {
            var inputOld = page.getOldVersionAt(1);
            assert(inputNew.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
    describe("when Click Old(3rd)", function () {
        var inputOld;
        var defaultCheckedButton;
        beforeEach(function () {
            defaultCheckedButton = page.getNewVersionAt(0);
            assert(defaultCheckedButton.get("checked"));
        });
        beforeEach(function () {
            inputOld = page.selectOldVersionAt(1);
        });
        it("then New side didn't changed", function () {
            assert(defaultCheckedButton.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
});
