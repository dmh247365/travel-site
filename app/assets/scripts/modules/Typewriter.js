import $ from 'jquery';
import Typed from 'typed.js';


    var Typewriter = new Typed("#typed", {
        strings: ["Yoga makes you healthy. ^1500", "Yoga improves your core strength. ^1500", "Yoga calms your mind. ^2000", "Yoga, why not try it today?"],
        typeSpeed: 15,
        smartBackspace: true,
        backDelay: 1000,
        loop: false,
    });

    $('.typed-cursor').hide();

// need add hide function as a callback onto the AnimationPlaybackEvent, so it hides at the end.

export default Typewriter;