import { Component, signal } from '@angular/core';

interface Policy {
  id: number;
  name: string;
  category: string;
  premium: number;
}

@Component({
  selector: 'app-policies',
  imports: [],
  templateUrl: './policies.html',
  styleUrl: './policies.css',
})
export class Policies {
  protected readonly policies = signal<Policy[]>([
    { id: 1, name: 'Term Life Secure', category: 'Life', premium: 6500 },
    { id: 2, name: 'Family Health Plus', category: 'Health', premium: 12000 },
    { id: 3, name: 'Motor Shield', category: 'Motor', premium: 4800 },
    { id: 4, name: 'Home Safe', category: 'Property', premium: 3200 },
  ]);
}
