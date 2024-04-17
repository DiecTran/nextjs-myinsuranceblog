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
      <h1>Hi, I&apos;m An</h1>
      <h2>Insurance Broker And Full Stack Web Developer</h2>
      <p>
        Join me on my blogging odyssey as I uncover the essentials of property
        and business insurance
      </p>
    </section>
  );
}
