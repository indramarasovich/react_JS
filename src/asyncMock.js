const prods = [
    {
      id: '1',
      img: 'https://d22fxaf9t8d39k.cloudfront.net/b7bbea5e79d66a2c7bac2b081b35bb1fa2ecaf38c2a2bf383df7dcac9a932d6874442.jpeg',
      title: 'Anillos',
      category: 'anillos',
      text: 'Collar de acero quirurgico'
    },
    {
      id: '2',
      img: 'https://http2.mlstatic.com/D_NQ_NP_829625-MLA29281701286_012019-O.jpg',
      title: 'Dijes',
      category: 'dijes',
      text: 'Dijes de 3 tamaños diferentes'
    },
    {
      id: '3',
      img: 'http://d2r9epyceweg5n.cloudfront.net/stores/974/888/products/dije_acero_quirurgico_amistad_porcion_de_pizza_2-9_cm_dk_joyas_de_acero_por_mayor_500ge-117-11-58fdcb9c6b6a6c025d15693436979143-480-0.jpg',
      title: 'Collar 2',
      category: 'dijes',
      text: 'Collar de acero quirurgico'
    },
    {
      id: '4',
      img: 'https://importadormayorista.com/wp-content/uploads/Pack-12-aros-acero-redondos-5-medidas1-1.png',
      title: 'Aritos 2',
      category: 'aros',
      text: 'Aritos de 3 tamaños diferentes'
    },
    {
      id: '5',
      img: 'https://http2.mlstatic.com/D_NQ_NP_889084-MLA46182041722_052021-W.jpg',
      title: 'Dije 3',
      category: 'dijes',
      text: 'Collar de acero quirurgico'
    },
    {
      id: '6',
      img: 'https://www.polkadots.com.ar/image/cache/data/pn1077-950x1000.jpg',
      title: 'Anillos 3',
      category: 'aros',
      text: 'Aritos de 3 tamaños diferentes'
    }
]

export const getProds = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods)
      }, 500)
    })
}

export const getProdsByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(prods.filter(prod => prod.category === categoria))
    }, 500)
  })
}

export const getProdById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(prods.find(prod => prod.id === id))
      }, 500)
    })
}