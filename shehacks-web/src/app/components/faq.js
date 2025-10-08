"use client";
import { useState } from "react";
import Image from "next/image";

const DEFAULT_ITEMS = [
  { q: "When are Hacker Applications?", a: "Hacker applications will be released in November, Keep an eye out on our Social media to be kept up to date with information on SheHacks+." },
  { q: "What will be accommodated?", a: "The arrangements will include meals, comfortable sleeping accommodations, and travel reimbursements for those traveling a considerable distance to the venue." },
  { q: "Where will SheHacks+ take place?", a: "TBD — venue and address to be provided." },
  { q: "Does SheHacks+ cost anything?", a: "SheHacks is completely free, due to our generous sponsors! You will have access to a multitude of workshops and tools to help with your hack!" },
  { q: "Do I need to come with a team?", a: "You can come solo or with a team. If you already have a team of ( 3-4 people), you can register with them! If you don’t have a team there will be time before hacking to form teams or we can match you up with one before the event." },
  { q: "Can I still come if I’m not a woman+?", a: "SheHacks+ is designed to be an inclusive space to support female-identifying and non-binary individuals who are interested in technology. As we're focused on creating a talent pipeline from minorities in tech, this event is specifically created as a place for women+ to explore the tech industry in a supportive way. Otherwise, we welcome people of all genders to participate as a volunteer or mentor. Keep an eye out on our Facebook and website for more information." },
  { q: "I’m a recently graduated student. Can I still apply?", a: "Yes! We welcome all students as well as new grads to attend SheHacks+. There will be many opportunities to meet with sponsors and network. This would be the perfect time to search for a job/internship!" },
  { q: "I don’t attend a Canadian university. Can I still apply?", a: "Yes! SheHacks+ welcomes students from around the world to participate. The only downside is we may not be able to reimburse your travel costs to our venue." },
];

export default function Faq({ items = DEFAULT_ITEMS }) {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="relative scroll-mt-28 py-16 sm:py-20 w-full">
      <h2 className="text-center font-semibold text-white"
          style={{ fontSize: "clamp(24px, 3vw, 34px)" }}>
        FAQ
      </h2>

      <div className="mx-auto mt-6 sm:mt-8 w-full max-w-3xl px-4">
        <ul className="divide-y divide-white/15">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i} className="py-3 sm:py-4">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="group w-full flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
                >
                  <span
                    className="text-white font-semibold tracking-tight"
                    style={{ fontSize: "clamp(14px, 1.6vw, 18px)" }}
                  >
                    {item.q}
                  </span>

                  <span className="relative inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
                    <span className="absolute h-[2px] w-3.5 bg-white transition-opacity duration-200" />
                    <span
                      className={`absolute h-3.5 w-[2px] bg-white transition-transform duration-200 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>

                {/* answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-3 text-white/95 font-normal leading-relaxed"
                      style={{ fontSize: "clamp(13px, 1.4vw, 16px)" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pointer-events-none absolute right-[-150] top-50 hidden sm:block opacity-100">
        <Image
          src="/images/faqstars.png"
          alt=""
          width={48}
          height={48}
          className="select-none"
          priority
        />
      </div>
    </section>
  );
}
