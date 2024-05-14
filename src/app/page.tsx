export default function Home() {
  return (
    <>
      <header>
        <h1 className="app-header font-bold mx-8 mt-8 text-2xl text-green-700 before:content-['['] before:text-white after:content-[']'] after:text-white">
          SeanHeintz.exe
        </h1>
      </header>
      <main className="container max-w-3xl text-justify mx-auto p-4">
        <section>
          <h2 className="my-4 text-xl">Things I am</h2>
          <p className="text-red-600 my-2">
            sean dot heintz at google&apos;s mail domain
          </p>
          <p className="mb-2">
            Dedicated, life-long learner with a passion for building scalable,
            intuitive systems and baking bread. I&apos;m currently taking some time off
            between opportunities to spend time with friends and family, and focus
            on learning and networking.
          </p>
          <p className="mb-2">
            I enjoy working with a team of diverse, talented, and interesting
            individuals from many backgrounds. Be it developers who have been in
            the industry for years, or brand new programmers who are just
            learning the basics; Every member of a team brings valuable
            perspectives that can lead to personal and professional development.
          </p>
          <ul className="mt-4 list-['*'] list-inside">
            <li>
              <span className="text-amber-500 pl-2">[2024/04 - *]</span> - Sabbatical - Cat Dad
            </li>
          </ul>
        </section>

        <section>
          <h2 className="my-4 text-xl">Things I was</h2>
          <ul className="list-['*'] list-inside">
            <li>
              <span>
                <span className="text-amber-500 pl-2">[2021/02 - 2024/04]</span> - Neo
                Financial - Principal Software Engineer
              </span>
            </li>
            <li>
              <span>
                <span className="text-amber-500 pl-2">[2016/12 - 2021/01]</span>{" "}
                - Replicon - Full Stack Software Engineer
              </span>
            </li>
            <li>
              <span>
                <span className="text-amber-500 pl-2">[2014/05 - 2016/11]</span>{" "}
                - Hitachi ID Systems Inc - Solutions Architect
              </span>
            </li>
            <li>
              <span>
                <span className="text-amber-500 pl-2">[2010/08 - 2014/04]</span>{" "}
                - University of Calgary - B.Sc. Computer Science
              </span>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="my-4 text-xl">Things I do</h2>
          <ul className="list-['*'] list-inside">
            <li>
              <span className="pl-2">
                <span>GraphQL</span> - Enabling distributed, robust APIs at
                scale.
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>AWS</span> - Simple cloud services that just work.
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>ReactJS</span> - Responsive and reactive interfaces.
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>Typescript</span> - Making the Javascript ecosystem
                sensible again.
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>NextJS</span> - Opinionated without being obtuse.
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>Go</span> - Who says a language can&apos;t be fast <b>and</b>{" "}
                fun to write?
              </span>
            </li>
          </ul>
          <ul className="mt-4 list-['*'] list-inside">
            <li>
              <span className="pl-2">
                <span>Mentorship</span> - Let&apos;s grow.{" "}
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>Empathy</span> - Let&apos;s understand.{" "}
              </span>
            </li>
            <li>
              <span className="pl-2">
                <span>Passion</span> - Let&apos;s build.{" "}
              </span>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
