import modalService from './../../src/services/modal-service';

describe('Modal service', () => {
    let $rootScope, makeController, modalService;

    //beforeEach(window.module('books.modalService'));
    beforeEach(function() {
        modalService = modalService();
    });

    it('has property: name' ,() => {
        expect(modalService).to.have.property('modalDefaults');
    });

    it('the name property has the correct value', () => {
        expect(service.backdrop).to.equal(true);
    });
});
