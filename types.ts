export interface Industry {
  name: string;
  icon: string;
}

export interface Feature {
  Titulo: string;
  Descripcion: string;
  Lado: 'left' | 'right';
  Link: string;
}

// FIX: Add missing Client interface.
export interface Client {
  name: string;
  logoUrl: string;
}

export interface Background {
    Id: string;
    Web: string;
    Link: string;
}

// FIX: Add missing Testimonial interface to resolve import error in components/Testimonials.tsx.
export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
