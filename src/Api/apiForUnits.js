const baseURL = "http://localhost:3004/units"


export async function getUnitList() {
    const response = await fetch(baseURL)
    const result = await response.json()
    return result
}
