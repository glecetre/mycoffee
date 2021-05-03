import { IProfile } from "./IProfile";

export interface IProfileFormModel extends IProfile {
    newPicture?: FileList,
}