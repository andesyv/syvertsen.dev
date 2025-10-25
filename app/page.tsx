"use client";
import { DateTime, Interval } from "luxon";

const birthday = DateTime.local(1997, 3, 6);

export default function Page() {
  const age = Math.floor(
    Interval.fromDateTimes(birthday, DateTime.local()).length("years"),
  );

  return (
    <section>
      {/*<a href={socialLinks.twitter} target="_blank">*/}
      {/*  <Image*/}
      {/*    src="/profile.png"*/}
      {/*    alt="Profile photo"*/}
      {/*    className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"*/}
      {/*    unoptimized*/}
      {/*    width={160}*/}
      {/*    height={160}*/}
      {/*    priority*/}
      {/*  />*/}
      {/*</a>*/}

      {/*<h1 className="mb-8 text-2xl font-medium tracking-tight">*/}
      {/*  Portfolio, made simple!*/}
      {/*</h1>*/}

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a fullstack developer with a passion for computer graphics and
          real-time rendering. {age}{" "}
          years of age, I am currently a employed as a full-time
          developer{/* at{" "} <a href="https://graphisoft.com">Graphisoft</a>*/}.
          I got a masters degree in informatics specialized in visualization and
          a bachelors degree in games and games technology.
        </p>
        <p>
          Contact me about anything at{" "}
          <code>{"<topic or whatever>@syvertsen.dev"}</code>.
        </p>
      </div>
    </section>
  );
}
