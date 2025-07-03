import { Metadata } from "next";

type Props = {
  params: { invitecode: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const invitecode = params.invitecode;

  return {
    metadataBase: new URL('https://thankful-plant-0a508e91e.1.azurestaticapps.net'),
    title: `[Spacecoin] Airdrop - Come and Play!`,
    description: `Please enter the invitation code ${invitecode}.`,
    applicationName: 'Application Name',
    authors: [{ name: 'Spacecoin', url: 'https://spacecoin.org' }],
    openGraph: {
      title: `[Spacecoin] Airdrop - Come and Play!`,
      description: `Please enter the invitation code ${invitecode}.`,
      url: `/spacecoin/${invitecode}`,
      siteName: '[Spacecoin] Airdrop - Come and Play!',
      images: [{ url: '/og-spacecoin.png' }]
    },
    twitter: {
      card: "summary_large_image",
      site: "@_spacecoin",
      creator: "@_spacecoin",
      images: '/og-spacecoin.png'
    },
  }
}

export default async function Page({
  params,
}: {
  params: { invitecode: string };
}) {
  const { invitecode } = params;
  
  return <div>Spacecoin Invite: {invitecode}</div>;
}