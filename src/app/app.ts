import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentStep = signal(0);
  protected readonly celebrationActive = signal(false);
  protected readonly questionAccepted = signal(false);

  protected readonly proposalConfig = {
    yourName: 'VD jnanesh',
    partnerName: 'My Love',
    openingLine: 'I built something small for someone very special...',
    finalTitle: 'I Love You',
    finalRevealImage: '/assets/shallu.png',
    finalMessage:
      'From every moment we shared to every dream still waiting for us, my heart chooses you again and again.',
    finalQuestion: 'Will you be mine forever?',
    gallery: [
      {
        src: '/assets/memory-1.svg',
        alt: 'Memory one',
        caption: 'Every glance with you feels like a scene from a movie.'
      },
      {
        src: '/assets/memory-2.svg',
        alt: 'Memory two',
        caption: 'Every laugh with you turns ordinary days into magic.'
      },
      {
        src: '/assets/memory-3.svg',
        alt: 'Memory three',
        caption: 'Every step with you feels like home.'
      }
    ],
    heartbeatPrompts: [
      'One click for the smile you give me.',
      'One click for all our memories.',
      'One click for every future moment together.'
    ]
  } as const;

  protected get showWelcome(): boolean {
    return this.currentStep() === 0;
  }

  protected get showGallery(): boolean {
    return this.currentStep() === 1;
  }

  protected get showPrompt(): boolean {
    return this.currentStep() === 2;
  }

  protected get showFinale(): boolean {
    return this.currentStep() === 3;
  }

  protected nextStep(): void {
    const next = Math.min(this.currentStep() + 1, 3);
    this.currentStep.set(next);
  }

  protected previousStep(): void {
    const previous = Math.max(this.currentStep() - 1, 0);
    this.currentStep.set(previous);
  }

  protected acceptQuestion(): void {
    this.questionAccepted.set(true);
    this.celebrate();
    this.currentStep.set(3);
  }

  protected celebrate(): void {
    this.celebrationActive.set(true);
    window.setTimeout(() => this.celebrationActive.set(false), 2400);
  }

  protected replay(): void {
    this.questionAccepted.set(false);
    this.celebrationActive.set(false);
    this.currentStep.set(0);
  }
}
