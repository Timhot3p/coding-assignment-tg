export default function NotFound() {
  return (
    <div>
      <h1 className="font-sans font-black text-3xl mb-5">404 :(</h1>
      <div>
        <p>
          The page you are looking for does not exist, even though I am pretty
          sure that I have created it. Maybe you could check the{" "}
          <code>./src/app</code> directory if I have made a mistake with{" "}
          <a
            href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts"
            target="_blank"
            className="underline hover:no-underline"
          >
            NextJS routing
          </a>{" "}
          for the requested page?
        </p>
        <p className="mt-2">
          I am sure there should be pages for Home, About, Portfolio, and
          Contact.
        </p>
      </div>
    </div>
  );
}
