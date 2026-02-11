import { gsap } from "gsap";
import { _numWithUnitExp } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".box", {
//   x: 500,
//   duration: 2,
// });

// gsap.to(".box", {
//   x: 600,
//   y: 200,
//   duration: 3,
//   delay: 2, // Delay is previous duration of 2
// });

// gsap.to(".box", {
// 	x: -200,
//   duration: 1,
//   delay: 5, // Delay is previous duration of 2 + 3 = 5
// });

const tl = gsap.timeline();

// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 1,
//   }
// });

tl.to(".box", {x: 500, duration: 2});
tl.to(".box", {x: 300, y: 200, duration: 1.5});
tl.to(".box", {rotate: 90, repeat: 3, duration: 1, ease: "bounce"}); // Repeat number of times exclude first rotation
tl.to(".box", {scale: 2, duration: 1});
tl.to(".box", {scale: 1, duration: 1, ease: "elastic"});
tl.to(".box", {delay: 3});
tl.to(".box", {x: -200, duration: 1});
