const products = [
    {
        id:"1",
        name:"Galaxy Z Fold4 Beige 256gb",
        price: 659.999,
        category: "celular",
        img:"https://samsungar.vtexassets.com/arquivos/ids/183286-1200-auto?width=1200&height=auto&aspect=true",
        stock:25,
        description: "Descripcion del iphone"
    },
    {
        id:"2",
        name:"Samsung s23",
        price: 409.999,
        category: "celular",
        img:'https://samsungar.vtexassets.com/arquivos/ids/186515-1200-auto?width=1200&height=auto&aspect=true',
        stock:10,
        description: "Descripcion del samsung"},
    {
        id:"3",
        name:"Galaxy A54 5G",
        price: 209.999,
        category: "celular",
        img:'https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a546ezkearo/gallery/ar-galaxy-a54-5g-sm-a546-sm-a546ezkearo-535983751?$1300_1038_PNG$',
        stock:5,
        description: "Descripcion del Motorola"},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const id = parseInt(productId); 
            resolve(products.find(prod => prod.id === id)); 
        }, 500);
    });
};


export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};  