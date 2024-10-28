export const handleDate = (productionDate) => {
    try {
        const date = new Date(productionDate)
        const formedDate = date.getDate() + " " + date.getMonth() + " " + date.getFullYear()
        return formedDate
    } catch {
        return "Does Not Exist"
    }
}