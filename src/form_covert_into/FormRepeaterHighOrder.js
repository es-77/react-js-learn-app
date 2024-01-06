import { FieldArray } from 'formik'
import React, { useMemo } from 'react'

const FormRepeaterHighOrder = (WrappedComponent) => {
    function FormRepeaterHighOrder(props) {
        const { fieldNameKey, formikValueOfKey, pushValue, buttonTextShow } = props

        const fieldName = useMemo(() => {
            return fieldNameKey;
        }, [fieldNameKey])
        return (
            <>
                <FieldArray name={fieldName}>
                    {({ insert, remove, push }) => (
                        <div>
                            {formikValueOfKey?.map((friend, index) => (
                                <div key={index}>
                                    <WrappedComponent {...props} remove={remove} index={index} />
                                </div>

                            ))}
                            <button
                                type="button"
                                className="secondary"
                                onClick={() => push(pushValue)}
                            >
                                {buttonTextShow ?? 'Add'}
                            </button>
                        </div>
                    )}
                </FieldArray>
            </>
        )
    }
    return FormRepeaterHighOrder
}

export default FormRepeaterHighOrder
