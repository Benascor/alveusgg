import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { formatDateUTC } from "@/utils/datetime";

import Section from "@/components/content/Section";
import Heading from "@/components/content/Heading";
import Meta from "@/components/content/Meta";
import { Lightbox, Preview } from "@/components/content/YouTube";

import leafRightImage1 from "@/assets/floral/leaf-right-1.png";
import leafRightImage2 from "@/assets/floral/leaf-right-2.png";
import leafLeftImage3 from "@/assets/floral/leaf-left-3.png";
import leafLeftImage1 from "@/assets/floral/leaf-left-1.png";

type Collaboration = {
  name: string;
  link: string;
  date: Date;
  videoId: string;
  vodId?: string;
};

const collaborations = {
  pointCrow: {
    name: "PointCrow",
    link: "https://www.twitch.tv/pointcrow",
    date: new Date("2023-03-24"),
    videoId: "Qz1Iniho9-g",
  },
  russel: {
    name: "Russel",
    link: "https://www.twitch.tv/russel",
    date: new Date("2023-03-20"),
    videoId: "OUaYjkkLeFQ",
  },
  ludwig: {
    name: "Ludwig",
    link: "https://www.youtube.com/@ludwig",
    date: new Date("2023-02-25"),
    videoId: "po1jytjDu4E",
    vodId: "vuLMTU8QHAU",
  },
  alinity: {
    name: "Alinity",
    link: "https://www.twitch.tv/alinity",
    date: new Date("2023-02-09"),
    videoId: "qJpZzDMotmc",
    vodId: "XHTEs94Cf4s",
  },
  connorEatsPants: {
    name: "ConnorEatsPants",
    link: "https://www.twitch.tv/connoreatspants",
    date: new Date("2023-01-25"),
    videoId: "nC8qlK3k96Q",
    vodId: "SMEyEfVlzlM",
  },
  botezSisters: {
    name: "The Botez Sisters",
    link: "https://www.twitch.tv/botezlive",
    date: new Date("2022-08-30"),
    videoId: "QgvNy11kU6E",
  },
  knut: {
    name: "Knut",
    link: "https://www.twitch.tv/knut",
    date: new Date("2022-08-09"),
    videoId: "lFhFx6kf2E4",
  },
  moistCr1tikal: {
    name: "MoistCr1TiKaL",
    link: "https://www.twitch.tv/moistcr1tikal",
    date: new Date("2022-04-30"),
    videoId: "pb7MR59s1Z0",
    vodId: "x-OPvwjGHEU",
  },
  jackManifold: {
    name: "Jack Manifold",
    link: "https://www.twitch.tv/jackmanifoldtv",
    date: new Date("2022-04-22"),
    videoId: "jzyxhnODe2g",
  },
} as const satisfies Record<string, Collaboration>;

type CollaborationsSectionProps = {
  items: Record<string, Collaboration>;
};

const CollaborationsSection: React.FC<CollaborationsSectionProps> = ({
  items,
}) => {
  return (
    <Lightbox id="collaborations" className="flex flex-wrap">
      {({ Trigger }) => (
        <>
          {Object.entries(items).map(([key, value]) => (
            <div
              key={key}
              className="mx-auto flex basis-full flex-col items-center justify-start py-8 md:px-8 lg:basis-1/2"
            >
              <Heading
                level={2}
                className="flex flex-wrap items-end justify-center gap-x-8 gap-y-2"
              >
                <Link
                  href={value.link}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-alveus-green-600 hover:underline"
                >
                  {value.name}
                </Link>
                <small className="text-xl text-alveus-green-600">
                  {formatDateUTC(value.date, "long")}
                </small>
              </Heading>

              <Trigger
                videoId={value.videoId}
                caption={`${value.name}: ${value.date}`}
                className="w-full max-w-2xl"
              >
                <Preview videoId={value.videoId} />
              </Trigger>

              {value.vodId && (
                <Link
                  href={`https://www.youtube.com/watch?v=${value.vodId}&list=PLtQafKoimfLd6dM9CQqiLm79khNgxsoN3`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-alveus-green-700 hover:underline"
                >
                  (Full stream VoD)
                </Link>
              )}
            </div>
          ))}
        </>
      )}
    </Lightbox>
  );
};

const CollaborationsPage: NextPage = () => {
  return (
    <>
      <Meta
        title="Collaborations"
        description="We work with other content creators to educate our combined audiences, introducing them to the educational ambassadors at Alveus and their conservation missions."
      />

      {/* Nav background */}
      <div className="-mt-40 hidden h-40 bg-alveus-green-900 lg:block" />

      <div className="relative">
        <Image
          src={leafRightImage1}
          alt=""
          className="pointer-events-none absolute -bottom-24 right-0 z-10 hidden h-auto w-1/2 max-w-md select-none lg:block"
        />
        <Image
          src={leafLeftImage3}
          alt=""
          className="pointer-events-none absolute -bottom-40 left-0 z-10 hidden h-auto w-1/2 max-w-[16rem] select-none lg:block"
        />

        <Section dark className="py-24">
          <div className="w-full lg:w-3/5">
            <Heading>Our Collaborations</Heading>
            <p className="text-lg">
              We work with other content creators to educate our combined
              audiences, introducing them to the educational ambassadors at
              Alveus and their conservation missions.
            </p>
          </div>
        </Section>
      </div>

      {/* Grow the last section to cover the page */}
      <div className="relative flex flex-grow flex-col">
        <Image
          src={leafLeftImage1}
          alt=""
          className="pointer-events-none absolute -bottom-24 left-0 z-10 hidden h-auto w-1/2 max-w-[12rem] select-none lg:block"
        />
        <Image
          src={leafRightImage2}
          alt=""
          className="pointer-events-none absolute -bottom-48 right-0 z-10 hidden h-auto w-1/2 max-w-[12rem] select-none lg:block"
        />

        <Section className="flex-grow">
          <CollaborationsSection items={collaborations} />
        </Section>
      </div>
    </>
  );
};

export default CollaborationsPage;
