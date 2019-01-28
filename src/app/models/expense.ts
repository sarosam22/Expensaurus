import { Currency } from "../enums/currency";
import { Priority } from "../enums/priority";


export interface IExpense {
    name: string;
    description?: string;
    amount: number;
    date: string;
    currency: Currency;
    priority: Priority;
    rupeeEquivalent: number;
}