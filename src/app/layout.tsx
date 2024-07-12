import type { Metadata } from 'next';
import './globals.css';
import { Geist, Reenie } from '../lib/fonts';
import { getMenuData } from '../sanity/sanity.query';
import { getFooterData } from '../sanity/sanity.query';
import Menu from '~components/Menu';
import Footer from '~components/Footer';

export const metadata: Metadata = {
  title: 'Elin Deninger',
  description: 'Elin Deninger | Portfolio',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuData = await getMenuData();
  const footerData = await getFooterData();

  return (
    <html lang="en">
      <body className={`${Geist.variable} ${Reenie.variable}`}>
        <Menu {...menuData} />
        {children}
        <Footer {...footerData} />
      </body>
    </html>
  );
}
