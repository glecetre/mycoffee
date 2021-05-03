import { UseFormRegisterReturn } from "react-hook-form";

export interface ICommonControlProps {
    /** Label of the control field. */
    label: string,

    /** Registration info given by React-Hook-Form. */
    register: UseFormRegisterReturn,
}