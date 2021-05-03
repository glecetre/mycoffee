import React from 'react'
import { DatabaseService, ProfilesRepository, ReviewsRepository } from 'src/database'

const databaseService = new DatabaseService()
const reviewsRepository = new ReviewsRepository(databaseService)
const profilesRepository = new ProfilesRepository(databaseService)

export const defaultAppContext = {
    reviewsRepository,
    profilesRepository,
}

export const AppContext = React.createContext(defaultAppContext)