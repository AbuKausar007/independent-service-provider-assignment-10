import React from "react";
import me from "../../images/me.jpeg";

const About = () => {
  return (
    <div>
      <article className="container shadow-lg my-5">
        <h1 className="fw-bold pt-5 px-2 pb-5">A Short Brief About My Goal.</h1>
        <img src={me} alt="" />
        <p className="text-start h2 px-2 py-5">
          My goal is to become a MERN Stack Developer. But at first, I didn't
          know what is development. I was confused how to start my journey. I
          went some institute to learn something to gain some skill .But from
          where I will start I didn't know. That's why I went through some
          unnecessary things. Which didn't help me. After got some experience I
          understand to become a developer it's not easy thing. Then I started
          planning from where I can get a guide line to start my journey as a
          web developer.
        </p>
        <p className="text-start h2 px-2 pb-5">
          From the very begining I was working hard to acheive my goal. But our
          life don't go with our plan. There are obstacle in every step. As a
          only son I have to take care about my family. Those who maintain their
          family don't have much time to gain his skill. Besides that, I am also
          an university going student. So, it is too much pressure for managing
          time. At this point of life, time is the most precious thing for me.
          So, whenever I got a free time, I start learning. May be I'm not
          up-to-date, but I don't stop. I learn every day, even if it is for a
          very short time. That's how I am doing this course. I hope one day my
          hard work will pays off.
        </p>
      </article>
    </div>
  );
};

export default About;
