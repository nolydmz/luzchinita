
//Array de obj
export const productos = [
    { 
        id:'01', 
        name:'Remera Flor',
        price: 800 , 
        description:"Remera Flor, tela: Algodon peinado, talles 2, 3, 4", 
        img:'/img/remeraflor.png', 
        stock:5,
        category: 'Remeras',
    },
    {
        id:'02', 
        name:'Remera2',
        price: 800 , 
        description:"Remera Flor, tela: Algodon peinado, talles 2, 3, 4", 
        img:'/img/remeraflor_2.png', 
        stock:15,
        category: 'Remeras',
    },
    {
        id:'03', 
        name:'Remera Rolling',
        price: 800 , 
        description:"Remera Rolling Stone, tela: Algodon peinado, talles 2, 3, 4", 
        img:'/img/remerarolling.png', 
        stock:7,
        category: 'Remeras',
    },
    {
        id:'04', 
        name:'Remera Rolling 2',
        price: 800 , 
        description:"Remera Rolling Stone, tela: Algodon peinado, talles 2, 3, 4", 
        img:'/img/remerarolling2.png', 
        stock:3 ,
        category: 'Remeras',
    },
    {
        id:'05', 
        name:'Buso Balenciaga',
        price: 1500 , 
        description:"Buso rustico, TELA: Gris melange, TALLES: 1, 2, 3, 4", 
        img:'/img/busobalenciagagrism.png', 
        stock:10 ,
        category: 'Busos',
    },
    {
        id:'06', 
        name:'Buso Balenciaga 2',
        price: 1500 , 
        description:"Buso rustico, TELA: Gris topo, TALLES: 1, 2, 3, 4", 
        img:'/img/buso_balenciaga_grist.png', 
        stock:4 ,
        category: 'Busos',
    },
    {
        id:'06', 
        name:'Bueso Balenciaga 3',
        price: 800 , 
        description:"Buso rustico, TELA: Gris melange, TALLES: 1, 2, 3, 4", 
        img:'/img/buso_edicionlimitada_grism.png', 
        stock:4 ,
        category: 'Busos',
    },
];



export const getProds = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (prod) => prod.category === categoryId
        );
        setTimeout(() => {
            categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 1000);
    });
};

export const getProd = (id) => {
    return new Promise((resolve, reject) => {
        const productoEncontrado = productos.find(
            (prod) => prod.id === Number(id)
        );
        setTimeout(() => {
            resolve(productoEncontrado);
        }, 1000);
    });
};