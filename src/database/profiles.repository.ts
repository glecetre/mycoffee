import { DatabaseService } from 'src/database'
import { IProfile } from 'src/features/profile'

export type ChangeListener = (updatedId: number | undefined) => void

export class ProfilesRepository {
    private _table: Dexie.Table<IProfile, IProfile['id']>
    private _changeListeners: ChangeListener[] = []

    constructor(databaseService: DatabaseService) {
        this._table = databaseService.profiles
    }

    /**
     * Get the default profile.
     */
    async getFirst(): Promise<IProfile | undefined> {
        return this._table.toCollection().first()
    }

    /**
     * Create or update a profile, depending on whether it has an ID or not.
     * @param profile Profile to create or update.
     * @returns The ID of the upserted profile.
     */
    async upsert(profile: IProfile): Promise<number | undefined> {
        const id = await this._table.put(profile)

        this._changeListeners.forEach((listener) => {
            listener(id)
        })

        return id
    }

    /**
     * Subscribe to the change event, fired when a profile is upserted.
     * @param listener Callback to fire when there is a change.
     */
    onChange(listener: ChangeListener): void {
        this._changeListeners.push(listener)
    }
}