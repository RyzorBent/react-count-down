import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import GlobalColors from "../assets/colors/GlobalColors";

function HeroParticles() {
  const containerRef = useRef(null),
    [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, [init]);

  const particlesLoaded = useCallback(
      (container) => {
        containerRef.current = container;

        window.particlesContainer = container;
      },
      [containerRef],
    ),
    options = useMemo(
      () => ({
        particles: {
          number: {
            value: 12,
            density: {
              enable: true,
              value_area: 473.51100518494565,
            },
          },
          color: {
            value: GlobalColors.lightPurple,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 5.5,
            random: true,
            anim: {
              enable: false,
              speed: 275.4716981132076,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 650,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 160,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }),
      [],
    ),
    lightTheme = () => {
      containerRef.current?.loadTheme("light");
    },
    darkTheme = () => {
      containerRef.current?.loadTheme("dark");
    };

  console.log({ init, particlesLoaded, options });
  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
    </>
  );
}

export default HeroParticles;
