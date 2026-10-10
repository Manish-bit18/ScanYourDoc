import { ArrowRight } from "lucide-react"

function Hero() {

    return (
        <section className="px-4 py-12 md:px-8">
            <h1 className="text-8xl font-bold text-slate-900 md:text-5xl">
                Turn Your Documents <br /> Into <span className="text-blue-600">PDFs</span>
            </h1>

            <p className="mt-4 text-lg text-slate-600 md:text-base">
                Scan,edit,and convertyourimagesintohigh-quality<br />
                PDFs directly inyour browser.Fast,free,and private.

            </p>


            <button className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 md:w-auto">
                Start Scanning Now
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>

        </section>


    )

}

export default Hero