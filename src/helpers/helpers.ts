/**
 * Get a displayable date, in short format.
 * @param dateString Date to display.
 */
export function displayShortDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString(undefined, {
        dateStyle: 'short'
    })
}

/**
 * Get the year from a date string.
 * @param dateString Date to display.
 */
 export function getDateFullYear(dateString: string): number {
    return new Date(dateString).getFullYear()
}

/**
 * Get a displayable decimal number.
 * @param number Number to format.
 */
export function displayDecimalNumber(number?: number): string {
    if (!number) {
        return ''
    }

    return new Intl.NumberFormat().format(number)
}

/**
 * Get a file's data URL.
 * @param file File to download and convert to data URL.
 */
export async function getFileDataUrl(file: File): Promise<string> {
    return new Promise((resolve) => {
        const fileReader = new FileReader()

        fileReader.onload = (event) => resolve(event.target?.result as string)
        fileReader.readAsDataURL(file)
    })
}