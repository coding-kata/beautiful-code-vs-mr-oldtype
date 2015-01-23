// LICENSE : MIT
"use strict";
function AppPage(browser) {
    this.browser = browser;
    this.browser.navigateTo('/');
}
AppPage.prototype.getNewVersionAt = function (index) {
    return this.browser.getElements('input[name="new_version"]')[index];
};
AppPage.prototype.selectNewVersionAt = function (index) {
    var input = this.getNewVersionAt(index);
    input.click();
    return input;
};
AppPage.prototype.getOldVersionAt = function (index) {
    return this.browser.getElements('input[name="old_version"]')[index];
};
AppPage.prototype.selectOldVersionAt = function (index) {
    var input = this.getOldVersionAt(index);
    input.click();
    return input;
};
module.exports = AppPage;