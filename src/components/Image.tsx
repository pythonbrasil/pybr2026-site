import { useState } from "react"

export const Image = ({ catMode, image }: any) => {
    const [catUrl] = useState(
        `https://cataas.com/cat/cute?unique=${crypto.randomUUID()}`
    )

    return (
        <img
            src={catMode ? catUrl : image}
            alt="foto do palestrante"
        />
    )
}