import { useCallback, useEffect, useState } from "react";

export type useAsyncState = 'idle' | 'pending' | 'success' | 'error'

export type useAsyncReturn<TValue> = {
    /** Execute the async function, in case you provided immediate = false when calling the hook. */
    execute: () => Promise<void>,

    /** Status of the async execution. */
    status: useAsyncState,

    /** Return value of your async function. */
    value: TValue | undefined,

    /** Error returned by your async function. */
    error: string | null,
}

/**
 * Execute an async function and get updates on its status and return value or error.
 * @param asyncFunction Async function to execute.
 * @param immediate Whether the execute the function right away of delay it.
 * @see https://usehooks.com/useAsync/
 */
export function useAsync<TValue>(asyncFunction: () => Promise<TValue>, immediate = true) {
    const [status, setStatus] = useState<useAsyncState>('idle');
    const [value, setValue] = useState<TValue | undefined>(undefined);
    const [error, setError] = useState<string | null>(null);

    // The execute function wraps asyncFunction and
    // handles setting state for pending, value, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(async () => {
        setStatus('pending');
        setValue(undefined);
        setError(null);

        try {
            const response = await asyncFunction()
            setValue(response)
            setStatus('success')
        }
        catch (error) {
            setError(error)
            setStatus('error')
        }
    }, [asyncFunction]);

    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);

    return { execute, status, value, error };
};