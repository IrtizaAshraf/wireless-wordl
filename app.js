
// crtae a index  object the cart render section start----------------

const getMob = document.getElementById("item")

const phones = [
    {
        brand: 'Samsung',
        img: "https://m.media-amazon.com/images/I/41KRhotx+PL.jpg",
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 159000,
    },
    {
        brand: 'Xiomi',
        img: "https://images.priceoye.pk/xiaomi-redmi-note-10-pakistan-priceoye-124uk.jpg",
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 31999,
    },
    {
        brand: 'Infinix',
        img: "https://rakistan.pk/wp-content/uploads/2021/11/infinix-zero-x-pro-pakistan-priceoye-im0ai-500x500-1.webp",
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 34999,
    },
    {
        brand: 'Tecno',
        img: "https://images.priceoye.pk/tecno-spark-10-pakistan-priceoye-2144l.jpg",
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 39999,
    },
    {
        brand: 'Iphone',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb7zxjf33D_bOzSqpJdYZtFRS9_d9w2VVHOcAn7HTDtOyONYMoH5Iz1uQQeh2qm17DyA&usqp=CAU",
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 234999,
    },
    {
        brand: 'Oppo',
        img: "https://cf.shopee.com.my/file/cfb2a159ee8d06bc3d0a0046ec34d060",
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 35999,
    },
    {
        brand: 'Vivo',
        img: "https://newglacier.pk/wp-content/uploads/2022/09/y20.jpg",
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 26999,
    },
    {
        brand: 'Huawei',
        img: "https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/HUAWEIP3-600x600.jpg",
        model: 'P30 Pro',
        ram: 8,
        rom: 512,
        camera: '40 megapixel',
        price: 26999,
    },
    {
        brand: 'I phone',
        img: "https://mobiles.dailypakistan.com.pk/wp-content/uploads/2020/08/iphone11-2-120x120.jpg",
        model: '11 Pro max',
        ram: 8,
        rom: 256,
        camera: '8megapixel',
        price: 229999,
    }
    
]

//  console.log(phones[1].brand);
// crtae a index  object the cart render section end---------------->

// crtae a for loo  arry of objects  the cart render section start---------------->

for (let i = 0; i < phones.length; i++) {
    getMob.innerHTML += `<div class="main-mob"><h3>${phones[i].brand}</h3>
    <img src="${phones[i].img}" class="image">
    <h4>Model:${phones[i].model}</h4>
    <h4>Ram:${phones[i].ram} Gb</h4>
    <h4>Rom:${phones[i].rom}Gb</h4>
    <h4>Camra:${phones[i].camera}</h4>
    <h4>Price: ${phones[i].price}</h4>
    <button onclick='addToCart(${i})' class="cart">Add To Cart<i class="fa-solid fa-cart-plus fa-beat-fade"></i></button>
    <button class="order">Order Now<i class="fa-brands fa-opencart fa-beat-fade"></i></button>
    </div>`
}
// crtae a for loo  arry of objects  the cart render section end---------------->



// generqate the localstorage variabels and item ---------------->

// const cartArry = [];
const cartData = localStorage.getItem('cartItem');
const jsonData = JSON.parse(cartData);

// sperate  the localstorage data ---------------->
let cartArry;
if (Array.isArray(jsonData)) {
    cartArry = [...jsonData]

} else {
    cartArry = []
}


 /// crrate a function of add to cart  section start ------------->
 
 function addToCart(index) {
     // console.log('includes in array ==>', cartArry.includes(phones[index]));
     if (cartArry.includes(phones[index])) {
         console.log('Olready add in');
         for (let i = 0; i < cartArry.length; i++) {
             if (cartArry[i] === phones[index]) {
                 cartArry[i].quantity += 1
                }
            }
            
        } else {
            console.log('Not Include ');
            phones[index].quantity = 1
            cartArry.push(phones[index]);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
            title: 'Item added to cart successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }
    // console.log(cartArry);
}

/// crrate a function of add to cart  section end ------------->


/// crrate a function of goto cart, html start ------------->


function goToCart() {
    const cart = JSON.stringify(cartArry);
    localStorage.setItem('cartItem', cart);
    console.log('cart called');
    window.location = 'cart.html';
}

/// crrate a function of goto cart, html end ------------->



/// crrate a function of  heart color and like  section start  ------------->

const back = document.querySelector('#heart')
// const backs = document.querySelector('#hearts')

// function addColor(r) {
//     switch (back) {
//         case back.style.color = "red":
//             break;
//             case back.style.color = "black":
//             break;
            
//             default:
//             // Default color if 'r' is not 'red' or 'black'
//             back.style.color = 'black';
//         }
// }
     
function addColor(r) {
    switch (back) {
        case back.style.color = "red":
            break;
        case backs.style.color = "red":
            break;
       
     
    }
}
/// crrate a function of  heart color and like  section end   ------------->
    
    
    
