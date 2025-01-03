import { gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const sectionAnimation = () => {

    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        const sectionLabel = section.querySelector('.section-label');
        const sectionImage = section.querySelector('.section-image');
        const sectionTitle = section.querySelectorAll('.section-title');
        const navLogo = document.querySelector('.nav-logo');
        const heroEscudo = document.querySelector('#hero-escudo');

      

        gsap.to(navLogo, {
            filter: "grayscale(0%)",
            rotate: "360deg", // Elimina el efecto blanco y negro
            duration: 0.5, 
            ease:"circ.in",          // Duración de la transición
            scrollTrigger: {
                trigger: heroEscudo,    // Elemento que activa la animación
                start: "bottom -2%",      // Ajusta el inicio de la animación
                toggleActions: "play none none reverse", // Reproduce o invierte según el scroll
            },
            });


        gsap.from(sectionLabel, {
            scrollTrigger: {
                trigger: sectionLabel,
                start: 'top 80%',
                markers: true,
            },
            duration: 1,
            opacity: 0,
            y: -30,
            ease: 'power1.out',
        });

        gsap.from(sectionImage, {
            scrollTrigger: {
                trigger: sectionImage,
                start: 'top 80%',
                markers: true,
            },
            duration: 1,
            opacity: 0,
            y: 60,
            ease: 'power1.out',
        });

        gsap.from(sectionTitle, {
            scrollTrigger: {
                trigger: sectionTitle,
                start: 'top 70%',
                markers: true,
            },
            duration: .8,
            opacity: 0,
            y: 100,
            stagger: 0.2,
            ease: 'power1.out',
        });
    });

  
}

