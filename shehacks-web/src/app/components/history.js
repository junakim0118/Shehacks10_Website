import Image from "next/image";

export default function HistorySection() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src="/images/history.png"
        alt="History of SheHacks+"
        width={1200} // adjust based on your design
        height={600} // adjust based on your design
        priority
      />
    </section>
  );
}
