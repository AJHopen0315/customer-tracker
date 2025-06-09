// Customer Records
const customers = [
    {
        name: "Alice Johnson",
        email: "alice@example.com",
        purchases: ["Laptop", "Phone"]
    },
    {
        name: "Bob Smith",
        email: "bob@example.com",
        purchases: ["Tablet"]
    },
    {
        name: "Carol Williams",
        email: "carol@example.com",
        purchases: ["Camera", "Headphones"]
    }
];

// Add and Remove Data
customers.push({
    name: "David Lee",
    email: "david@example.com",
    purchases: ["Smartwatch"]
});

customers.shift(); // removes Alice

// Update Customer Info
customers[0].email = "bob.newemail@example.com"; // updating Bob's email
customers[1].purchases.push("Tripod"); // adding to Carol's purchases

// Display Customer Information
customers.forEach(customer => {
    console.log(`Name: ${customer.name}, Email: ${customer.email}, Total Purchases: ${customer.purchases.length}`);
});