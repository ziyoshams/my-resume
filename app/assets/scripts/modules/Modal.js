import $ from 'jquery';

class Modal {
  constructor() {
    this.modalOpen = $('.modal__open');
    this.modalClose = $('.modal__close');
    this.modal = $('.modal');
    this.events();
  }

  events() {
    this.modalOpen.click(this.openModal.bind(this));
    this.modalClose.click(this.closeModal.bind(this));
  }

  openModal() {
    this.modal.addClass('modal__visible');
  }

  closeModal() {
    this.modal.removeClass('modal__visible');
  }
}

module.exports = Modal;
