
//Array de obj
const products = [
    {id:'01', name:'Remera Flor', description:"Remera Flor, tela: Algodon peinado, talles 2, 3, 4", img:'/img/remeraflor.png', stock:5},
    {id:'02', name:'Remera2', description:"Remera Flor, tela: Algodon peinado, talles 2, 3, 4", img:'/img/remeraflor_2.png', stock:15},
    {id:'03', name:'Remera Rolling', description:"Remera Rolling Stone, tela: Algodon peinado, talles 2, 3, 4", img:'/img/remerarolling.png', stock:7},
    {id:'04', name:'Remera Rolling 2', description:"Remera Rolling Stone, tela: Algodon peinado, talles 2, 3, 4", img:'/img/remerarolling2.png', stock:3},
    {id:'05', name:'Buso Balenciaga', description:"Buso rustico, TELA: Gris melange, TALLES: 1, 2, 3, 4", img:'/img/busobalenciagagrism.png', stock:10},
    {id:'06', name:'Buso Balenciaga 2', description:"Buso rustico, TELA: Gris topo, TALLES: 1, 2, 3, 4", img:'/img/buso_balenciaga_grist.png', stock:4},
    {id:'06', name:'Bueso Balenciaga 3', description:"Buso rustico, TELA: Gris melange, TALLES: 1, 2, 3, 4", img:'/img/buso_edicionlimitada_grism.png', stock:4},
]

export const getData = new Promise ((resolve, reject) => {
    //acciones
    let condition = true 
    setTimeout(()=>{
        if(condition){
        resolve(products)
        }else{
        reject("algo salio mal")
        }
    },3000)
})