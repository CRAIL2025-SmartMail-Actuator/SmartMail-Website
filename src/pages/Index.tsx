
import PageLayout from '@/components/PageLayout';
import EmailHero from '@/components/EmailHero';
import EmailFeatures from '@/components/EmailFeatures';
import EmailStats from '@/components/EmailStats';
import EmailDemo from '@/components/EmailDemo';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>
      <SEO 
        title="SmartMail - AI Email Auto-Responder" 
        description="Transform your customer communication with SmartMail's AI-powered email auto-responder. Reduce response times by 80% while maintaining quality and consistency."
        imageUrl="/uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png"
        keywords={['AI email automation', 'customer service automation', 'email auto-responder', 'business communication', 'AI customer support', 'email management', 'SmartMail']}
      />
      <EmailHero />
      <EmailStats />
      <EmailFeatures />
      <EmailDemo />
    </PageLayout>
  );
};

export default Index;
