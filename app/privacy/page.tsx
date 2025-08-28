// app/privacy/page.tsx
import type { Metadata } from "next";
import styles from '../styles/legal-page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | CheaperPlan",
  description:
    "CheaperPlan Privacy Policy: what we collect, how we use it, how we protect it, and your rights.",
};

const LAST_UPDATED = "August 27, 2025";

export default function Privacy() {
  return (
    <main>
      <article className={styles.container}>
        <header>
          <h1>Privacy Policy</h1>
          <p className={styles.muted}>Last updated: {LAST_UPDATED}</p>
        </header>

        <nav className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <p>Click on the links below to jump to each section:</p>
          <ol>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#info-we-collect">Information We Collect</a></li>
            <li><a href="#how-we-use">How We Use Information</a></li>
            <li><a href="#sharing">Sharing of Information</a></li>
            <li><a href="#security">Data Storage and Security</a></li>
            <li><a href="#rights">User Rights</a></li>
            <li><a href="#retention">Data Retention</a></li>
            <li><a href="#children">Children's Privacy</a></li>
            <li><a href="#updates">Policy Updates</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ol>
        </nav>

        <section id="introduction">
          <h2>1. Introduction</h2>
          <p>
            Welcome to CheaperPlan. Your privacy is important to us, and we are committed to protecting the
            information you share with us. This Privacy Policy explains what information we collect, how we use
            it, and the choices you have regarding your data when using our mobile application and related services.
          </p>
          <p>
            By using CheaperPlan, you agree to the practices described in this Privacy Policy. If you do not agree,
            please discontinue use of our services.
          </p>
          <p>
            This policy applies to all users of CheaperPlan and covers data collected through our mobile app, website,
            and related features.
          </p>
        </section>

        <section id="info-we-collect">
          <h2>2. Information We Collect</h2>
          <p>
            When you use CheaperPlan, we collect the following types of information to provide and improve our services.
            We only collect data necessary to operate CheaperPlan and improve user experience. We do not collect
            unnecessary or excessive personal data.
          </p>

          <h3 id="info-you-provide">2.1 Information You Provide</h3>
        <ul>
          <li>
            <strong>Account Information:</strong> When you create an account, we collect your email address and
            password (stored securely in encrypted form).
          </li>
          <li>
            <strong>Mobile Plan Details:</strong> You may provide information about your current mobile plan (e.g.,
            carrier, monthly price, data allowance, additional features).
          </li>
          <li>
            <strong>Subscription Information:</strong> If you purchase a subscription, payment is processed securely
            through third-party providers (e.g., Apple App Store, Google Play Store, RevenueCat). We do not store
            your credit card details.
          </li>
        </ul>

        <h3 id="info-auto">2.2 Information Collected Automatically</h3>
        <ul>
          <li>
            <strong>Usage Data:</strong> We record which recommended plans you have already viewed to avoid sending
            duplicate notifications.
          </li>
          <li>
            <strong>Push Notification Tokens:</strong> We collect device-specific tokens (e.g., Expo Push Token) to
            send you personalized updates.
          </li>
          <li>
            <strong>Device and Technical Information (via service providers):</strong> Our third-party service
            providers (e.g., Supabase, RevenueCat, Expo) may automatically collect certain technical details (such
            as device model, operating system, app version, IP address, and error logs) to ensure proper functionality,
            manage subscriptions, deliver notifications, and improve stability. We do not directly use this information
            beyond what is necessary for app operation.
          </li>
          <li>
            <strong>Hosting Provider Logs:</strong> Our hosting and infrastructure providers (e.g., AWS, Vercel) may
            automatically generate standard server logs (such as IP address, browser or device type, and access time)
            for security and reliability.
          </li>
        </ul>
        </section>

        <section id="how-we-use">
          <h2>3. How We Use Information</h2>
        <p>
          We use the information described in Section 2 (“Information We Collect”) for the following purposes. We do
          not use your information for advertising, marketing, or third-party tracking purposes.
        </p>
        <ul>
          <li>
            <strong>Account Creation and Authentication</strong>
            <div><em>Data Used:</em> Email address, password (Account Information).</div>
            <div><em>Purpose:</em> To register, authenticate, and secure your user account.</div>
          </li>
          <li>
            <strong>Plan Comparison and Personalized Recommendations</strong>
            <div><em>Data Used:</em> Mobile Plan Details (Account Information) and Usage Data (Viewed Recommendations).</div>
            <div><em>Purpose:</em> To compare your current plan with alternatives and avoid sending duplicate suggestions.</div>
          </li>
          <li>
            <strong>Push Notifications</strong>
            <div><em>Data Used:</em> Push Notification Tokens.</div>
            <div><em>Purpose:</em> To deliver alerts about potentially cheaper or more suitable mobile plans.</div>
          </li>
          <li>
            <strong>Subscription Management</strong>
            <div><em>Data Used:</em> Subscription status from the App Store/Google Play/RevenueCat.</div>
            <div><em>Purpose:</em> To determine premium access and enable subscription-based features.</div>
          </li>
          <li>
            <strong>Service Security, Stability, and Troubleshooting</strong>
            <div><em>Data Used:</em> Device/Technical Information and Hosting Logs (through service providers).</div>
            <div><em>Purpose:</em> To ensure app stability, detect and prevent misuse, troubleshoot issues, and maintain compatibility.</div>
          </li>
          <li>
            <strong>Improving Our Services</strong>
            <div><em>Data Used:</em> Aggregated usage data (non-identifiable).</div>
            <div><em>Purpose:</em> To analyze user behavior on a qualitative level and refine app features and experience.</div>
          </li>
          <li>
            <strong>Legal Compliance and Protection</strong>
            <div><em>Data Used:</em> Any relevant information as required by law.</div>
            <div><em>Purpose:</em> To comply with legal obligations or respond to lawful requests.</div>
          </li>
        </ul>
        </section>

        <section id="sharing">
          <h2>4. Sharing of Information</h2>
        <p>We do not sell your personal information. We only share information in the limited circumstances described below:</p>

        <h3>With Service Providers</h3>
        <p>We share certain information with trusted third-party providers who help us operate our app and deliver services. Specifically:</p>
        <ul>
          <li>
            <strong>Supabase (authentication, database storage)</strong>
            <ul>
              <li><em>Shared data:</em> Email address, encrypted password, mobile plan details, account activity logs.</li>
              <li><em>Purpose:</em> To provide secure account management and store your plan information.</li>
            </ul>
          </li>
          <li>
            <strong>RevenueCat (subscription management)</strong>
            <ul>
              <li><em>Shared data:</em> Subscription status and transaction identifiers received from Apple App Store or Google Play.</li>
              <li><em>Purpose:</em> To determine premium access and manage subscription features.</li>
            </ul>
          </li>
          <li>
            <strong>Expo Push Notification Service</strong>
            <ul>
              <li><em>Shared data:</em> Device-specific push notification tokens.</li>
              <li><em>Purpose:</em> To deliver push notifications to your device.</li>
            </ul>
          </li>
          <li>
            <strong>AWS and Vercel (hosting and infrastructure)</strong>
            <ul>
              <li><em>Shared data:</em> Automatically generated server logs (e.g., IP address, browser/device type, access time).</li>
              <li><em>Purpose:</em> To ensure security, stability, and reliable hosting of our app and website.</li>
            </ul>
          </li>
        </ul>

        <h3>For Legal and Safety Purposes</h3>
        <p>
          We may disclose information if required by law, regulation, legal process, or governmental request, or if we
          believe it is necessary to protect the rights, property, or safety of CheaperPlan, our users, or others.
        </p>

        <h3>In Business Transfers</h3>
        <p>
          In the event of a merger, acquisition, reorganization, or sale of assets, your information may be transferred
          as part of that transaction, subject to the commitments of this Privacy Policy.
        </p>

        <h3>With Your Consent</h3>
        <p>We may share your information with third parties if you give us explicit permission to do so.</p>
        </section>

        <section id="security">
          <h2>5. Data Storage and Security</h2>
        <p>We take the protection of your information seriously.</p>
        <ul>
          <li>
            <strong>Storage Location:</strong> Your information is stored on secure servers provided by our trusted
            hosting and database providers, including Supabase and Amazon Web Services (AWS). Our website infrastructure
            is hosted by Vercel.
          </li>
          <li>
            <strong>Encryption and Secure Transmission:</strong> All data is transmitted using HTTPS/TLS encryption.
            Passwords are stored in encrypted form, and we do not store your credit card or payment details.
          </li>
          <li>
            <strong>Access Control:</strong> Access to personal information is restricted to authorized personnel and
            service providers who need it to operate and maintain our services.
          </li>
          <li>
            <strong>Data Retention:</strong> We retain personal information only as long as necessary to provide our
            services or as required by law. Users may request deletion of their account and associated data at any time.
          </li>
          <li>
            <strong>User Responsibility:</strong> While we take appropriate measures to protect your data, no system can
            be guaranteed 100% secure. We encourage you to keep your account password safe and notify us immediately of
            any unauthorized use.
          </li>
        </ul>
        </section>

        <section id="rights">
          <h2>6. User Rights</h2>
        <p>We respect your rights regarding your personal information and provide ways for you to manage it:</p>
        <ul>
          <li><strong>Access:</strong> You may request a copy of the personal information we hold about you.</li>
          <li>
            <strong>Rectification/Correction:</strong> You can update your account information (such as your email or
            mobile plan details) directly within the app. If any other information we hold about you is inaccurate, you
            may request correction.
          </li>
          <li>
            <strong>Deletion:</strong> You may request deletion of your account and associated data at any time by
            contacting us at <a href="mailto:support@cheaperplan.net">support@cheaperplan.net</a>. Once your request is
            verified, we will permanently remove your personal information unless we are required to retain it by law.
          </li>
          <li>
            <strong>Objection/Restriction:</strong> You may request that we stop using your personal information for
            certain purposes, or limit how it is processed. For example, you can ask us not to send you plan
            recommendations.
          </li>
          <li>
            <strong>Withdraw Consent:</strong> Where we rely on your consent (for example, storing your mobile plan
            details to provide comparisons), you may withdraw that consent at any time by contacting us.
          </li>
        </ul>
        </section>

        <section id="retention">
          <h2>7. Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to provide our services or as required by law.
          Specifically:
        </p>
        <ul>
          <li>
            <strong>Account Information (email, password):</strong> Retained for as long as your account remains active.
            If you delete your account, this information will be permanently removed from our systems within a
            reasonable period, unless we are legally required to keep it.
          </li>
          <li>
            <strong>Mobile Plan Details:</strong> Retained while your account is active so that we can provide plan
            comparisons and recommendations. Deleted when your account is deleted.
          </li>
          <li>
            <strong>Usage Data (viewed recommendations):</strong> Retained only as needed to avoid sending duplicate
            notifications. This data is deleted when your account is deleted.
          </li>
          <li>
            <strong>Push Notification Tokens:</strong> Retained while notifications remain enabled for your device.
            Tokens are deleted automatically when you disable notifications or uninstall the app.
          </li>
          <li>
            <strong>Subscription Data (from App Store, Google Play, RevenueCat):</strong> Retained for as long as
            needed to manage your subscription and comply with billing or legal obligations.
          </li>
          <li>
            <strong>Server and Hosting Logs (AWS, Vercel):</strong> Automatically retained for a limited period
            (typically 30–90 days) for security and troubleshooting, then deleted or anonymized.
          </li>
        </ul>
        <p>
          If you request deletion of your account, we will also delete associated personal information, except where
          retention is required for legal, regulatory, or security purposes.
        </p>
        </section>

        <section id="children">
          <h2>8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under the age of 13, and we do not knowingly collect personal
          information from children under 13. If you are under 13, please do not use CheaperPlan or provide any personal
          information to us.
        </p>
        <p>
          If we become aware that we have inadvertently collected personal information from a child under 13, we will
          take steps to delete such information promptly.
        </p>
        <p>
          Parents or guardians who believe their child may have provided us with personal information can contact us at{" "}
          <a href="mailto:support@cheaperplan.net">support@cheaperplan.net</a> to request deletion.
        </p>
        </section>

        <section id="updates">
          <h2>9. Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal
          requirements, or other factors.
        </p>
        <p>When we make material changes, we will notify you by:</p>
        <ul>
          <li>
            Posting the updated Privacy Policy on our website at{" "}
            <a href="https://cheaperplan.net/privacy" target="_blank" rel="noopener noreferrer">
              cheaperplan.net/privacy
            </a>
            ; and/or
          </li>
          <li>Providing an in-app notice or email notification where appropriate.</li>
        </ul>
        <p>The date at the top of this Privacy Policy indicates when it was last updated.</p>
        <p>We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
        </section>

        <section id="contact">
          <h2>10. Contact Us</h2>
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
        <address>
          <div><strong>CheaperPlan Support</strong></div>
          <div>Email: <a href="mailto:support@cheaperplan.net">support@cheaperplan.net</a></div>
        </address>
        <p>We will make reasonable efforts to respond to your inquiry in a timely manner.</p>
        </section>
      </article>

    </main>
  );
}
