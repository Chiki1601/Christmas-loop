gsap.registerPlugin(MotionPathPlugin);

gsap.set("svg", { opacity: 1, display: "block" });

gsap.set("#ball2, #ball1, #ball5", {
  xPercent: -50,
  yPercent: -50,
  transformOrigin: "50% 50%"
});

CustomEase.create(
  "jumping",
  "M0,0,C0,0.304,0.39,0.447,0.5,0.5,0.612,0.554,1,0.696,1,1"
);

CustomEase.create("parabola", "M0,0,C0.656,1.418,0.972,0,1,0");

var tlBalls = gsap
  .timeline({ repeat: -1 })

  // var tlBalls = gsap
  //   .timeline()

  .to("#ball2", {
    rotation: 120,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop1",
      align: "#pathTop1"
    }
  })
  // .fromTo(
  //   "#ball3",
  //   {
  //     yPercent: 3
  //   },
  //   {
  //     yPercent: 0,
  //     duration: 0.2,
  //     ease: "elastic"
  //   }
  // )
  .to("#ball2", {
    rotation: 240,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop2",
      align: "#pathTop2"
    }
  })
  .to("#ball2", {
    rotation: 360,
    duration: 0.8,
    ease: "jumping",
    motionPath: {
      path: "#pathTop3",
      align: "#pathTop3"
    }
  })

  .to(
    "#ball5",
    {
      rotation: 720,
      duration: 1,
      ease: "power1.in",
      motionPath: {
        path: "#pathBottom",
        align: "#pathBottom"
      }
    },
    "<-0.01"
  )

  .to("#ball1", {
    rotation: 120,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop1",
      align: "#pathTop1"
    }
  })
  .to("#ball1", {
    rotation: 240,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop2",
      align: "#pathTop2"
    }
  })
  .to("#ball1", {
    rotation: 360,
    duration: 0.8,
    ease: "jumping",
    motionPath: {
      path: "#pathTop3",
      align: "#pathTop3"
    }
  })

  .to(
    "#ball2",
    {
      rotation: 720,
      duration: 1,
      ease: "power1.in",
      motionPath: {
        path: "#pathBottom",
        align: "#pathBottom"
      }
    },
    "<-0.01"
  )

  .to("#ball5", {
    rotation: 120,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop1",
      align: "#pathTop1"
    }
  })
  .to("#ball5", {
    rotation: 240,
    duration: 1,
    ease: "jumping",
    motionPath: {
      path: "#pathTop2",
      align: "#pathTop2"
    }
  })
  .to("#ball5", {
    rotation: 360,
    duration: 0.8,
    ease: "jumping",
    motionPath: {
      path: "#pathTop3",
      align: "#pathTop3"
    }
  })

  .to(
    "#ball1",
    {
      rotation: 720,
      duration: 1,
      ease: "power1.in",
      motionPath: {
        path: "#pathBottom",
        align: "#pathBottom"
      }
    },
    "<-0.01"
  );

var tlIntro = gsap
  .timeline()
  .from("#year text", { opacity: 0, stagger: 0.5, duration: 2 })
  .from("#balls", { opacity: 0, duration: 1.2, delay: 3 }, 0);

tlBalls.play();
tlIntro.play();

document.querySelector("svg").addEventListener("click", () => {
  tlBalls.play(0);
});