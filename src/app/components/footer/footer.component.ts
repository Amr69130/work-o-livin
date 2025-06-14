import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  quiSommesNousOpen = false;
  mentionsLegalesOpen = false;

  modalOpen = false;
  modalContent: string | null = null;

  modalContents = {
    politique: `Politique de confidentialité : 
Votre vie privée est importante...`,
    conditions: `Conditions générales d’utilisation : 
Les présentes conditions s’appliquent...`,
    cookies: `Politique de cookies : 
Nous utilisons des cookies pour...`,
    contact: `Contact & Support : 
Contactez-nous via contact@workolivin.com`
  };

  toggleQuiSommesNous() {
    this.quiSommesNousOpen = !this.quiSommesNousOpen;
    if (this.quiSommesNousOpen) {
      this.mentionsLegalesOpen = false;
    }
  }

  toggleMentionsLegales() {
    this.mentionsLegalesOpen = !this.mentionsLegalesOpen;
    if (this.mentionsLegalesOpen) {
      this.quiSommesNousOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.qui-sommes-nous') &&
      !target.closest('.mentions-legales') &&
      !target.closest('.modal-content')
    ) {
      this.quiSommesNousOpen = false;
      this.mentionsLegalesOpen = false;
      this.modalOpen = false;
    }
  }

  openModal(key: 'politique' | 'conditions' | 'cookies' | 'contact', event: MouseEvent) {
    event.preventDefault();
    this.modalContent = this.modalContents[key];
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalContent = null;
  }
}
