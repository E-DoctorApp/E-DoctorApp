import React from 'react'
import cardService from "../../assets/images/card-service.png"

const CardService = () => {
    return (
        <div style={{ width: "30%" }} className="card-service-container d-flex flex-column  gap-3">
            <div>
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={cardService} />
            </div>
            <span style={{ color: "#007E85", fontSize: "1.5rem", fontWeight: "700" }}>Dental treatments</span>
            <p
                style={{ color: "#555", fontWeight: "400", fontSize: "1rem" }}
            >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus odio totam vel blanditiis? Aliquid sapiente eos, aut molestiae expedita, consequatur eum saepe obcaecati blan
                ditiis non perferendis, illo qui iusto vitae.</p>
        </div>
    )
}

export default CardService