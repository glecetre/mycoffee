import Dexie from 'dexie'
import { IReview } from 'src/features/reviews'
import { IProfile } from 'src/features/profile'

import dbconfig from './database.config.json'

export class DatabaseService extends Dexie {
    reviews: Dexie.Table<IReview, IReview['id']>
    profiles: Dexie.Table<IProfile, IProfile['id']>

    constructor() {
        super(dbconfig.name)
        this.version(dbconfig.version).stores({
            [dbconfig.tables.reviews]: '++id, date',
            [dbconfig.tables.profiles]: '++id',
        })

        this.reviews = this.table(dbconfig.tables.reviews)
        this.profiles = this.table(dbconfig.tables.profiles)
    }
}