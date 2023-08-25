import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
        src="/images/site/max.png" 
        alt="blah" 
        width={300} 
        height={300} />
      </div>
      <h1>Hi, I'm Thomas!</h1>
      <p>
        This is a test project to help me learn Next.JS and expand my React
        skillset
      </p>
    </section>
  );
}

export default Hero;
