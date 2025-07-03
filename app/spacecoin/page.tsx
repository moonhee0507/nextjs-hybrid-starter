import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://thankful-plant-0a508e91e.1.azurestaticapps.net'),
  title: `[Spacecoin] Airdrop - Come and Play!`,
  description: `Get started with the [Spacecoin] Airdrop.`,
  openGraph: {
    title: '[Spacecoin] Airdrop - Come and Play!',
    description: `Get started with the [Spacecoin] Airdrop.`,
    url: '/spacecoin',
    siteName: '[Spacecoin] Airdrop - Come and Play!',
    images: [{ url: 'https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: '[Spacecoin] Airdrop - Come and Play!',
    description: `Get started with the [Spacecoin] Airdrop.`,
    images: [{ url: 'https://files.gluwa.com/media/meta/spacecoin-org/20241030/meta-image.png' }]
  },
};

export default function Page() {
  return <div>Spacecoin</div>;
}