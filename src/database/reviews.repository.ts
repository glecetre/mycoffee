import { DatabaseService } from 'src/database'
import { IReview } from 'src/features/reviews'

export class ReviewsRepository {
    private _table: Dexie.Table<IReview, IReview['id']>

    constructor(databaseService: DatabaseService) {
        this._table = databaseService.reviews
    }

    /**
     * Get a specific review.
     * @param id ID of the review to fetch.
     */
    async get(id: number): Promise<IReview | undefined> {
        return this._table.get(id)
    }

    /**
     * Create or update a review, depending on whether it has an ID or not.
     * @param review Review to create or update.
     * @returns The ID of the upserted review.
     */
    async upsert(review: IReview): Promise<number | undefined> {
        return this._table.put(review)
    }

    /**
     * Get all Reviews.
     */
    async getAll(): Promise<IReview[]> {
        return this._table.orderBy('date').reverse().toArray()
    }
}