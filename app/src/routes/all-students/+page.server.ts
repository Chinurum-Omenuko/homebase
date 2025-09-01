export const load = async () => {
    try{
        const response = await fetch("http://localhost:8080/students")
        const data = await response.json()
        return { data }

    } catch (error){
        console.error("Error loading data:", error);
    }
}