// 1. Interactive Shopping Cart System
class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = { SAVE10: 0.1, HALFPRICE: 0.5 };
    this.appliedDiscount = 0;
  }

  addItem(id, name, price, quantity = 1) {
    const existingItem = this.items.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ id, name, price, quantity });
    }
    console.log(`Added ${quantity} x ${name} to cart.`);
  }

  removeItem(id) {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removed = this.items.splice(index, 1);
      console.log(`Removed ${removed[0].name} from cart.`);
    }
  }

  applyCoupon(code) {
    if (this.discounts[code]) {
      this.appliedDiscount = this.discounts[code];
      console.log(`Coupon '${code}' applied!`);
    } else {
      console.log(`Invalid coupon code: ${code}`);
    }
  }

  calculateSubtotal() {
    return this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
  }

  calculateTotal() {
    const subtotal = this.calculateSubtotal();
    const discountAmount = subtotal * this.appliedDiscount;
    const tax = (subtotal - discountAmount) * 0.08; // 8% tax
    return subtotal - discountAmount + tax;
  }

  printReceipt() {
    console.log("\n--- RECEIPT ---");
    this.items.forEach((item) => {
      console.log(
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`,
      );
    });
    console.log(`Subtotal: $${this.calculateSubtotal().toFixed(2)}`);
    console.log(
      `Discount: -$${(this.calculateSubtotal() * this.appliedDiscount).toFixed(2)}`,
    );
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    console.log("---------------\n");
  }
}

// Usage Example
const myCart = new ShoppingCart();
myCart.addItem(1, "Laptop", 999.99);
myCart.addItem(2, "Wireless Mouse", 25.5, 2);
myCart.applyCoupon("SAVE10");
myCart.printReceipt();
