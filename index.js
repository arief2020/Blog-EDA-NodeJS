const EventEmitter = require("events");

// Create an instance of EventEmitter
const storeEvents = new EventEmitter();

// Register listener for 'customerArrived' event
storeEvents.on("customerArrived", (customerName) => {
  console.log(`Welcome, ${customerName}! How can we assist you?`);
});

// Register listener for 'deliveryArrived' event
storeEvents.on("deliveryArrived", (item) => {
  console.log(`Delivery arrived: ${item}. Please store it in the warehouse.`);
});

// Register listener for 'cashierCall' event
storeEvents.on("cashierCall", () => {
  console.log(`Cashier is calling! Go to assist.`);
});

// Emit a few events
storeEvents.emit("customerArrived", "Budi");
storeEvents.emit("deliveryArrived", "50 kotak makanan ringan");
storeEvents.emit("cashierCall");

// Output:
// Welcome, Budi! How can we assist you?
// Delivery arrived: 50 boxes of snacks. Please store it in the warehouse.
// Cashier is calling! Go to assist.
