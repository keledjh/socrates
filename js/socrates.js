/*global Socrates Backbone */

window.Socrates = {
    Document   : {
        Read  : {},
        Write : {},
        Menu  : {
            Item : {}
        }
    },
    firebase   : {
        base: 'https://socrates.firebaseIO.com/'
    }
};

$(function () {
    var view = new Socrates.View({
        model: new Socrates.Model()
    }).render();

    Backbone.history.start();
});