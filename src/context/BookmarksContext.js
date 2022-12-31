import { useState, createContext} from 'react'

export const BookmarksContext =  createContext()

export const BookmarksProvider = ({ children }) => {

    const [bookmarks, setBookmarks] = useState([])
    
    const addBookmark = (prodToAdd) => {
        if(!isInBookmarks(prodToAdd.id)) {
            setBookmarks([...bookmarks, prodToAdd])
        }
    }

    const isInBookmarks = (id) => {
        return bookmarks.some(bookmark => bookmark.id === id)
    }

    const removeBookmark = (id) => {
        const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(updatedBookmarks)
    }
    
    return (
        <BookmarksContext.Provider value={{ bookmarks, addBookmark, isInBookmarks, removeBookmark }}>
            {children}
        </BookmarksContext.Provider>
    )
}