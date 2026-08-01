import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type CommodityRisk = 'low' | 'medium' | 'high';
type Clause = 'A' | 'B' | 'C';

@Component({
  selector: 'app-marine-quote',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './marine-quote.html',
  styleUrl: './marine-quote.css',
})
export class MarineQuote {
  marineForm: FormGroup;
  premium: number = 0;
  sumInsured: number = 0;

  // Rate table: commodity risk -> clause -> rate (%)
  rateTable: Record<CommodityRisk, Record<Clause, number>> = {
    low: { A: 0.15, B: 0.10, C: 0.08 },
    medium: { A: 0.25, B: 0.18, C: 0.12 },
    high: { A: 0.40, B: 0.30, C: 0.20 }
  };

  constructor(private fb: FormBuilder) {
    this.marineForm = this.fb.group({
      cargoValue: ['', [Validators.required, Validators.min(0.01)]],
      commodityRisk: ['', Validators.required],
      clause: ['', Validators.required]
    });

    // Subscribe to form changes for live calculation
    this.marineForm.valueChanges.subscribe(() => {
      this.calculatePremium();
    });
  }

  calculatePremium() {
    const { cargoValue, commodityRisk, clause } = this.marineForm.value;

    // Validate all fields are present
    if (!cargoValue || !commodityRisk || !clause) {
      this.premium = 0;
      this.sumInsured = 0;
      return;
    }

    // Calculate Sum Insured = Cargo Value × 1.10 (CIF + 10% margin)
    this.sumInsured = cargoValue * 1.10;

    // Get rate from table with type casting
    const riskKey = commodityRisk.toLowerCase() as CommodityRisk;
    const clauseKey = clause.toUpperCase() as Clause;
    const rate = this.rateTable[riskKey]?.[clauseKey] || 0;

    // Calculate Premium = Sum Insured × (Rate / 100)
    this.premium = this.sumInsured * (rate / 100);
  }

  getRate(): number {
    const { commodityRisk, clause } = this.marineForm.value;
    if (!commodityRisk || !clause) return 0;
    
    const riskKey = commodityRisk.toLowerCase() as CommodityRisk;
    const clauseKey = clause.toUpperCase() as Clause;
    return this.rateTable[riskKey]?.[clauseKey] || 0;
  }

  onSubmit() {
    if (this.marineForm.valid) {
      console.log('Marine Quote Submitted:', {
        ...this.marineForm.value,
        sumInsured: this.sumInsured,
        premium: this.premium
      });
      alert('Quote submitted successfully!');
    }
  }
}
