import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div>
      <h1 className="font-sans font-black mb-5">Portfolio</h1>

      <div>On this page, I would like to show you some of my projects.</div>

      <div className="mt-5">
        Here is a screenshot of my latest project, the PresseBox website:
        <div className="border-1 p-2">
          {
            <Image
              hidden={false}
              className="mt-5 border-1"
              width={1024}
              height={676}
              alt="Screenshot of the PresseBox website"
              src={
                "https://www.unn-online.de/wp-content/uploads/2022/11/produkte-pressebox-1024x676.png"
              }
            />
          }
        </div>
      </div>
    </div>
  );
}
