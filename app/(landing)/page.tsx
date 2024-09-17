import { Heading } from "./_components/headings";
import { Heroes } from "./_components/heroes";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-cneter md:justify-start text-center gap-y-8 felx-1 px-6 pb-10">
        <Heading />
        <Heroes />
      </div>
    </div>
  );
}

export default LandingPage;
