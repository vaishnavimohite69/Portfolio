import { FloatingHeader } from '@/components/navigation/floating-header';
import { PronounceMyName } from '@/components/pronounce-my-name';
import { RevealOnLoad } from '@/components/reveal-on-load';
import { ScrollArea } from '@/components/scroll-area';
import { Section } from '@/components/section';
import Separator from '@/components/separator';
import { SkillsVenn } from '@/components/skills-venn';
import { USER } from '@/config/user';
import { GitHubContribution } from '@/features/home/components/github-contribution';
import Info from '@/features/home/components/info';
import { Experiences } from '@/features/home/components/experiences';
import { Projects } from '@/features/home/components/projects';
import { Testimonials } from '@/features/home/components/testimonials';
import { WordmarkFooter } from '@/components/wordmark-footer';
import { createOgImage } from '@/lib/createOgImage';
import { JsonLd, Organization, WithContext } from '@/lib/seo/json-ld';
import { createMetadata } from '@/lib/seo/metadata';
import type { Metadata } from 'next/types';

// Force static generation at build time
export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  const title = USER.tagline;
  const description = USER.description;
  const image = createOgImage({
    title: title,
    meta: description,
  });
  return createMetadata({
    title: title,
    description: description,
    image: image,
  });
}

export default async function Page() {
  const jsonLd: WithContext<Organization> = {
    '@type': 'Organization',
    '@context': 'https://schema.org',
  };

  return (
    <>
      <JsonLd code={jsonLd} />
      <Info show={['time', 'screen', 'llms']} />
      <ScrollArea useScrollAreaId className="">
        <FloatingHeader scrollTitle="Vaishnavi Mohite" />

        <Separator />

        {/* Hero Section */}
        <Section>
          {/* Name and Title */}
          <RevealOnLoad delay={0} duration={0.5}>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold text-2xl">Vaishnavi Mohite</h1>
                <PronounceMyName name="Vaishnavi Mohite" />
              </div>
              <p className="font-mono text-sm tracking-wider text-muted-foreground uppercase">
                {USER.jobTitle}
              </p>
            </div>
          </RevealOnLoad>

          {/* Description */}
          <RevealOnLoad delay={0.15} duration={0.5}>
            <div className="mt-6 space-y-3 text-foreground/70">
              <p className="leading-relaxed">
                I'm a Full-Stack Developer based in Nagpur, India, working
                across frontend, backend, and database layers to turn ideas
                into working products.
              </p>
              <p className="leading-relaxed">
                My focus is on building clean, functional interfaces backed by
                solid APIs and databases — with care for usability,
                performance, and writing code that's easy to maintain.
              </p>
            </div>
          </RevealOnLoad>

          {/* Skills Venn Diagram */}
          <RevealOnLoad delay={0.3} duration={0.6}>
            <SkillsVenn
              profileImage={USER.image.profile}
              skills={{
                top: 'Frontend Development',
                left: 'Backend & APIs',
                right: 'Database Design',
                bottom: 'Full-Stack\nProblem Solving',
              }}
              className="mt-8"
            />
          </RevealOnLoad>
        </Section>

        <Separator />

        {/* Testimonials Section */}
        <Section>
          <Testimonials />
        </Section>

        <Separator />

        {/* GitHub Contribution Section */}
        <Section>
          <GitHubContribution />
        </Section>

        <Separator />

        {/* Projects Section */}
        <Section>
          <Projects />
        </Section>

        <Separator />

        {/* Experiences Section */}
        <Section>
          <Experiences />
        </Section>

        <Separator />

        {/* Wordmark Footer */}
        <Section className="px-0 py-0 sm:px-0 md:py-0">
          <WordmarkFooter brandName={USER.name} />
        </Section>

        <Separator />
        {/* Bottom spacing — matches dock height */}
        <div className="h-[clamp(80px,10vh,200px)] shrink-0" />
      </ScrollArea>
    </>
  );
}
