// LICENSE : MIT
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require('power-assert');

describe("app", function () {
    before(injectBrowser());
    beforeEach(function () {
        this.browser.navigateTo('/');
    });
    // Run http://gyazo.com/b7e1593ef11326f5d6bf788d25e1bd6d.gif
    describe("when Click New(2nd)", function () {
        var inputNew;
        beforeEach(function () {
            inputNew = this.browser.getElements('input[name="new_version"]')[1];
            inputNew.click();
        });
        it('then Old(2nd) is checked', function () {
            var inputOld = this.browser.getElements('input[name="old_version"]')[1];
            assert(inputNew.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
    describe("when Click Old(3rd)", function () {
        var inputOld;
        beforeEach(function () {
            var defaultCheckedButton = this.browser.getElements('input[name="new_version"]')[0];
            assert(defaultCheckedButton.get("checked"));
        });
        beforeEach(function () {
            inputOld = this.browser.getElements('input[name="old_version"]')[1];
            inputOld.click();
        });
        it("then New side didn't changed", function () {
            var inputNew = this.browser.getElements('input[name="new_version"]')[0];
            assert(inputNew.get("checked"));
            assert(inputOld.get("checked"));
        });
    });
});
