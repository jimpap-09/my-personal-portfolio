# Μέσα στον φάκελο του project σου
npm init -y
npm install -D vite typescript
για να δουλέψω με node.js και δημιουργείται ένα αρχείο package.json

# Προσθέτω δύο scripts
    "dev": "vite",
    "build": "vite build"
για να λειτουργήσει ο vite σαν server

# Φτιάχνω ένα αρχείο vite.config.ts και το συμπληρώνω

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
});

για να μπορέσει το vite να αναγνωρίσει το tailwind

# Δημιουργώ ένα φάκελο src/ για να βάλω τα δεδομένα και τους τύπους

