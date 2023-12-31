import { isArray, isBoolean, isObject } from 'lodash';


export default function MakeFormData(modifingData) {
    const formData = new FormData()
    const singleFile = (fieldName, value) => {
        console.log('fieldName, value', fieldName, value)
        formData.append(fieldName, value)
    }
    const fileHandle = (fieldName, value) => {
        if (Array.isArray(value)) {
            value.forEach((file, index) => {
                Object.entries(file).forEach(([fileKey, fileValue]) => {
                    const fileFieldName = `${fieldName}[${index}][${fileKey}]`
                    singleFile(fileFieldName, fileValue)
                })
            })
        } else if (value instanceof File) {
            singleFile(fieldName, value)
        } else {
            console.error('Invalid file object');
        }
    };
    const nestedObjectHandle = (fieldName, value) => {
        if (Array.isArray(value)) {
            value.forEach((objectValue, ObjectIndex) => {
                if (objectValue instanceof File) {
                    const fileName = `${fieldName}[${ObjectIndex}]`
                    singleFile(fileName, objectValue)
                }
                Object.entries(objectValue).forEach(([fileKey, fileValue]) => {
                    const fileFieldName = `${fieldName}[${ObjectIndex}][${fileKey}]`
                    formData.append(fileFieldName, fileValue)
                })
            })
        }

    }
    const objectHandle = (fieldName, value) => {
        nestedObjectHandle(fieldName, value)
    }
    const arrayHandle = (fieldName, value) => {
        // console.log(fieldName, 'arrayHandle', value);
        // console.log()
        console.log('type of  arrayHandle', typeof value)


    }
    const booleanHandle = (fieldName, value) => {
        let dataBoolen = 0;
        if (isBoolean(value)) {
            dataBoolen = 1;
        } else {
            dataBoolen = 0;
        }
        formData.append(fieldName, dataBoolen)
    }
    const defaultHandle = (fieldName, value) => {
        console.log('type of  defaultHandle', typeof value, value)
        if (isObject(value)) {
            objectHandle(fieldName, value)
            return
        }
        if (isBoolean(value)) {
            booleanHandle()
            return
        }
        formData.append(fieldName, value)


    }

    const appendFormData = (data, prefix = '') => {

        Object.entries(data).forEach(([key, value]) => {
            const fieldName = prefix ? `${prefix}[${key}]` : key
            const isImage = (value instanceof File) ? true : false

            if (isImage) {
                fileHandle(fieldName, value)
            }
            switch (value) {
                case (isBoolean(value)):
                    booleanHandle(fieldName, value);
                    break;
                case (isObject(value) && value !== null):
                    objectHandle(fieldName, value);
                    break;
                case (isArray(value)):
                    arrayHandle(fieldName, value);
                    break;
                default:
                    defaultHandle(fieldName, value);
                    break;
            }

        })
    }
    appendFormData(modifingData)

    return formData
}
