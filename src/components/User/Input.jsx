import React, { forwardRef } from "react";
import { Input as MaterialInput } from "@material-tailwind/react";

const InputGeneral = forwardRef(({ label, placeholder = 'Enter something', type = 'text', ...rest }, ref) => {
    return (
        <div className="w-72">
            <MaterialInput
                label={label}
                placeholder={placeholder}
                type={type}
                size="lg"
                {...rest} // Spread additional props like onChange, value, etc.
                inputRef={ref} // Use `inputRef` for material-tailwind
            />
        </div>
    );
});

export default InputGeneral;
