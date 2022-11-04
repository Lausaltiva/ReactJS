const products = [
    {
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc243360329a43d6915baacb00de0fe9_9366/Remera_Camuflaje_Negro_FM3338_01_laydown.jpg",
        nombre: "REMERA CAMUFLAJE",
        precio: "$3.500",
        id: "1",
        categoria: "Home",
    },
    {
        imagen: "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee47c600edc646d4927eab190121c59b_9366/pantalon-deportivo-r.y.v..jpg",
        nombre: "PANTALÓN DEPORTIVO R.Y.V.",
        precio: "$ 19.999",
        id: "2",
        categoria: "Home",
    },
    {
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b4dd67e6fb24dd5914aaf26002371d2_9366/Conjunto_Condivo_River_Plate_22_Beige_HC1049_01_laydown.jpg",
        nombre: "CONJUNTO CONDIVO RIVER PLATE 22",
        precio: "$ 28.999",
        id: "3",
        categoria: "Home",
    },
    {
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Zapatillas_Ultraboost_22_Negro_GZ0127_01_standard.jpg",
        nombre: "ZAPATILLAS ULTRABOOST 22",
        precio: "$ 55.999",
        id: "4",
        categoria: "Home",
    },
    {
        imagen: "https://assets.adidas.com/images/w_1920,h_1920,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6e3a6bb359c4b549658ae7601367732_9366/medias-adidas-running-x-supernova-performance-media-pantorrilla.jpg",
        nombre: "MEDIAS ADIDAS RUNNING X SUPERNOVA",
        precio: "$ 3.999",
        id: "5",
        categoria: "Home",
    },
    {
        imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6606b627c5ea40188a1bae2a018843db_9366/Zapatillas_Supernova_2.0_Negro_GW9088_01_standard.jpg",
        nombre: "ZAPATILLAS SUPERNOVA 2.0",
        precio: "$ 31.999",
        id: "6",
        categoria: "Home",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwce2a0c16/products/AD_HR1169/AD_HR1169-1.JPG",
        nombre: "Zapatillas adidas Ozweego",
        precio: "$37.799",
        id: "7",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw21f2ec4e/products/NI_DN1893-001/NI_DN1893-001-1.JPG",
        nombre: "Zapatillas Nike Air Max 97 Se",
        precio: "$68.399",
        id: "8",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0e03f5a2/products/VA_VN0A4UUK6BT1/VA_VN0A4UUK6BT1-1.JPG",
        nombre: "Zapatillas Vans Sk8-Low",
        precio: "$25.199",
        id: "9",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4e7ee9e4/products/PU_388258-02/PU_388258-02-1.JPG",
        nombre: "Zapatillas Puma Pro Classic",
        precio: "$28.399",
        id: "10",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa5506dfc/products/NI_DH4642-001/NI_DH4642-001-1.JPG",
        nombre: "Zapatillas Nike Air Max Pre-Day Se",
        precio: "$59.999",
        id: "11",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw708018b7/products/NI_DV0781-001/NI_DV0781-001-1.JPG",
        nombre: "Zapatillas Nike Air Huarache Premium",
        precio: "$42.999",
        id: "12",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw81ec76c3/products/PU_385033-23/PU_385033-23-1.JPG",
        nombre: "Ojotas Puma Popcat 20",
        precio: "$9.449",
        id: "13",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3d919542/products/LE_2210269/LE_2210269-1.JPG",
        nombre: "Zapatillas Le Coq Sportif Lcs R1000",
        precio: "$20.999",
        id: "14",
        categoria: "Zapatillas",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6094d0ae/products/NI_DM6873-010/NI_DM6873-010-1.JPG",
        nombre: "Buzo Nike Sportswear Sport Essentials",
        precio: "$18.499",
        id: "15",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb58816b9/products/NI_DD4682-010/NI_DD4682-010-1.JPG",
        nombre: "Short Nike Sportswear Essentials+",
        precio: "$14.999",
        id: "16",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4eee1c5b/products/NI_AR4997-013/NI_AR4997-013-1.JPG",
        nombre: "Remera Nike Sportswear Club",
        precio: "$6.499",
        id: "17",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4c4ddc79/products/NI_DH8982-100/NI_DH8982-100-1.JPG",
        nombre: "Remera Jordan Sport DNA '85 Crew",
        precio: "$12.999",
        id: "18",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw897b8076/products/TO_164618/TO_164618-1.JPG",
        nombre: "Short Topper Ng - Esencia",
        precio: "$2.959",
        id: "19",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw868c71d1/products/NI_DM6871-010/NI_DM6871-010-1.JPG",
        nombre: "Pantalón Nike Sportswear Sport Essentials",
        precio: "$17.999",
        id: "20",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw2b809cff/products/PU_533261-01/PU_533261-01-1.JPG",
        nombre: "Remera Puma Red Bull Racing",
        precio: "$11.999",
        id: "21",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0b006c70/products/NI_DM5207-407/NI_DM5207-407-1.JPG",
        nombre: "Buzo Nike Nsw Air Bb Crew",
        precio: "$23.999",
        id: "22",
        categoria: "Ropa",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwf059618f/products/NI_DM2158-010/NI_DM2158-010-1.JPG",
        nombre: "Mochila Nike Heritage",
        precio: "$10.999",
        id: "23",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw95ce06c1/products/TO_172607/TO_172607-1.JPG",
        nombre: "Pack de Medias Topper Caña Alta X3",
        precio: "$1.329",
        id: "24",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwbabf0d0f/products/NI_DH1640-010/NI_DH1640-010-1.JPG",
        nombre: "Gorra Nike Df Legacy 91 Tech",
        precio: "$7.999",
        id: "25",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwad96c74b/products/NI_SX7667-964/NI_SX7667-964-1.JPG",
        nombre: "Pack de Medias Nike Everyday x3",
        precio: "$3.599",
        id: "26",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdd7d8cda/products/PU_024065-03/PU_024065-03-1.JPG",
        nombre: "Gorra Puma Red Bull Racing",
        precio: "$6.499",
        id: "27",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw753b4c3e/products/NI_DB0456-824/NI_DB0456-824-1.JPG",
        nombre: "Bolso Nike Heritage Crossbody",
        precio: "$9.799",
        id: "28",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe1a6deb8/products/SR_3006/SR_3006-1.JPG",
        nombre: "Cordones Shoter Reflex",
        precio: "$1.999",
        id: "29",
        categoria: "Accesorios",
    },
    {
        imagen: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb4e8298c/products/PU_023757-01/PU_023757-01-1.JPG",
        nombre: "Gorro Puma Prime Bucket",
        precio: "$6.999",
        id: "30",
        categoria: "Accesorios",
    },
];


  export const getProducts = (categoria) =>
    new Promise((res, rej) => {
        const response = categoria
        ? products.filter((p) => p.categoria === categoria)
        : products;
        console.log({ response });
        setTimeout(() => {
            res(response);
        },  3000);
    });

export const getProduct = (productId) => 
new Promise ((res,rej) => {
    const response = products.find((product) => product.id === productId);
    setTimeout(() => {
       res(response); 
    }, 3000);
});