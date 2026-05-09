"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Headphones, RotateCcw, ShieldCheck, Star, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Shopify Store"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "gradient-bars",
      }}
      title="Store Excellence"
      description="Elevate your shopping experience with our curated collections."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-woman-wearing-eyeglasses_273609-14944.jpg",
          alt: "customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-woman-black-friday-sale_23-2148665730.jpg",
          alt: "customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-vector/flat-design-profile-icon-collection_23-2149483706.jpg",
          alt: "customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-vector/flat-design-profile-icons-collection_23-2149102741.jpg",
          alt: "customer portrait",
        },
        {
          src: "http://img.b2bpic.net/free-vector/flat-design-profile-icon-set_23-2149489637.jpg",
          alt: "customer portrait",
        },
      ]}
      avatarText="Join 10,000+ happy shoppers"
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Fast Shipping",
          icon: Truck,
        },
        {
          type: "text-icon",
          text: "Secure Payments",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "24/7 Support",
          icon: Headphones,
        },
        {
          type: "text-icon",
          text: "Easy Returns",
          icon: RotateCcw,
        },
        {
          type: "text-icon",
          text: "Quality Guaranteed",
          icon: Star,
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Fast Shipping",
          description: "Delivery in 24-48 hours",
          bentoComponent: "reveal-icon",
          icon: Truck,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-halloween-eye-balls-with-copy-space_23-2148609829.jpg",
          imageAlt: "e-commerce hero studio",
        },
        {
          title: "Secure Payments",
          description: "Your transactions are encrypted",
          bentoComponent: "reveal-icon",
          icon: ShieldCheck,
          imageSrc: "http://img.b2bpic.net/free-photo/supply-chain-representation-with-yellow-van_23-2149853108.jpg",
          imageAlt: "e-commerce hero studio",
        },
        {
          title: "24/7 Support",
          description: "Always here to help you",
          bentoComponent: "reveal-icon",
          icon: Headphones,
          imageSrc: "http://img.b2bpic.net/free-vector/premium-certified-quality-stamp_78370-1800.jpg",
          imageAlt: "e-commerce hero studio",
        },
      ]}
      title="Why Choose Us"
      description="Experience superior quality and service."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",
          name: "Premium Product A",
          price: "$29",
          imageSrc: "http://img.b2bpic.net/free-photo/product-display-gray-podium-stand-pedestal-background-3d-illustration-empty-display-scene-presentation-product-placement_56104-1869.jpg",
        },
        {
          id: "p2",
          name: "Premium Product B",
          price: "$39",
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-black-camera-with-lush-greenery_23-2151978692.jpg",
        },
        {
          id: "p3",
          name: "Premium Product C",
          price: "$49",
          imageSrc: "http://img.b2bpic.net/free-photo/book-with-herb-near-bun-plate-other-things-bedsheet_23-2147887778.jpg",
        },
        {
          id: "p4",
          name: "Premium Product D",
          price: "$59",
          imageSrc: "http://img.b2bpic.net/free-photo/white-abstract-background-with-window-lights-shadows-backdrop-3d-illustration-empty-display-scene-presentation-product-placement_56104-1873.jpg",
        },
        {
          id: "p5",
          name: "Premium Product E",
          price: "$69",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-drinking-eating-near-book_23-2147888756.jpg",
        },
        {
          id: "p6",
          name: "Premium Product F",
          price: "$79",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-leaning-against-canvas-backdrop_171337-16470.jpg",
        },
      ]}
      title="Featured Items"
      description="Explore our best selling products."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          price: "$9",
          name: "Basic",
          features: [
            "Standard Shipping",
            "Limited Support",
          ],
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
        },
        {
          id: "pro",
          price: "$29",
          name: "Pro",
          features: [
            "Free Shipping",
            "Priority Support",
          ],
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
        },
        {
          id: "ent",
          price: "$99",
          name: "Enterprise",
          features: [
            "Global Shipping",
            "24/7 Priority",
          ],
          buttons: [
            {
              text: "Select",
              href: "#",
            },
          ],
        },
      ]}
      title="Simple Pricing"
      description="Transparent plans for your needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "10K+",
          title: "Happy Shoppers",
          items: [
            "Reliable",
            "Fast",
            "Quality",
          ],
        },
        {
          id: "m2",
          value: "99%",
          title: "Satisfaction",
          items: [
            "Customer Focused",
            "Trusted",
            "Secure",
          ],
        },
        {
          id: "m3",
          value: "500+",
          title: "Products",
          items: [
            "Diverse",
            "Careful",
            "Modern",
          ],
        },
      ]}
      title="Our Growth"
      description="Numbers speak for our quality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah",
          role: "Designer",
          company: "Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cute-white-cartoon-character-with-green-sprout-hand-gesture_1308-186853.jpg",
        },
        {
          id: "2",
          name: "John",
          role: "Developer",
          company: "Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-profile-icon-set_23-2149489635.jpg",
        },
        {
          id: "3",
          name: "Mike",
          role: "Manager",
          company: "Corp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-businessman_23-2148746289.jpg",
        },
        {
          id: "4",
          name: "Ana",
          role: "Artist",
          company: "Arts",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-people-avatar-collection_23-2148244032.jpg",
        },
        {
          id: "5",
          name: "Leo",
          role: "Writer",
          company: "Blog",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-vector/flat-design-profile-icon-set_23-2149489637.jpg",
        },
      ]}
      title="Happy Customers"
      description="What people are saying about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What is the return policy?",
          content: "You can return products within 30 days of purchase.",
        },
        {
          id: "q2",
          title: "Is shipping free?",
          content: "We offer free shipping on orders over $50.",
        },
        {
          id: "q3",
          title: "How to track orders?",
          content: "Check your email for the tracking link once shipped.",
        },
      ]}
      title="Common Questions"
      description="Need help? Find answers here."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in touch"
      title="Need assistance?"
      description="Reach out to our support team for any questions."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@shopify.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Products",
              href: "#products",
            },
            {
              label: "About",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Shopify Store"
      bottomRightText="All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
