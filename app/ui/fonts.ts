import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

// 数值越大，字体越粗
// 两个数值，同一个文本就会有两种粗细，但是如何控制哪个文本粗，哪个细呢？
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700']});
