// Day 5 - Exercise 1

interface carItem{
    id: number;
    title: string;
    variantId?: number;

}


function addToCart(item: carItem) {
    console.log(`Adding "${item.title}" to cart.`);
  }

  addToCart({id: 1, title: 'shoes'});





