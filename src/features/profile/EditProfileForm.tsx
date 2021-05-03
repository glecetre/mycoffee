import { Edit2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { RoundedButton, SecondaryButton } from 'src/components'
import { FileInput, FormActions, Input, Submit } from 'src/components/FormControls'
import { ProfilePictureDisplay, IProfile } from 'src/features/profile'
import { getFileDataUrl } from 'src/helpers'

import { IProfileFormModel } from './IProfileFormModel'

export function EditProfileForm(props: IEditProfileFormProps) {
    const model: IProfileFormModel = Object.assign({}, props.profile)
    const form = useForm<IProfileFormModel>({defaultValues: model})

    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const newPictureRegister = form.register('newPicture')
    const selectedNewPicture = form.watch('newPicture')?.[0]

    const [pictureDataUrl, setPictureDataUrl] = useState<string | undefined>(model.picture)

    useEffect(() => {
        const downloadAndSetNewPicture = async () => {
            if (selectedNewPicture) {
                const dataUrl = await getFileDataUrl(selectedNewPicture)
                setPictureDataUrl(dataUrl)
            }
        }

        downloadAndSetNewPicture()
    }, [selectedNewPicture, setPictureDataUrl])

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)} className='h-full flex flex-col'>
                <div className='flex-grow'>
                    <div className='mb-4 text-center'>
                        <div className='relative inline-block'>
                            <ProfilePictureDisplay src={pictureDataUrl} />
                            <div className='absolute -bottom-1 -right-1'>
                                <RoundedButton icon={Edit2} onClick={openFileSelector} size='lg' />
                            </div>
                        </div>
                    </div>

                    <Input label='Name' register={form.register('name', { required: true })} />
                    <FileInput isHidden label='Picture' register={newPictureRegister} innerRef={fileInputRef} />
                </div>

                <FormActions>
                    <SecondaryButton onClick={props.onCancel}>Cancel</SecondaryButton>
                    <Submit />
                </FormActions>
            </form>
        </FormProvider>
    )

    /**
     * Open the file input's selector dialog.
     */
    function openFileSelector(event: React.MouseEvent): void {
        event.preventDefault() // Prevent the form to be submitted
        fileInputRef?.current?.click()
    }

    /**
     * Add the new picture's data URL to the model and call `props.onSubmit`.
     * @param model Model of the form to update.
     */
    function handleFormSubmit(model: IProfileFormModel, event: any): void {
        model.picture = pictureDataUrl
        delete model.newPicture // Keep the IProfile clean

        props.onSubmit(model)
    }
}

interface IEditProfileFormProps {
    /** Profile information to pre-fill the form. */
    profile?: IProfile,

    /** Callback when the form is submitted and passes validation. */
    onSubmit: (data: IProfile) => void,

    /** Callback when the user cancels the form. */
    onCancel: () => void,
}