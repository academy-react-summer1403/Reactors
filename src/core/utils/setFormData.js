export const setFormData = (object, formData) => {
    for (obj of Object.keys(object)) {
        obj.forEach((key) => formData.append(key, object[key]))
    }
}