const PosData = [
    {
        inventorymanagement: {
        heading: "Inventory Management",
        description: "Inventory management, at its very essence, keeps track of all products so you know when it’s time to order/or not order specific products.",
        listItems:{
            listItem1: "Purchase order list : This will allow you to add the suppliers who supply your goods and record information such as address, phone number, and product status.",
            listItem2: "Recipe Management: This assists you in delivering recipe details regarding the type of ingredients used and the quantity utilized. It also displays the type of recipe and the number of persons served."
        },
        image: "/inventoryTwo.svg"
    }},
    {humanResourceManagement:{
        heading: "Human Resource Management",
        description: "HRM maintains a complete employee database including contact information, salary details, attendance, performance evaluation and promotion of all employees.",
        image: "/inventoryThree.svg"
    }},
    {customerManagement:{
        heading: "Customer Management",
        description: "We allow a built-in loyalty program where you build strong relationships with your customers which in return leads to repeat business.",
        image: "/inventoryFour.svg"
    }},
    {completeOrderManagement:{
        heading: "Complete Order Management",
        image: "/inventoryFour.svg",
        listItems:{
            listItem1: "Sale Order Management",
            listItem2: "Payment Management",
            listItem3: "Expense Management",
            listItem4: "Invoice Management"
        },
    },
}
];

export default PosData;