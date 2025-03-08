import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// ! optimize the performance of the font loading by specifying the weights and subsets
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
