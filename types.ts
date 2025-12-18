import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface BenefitItem {
  text: string;
}

export interface DateItem {
  month: string;
  days: string;
}