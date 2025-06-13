import React from 'react';
import './TeamSection.css';
import TeamMember from './TeamMember';

const TeamSection = () => {
    const teamMembers = [
        {
            name: "Juan Diego Florez",
            role: "Desarrollador",
            image: "per_1.avif",
            description: "Experto en negocios con más de 10 años de experiencia en el sector.",
            twitter: "#",
            linkedin: "#",
            email: "juan@ejemplo.com"
        },
        {
            name: "Paula Andrea Pulido",
            role: "Directora de Diseño",
            image: "per_2.avif",
            description: "Apasionada por el diseño centrado en el usuario y las experiencias digitales.",
            twitter: "#",
            linkedin: "#",
            email: "Paula@ejemplo.com"
        },
        {
            name: "Juan Andres Antolinez",
            role: "Desarrollador",
            image: "per_4.jpeg",
            description: "Especialista en React y Node.js con amplia experiencia en proyectos escalables.",
            twitter: "#",
            linkedin: "#",
            email: "carlos@ejemplo.com"
        },
        {
            name: "Daniel Santiago Cano",
            role: "Desarrollador",
            image: "per_3.jpg",
            description: "Estratega digital con enfoque en crecimiento orgánico y engagement.",
            twitter: "#",
            linkedin: "#",
            email: "ana@ejemplo.com"
        }
    ];

    return (
        <section className="team-section">
            <h2>Nuestro Equipo</h2>
            <div className="team-members-container">
                {teamMembers.map((member, index) => (
                    <TeamMember 
                        key={index}
                        member={member}  // Pasa todo el objeto member como prop
                    />
                ))}
            </div>
        </section>
    );
};

export default TeamSection;