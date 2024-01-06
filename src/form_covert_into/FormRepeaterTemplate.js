import React from 'react'
import FormRepeaterHighOrder from './FormRepeaterHighOrder'
import { Field } from 'formik'

function FormRepeaterTemplate(props) {
    const { formik, remove, index } = props
    return (
        <div key={index}>
            <div className="row" key={index}>
                <div className="col">
                    <label>Name</label>
                    <Field
                        name={`friends.${index}.name`}
                        placeholder="Jane Doe"
                        type="text"
                    />
                </div>
                <div className="col">
                    <label >Email</label>
                    <Field
                        name={`friends.${index}.email`}
                        placeholder="jane@acme.com"
                        type="email"
                    />
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="secondary"
                        onClick={() => remove(index)}
                    >
                        X
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormRepeaterHighOrder(FormRepeaterTemplate)