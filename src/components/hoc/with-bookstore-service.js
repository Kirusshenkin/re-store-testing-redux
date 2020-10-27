import React from 'react'
import {BookstoreServiceComsumer} from '../bookstore-service-context'

const withBookstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceComsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} 
                            bookstoreService={bookstoreService}/>
                        )
                    }
                }
            </BookstoreServiceComsumer>
        )
    }
}

export default withBookstoreService