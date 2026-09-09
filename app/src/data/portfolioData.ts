// src/data/portfolioData.ts

export interface NavLink {
    label: string;
    href: string;
}

export interface Project {
    title: string;
    category: string;
    description: string;
    link: string;
    image: string;
}

export interface PortfolioData {
    personal: {
        name: string;
        title: string;
        bio: string;
        profileImage: string;
        email: string;
        phone: string;
        phoneFormatted: string;
    };
    navLinks: NavLink[];
    about: {
        title: string;
        badge: string;
        image: string;
        paragraphs: string[];
    };
    education: {
        title: string;
        badge: string;
        image: string;
        details: string[];
    };
    projects: Project[];
    skills: string[];
}

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Dimitris Papadimitriou',
        title: 'Electrical & Computer Engineer',
        bio: 'Είμαι συνεργάσιμος, μεθοδικός και προσανατολισμένος στην επίλυση προβλημάτων. Απολαμβάνω να εργάζομαι σε έργα που απαιτούν δημιουργικότητα, τεχνική γνώση και προσοχή στη λεπτομέρεια.',
        profileImage: '/profile.png',
        email: 'jimpap828@gmail.com',
        phone: '6937410742',
        phoneFormatted: '6937410742',
    },
    navLinks: [
        { label: 'Home', href: '#' },
        { label: 'About', href: '#about' },
        { label: 'Education', href: '#education' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
    ],
    about: {
        badge: 'About',
        title: 'Σχετικά με μένα',
        image: '/embedded-systems.webp',
        paragraphs: [
            'Ονομάζομαι Δημήτρης Παπαδημητρίου και μου αρέσει να δημιουργώ καινοτόμες λύσεις που βελτιώνουν την καθημερινή ζωή των ανθρώπων.',
            'Εστιάζω στην ανάπτυξη αποδοτικών ψηφιακών εμπειριών, σύγχρονων web εφαρμογών και ενσωματωμένων συστημάτων με καθαρή αρχιτεκτονική.',
        ],
    },
    education: {
        badge: 'Education',
        title: 'Διπλωματούχος Ηλεκτρολόγος Μηχανικός & Μηχανικός Υπολογιστών',
        image: '/ece.jpg',
        details: [
            'Απόφοιτος της Σχολής Ηλεκτρολόγων Μηχανικών και Μηχανικών Υπολογιστών του Εθνικού Μετσόβιου Πολυτεχνείου (ΕΜΠ).',
            'Εμβάθυνση σε συστήματα λογισμικού και σε μικροελεγκτές.',
        ],
    },
    projects: [
        {
            title: 'MyHouseApartmentsJP',
            category: 'Web App',
            description: 'Μια σύγχρονη web εφαρμογή που περιέχει πληροφορίες για ενοικιαζόμενα διαμερίσματα στην Αθήνα.',
            link: 'https://www.myapartmentsjp.com',
            image: '/myhouseapartmentsjp-image.png',
        },
        {
            title: 'stm32-nucleo',
            category: 'Embedded Systems',
            description: 'Ένα repo που περιέχει πολλά προγράμματα για έλεγχο περιφερειακών του Cortex-M4.',
            link: 'https://github.com/jimpap-09/stm32mp1',
            image: '/nucleo-g474re.jpg',
        }
    ],
    skills: [
        'HTML5 / CSS3',
        'JavaScript (ES6+)',
        'React',
        'TypeScript',
        'Javascript',
        'Tailwind CSS',
        'Node.js',
        'Python',
        'SQL',
        'C',
        'C++',
        'ML',
        'Prolog',
    ],
};
