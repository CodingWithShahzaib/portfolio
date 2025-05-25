import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ExpandableCarousel } from "@/components/ui/expandable-carousel";

const experienceItems = [
  {
    title: "Feb 2024 - Present",
    content: (
      <div>
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Infaque | Senior Software Engineer</h3>
          <p className="text-cyan-400 mb-4 text-sm font-semibold">Experience: 1.5 Years</p>
          <div className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed space-y-2">
            <p>• Integrated and configured Stripe, PayPal, and Paygood payment processors for seamless donation experiences.</p>
            <p>• Implemented secure session creation, payment confirmation, and webhook handling for all payment providers.</p>
            <p>• Automated parsing and processing of Interac payment notification emails for seamless donation tracking.</p>
            <p>• Designed and executed a comprehensive outreach feature, increasing campaign engagement by 25%.</p>
            <p>• Automated backend data processing, including parsing, validation, and duplicate management, using serverless cloud functions.</p>
            <p>• Integrated multiple third-party APIs (Eventbrite, Xero, Mailchimp, QuickBooks, Google, Meta) for data synchronization and analytics.</p>
            <p>• Built robust backend services for dashboard management, KPI refresh, and financial reporting using Firebase Cloud Functions and Prisma ORM.</p>
            <p>• Enabled bulk data entry and validation for programs, donors, and HR via CSV and API integrations.</p>
            <p>• Automated KPI collection and reporting for financial and marketing metrics.</p>
          </div>
        </div>
        <ExpandableCarousel 
          images={[
            {
              src: "./art1.png",
              alt: "Payment integration dashboard",
              title: "Payment Integration Dashboard",
              description: "Comprehensive payment processing system integrating Stripe, PayPal, and Paygood for seamless donation experiences with secure session creation and webhook handling."
            },
            {
              src: "./art2.png",
              alt: "API integration workflow",
              title: "Multi-API Integration System",
              description: "Integrated multiple third-party APIs including Eventbrite, Xero, Mailchimp, QuickBooks, Google, and Meta for comprehensive data synchronization and analytics."
            },
            {
              src: "./art3.png",
              alt: "Dashboard and analytics",
              title: "Analytics & KPI Dashboard",
              description: "Built robust backend services for dashboard management, KPI refresh, and financial reporting using Firebase Cloud Functions and Prisma ORM with automated metrics collection."
            },
            {
              src: "./art4.png",
              alt: "Campaign management system",
              title: "Campaign Management Platform",
              description: "Comprehensive outreach feature that increased campaign engagement by 25% with automated backend data processing, validation, and duplicate management using serverless cloud functions."
            },
            {
              src: "./art6.png",
              alt: "Donation Form",
              title: "Donation Form",
              description: "A donation form with a custom payment processor, where users can donate to a campaign."
            },
            {
              src: "./art7.png",
              alt: "Bulk data entry",
              title: "Donation Form Payment Screen",
              description: "A payment screen for the donation form, where use can pay for the donation."
            },
            {
              src: "./art8.png",
              alt: "Bulk data entry",
              title: "Thank you Screen",
              description: "A thank you screen for the donation form, where use can see the donation details."
            }
          ]}
        />
      </div>
    ),
  },
  {
    title: "Aug 2022 - Feb 2024",
    content: (
      <div>
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Aiworks.ai | Software Engineer</h3>
          <p className="text-cyan-400 mb-4 text-sm font-semibold">Experience: 1.5 Years</p>
          <div className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed space-y-2">
            <p>• Created tools for dynamic agent routing and orchestration.</p>
            <p>• Integrated LLMs to boost productivity for stakeholders.</p>
            <p>• Developed a Proof of Concept (PoC) to improve marketplace experience.</p>
            <p>• Automated routine tasks to reduce manual workload.</p>
            <p>• Implemented RAG for product data retrieval from vector databases.</p>
            <p>• Handled prompt engineering across various applications.</p>
            <p>• Optimized the size of docker container from 1.5Gb to 90Mb using multi stage build approach.</p>
            <p>• Set up CI/CD pipelines using Dokku for automated deployment.</p>
            <p>• Fine-tuned LLMs (e.g., Mistral, LLaMA 2) for specific use cases.</p>
            <p>• Implemented workflow that triggers a new EC2 instance for various storefronts.</p>
            <p>• Developed Sharove (E-Commerce) web application using Next.js 13.</p>
          </div>
        </div>
        <ExpandableCarousel 
          images={[
            {
              src: "sharove.png",
              alt: "AI agent routing system",
              title: "AI Agent Routing System",
              description: "Dynamic agent routing and orchestration tools with LLM integration to boost productivity for stakeholders and automated routine task management."
            },
            {
              src: "sharove2.png",
              alt: "Sharove e-commerce platform",
              title: "Sharove E-Commerce Platform",
              description: "Full-stack e-commerce web application built with Next.js 13, featuring marketplace experience improvements and automated workflow systems for various storefronts."
            },
            {
              src: "sharove3.png",
              alt: "LLM integration and fine-tuning",
              title: "LLM Integration & Fine-tuning",
              description: "Implemented RAG for product data retrieval from vector databases, handled prompt engineering across applications, and fine-tuned LLMs like Mistral and LLaMA 2 for specific use cases."
            },
            {
              src: "sharove3.png",
              alt: "CI/CD and Docker optimization",
              title: "DevOps & Container Optimization",
              description: "Optimized Docker container size from 1.5GB to 90MB using multi-stage build approach and set up CI/CD pipelines using Dokku for automated deployment."
            }

          ]}
        />
      </div>
    ),
  },
  {
    title: "Aug 2021 - July 2022",
    content: (
      <div>
        <div className="bg-black/30 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-neutral-800 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Aquila360 | Software Engineer</h3>
          <p className="text-cyan-400 mb-4 text-sm font-semibold">Experience: 1 Year</p>
          <div className="text-neutral-300 mb-4 text-sm sm:text-base leading-relaxed space-y-2">
            <p>• Designed and configured multi-stage Azure Pipelines for automated build, test, and deployment processes.</p>
            <p>• Implemented infrastructure as code (IaC) using ARM templates and YAML pipelines for consistent environment provisioning.</p>
            <p>• Worked with Azure Cloud and set up CI/CD pipelines.</p>
            <p>• Deployed apps using Docker, Kubernetes, and YAML-based configurations.</p>
            <p>• Configured deployment slots and rolling updates for zero-downtime releases in Azure App Services.</p>
            <p>• Deployed scheduled tasks for token refresh, notifications, and data synchronization.</p>
            <p>• Designed and implemented a scalable dashboard architecture capable of executing and displaying 1000+ dynamic SQL queries as individual widgets across customizable dashboards.</p>
          </div>
        </div>

        <ExpandableCarousel 
          images={[
            {
              src: "aq.png",
              alt: "Azure DevOps pipeline",
              title: "Azure DevOps Pipeline",
              description: "Multi-stage Azure Pipelines for automated build, test, and deployment processes with infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning."
            },
            {
              src: "aq2.png",
              alt: "Docker and Kubernetes",
              title: "Multi-stage Azure Pipeline",
              description: "Multi-stage Azure Pipeline for automated build, test, and deployment processes with infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning."
            },
            {
              src: "aq3.png",
              alt: "Infrastructure as Code",
              title: "Kubernetes Deployment",
              description: "Deployed applications using Docker, Kubernetes, and YAML-based configurations with deployment slots and rolling updates for zero-downtime releases in Azure App Services."
            },
            {
              src: "aq4.png",
              alt: "Scalable dashboard architecture",
              title: "Azure ARM Template",
              description: "Azure ARM Template for infrastructure as code using ARM templates and YAML pipelines for consistent environment provisioning."
            }
          ]}
        />
      </div>
    ),
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden min-h-screen">
      {/* Transitional aurora-like background effects with performance optimization */}
      <div className="absolute inset-0 bg-gradient-to-bl from-black via-purple-900/15 to-black"></div>
      
      {/* Connecting gradient from AboutSection */}
      <div className="absolute top-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-b from-green-900/10 via-purple-900/10 to-transparent"></div>
      
      {/* Aurora orbs transitioning colors with will-change for performance - constrained movements */}
      <motion.div 
        className="absolute top-20 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gradient-to-br from-purple-500/40 via-orange-500/25 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/5 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-gradient-to-tl from-orange-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 18, 0],
          y: [0, -12, 0],
          scale: [1, 0.95, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/3 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-gradient-to-br from-pink-500/25 via-purple-500/15 to-transparent rounded-full blur-3xl will-change-transform"
        animate={{
          x: [0, 10, 0],
          y: [0, 8, 0],
          scale: [1, 1.03, 1],
          opacity: [0.5, 0.6, 0.5],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />
      
      {/* Bottom gradient connecting to SkillsSection */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

      <div className="relative z-10">
        <Timeline data={experienceItems} />
      </div>
    </section>
  );
};

export default ExperienceSection; 