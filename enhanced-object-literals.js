// ENHANCED OBJECT LITERALS

// when we have 'key: value' pairs that match, they can be condensed to a 'key'
// when we have 'key's, they fall to the left, or beginning
// 'key: value' pairs that are not condensed fall to the far right, or end

function creatBookShop(inventory) {
	return {
		// inventory: inventory, -- omit value and : when key/value match
		inventory,
		// inventoryValue: function () { -- omit : and function keyword
		inventoryValue() {
			const newLocal = this.inventory.reduce((total, book) => total + book.price, 0);
			return newLocal;
		},
		// priceForTitle: function (title) { -- omit : and function keyword
		priceForTitle(title) {
			return this.inventory.find((book) => book.title === title).price;
		},
	};
}

const inventory = [
	{ title: "Harry Potter", price: 10 },
	{ title: "Eloquent JavaScript", price: 15 },
];

const bookShop = createBookShop(inventory);
