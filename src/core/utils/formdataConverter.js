export const formDataModifier = (obj) =>{
    const objectKeys= Object.keys(obj)
    const formData = new FormData()
  
    objectKeys.map(key => formData.append(key,obj[key]) )
    return formData;
}
