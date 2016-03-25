/**
* @desc creates a rating input made of stars
* @example <star-rating score="3" max="5"></star-rating>
*/

class StarRating {
    constructor() {
        this.template= require('./template.html');
        this.restrict = 'EA';
        this.controllerAs = 'vm';
        this.bindToController = true;
        this.controller = StarRatingController;
        this.scope = {
            score: '=',
            max: '=',
            readonly: '=?'
        }
    }
}

class StarRatingController {
    constructor ($scope) {
        $scope.$watch(() => this.score, (newVal, oldValue) => this.updateStars());
    }

    updateStars() {
        this.stars = [ ];
        for (let idx = 0; idx < this.max; idx++) {
            this.stars.push({
                full: this.score > idx
            });
        }
    };

    setRating(idx) {
        if (!this.readonly) {
            this.score = idx + 1;
        }
    };
}

export default StarRating;
