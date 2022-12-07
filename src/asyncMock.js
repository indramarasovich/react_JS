const prods = [
    {
      id: '1',
      title: 'Collar',
      category: '1',
      text: 'Collar de acero quirurgico'
    },
    {
      id: '2',
      title: 'Aritos',
      category: '2',
      text: 'Aritos de 3 tamaños diferentes'
    }
]

export const getProds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods)
      }, 2000)
    })
}

export const getProdById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods.find(prod => prod.id === id))
      }, 500)
    })
}