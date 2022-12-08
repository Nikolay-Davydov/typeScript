import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotal(): number {
        return this._items.reduce((acc, prev) => (acc += prev.price), 0);
    }

    getDiscout(discount: number): number {
        let total: number = this.getTotal();
        total = total - total * (discount / 100);
        return total;
    }

    deleteId(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
