export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            loading: false,
            planets : [],
            people: [],
            favorites: [],
            
        },
        actions: {
            setLoading(status) {
                setStore({loading: status})
            },
            toggleLoader() {
                const store = getStore()
                setStore({loading: !store.loading})
            },

            getPeople() {   // Obtener personajes
                const store = getStore()
                if (store.people.length === 0) {
                    const endpoint = "https://swapi.dev/api/people/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({ people: json.results })
                    })
                }
            },

            getPlanets() {   // Obtener planetas
                const store = getStore() 
                if (store.planets.length === 0) {  
                    const endpoint = "https://swapi.dev/api/planets/";
                    const config = {
                        method: "GET"
                    }
                    fetch(endpoint,config).then((response) => {
                        return response.json()
                    }).then((json) => {
                        setStore({ planets: json.results })
                    })
                }
            },

            
            addList(id) {   //añadir a la lista
                const store = getStore()
                if (store.favorites.includes(id) == true) {
                    const list = store.favorites.filter((element, index) => {
                        return(element != id)
                    })
                    setStore({favorites: list})
                } else {
                    const list = [...store.favorites]
                    list.push(id)
                    setStore({favorites: list})
                }
                
            },    
            deleteList(id) {   //eliminar de la lista
                const store = getStore()
                const list = store.favorites.filter((element, index) => {
                        return(element != id)
                })
                setStore({favorites: list})
                console.log("favorito eliminado", store.favorites)
            }   
        }
    }
}