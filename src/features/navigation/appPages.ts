import { Plus, Coffee, User } from 'lucide-react'

import { ProfilePage } from 'src/features/profile'
import { ReviewsPage, NewReviewPage } from 'src/features/reviews'
import { ErrorPage } from 'src/features/error'
import { FourOhFourPage } from 'src/features/fourOhFour'

export const APP_PAGES = {
    newReview: {
        name: 'New review',
        paths: ['/write'],
        exactMatch: false,
        url: () => '/write',
        icon: Plus,
        component: NewReviewPage,
    },
    reviews: {
        name: 'Reviews',
        paths: ['/', '/reviews/:id?'],
        exactMatch: true,
        url: (reviewId?: number) => `/reviews/${reviewId || ''}`,
        icon: Coffee,
        component: ReviewsPage,
    },
    profile: {
        name: 'Profile',
        paths: ['/profile/:action?'],
        exactMatch: true,
        url: (action?: 'edit') => `/profile${(action && '/edit') || ''}`,
        icon: User,
        component: ProfilePage,
    },
    fourOhFour: {
        name: '404',
        paths: ['/404'],
        exactMatch: false,
        url: () => '/404',
        component: FourOhFourPage,
    },
    error: {
        name: 'Error',
        paths: ['/error'],
        exactMatch: false,
        url: () => '/error',
        component: ErrorPage,
    },
}

export const ROUTE_ORDERED_PAGES = [
    APP_PAGES.newReview,
    APP_PAGES.reviews,
    APP_PAGES.profile,
    APP_PAGES.error,
    APP_PAGES.fourOhFour,
]