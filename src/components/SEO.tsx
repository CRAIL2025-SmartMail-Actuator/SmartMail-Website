
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'SmartMail - AI Email Auto-Responder',
  description = 'SmartMail revolutionizes customer communication with AI-powered email automation. Reduce response times by 80% while maintaining quality and consistency your customers expect.',
  type = 'website',
  name = 'SmartMail - Powered by Cognine Technologies',
  imageUrl = '/uploads/526dc38a-25fa-40d4-b520-425b23ae0464.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['AI email automation', 'email auto-responder', 'customer service automation', 'business communication', 'AI customer support', 'email management', 'SmartMail', 'Cognine Technologies'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://smartmail.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://smartmail.com${imageUrl}`;

  // Enhanced keywords for specific posts or pages
  const enhancedKeywords = location.pathname.includes('email-automation') 
    ? [
        ...keywords,
        'automated email responses',
        'customer service efficiency',
        'AI-powered communication',
        'email response time reduction',
        'business email automation',
        'intelligent email handling',
        'customer communication optimization',
        'email workflow automation',
        'smart email solutions',
        'AI customer service tools'
      ]
    : location.pathname.includes('ai-email-features')
    ? [
        ...keywords,
        'AI email features',
        'smart email templates',
        'automated customer responses',
        'email intelligence',
        'machine learning email',
        'natural language processing',
        'email sentiment analysis',
        'automated email categorization',
        'intelligent email routing',
        'AI-driven email insights'
      ]
    : keywords;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmartMail - Powered by Cognine Technologies',
    url: 'https://smartmail.com',
    logo: 'https://smartmail.com/uploads/smarmail_cognine.png',
    description: 'AI-powered email auto-responder that revolutionizes customer communication',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@smartmail.com'
    },
    founder: {
      '@type': 'Organization',
      name: 'Cognine Technologies'
    },
    sameAs: [
      'https://www.linkedin.com/company/cognine-technologies'
    ]
  };

  // Enhanced BlogPosting JSON-LD structured data
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: {
      '@type': 'ImageObject',
      url: absoluteImageUrl,
      width: 1200,
      height: 630
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'SmartMail - Powered by Cognine Technologies',
      url: 'https://smartmail.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmartMail - Powered by Cognine Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://smartmail.com/uploads/smarmail_cognine.png',
        width: 512,
        height: 512
      },
      url: 'https://smartmail.com'
    },
    description: description,
    keywords: enhancedKeywords.join(', '),
    articleSection: category,
    inLanguage: 'en-US',
    isAccessibleForFree: true
  } : null;

  // Add FAQ structured data for AI Email Automation
  const emailAutomationFAQData = location.pathname.includes('email-automation') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is SmartMail AI Email Auto-Responder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SmartMail is an AI-powered email automation system that intelligently responds to customer emails, reducing response times by up to 80% while maintaining quality and consistency in customer communication.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does AI email automation improve customer service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI email automation improves customer service by providing instant, accurate responses 24/7, reducing wait times, ensuring consistent communication quality, and allowing human agents to focus on complex issues that require personal attention.'
        }
      },
      {
        '@type': 'Question',
        name: 'What businesses can benefit from SmartMail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SmartMail benefits any business that handles customer emails, including e-commerce, SaaS companies, customer support teams, marketing agencies, and service providers looking to improve response times and customer satisfaction.'
        }
      }
    ]
  } : null;

  // Add FAQ structured data for AI Email Features
  const emailFeaturesFAQData = location.pathname.includes('ai-email-features') ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What AI features does SmartMail offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SmartMail offers intelligent email categorization, automated response generation, sentiment analysis, smart template selection, conversation context understanding, and continuous learning from interactions to improve response quality.'
        }
      },
      {
        '@type': 'Question',
        name: 'How accurate are SmartMail AI responses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SmartMail AI responses are highly accurate, trained on vast datasets of customer interactions. The system continuously learns and improves, with built-in quality checks and the ability for human oversight when needed.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can SmartMail integrate with existing email systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, SmartMail seamlessly integrates with popular email platforms and customer support systems, allowing you to maintain your existing workflow while adding AI-powered automation capabilities.'
        }
      }
    ]
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...enhancedKeywords, category.toLowerCase()].join(', ') 
    : enhancedKeywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SmartMail - Powered by Cognine Technologies" />
      <meta property="og:locale" content="en_US" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      {isBlogPost && <meta property="article:publisher" content="https://smartmail.com" />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@smartmail" />
      <meta name="twitter:creator" content="@smartmail" />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Additional SEO meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
      
      {emailAutomationFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(emailAutomationFAQData)}
        </script>
      )}
      
      {emailFeaturesFAQData && (
        <script type="application/ld+json">
          {JSON.stringify(emailFeaturesFAQData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
