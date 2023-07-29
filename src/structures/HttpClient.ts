import axios, { AxiosInstance } from "axios"

export default class Http {
    /**
     * Base API endpoint
     */
    private BASE_URL: string = "https://open-api.trovo.live/openplatform";

    /**
     * HTTP Client
     */
    public get http(): AxiosInstance {
        const instance = axios.create({
            baseURL: this.BASE_URL,
            headers: {
                "Content-Type": "application/json"
            }
        })
        return instance;
    }
}