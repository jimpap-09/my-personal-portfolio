import { useEffect } from 'react';

function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            },
            {
                threshold: 0.12,
            }
        );

        const animatedElements = document.querySelectorAll(
            '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-zoom-in'
        );

        animatedElements.forEach((el) => observer.observe(el));

        // Cleanup όταν αλλάζει route ή κλείνει το component
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* STICKY NAVBAR */}
            <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f9f8f6]/85 border-b border-neutral-200 transition-all duration-300">
                <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
                    <a
                        href="#"
                        className="font-serif text-2xl tracking-tight hover:opacity-80 transition-opacity"
                    >
                        D.Papadimitriou
                    </a>
                    <nav>
                        <ul className="flex gap-5 sm:gap-7 text-xs uppercase tracking-wider text-neutral-500">
                            <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
                            <li><a href="#education" className="hover:text-black transition-colors">Education</a></li>
                            <li><a href="#projects" className="hover:text-black transition-colors">Projects</a></li>
                            <li><a href="#skills" className="hover:text-black transition-colors">Skills</a></li>
                            <li><a href="#contact" className="hover:text-black transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* MAIN CONTAINER */}
            <main className="max-w-6xl mx-auto px-6 overflow-hidden space-y-36 py-14">

                {/* 1. HERO SECTION */}
                <section
                    id="hero"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 pb-32"
                >
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            electrical and computer engineer
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight">
                            Dimitris Papadimitriou
                        </h1>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                            Είμαι συνεργάσιμος, μεθοδικός και προσανατολισμένος στην επίλυση προβλημάτων. Απολαμβάνω να
                            εργάζομαι σε έργα που απαιτούν δημιουργικότητα, τεχνική γνώση και προσοχή στη λεπτομέρεια.
                        </p>
                    </div>

                    <div className="anim-fade-right flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-72 md:h-72 aspect-square rounded-full border border-neutral-300 overflow-hidden bg-neutral-200 shadow-sm flex items-center justify-center">
                            <img
                                className="w-full h-full object-contain hover:scale-105 transition duration-500"
                                src="/profile.png"
                                alt="Dimitris Papadimitriou"
                            />
                        </div>
                    </div>
                </section>

                {/* 2. ABOUT SECTION */}
                <section
                    id="about"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 py-32"
                >
                    <div className="anim-fade-left relative group">
                        <div className="absolute -inset-2 bg-neutral-200/70 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
                        <div className="overflow-hidden rounded-sm border border-neutral-300 shadow-sm bg-neutral-100">
                            <img
                                src="/embedded-systems.webp"
                                alt="NTUA ECE Campus"
                                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 anim-fade-right">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">About</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug">
                            Σχετικά με μένα
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                            Ονομάζομαι Δημήτρης Παπαδημητρίου και μου αρέσει να δημιουργώ καινοτόμες λύσεις που βελτιώνουν την
                            καθημερινή ζωή των ανθρώπων.
                        </p>
                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                            Εστιάζω στην ανάπτυξη αποδοτικών ψηφιακών εμπειριών, σύγχρονων web εφαρμογών και ενσωματωμένων
                            συστημάτων με καθαρή αρχιτεκτονική.
                        </p>
                    </div>
                </section>

                {/* 3. EDUCATION SECTION */}
                <section
                    id="education"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 py-32"
                >
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">Education</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug">
                            Διπλωματούχος Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                            Απόφοιτος της Σχολής Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών του Εθνικού Μετσόβιου
                            Πολυτεχνείου (ΕΜΠ).
                        </p>
                        <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                            Εμβάθυνση σε συστήματα λογισμικού και σε μικροελεγκτές.
                        </p>
                    </div>

                    <div className="anim-fade-right relative group">
                        <div className="absolute -inset-2 bg-neutral-200/70 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
                        <div className="overflow-hidden rounded-sm border border-neutral-300 shadow-sm bg-neutral-100">
                            <img
                                src="/ece.jpg"
                                alt="NTUA Campus"
                                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </section>

                {/* 4. PROJECTS SECTION */}
                <section
                    id="projects"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 py-32 anim-fade-up"
                >
                    <div className="anim-fade-left">
                        <div className="border border-neutral-200 bg-white p-5 rounded-sm shadow-sm hover:border-neutral-400 transition group">
                            <a href="https://www.myapartmentsjp.com" target="_blank" rel="noreferrer" className="block overflow-hidden rounded-xs">
                                <img
                                    src="/myhouseapartmentsjp-image.png"
                                    alt="MyApartmentsJP preview"
                                    className="w-full h-64 object-cover bg-neutral-100 group-hover:scale-105 transition duration-500"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4 anim-fade-right">
                        <div className="flex items-center justify-between">
                            <span className="text-xs uppercase tracking-widest text-neutral-400 block">Projects</span>
                        </div>

                        <h2 className="font-serif text-3xl md:text-4xl font-normal">MyHouseApartmentsJP</h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>

                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                            Μια σύγχρονη web εφαρμογή που περιέχει πληροφορίες για ενοικιαζόμενα διαμερίσματα στην Αθήνα.
                        </p>

                        <div className="pt-2">
                            <a
                                href="https://www.myapartmentsjp.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block text-xs tracking-wider underline underline-offset-4 hover:text-neutral-500 transition"
                            >
                                Επισκεφθείτε την ιστοσελίδα ↗
                            </a>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-neutral-200 text-neutral-500">
                            Web App
                        </span>
                    </div>
                </section>

                {/* 5. SKILLS SECTION */}
                <section
                    id="skills"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 py-32 anim-fade-up"
                >
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">Skills</span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal">Skills & Capabilities</h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Εργαλεία και τεχνολογίες που χρησιμοποιώ για την ανάπτυξη εφαρμογών και την επίλυση προβλημάτων.
                        </p>
                    </div>

                    <div className="anim-fade-right">
                        <ul className="flex flex-wrap gap-2.5 text-xs font-mono">
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">HTML5 / CSS3</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">JavaScript (ES6+)</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">React</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">Node.js</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">Python</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">SQL</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">C</li>
                            <li className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition">C++</li>
                        </ul>
                    </div>
                </section>

                {/* 6. CONTACT SECTION */}
                <section
                    id="contact"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32 anim-fade-up"
                >
                    <div className="anim-fade-left overflow-hidden rounded-sm border border-neutral-300 shadow-sm bg-neutral-100 group">
                        <img
                            src="/callme.jpg"
                            alt="Call Me"
                            className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                        />
                    </div>

                    <div className="space-y-5 anim-fade-right">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">Contact</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">Let’s connect</h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>

                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                            Επικοινώνησε μαζί μου για συνεργασία, ερωτήσεις ή απλώς για να πούμε ένα γεια!
                        </p>

                        <div className="space-y-2 pt-2">
                            <div>
                                <a
                                    href="mailto:jimpap828@gmail.com"
                                    className="inline-block text-xs uppercase tracking-wider underline underline-offset-4 hover:text-neutral-500 transition"
                                >
                                    ✉ jimpap828@gmail.com
                                </a>
                            </div>
                            <div>
                                <a
                                    href="tel:6937410742"
                                    className="inline-block text-xs uppercase tracking-wider text-neutral-600 hover:text-black transition"
                                >
                                    ☎ 6937410742
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
                <p>&copy; 2026 Dimitris Papadimitriou. All rights reserved.</p>
                <a href="mailto:jimpap828@gmail.com" className="hover:text-black transition-colors">
                    jimpap828@gmail.com
                </a>
            </footer>
        </>
    );
}

export default Home;
