import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-center">
      <div className="flex items-center justify-center">
        <Button>Kill me</Button>
      </div>

      <div className="mt-8">
        <Input />
      </div>

      <div className="mt-8">
        <p className="font-aspekta">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugit
          autem corporis cumque velit aspernatur distinctio possimus architecto.
          Error vero assumenda eos perspiciatis amet, aspernatur repellendus
          inventore repellat quis officia?
        </p>
      </div>
    </div>
  );
}
