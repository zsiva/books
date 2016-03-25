class MyDirective {
    /*@ngInject*/
    constructor($interval, $document) {
        this.template = '<div>I\'m a directive!</div>';
        this.restrict = 'E';
        this.scope = {};
        this.controller = MyDirectiveController;

        console.log($interval);
        // etc. for the usual config options

        // allows us to use the injected dependencies
        // elsewhere in the directive (e.g. compile or link function)
    }
    compile(tElement) {
        tElement.css('position', 'absolute');
        console.log('compile');
        return this.link.bind(this);

    }
    link(scope, element) {
        this.move(element);
        this.settings = {
            dynamicTitle: true,

        };
        console.log('interval: ', this.$interval, this.settings);

    }
    move(element) {
        element.css('left', (Math.random() * 500) + 'px');
        element.css('top', (Math.random() * 500) + 'px');
        console.log('moving');
    }
    // optional compile function
}
class MyDirectiveController {
    constructor ($interval) {
        this.$interval = $interval;
        this.test();
    }
    test() {
        console.log(this.$interval);
    }
}

export default MyDirective;
