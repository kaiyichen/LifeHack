let products = [
    {
      id: 0,
      name: "Carrot 1 kg",
      price: 4,
      description:
        "Unsold carrot in supermarket",
      imgSrc: "images/carrot.jpg",
    },
    {
        id: 1,
        name: "Apple 0.5 kg",
        price: 5,
        description:
          "Unsold apple in supermarket",
        imgSrc: "images/apple.jpg",
      },
      {
        id: 2,
        name: "Orange 2 kg",
        price: 3,
        description:
          "Unsold orange in supermarket",
        imgSrc: "images/orange.jpg",
      },
      {
        id: 3,
        name: "Cabbage 2 kg",
        price: 5,
        description:
          "Unsold cabbage in supermarket",
        imgSrc: "images/cabbage.jpg",
      },
      {
        id: 4,
        name: "Banana 4 kg",
        price: 9,
        description:
          "Unsold bananas in supermarket",
        imgSrc: "images/banana.jpg",
      },
      {
        id: 5,
        name: "Berries 2 kg",
        price: 5,
        description:
          "Unsold berries in supermarket",
        imgSrc: "images/berries.jpg",
      },
  ];
  

submitProduct.onclick = () => {
 
    const form = document.getElementById('signup');
    const name = document.getElementById['name'];
    const price = document.getElementById['price'];
    const id = this.products.length-1;
    // const imgSrc = form.elements['image'];

    const imgSrc = document.querySelector("#image-input");
//     image_input.addEventListener("change", function() {
//         const reader = new FileReader();
//         reader.addEventListener("load", () => {
//         const uploaded_image = reader.result;
//         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });
    const obj={}
    obj['name'] = name;
    obj['id'] = id;
    obj['price'] = price;
    obj['imgSrc'] = imgSrc;
    products.push(obj);
    console.log(products);
}



// // An individual product. Holds properties and behavior for one product
// class Product {
//     constructor(id,name,price,description,catergory,imgSrc) {
//         this.name = name;
//         this.id = id;
//         this.price = price;
//         this.description = description;
//         this.category = catergory;
//         this.imgSrc = imgSrc;
//     }
//   }


// // Class that holds a collection of products and properties and functions for the group
// class Products {
//     constructor(){
//     }
//     // create a new player and save it in the collection
//     newProduct(name,price,description,category,imgSrc){
//       const id = this.numberOfProducts-1;
//       let p = new Product(id,name,price,description,category,imgSrc)
//       this.products.push(p)
//       return p
//     }
//     get allProducts(){
//       return this.products
//     }
//     // this could include summary stats like average score, etc. For simplicy, just the count for now
//     get numberOfProducts(){
//         return this.products.length
//     }
//   }

//   let listOfProducts = new Products()

//   submitProduct.onclick = () => {
//     const form = document.getElementById('signup');
//     const name = form.elements['name'];
//     const price = form.elements['price'];
//     const description = form.elements['description'];
//     const category = form.elements['category'];
//     // const imgSrc = form.elements['image'];

//     const image_input = document.querySelector("#image-input");
//     image_input.addEventListener("change", function() {
//         const reader = new FileReader();
//         reader.addEventListener("load", () => {
//         const uploaded_image = reader.result;
//         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });

//     listOfProducts.newProduct(name,price,description,category,image_input);

// }
