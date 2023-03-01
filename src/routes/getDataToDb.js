export const getDataToDb = async () => {
    try {
        const servicesData = await fetch("https://pics-now-server-side.vercel.app/");
        const services = await servicesData.json();

        // const reviewsData = await fetch("https://pics-now-server-side.vercel.app/reviews");
        // const reviews = await reviewsData.json();

        const usersData = await fetch("https://pics-now-server-side.vercel.app/users");
        const users = await usersData.json();

        const data = {
            success: true,
            data: {
                services: services,
                // reviews: reviews,
                users: users
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