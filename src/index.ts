import { AxiosError } from "axios"
import HttpClient from "./structures/HttpClient"
import { IChannel } from "./types/IChannel"

class TrovoClient extends HttpClient {
    #api_key = ''

    /**
     * Get all information about Channel from Channel Name/Username
     * 
     * @param {string} username - Channel Name/Username
     * @returns {IChannel} Channel Data
     */
    getChannel() {
        this.http.post("/channels/id",
            {
                username: "dombnexengr"
            },
            {
                headers: {
                    "Client-ID": this.#api_key
                }
            }
        )
            .then((res): IChannel => res.data)
            .catch((e): AxiosError | any => console.error(e.message))
    }
}

new TrovoClient().getChannel()