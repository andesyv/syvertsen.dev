import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Error 404",
};

export default function NotFound() {
  return (
    <section>
      <p className="mb-4">
        Where are you going?
      </p>
      <p className="mb-4">
        There's nothing here ¯\_(ツ)_/¯
      </p>
    </section>
  );
}
