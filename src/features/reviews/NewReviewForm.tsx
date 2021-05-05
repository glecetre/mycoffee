import { FormProvider, useForm } from 'react-hook-form';
import { SecondaryButton } from 'src/components/Buttons';
import { FileInput, FormActions, Input, RatingInput, Submit, Textarea } from 'src/components/FormControls';
import { SectionHeading } from 'src/components/Typography';
import { IReviewFormModel } from './IReviewFormModel';

import ratingIcon from 'src/assets/coffee-bean-brown.svg'

export function NewReviewForm(props: INewReviewFormProps) {
    const form = useForm<IReviewFormModel>();

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(props.onSubmit)} className='h-full flex flex-col'>
                <div className='flex-grow'>
                    <div className='grid grid-flow-col gap-4' style={{ gridTemplateColumns: '1fr auto' }}>
                        <div className='flex-grow'>
                            <Input label='Coffee' register={form.register('coffee', { required: true })} />
                        </div>
                        <FileInput label='Picture' register={form.register('picture')} />
                    </div>
                    <Textarea label='Review' register={form.register('content', { required: true })} />

                    <SectionHeading>Additional information</SectionHeading>
                    <Input label='Shop name' register={form.register('shop')} />
                    <Input label='Price' type='number' step="0.01" appendix='€ / 100 g' register={form.register('price', { valueAsNumber: true })} />
                    <RatingInput label='Rating' icon={ratingIcon} register={form.register('rating', { valueAsNumber: true })} />
                </div>

                <FormActions>
                    <SecondaryButton onClick={props.onCancel}>Cancel</SecondaryButton>
                    <Submit />
                </FormActions>
            </form>
        </FormProvider>
    )
}

interface INewReviewFormProps {
    /** Callback when the form is submitted and passes validation. */
    onSubmit: (data: IReviewFormModel) => void,

    /** Callback when the user cancels the form. */
    onCancel: () => void,
}