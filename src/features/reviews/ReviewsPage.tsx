import { useParams } from 'react-router'

import { ReviewDetailsPage } from './ReviewDetailsPage'
import { ReviewsListPage } from './ReviewsListPage'

export function ReviewsPage() {
    const { id } = useParams<{id: string}>()
    const idNumber = Number(id)

    if (idNumber === null || isNaN(idNumber)) {
            return (
                <ReviewsListPage />
            )
    }
    else {
        return (
            <ReviewDetailsPage id={idNumber} />
        )
    }
}