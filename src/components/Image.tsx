import { useState } from "react"

export const Image = ({ counterCat, image }: any) => {
    const [catUrl] = useState(
        `https://cataas.com/cat/cute?unique=${crypto.randomUUID()}`
    )

    if (counterCat >= 10) {
        return (
            <img
                src={catUrl}
                alt="foto do palestrante"
            />
        )
    }

    return (
        <img
            src={image}
            alt="foto do palestrante"
        />
    )
}