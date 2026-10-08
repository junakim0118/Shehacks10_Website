export default function Home() {
    return (
        <main
            className="
                min-h-screen
                w-full
                flex
                items-center
                justify-center
                bg-[url('/images/Wooden-Background.png')]
                bg-cover
                bg-center
                bg-no-repeat
                px-6
                text-center
            "
        >
            {/*coming soon stuff*/}
            <div className="flex flex-col items-center">

                <h1
                    className="
                        text-[#8f1d1d]
                        text-[52px]
                        sm:text-[72px]
                        md:text-[90px]
                        lg:text-[110px]
                        leading-none
                        drop-shadow-[0_5px_3px_rgba(0,0,0,0.28)]
                    "
                    style={{
                        fontFamily: "var(--font-koulen)",
                    }}
                >
                    COMING SOON
                </h1>

                <p
                    className="
                        mt-4
                        text-[#f3dfb3]
                        text-base
                        sm:text-lg
                        md:text-xl
                        drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]
                    "
                    style={{
                        fontFamily: "var(--font-sometype)",
                    }}
                >
                    We&apos;re working on something exciting.
                </p>

            </div>
        </main>
    );
}
