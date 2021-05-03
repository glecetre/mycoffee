/**
 * Button to submit forms.
 */
export function Submit() {
    return (
        <input
            type='submit'
            className='py-2 px-6 rounded-full text-primary-500 bg-primary-100 active:text-white active:bg-primary-500 cursor-pointer outline-none focus:ring'
            value='Save'
        />
    )
}