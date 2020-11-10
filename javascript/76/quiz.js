(function () {
    'use strict';

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }
    class Order {
        constructor(name, address, items) {
            this.name = name;
            this.address = address;
            this.items = items;
        }
        get total() {
            let total = 0;
            this.items.forEach(item => {
                total += item.total;
            });
            return total;
        }
    }

    fetch('orders.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(orders => {
            console.log(orders);
            orders.forEach(order => {
                let order1 = new Order(order.customer, order.address, order.items);
                $(`<li> 
                <h3>Order</h3>
         <div> Customer: ${order1.name}</div>
         <div> Address: ${order1.address}</div>
         <div> Total: ${order1.total}</div> 
       </li>`).appendTo('#display ul');
                order.items.forEach(item => {
                    let item1 = new Item(item.item, (item.total / item.quantity).toFixed(2), item.quantity);
                    $(`<li> 
                    <h4>Item</h4>
                        <div> Item: ${item1.name}</div>
                        <div> Quantity: ${item1.quantity}</div>
                        <div> Price: ${item1.price}</div> 
                      </li>`).appendTo('#display ul');
                });
            });
        })
        .catch(err => console.error(err));
}());