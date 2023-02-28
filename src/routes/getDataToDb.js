export const getDataToDb = async () => {
    try {
        const servicesData = await fetch("http://localhost:5000/");
        const services = await servicesData.json();

        const reviewsData = await fetch("http://localhost:5000/reviews");
        const reviews = await reviewsData.json();

        const data = {
            success: true,
            data: {
                services: services,
                reviews: reviews
            }
        }
        return data

    } catch (error) {
        const data = {
            success: false,
            data: {}
        }
        return data
    }
}