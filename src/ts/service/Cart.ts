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
        let total: number = 0;
        this._items.forEach((item) => {
            total += item.price;
        });
        return total;
    }

    getDiscout(discout: number): number {
        let total: number = this.getTotal();
        total = total - total * (discout / 100);
        return total;
    }

    deleteId(id: number): void {
        this._items = this._items.filter((item) => item.id !== id);
    }
}
