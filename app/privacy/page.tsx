export default function Privacy() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">CheaperPlan</div>
      </div>
      
      <div className="content">
        <h1 className="title">Privacy Policy for CheaperPlan</h1>
        <p className="subtitle">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
        
        <div className="section">
          <h2>1. Introduction</h2>
          <p>
            CheaperPlan ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App"). Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the App.
          </p>
        </div>

        <div className="section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information We Collect Directly From You</h3>
          <p>When you use our App, we may collect the following personal information:</p>
          <ul>
            <li><strong>Account Information:</strong> Email address and password for account creation and authentication</li>
            <li><strong>Mobile Plan Details:</strong> Information about your current mobile phone plan including:
              <ul>
                <li>Provider name</li>
                <li>Data allowance</li>
                <li>Coverage area</li>
                <li>Price</li>
                <li>Network type</li>
                <li>Additional features (voicemail, call display, call waiting, suspicious call detection, hotspot, conference call, video call)</li>
              </ul>
            </li>
            <li><strong>Profile Information:</strong> User preferences and settings</li>
            <li><strong>Communication Data:</strong> Information you provide when contacting our support team</li>
          </ul>

          <h3>2.2 Information We Collect Automatically</h3>
          <p>When you use our App, we automatically collect certain information:</p>
          <ul>
            <li><strong>Device Information:</strong> Device identifiers, operating system, and app version</li>
            <li><strong>Push Notification Tokens:</strong> Expo push tokens for sending notifications about plan recommendations and updates</li>
            <li><strong>Usage Data:</strong> How you interact with the App, including features used and time spent in the App</li>
            <li><strong>Session Data:</strong> Authentication session information for maintaining your logged-in state</li>
          </ul>

          <h3>2.3 Information from Third Parties</h3>
          <p>We may receive information from the following third-party services:</p>
          <ul>
            <li><strong>Supabase:</strong> Our backend database service that stores your account and plan information</li>
            <li><strong>RevenueCat:</strong> Subscription management service for premium features, including subscription status and purchase history</li>
            <li><strong>Expo:</strong> Development platform that handles push notifications and app updates</li>
          </ul>
        </div>

        <div className="section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          
          <h3>3.1 Core App Functionality</h3>
          <ul>
            <li>Creating and managing your user account</li>
            <li>Storing and retrieving your mobile plan information</li>
            <li>Providing personalized plan recommendations based on your current plan</li>
            <li>Calculating potential savings on alternative mobile plans</li>
          </ul>

          <h3>3.2 Communication</h3>
          <ul>
            <li>Sending push notifications about new plan recommendations</li>
            <li>Providing customer support and responding to your inquiries</li>
            <li>Sending important updates about the App or changes to our services</li>
          </ul>

          <h3>3.3 Premium Features</h3>
          <ul>
            <li>Managing subscription status for premium features</li>
            <li>Processing subscription renewals and cancellations</li>
            <li>Providing access to enhanced plan comparison tools</li>
          </ul>

          <h3>3.4 Service Improvement</h3>
          <ul>
            <li>Analyzing usage patterns to improve App functionality</li>
            <li>Developing new features and services</li>
            <li>Ensuring the security and stability of our App</li>
          </ul>
        </div>

        <div className="section">
          <h2>4. How We Share Your Information</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>

          <h3>4.1 Service Providers</h3>
          <p>We may share your information with trusted third-party service providers who assist us in operating our App:</p>
          <ul>
            <li><strong>Supabase:</strong> For data storage and user authentication</li>
            <li><strong>RevenueCat:</strong> For subscription management and payment processing</li>
            <li><strong>Expo:</strong> For push notifications and app distribution</li>
          </ul>

          <h3>4.2 Legal Requirements</h3>
          <p>We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

          <h3>4.3 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
        </div>

        <div className="section">
          <h2>5. Data Storage and Security</h2>
          
          <h3>5.1 Data Storage</h3>
          <ul>
            <li>Your data is securely stored using Supabase's cloud infrastructure</li>
            <li>Authentication sessions are managed locally on your device using secure storage</li>
            <li>All data transmission is encrypted using industry-standard protocols</li>
          </ul>

          <h3>5.2 Security Measures</h3>
          <ul>
            <li>We implement appropriate technical and organizational measures to protect your personal information</li>
            <li>Access to your data is restricted to authorized personnel only</li>
            <li>We regularly review and update our security practices</li>
          </ul>

          <h3>5.3 Data Retention</h3>
          <ul>
            <li>We retain your personal information for as long as necessary to provide our services</li>
            <li>You may request deletion of your account and associated data at any time</li>
            <li>Some information may be retained for legal or regulatory requirements</li>
          </ul>
        </div>

        <div className="section">
          <h2>6. Your Rights and Choices</h2>
          
          <h3>6.1 Access and Control</h3>
          <ul>
            <li>You can access and update your account information through the App settings</li>
            <li>You can modify or delete your mobile plan information at any time</li>
            <li>You can manage your push notification preferences in the App</li>
          </ul>

          <h3>6.2 Account Deletion</h3>
          <ul>
            <li>You may delete your account and associated data by contacting our support team</li>
            <li>Upon account deletion, we will remove your personal information from our systems within 30 days</li>
          </ul>

          <h3>6.3 Push Notifications</h3>
          <ul>
            <li>You can disable push notifications through your device settings or within the App</li>
            <li>Disabling notifications may affect your ability to receive plan recommendations</li>
          </ul>
        </div>

        <div className="section">
          <h2>7. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and that appropriate safeguards are in place.
          </p>
        </div>

        <div className="section">
          <h2>8. Children's Privacy</h2>
          <p>
            Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
          </p>
        </div>

        <div className="section">
          <h2>9. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
          <ul>
            <li>Posting the new Privacy Policy in the App</li>
            <li>Sending you a notification through the App</li>
            <li>Updating the "Effective Date" at the top of this Privacy Policy</li>
          </ul>
          <p>Your continued use of the App after any changes constitutes your acceptance of the new Privacy Policy.</p>
        </div>

        <div className="section">
          <h2>10. Third-Party Services</h2>
          <p>Our App integrates with the following third-party services, each with their own privacy policies:</p>
          <ul>
            <li><strong>Supabase:</strong> https://supabase.com/privacy</li>
            <li><strong>RevenueCat:</strong> https://www.revenuecat.com/privacy/</li>
            <li><strong>Expo:</strong> https://expo.dev/privacy</li>
          </ul>
          <p>We encourage you to review the privacy policies of these third-party services.</p>
        </div>

        <div className="section">
          <h2>11. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
          <ul>
            <li><strong>Email:</strong> [Insert Contact Email]</li>
            <li><strong>Address:</strong> [Insert Business Address]</li>
          </ul>
        </div>

        <div className="section">
          <h2>12. Compliance</h2>
          <p>This Privacy Policy is designed to comply with applicable privacy laws, including but not limited to:</p>
          <ul>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Personal Information Protection and Electronic Documents Act (PIPEDA)</li>
          </ul>
        </div>
      </div>
      
      <div className="footer">
        <p>&copy; 2024 CheaperPlan. All rights reserved.</p>
      </div>
    </div>
  )
}