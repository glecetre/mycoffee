import { Coffee } from 'lucide-react'

export function Loading() {
    return (
        <div className='flex-grow flex flex-col justify-center text-primary-500 text-center'>
            <Coffee className='mx-auto mb-2 animate-pulse' size={48} strokeWidth='1px' />
            <p className='font-display text-2xl'>Loading...</p>
        </div>
    )
}