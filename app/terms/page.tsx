// app/terms/page.tsx
import type { Metadata } from "next";
import styles from '../styles/legal-page.module.css';

export const metadata: Metadata = {
  title: "Terms of Use | CheaperPlan",
  description:
    "CheaperPlan Terms of Use: subscriptions, billing, refunds, content accuracy, third-party services, termination, changes, liability, governing law, and contact.",
};

const LAST_UPDATED = "August 28, 2025";

export default function Terms() {
  return (
    <main>
      <article className={styles.container}>
        <header>
          <h1>Terms of Use</h1>
          <p className={styles.muted}>Last updated: {LAST_UPDATED}</p>
        </header>

        <nav className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <p>Click on the links below to jump to each section:</p>
          <ol>
            <li><a href="#acceptance">Acceptance of Terms</a></li>
            <li><a href="#eligibility">Eligibility and Account</a></li>
            <li><a href="#services">Services and License</a></li>
            <li><a href="#subscriptions">Subscriptions and Billing</a></li>
            <li><a href="#refunds">Refunds</a></li>
            <li><a href="#content">Content and Accuracy</a></li>
            <li><a href="#third-party">Third-Party Services</a></li>
            <li><a href="#termination">Termination and Suspension</a></li>
            <li><a href="#changes">Changes to Terms</a></li>
            <li><a href="#liability">Disclaimer and Limitation of Liability</a></li>
            <li><a href="#governing">Governing Law</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </nav>

        <section id="acceptance">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, creating an account, or otherwise using the CheaperPlan mobile
            application ("CheaperPlan," "we," "our," or "us"), you acknowledge that you have read,
            understood, and agreed to be bound by these Terms of Use (the "Terms"), together with our
            Privacy Policy. If you do not agree, you must not use CheaperPlan.
          </p>
          <p>
            Your use of CheaperPlan also confirms that you have the legal capacity to enter into this
            agreement under the laws of your place of residence. If you are using CheaperPlan on
            behalf of an organization, you represent and warrant that you are authorized to bind that
            entity to these Terms.
          </p>
        </section>

        <section id="eligibility">
          <h2>2. Eligibility and Account</h2>
          <p>
            You must be at least thirteen (13) years of age, or any higher minimum age required by
            local law, to use CheaperPlan. If you are under the legal minimum age, you may only use
            CheaperPlan under the supervision of a parent or legal guardian who agrees to be bound by
            these Terms on your behalf.
          </p>
          <p>By creating an account, you agree to:</p>
          <ul>
            <li>Provide accurate, current, and complete information;</li>
            <li>Maintain and promptly update such information;</li>
            <li>Keep your login credentials secure and confidential;</li>
            <li>Accept responsibility for all activities under your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts that contain inaccurate information
            or are used in violation of these Terms.
          </p>
        </section>

        <section id="services">
          <h2>3. Services and License</h2>
          <p>
            CheaperPlan provides tools and recommendations to help users compare mobile phone plans
            and identify potential savings. Information may include pricing, data allowances, features,
            and coverage sourced from carriers or third parties. While we strive for accuracy, we do
            not guarantee completeness or timeliness of such information.
          </p>
          <p>
            Subject to compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable, revocable license to use CheaperPlan for personal, non-commercial
            purposes.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>Copy, modify, distribute, sell, or lease any part of CheaperPlan;</li>
            <li>Reverse engineer or attempt to extract source code, except where permitted by law;</li>
            <li>Use automated tools (bots, crawlers, scrapers) to access or interact with CheaperPlan;</li>
            <li>Use CheaperPlan in violation of applicable laws or third-party rights.</li>
          </ul>
        </section>

        <section id="subscriptions">
          <h2>4. Subscriptions and Billing</h2>
          <p>
            CheaperPlan may offer subscription-based features ("Subscriptions").
          </p>
          <p><strong>Payment and Renewal.</strong> Subscriptions are billed through your Apple App Store
            or Google Play account. Unless canceled at least 24 hours before the end of the billing
            period, Subscriptions renew automatically at the then-current price. Renewal charges are
            processed within 24 hours before the billing period ends.</p>
          <p><strong>Trial Periods.</strong> If CheaperPlan offers a free trial, its length will be
            disclosed at sign-up. Unless canceled before the trial ends, the Subscription automatically
            converts to a paid plan at the stated rate.</p>
          <p><strong>Managing Subscriptions.</strong> You may manage or cancel Subscriptions anytime
            through your App Store or Google Play account settings. Deleting the app does not cancel
            your Subscription.</p>
          <p><strong>Price Changes.</strong> We may change Subscription prices from time to time. If so,
            you will be notified in advance. The new price applies at your next billing cycle unless
            you cancel before renewal.</p>
        </section>

        <section id="refunds">
          <h2>5. Refunds</h2>
          <p>
            All payments are processed by Apple or Google. Refund requests must be submitted directly
            through Apple or Google according to their policies. CheaperPlan cannot issue refunds
            independently.
          </p>
          <ul>
            <li>
              Apple users:&nbsp;
              <a href="https://www.apple.com/legal/internet-services/itunes/us/terms.html" target="_blank" rel="noopener noreferrer">
                Apple Media Services Terms and Conditions
              </a>
            </li>
            <li>
              Google users:&nbsp;
              <a href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">
                Google Play Refund Policy
              </a>
            </li>
          </ul>
        </section>

        <section id="content">
          <h2>6. Content and Accuracy</h2>
          <p>
            Plan information, pricing, coverage, and savings estimates are provided for informational
            purposes only.
          </p>
          <ul>
            <li>
              Savings amounts represent <strong>maximum potential savings</strong> ("may save up to")
              compared to the lowest plan in our database at the time of calculation. Actual savings
              vary depending on carrier eligibility, region, taxes, device balances, and promotional
              validity.
            </li>
            <li>
              You are responsible for verifying final terms directly with carriers before making
              purchase or contract decisions.
            </li>
            <li>
              We disclaim responsibility for discrepancies caused by carrier changes, expired offers,
              or coverage variability.
            </li>
          </ul>
        </section>

        <section id="third-party">
          <h2>7. Third-Party Services</h2>
          <p>
            CheaperPlan relies on third-party service providers (including cloud infrastructure,
            databases, and APIs such as Supabase) to operate. While we take reasonable measures to
            choose reliable providers, we cannot guarantee uninterrupted or error-free service.
          </p>
          <ul>
            <li>
              Service disruptions, delays, or data breaches caused by third parties may affect
              CheaperPlan's availability.
            </li>
            <li>
              We will comply with legal obligations, including breach notifications, if user data is
              compromised.
            </li>
            <li>
              Nothing in these Terms excludes our liability for our own gross fault, intentional
              misconduct, or violations of mandatory law.
            </li>
          </ul>
        </section>

        <section id="termination">
          <h2>8. Termination and Suspension</h2>
          <p>
            We may suspend or terminate your access if we reasonably believe you have:
          </p>
          <ul>
            <li>Violated these Terms or our Privacy Policy;</li>
            <li>Engaged in fraudulent, abusive, or unlawful activities;</li>
            <li>Misused the app in ways harmful to others.</li>
          </ul>
          <p>
            If terminated for breach, you are not entitled to refunds. You may stop using CheaperPlan
            anytime by canceling your Subscription or deleting your account. We will provide notice and
            an opportunity to remedy violations where required by law.
          </p>
        </section>

        <section id="changes">
          <h2>9. Changes to Terms</h2>
          <p>
            We may revise these Terms to reflect service updates or legal requirements. For material
            changes, we will notify you by in-app message, email, or website posting. Updated Terms
            take effect on the stated date. Continuing to use CheaperPlan constitutes acceptance.
          </p>
        </section>

        <section id="liability">
          <h2>10. Disclaimer and Limitation of Liability</h2>
          <p>
            CheaperPlan is provided "as is" and "as available." We disclaim all warranties to the
            fullest extent permitted by law, including merchantability, fitness for a purpose, and
            non-infringement.
          </p>
          <p>
            To the maximum extent permitted by applicable law, we are not liable for indirect,
            incidental, consequential, special, or punitive damages (including lost savings, profits,
            data, or goodwill). Our total liability for any claim is limited to the total amount you
            paid for Subscriptions during the twelve (12) months immediately preceding the claim.
          </p>
          <p>
            <strong>Québec Carve-Out.</strong> Nothing in these Terms excludes or limits liability for{" "}
            <strong>intentional or gross fault</strong>, or for <strong>bodily or moral injury</strong>,
            as provided under the Civil Code of Québec.
          </p>
        </section>

        <section id="governing">
          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of Canada and the province of Québec. If you reside
            elsewhere, you may also benefit from mandatory consumer protections in your jurisdiction.
            Disputes will be subject to the exclusive jurisdiction of Québec courts, unless mandatory
            consumer law grants you the right to sue locally.
          </p>
        </section>

        <section id="contact">
          <h2>12. Contact Us</h2>
          <p>If you have any questions, concerns, or requests regarding these Terms of Use, please contact us at:</p>
          <address>
            <div><strong>CheaperPlan Support</strong></div>
            <div>Email: <a href="mailto:support@cheaperplan.net">support@cheaperplan.net</a></div>
            <div>Website: <a href="https://www.cheaperplan.net" target="_blank" rel="noopener noreferrer">www.cheaperplan.net</a></div>
          </address>
          <p>We will make reasonable efforts to respond to your inquiry in a timely manner.</p>
        </section>
      </article>

    </main>
  );
}
