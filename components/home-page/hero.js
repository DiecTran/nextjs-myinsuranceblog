import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          // src="/images/an-my-image.png"
          src="/images/site/an-my-image.png"
          alt="An image showing An"
          width={300}
          height={300}
          priority={true}
        />
      </div>
      <h1>
        Hi, I&apos;m An - Insurance Broker - Full Stack Web & Mobile App
        Developer{" "}
      </h1>
      <p>I blog about web development - Full Stack Web App</p>
    </section>
  );
}
