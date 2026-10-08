export default function Home() {
    return (
        <main
            className="
                min-h-screen
                w-full
                flex
                items-center
                justify-center
                bg-[url('/images/background_main.png')]
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
                        text-white
                        text-[52px]
                        sm:text-[72px]
                        md:text-[90px]
                        lg:text-[110px]
                        leading-none
                        drop-shadow-[0_6px_6px_rgba(0,0,0,0.35)]
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
                        text-white
                        text-base
                        sm:text-lg
                        md:text-xl
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
