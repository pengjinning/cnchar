
import {Json} from 'cnchar-types/main/common';
import originOrders from './dict/stroke-order-jian.json';
import originStrokeTable from './dict/stroke-table.json';

export const orders = originOrders as Json;
(window as any).orders = orders;
export const strokeTable = originStrokeTable as Json;

for (const k in strokeTable) {
    strokeTable[k].letter = k;
}