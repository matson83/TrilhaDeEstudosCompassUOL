var Movies = /** @class */ (function () {
    function Movies(id, title) {
        this.id = id;
        this.title = title;
    }
    return Movies;
}());
var movie1 = new Movies(1, 'Inception');
console.log(movie1.id);
// movie1.id = 4
