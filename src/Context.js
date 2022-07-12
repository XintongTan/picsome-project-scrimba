import React from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [photo, setPhoto] = React.useState([])
    const [cartItem, setCartItem] = React.useState([])


    React.useEffect(() => {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res => res.json())
            .then(data => setPhoto(data))
    }, [])


    function toggleFavorite(id) {
        const updateArr = photo.map(photo => {
            if (photo.id === id) {
                return { ...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })

        setPhoto(updateArr)
    }

    function addImage(img) {
        setCartItem(prevItem => [...prevItem, img])

    }

    function removeImage(id) {
        setCartItem(prevItem => prevItem.filter(item=> item.id !== id))
    }

    function emptyCart() {
        setCartItem([])
        console.log("order placed!")
    }

    return(
        <Context.Provider value={{ photo, toggleFavorite, addImage, removeImage, cartItem, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}

