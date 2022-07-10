let products = [
    {
      id: 0,
      name: "Carrot 1 kg",
      price: 4,
      expiry: "15/7/2022",
      description:
        "Unsold carrot in supermarket",
      imgSrc: "images/carrot.jpg",
    },
    {
        id: 1,
        name: "Apple 0.5 kg",
        price: 5,
        expiry: "14/7/2022",
        description:
          "Unsold apple in supermarket",
        imgSrc: "images/apple.jpg",
      },
      {
        id: 2,
        name: "Orange 2 kg",
        price: 3,
        expiry: "15/7/2022",
        description:
          "Unsold orange in supermarket",
        imgSrc: "images/orange.jpg",
      },
      {
        id: 3,
        name: "Cabbage 2 kg",
        price: 5,
        expiry: "16/7/2022",
        description:
          "Unsold cabbage in supermarket",
        imgSrc: "images/cabbage.jpg",
      },
      {
        id: 4,
        name: "Banana 4 kg",
        price: 9,
        expiry: "13/7/2022",
        description:
          "Unsold bananas in supermarket",
        imgSrc: "images/banana.jpg",
      },
      {
        id: 5,
        name: "Berries 2 kg",
        price: 5,
        expiry: "13/7/2022",
        description:
          "Unsold berries in supermarket",
        imgSrc: "images/berries.jpg",
      },
  ];
  

 

  $( "form" ).submit(function( event ) {
    // console.log( $( this ).serializeArray() );
    // event.preventDefault();
    
    const id = products.length;
    const inputName = document.getElementById("name").value;
    const inputPrice = document.getElementById("price").value;
    const inputExpiry = document.getElementById("expiry").value;
    const inputDescription = document.getElementById("description").value;
    let obj = {id: id, name: inputName, price: inputPrice, expiry: inputExpiry, description: inputDescription};
    products.push(obj);
    alert(products.length);
    
  });

  const fileInput = document.getElementById('image-input');
  fileInput.onchange = () => {
    const inputImage = fileInput.files[0];
    console.log(inputImage);
  }
  
// submitProduct.onclick = () => {
 
    // const form = document.getElementById('signup');
    // const name = document.getElementById['name'];
    // const price = document.getElementById['price'];
    // // const imgSrc = form.elements['image'];
    // const imgSrc = document.querySelector("#image-input");


//     image_input.addEventListener("change", function() {
//         const reader = new FileReader();
//         reader.addEventListener("load", () => {
//         const uploaded_image = reader.result;
//         document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// });

