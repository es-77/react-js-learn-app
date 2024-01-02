import { isArray, isBoolean, isObject } from 'lodash';


export default function MakeFormData(modifingData, skipKeyArray = null, emptyKeyValueSkip = false) {
    const formData = new FormData()

    const doesValueExist = (arr, value) => {
        return arr.includes(value);
    }

    const isEmptySkip = (fieldName, value, emptyKeyValueSkip) => {
        if (emptyKeyValueSkip && value === '') {
            return true;
        } else {
            return false;
        }
    }

    const singleFile = (fieldName, value, emptyKeyValueSkip) => {
        console.log('fieldName, value', fieldName, value)
        if (isEmptySkip(fieldName, value, emptyKeyValueSkip)) {
            alert('if')
            return
        } else {
            alert('else')
            formData.append(fieldName, value)
        }
    }
    const fileHandle = (fieldName, value, emptyKeyValueSkip) => {
        if (Array.isArray(value)) {
            value.forEach((file, index) => {
                Object.entries(file).forEach(([fileKey, fileValue]) => {
                    const fileFieldName = `${fieldName}[${index}][${fileKey}]`
                    singleFile(fileFieldName, fileValue)
                })
            })
        } else if (value instanceof File) {
            if (isEmptySkip(fieldName, value, emptyKeyValueSkip)) {
                return
            }
            singleFile(fieldName, value)
        } else {
            console.error('Invalid file object');
        }
    };
    const nestedObjectHandle = (fieldName, value, emptyKeyValueSkip) => {
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
    const objectHandle = (fieldName, value, emptyKeyValueSkip) => {
        nestedObjectHandle(fieldName, value)
    }
    const arrayHandle = (fieldName, value, emptyKeyValueSkip) => {
        // console.log(fieldName, 'arrayHandle', value);
        // console.log()
        console.log('type of  arrayHandle', typeof value)


    }
    const booleanHandle = (fieldName, value, emptyKeyValueSkip) => {
        let dataBoolen = 0;
        if (isBoolean(value)) {
            dataBoolen = 1;
        } else {
            dataBoolen = 0;
        }
        formData.append(fieldName, dataBoolen)
    }
    const defaultHandle = (fieldName, value, emptyKeyValueSkip) => {
        if (isObject(value)) {
            objectHandle(fieldName, value, emptyKeyValueSkip)
            return
        }
        if (isBoolean(value)) {
            booleanHandle()
            return
        }
        if (isEmptySkip(fieldName, value, emptyKeyValueSkip)) {
            alert('if' + fieldName)
        } else {
            alert('else' + fieldName)
            formData.append(fieldName, value)
        }


    }



    const appendFormData = (data, skipKeyArray, emptyKeyValueSkip, prefix = '') => {

        Object.entries(data).forEach(([key, value]) => {
            const fieldName = prefix ? `${prefix}[${key}]` : key
            const isImage = (value instanceof File) ? true : false

            console.log(isEmptySkip(fieldName, value, emptyKeyValueSkip), 'fieldName, value, emptyKeyValueSkip', fieldName, value, emptyKeyValueSkip)
            if (!(skipKeyArray == null) && doesValueExist(skipKeyArray, fieldName)) {

            } else {

                if (isImage) {
                    fileHandle(fieldName, value, skipKeyArray, emptyKeyValueSkip)
                }
                switch (value) {
                    case (isBoolean(value)):
                        booleanHandle(fieldName, value, skipKeyArray, emptyKeyValueSkip);
                        break;
                    case (isObject(value) && value !== null):
                        objectHandle(fieldName, value, skipKeyArray, emptyKeyValueSkip);
                        break;
                    case (isArray(value)):
                        arrayHandle(fieldName, value, skipKeyArray, emptyKeyValueSkip);
                        break;
                    default:
                        defaultHandle(fieldName, value, skipKeyArray, emptyKeyValueSkip);
                        break;
                }
            }
        })
    }
    appendFormData(modifingData, skipKeyArray, emptyKeyValueSkip)

    return formData
}
