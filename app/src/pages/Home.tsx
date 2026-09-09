import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

function Home() {
    const { personal, navLinks, about, education, projects, skills } = portfolioData;

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
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a href={item.href} className="hover:text-black transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>

            {/* MAIN CONTAINER */}
            <main className="max-w-6xl mx-auto px-6 overflow-hidden py-14">

                {/* 1. HERO SECTION */}
                <section
                    id="hero"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 pb-32"
                >
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            {personal.title}
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl font-normal leading-[1.05] tracking-tight">
                            {personal.name}
                        </h1>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                            {personal.bio}
                        </p>
                    </div>

                    <div className="anim-fade-right flex justify-center md:justify-end">
                        <div className="w-64 h-64 md:w-72 md:h-72 aspect-square rounded-full border border-neutral-300 overflow-hidden bg-neutral-200 shadow-sm flex items-center justify-center">
                            <img
                                className="w-full h-full object-contain hover:scale-105 transition duration-500"
                                src={personal.profileImage}
                                alt={personal.name}
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
                                src={about.image}
                                alt="About Preview"
                                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 anim-fade-right">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            {about.badge}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug">
                            {about.title}
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        {about.paragraphs.map((p, idx) => (
                            <p key={idx} className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                {p}
                            </p>
                        ))}
                    </div>
                </section>

                {/* 3. EDUCATION SECTION */}
                <section
                    id="education"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-neutral-200 py-32"
                >
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            {education.badge}
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal leading-snug">
                            {education.title}
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">••••••••</div>
                        {education.details.map((detail, idx) => (
                            <p key={idx} className="text-neutral-600 leading-relaxed text-sm md:text-base">
                                {detail}
                            </p>
                        ))}
                    </div>

                    <div className="anim-fade-right relative group">
                        <div className="absolute -inset-2 bg-neutral-200/70 rounded-sm -z-10 translate-x-2 translate-y-2"></div>
                        <div className="overflow-hidden rounded-sm border border-neutral-300 shadow-sm bg-neutral-100">
                            <img
                                src={education.image}
                                alt="Education Campus"
                                className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                            />
                        </div>
                    </div>
                </section>

                {/* 4. PROJECTS SECTION */}
                <section
                    id="projects"
                    className="scroll-mt-28 space-y-16 border-b border-neutral-200 py-32"
                >
                    {/* ΚΕΝΤΡΙΚΗ ΕΠΙΚΕΦΑΛΙΔΑ (ΜΙΑ ΦΟΡΑ ΠΑΝΩ-ΠΑΝΩ) */}
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            Projects
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal">
                            Featured Work
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">
                            ••••••••
                        </div>
                        <p className="text-neutral-600 text-sm md:text-base max-w-2xl leading-relaxed">
                            Επιλεγμένα έργα και web εφαρμογές που έχω αναπτύξει.
                        </p>
                    </div>

                    {/* ΛΙΣΤΑ PROJECTS (ΜΟΝΟ ΟΙ ΚΑΡΤΕΣ ΚΑΝΟΥΝ LOOP) */}
                    <div className="space-y-24">
                        {projects.map((proj) => (
                            <div
                                key={proj.title}
                                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                {/* Αριστερά: Εικόνα Project */}
                                <div className="anim-fade-left">
                                    <div className="border border-neutral-200 bg-white p-5 rounded-sm shadow-sm hover:border-neutral-400 transition group">
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="block overflow-hidden rounded-xs"
                                        >
                                            <img
                                                src={proj.image}
                                                alt={`${proj.title} preview`}
                                                className="w-full h-64 object-cover bg-neutral-100 group-hover:scale-105 transition duration-500"
                                            />
                                        </a>
                                    </div>
                                </div>

                                {/* Δεξιά: Στοιχεία Project */}
                                <div className="space-y-4 anim-fade-right">
                                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-neutral-200 text-neutral-500 inline-block">
                                        {proj.category}
                                    </span>

                                    <h3 className="font-serif text-2xl md:text-3xl font-normal">
                                        {proj.title}
                                    </h3>

                                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                                        {proj.description}
                                    </p>

                                    <div className="pt-2">
                                        <a
                                            href={proj.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block text-xs tracking-wider underline underline-offset-4 hover:text-neutral-500 transition"
                                        >
                                            Επισκεφθείτε την ιστοσελίδα ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {/* 5. SKILLS SECTION */}
                <section
                    id="skills"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32 border-b border-neutral-200"
                >
                    {/* Αριστερή στήλη: Τίτλος & Περιγραφή */}
                    <div className="space-y-4 anim-fade-left">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            Skills
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl font-normal">
                            Skills &amp; Capabilities
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">
                            ••••••••
                        </div>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                            Εργαλεία και τεχνολογίες που χρησιμοποιώ για την ανάπτυξη εφαρμογών και την επίλυση προβλημάτων.
                        </p>
                    </div>

                    {/* Δεξιά στήλη: Δυναμική λίστα από tags */}
                    <div className="anim-fade-right">
                        <ul className="flex flex-wrap gap-2.5 text-xs font-mono">
                            {skills.map((skill) => (
                                <li
                                    key={skill}
                                    className="px-3.5 py-2 border border-neutral-300 bg-white hover:border-black transition"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                {/* 6. CONTACT SECTION */}
                <section
                    id="contact"
                    className="scroll-mt-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-32 anim-fade-up"
                >
                    {/* Αριστερή στήλη: Εικόνα Επικοινωνίας */}
                    <div className="anim-fade-left overflow-hidden rounded-sm border border-neutral-300 shadow-sm bg-neutral-100 group">
                        <img
                            src="/callme.jpg"
                            alt="Contact Dimitris"
                            className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                        />
                    </div>

                    {/* Δεξιά στήλη: Κείμενο & Στοιχεία Επικοινωνίας */}
                    <div className="space-y-5 anim-fade-right">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 block">
                            Contact
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight">
                            Let’s connect
                        </h2>
                        <div className="flex gap-1.5 text-neutral-300 text-sm select-none">
                            ••••••••
                        </div>

                        <p className="text-neutral-600 text-sm md:text-base leading-relaxed">
                            Επικοινώνησε μαζί μου για συνεργασία, τεχνικές ερωτήσεις ή οποιαδήποτε επαγγελματική ευκαιρία!
                        </p>

                        <div className="space-y-3 pt-2">
                            <div>
                                <a
                                    href={`mailto:${personal.email}`}
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider  text-neutral-800 hover:text-black transition"
                                >
                                    <span>✉</span>
                                    <span>{personal.email}</span>
                                </a>
                            </div>

                            <div>
                                <a
                                    href={`tel:${personal.phone}`}
                                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600 hover:text-black transition"
                                >
                                    <span>☎</span>
                                    <span>{personal.phoneFormatted}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
                <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
                <a href={`mailto:${personal.email}`} className="hover:text-black transition-colors">
                    {personal.email}
                </a>
            </footer>
        </>
    );
}

export default Home;
