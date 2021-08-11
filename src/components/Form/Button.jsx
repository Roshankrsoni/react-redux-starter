import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Button({
    color = 'bg-primary',
    // disabled,
    icon = faCheck,
    isSubmitting,
    labelText,
    margins = 'ml-4',
    width = '',
    action
}) {
    return (
        <button
            type="submit"
            className={`inline-flex items-center py-2 px-4 leading-5 ${color} font-medium rounded-lg transition duration-150 ease-in-out justify-center items-center ${margins} ${width}`}
            disabled={ isSubmitting}
            aria-label={'submit'}
            onClick={action}
        >
            <small>
                {isSubmitting ?
                    <FontAwesomeIcon icon={faCircleNotch} spin className="mr-2" />
                    :
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                }
                {labelText ? labelText : 'submit'}
            </small>
        </button>
    )
}

export default Button