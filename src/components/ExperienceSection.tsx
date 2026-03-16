"use client";
import React, { useRef } from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ExpandableCarousel } from "@/components/ui/expandable-carousel";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Briefcase } from "lucide-react";

function ExperienceCard({
  company,
  role,
  duration,
  points,
  images,
}: {
  company: string;
  role: string;
  duration: string;
  points: string[];
  images: { src: string; alt: string; title: string; description: string }[];
}) {
  return (
    <div>
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 sm:p-6 mb-6 group hover:border-white/[0.1] transition-all duration-500">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
              {company}
            </h3>
            <p className="text-cyan-400 text-sm font-medium mt-0.5">{role}</p>
          </div>
          <span className="text-xs text-neutral-500 font-medium px-2.5 py-1 rounded-full glass shrink-0 ml-3">
            {duration}
          </span>
        </div>
        <div className="space-y-2">
          {points.map((point, i) => (
            <div key={i} className="flex gap-2 text-sm text-neutral-400 leading-relaxed">
              <span className="text-cyan-500/60 mt-1 shrink-0">&#x2022;</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
      <ExpandableCarousel images={images} />
    </div>
  );
}

const experienceItems = [
  {
    title: "Feb 2024 - Present",
    content: (
      <ExperienceCard
        company="Infaque"
        role="Senior Software Engineer"
        duration="1.5 Years"
        points={[
          "Integrated and configured Stripe, PayPal, and Paygood payment processors for seamless donation experiences.",
          "Implemented secure session creation, payment confirmation, and webhook handling for all payment providers.",
          "Automated parsing and processing of Interac payment notification emails for seamless donation tracking.",
          "Designed and executed a comprehensive outreach feature, increasing campaign engagement by 25%.",
          "Automated backend data processing, including parsing, validation, and duplicate management, using serverless cloud functions.",
          "Integrated multiple third-party APIs (Eventbrite, Xero, Mailchimp, QuickBooks, Google, Meta) for data synchronization and analytics.",
          "Built robust backend services for dashboard management, KPI refresh, and financial reporting using Firebase Cloud Functions and Prisma ORM.",
          "Enabled bulk data entry and validation for programs, donors, and HR via CSV and API integrations.",
          "Automated KPI collection and reporting for financial and marketing metrics.",
        ]}
        images={[
          { src: "./art1.png", alt: "Payment integration dashboard", title: "Payment Integration Dashboard", description: "Comprehensive payment processing system integrating Stripe, PayPal, and Paygood for seamless donation experiences with secure session creation and webhook handling." },
          { src: "./art2.png", alt: "API integration workflow", title: "Multi-API Integration System", description: "Integrated multiple third-party APIs including Eventbrite, Xero, Mailchimp, QuickBooks, Google, and Meta for comprehensive data synchronization and analytics." },
          { src: "./art3.png", alt: "Dashboard and analytics", title: "Analytics & KPI Dashboard", description: "Built robust backend services for dashboard management, KPI refresh, and financial reporting using Firebase Cloud Functions and Prisma ORM with automated metrics collection." },
          { src: "./art4.png", alt: "Campaign management system", title: "Campaign Management Platform", description: "Comprehensive outreach feature that increased campaign engagement by 25% with automated backend data processing, validation, and duplicate management using serverless cloud functions." },
          { src: "./art6.png", alt: "Donation Form", title: "Donation Form", description: "A donation form with a custom payment processor, where users can donate to a campaign." },
          { src: "./art7.png", alt: "Donation Form Payment Screen", title: "Donation Form Payment Screen", description: "A payment screen for the donation form, where users can pay for the donation." },
          { src: "./art8.png", alt: "Thank you Screen", title: "Thank you Screen", description: "A thank you screen for the donation form, where users can see the donation details." },
        ]}
      />
    ),
  },
  {
    title: "Aug 2022 - Feb 2024",
    content: (
      <ExperienceCard
        company="Aiworks.ai"
        role="Software Engineer"
        duration="1.5 Years"
        points={[
          "Created tools for dynamic agent routing and orchestration.",
          "Integrated LLMs to boost productivity for stakeholders.",
          "Developed a Proof of Concept (PoC) to improve marketplace experience.",
          "Automated routine tasks to reduce manual workload.",
          "Implemented RAG for product data retrieval from vector databases.",
          "Handled prompt engineering across various applications.",
          "Optimized the size of docker container from 1.5Gb to 90Mb using multi stage build approach.",
          "Set up CI/CD pipelines using Dokku for automated deployment.",
          "Fine-tuned LLMs (e.g., Mistral, LLaMA 2) for specific use cases.",
          "Implemented workflow that triggers a new EC2 instance for various storefronts.",
          "Developed Sharove (E-Commerce) web application using Next.js 13.",
        ]}
        images={[
          { src: "sharove.png", alt: "AI agent routing system", title: "AI Agent Routing System", description: "Dynamic agent routing and orchestration tools with LLM integration to boost productivity for stakeholders and automated routine task management." },
          { src: "sharove2.png", alt: "Sharove e-commerce platform", title: "Sharove E-Commerce Platform", description: "Full-stack e-commerce web application built with Next.js 13, featuring marketplace experience improvements and automated workflow systems for various storefronts." },
          { src: "sharove3.png", alt: "LLM integration and fine-tuning", title: "LLM Integration & Fine-tuning", description: "Implemented RAG for product data retrieval from vector databases, handled prompt engineering across applications, and fine-tuned LLMs like Mistral and LLaMA 2 for specific use cases." },
          { src: "sharove3.png", alt: "CI/CD and Docker optimization", title: "DevOps & Container Optimization", description: "Optimized Docker container size from 1.5GB to 90MB using multi-stage build approach and set up CI/CD pipelines using Dokku for automated deployment." },
        ]}
      />
    ),
  },
  {
    title: "Aug 2021 - July 2022",
    content: (
      <ExperienceCard
        company="Aquila360"
        role="Software Engineer"
        duration="1 Year"
        points={[
          "Designed and configured multi-stage Azure Pipelines for automated build, test, and deployment processes.",
          "Implemented infrastructure as code (IaC) using ARM templates and YAML pipelines for consistent environment provisioning.",
          "Worked with Azure Cloud and set up CI/CD pipelines.",
          "Deployed apps using Docker, Kubernetes, and YAML-based configurations.",
          "Configured deployment slots and rolling updates for zero-downtime releases in Azure App Services.",
          "Deployed scheduled tasks for token refresh, notifications, and data synchronization.",
          "Designed and implemented a scalable dashboard architecture capable of executing and displaying 1000+ dynamic SQL queries as individual widgets across customizable dashboards.",
        ]}
        images={[
          { src: "aq.png", alt: "Azure DevOps pipeline", title: "Azure DevOps Pipeline", description: "Multi-stage Azure Pipelines for automated build, test, and deployment processes with infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning." },
          { src: "aq2.png", alt: "Docker and Kubernetes", title: "Multi-stage Azure Pipeline", description: "Multi-stage Azure Pipeline for automated build, test, and deployment processes with infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning." },
          { src: "aq3.png", alt: "Infrastructure as Code", title: "Kubernetes Deployment", description: "Deployed applications using Docker, Kubernetes, and YAML-based configurations with deployment slots and rolling updates for zero-downtime releases in Azure App Services." },
          { src: "aq4.png", alt: "Scalable dashboard architecture", title: "Azure ARM Template", description: "Azure ARM Template for infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning." },
        ]}
      />
    ),
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-black overflow-hidden"
    >
      {/* 21st.dev-style aurora background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <AuroraBackground variant="amber-rose" showDotGrid showLineGrid />
      </motion.div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent z-10" />

      <div ref={ref} className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/[0.05] text-xs font-medium text-cyan-300/80 mb-8">
            <Briefcase size={12} />
            Professional Journey
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-600">
              Experience
            </span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Over 4 years of building scalable applications and leading teams
            across payment systems, AI/ML, and cloud infrastructure.
          </p>
        </motion.div>

        <Timeline data={experienceItems} />
      </div>
    </section>
  );
};

export default ExperienceSection;
