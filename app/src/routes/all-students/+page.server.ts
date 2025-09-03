export const load = async () => {
    try{
        const response = await fetch("https://pk-sheets-api.onrender.com/students")
        const data = await response.json()
        return { data }

    } catch (error){
        console.error("Error loading data:", error);
    }
}