'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

/**
 * @editableContentMap
 * { "text-0": "badge", "text-1": "title", "text-2": "description", "text-3": "billingToggleMonthly", "text-4": "billingToggleAnnual", "text-5": "needDifferentTitle", "text-6": "needDifferentDescription", "text-7": "scheduleDemoCTA" }
 */

export default function Pricing({
  badge = 'Flexible Pricing',
  title = 'Scale Your Business with Transparent SaaS Pricing',
  description = 'Choose the perfect plan to accelerate your growth. Enterprise-grade security, 99.99% uptime, and dedicated support included.',
  billingToggleMonthly = 'Monthly Billing',
  billingToggleAnnual = 'Annual Billing',
  needDifferentTitle = 'Enterprise Solutions Available',
  needDifferentDescription = 'Custom integrations, dedicated infrastructure, and white-label options for organizations with unique requirements.',
  scheduleDemoCTA = 'Book Enterprise Demo',
}) {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterAction = () => {
    router.push('/');
  };
  const handleProfessionalAction = () => {
    router.push('/');
  };
  const handleEnterpriseAction = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for early-stage companies and MVPs',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 team members',
        'Core automation tools',
        'Email support',
        '10GB cloud storage',
        'Basic reporting dashboard',
        'API rate limit: 1K/month',
      ],
      cta: 'Start Building',
      popular: false,
      action: handleStarterAction,
    },
    {
      name: 'Growth',
      description: 'Ideal for scaling teams and growing revenue',
      price: '$89',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited team members',
        'Advanced workflow automation',
        'Priority chat support',
        '500GB cloud storage',
        'Real-time analytics',
        'API rate limit: 100K/month',
        'Custom integrations',
        'A/B testing suite',
        'Multi-region deployment',
      ],
      cta: 'Start 30-Day Trial',
      popular: true,
      action: handleProfessionalAction,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring custom solutions',
      price: 'Custom',
      period: '',
      badge: 'White Glove Setup',
      features: [
        'Everything in Growth plan',
        'Unlimited cloud storage',
        '24/7 dedicated support',
        'Custom API limits',
        'Advanced security controls',
        '99.99% SLA guarantee',
        'Dedicated account manager',
        'Custom onboarding program',
        'Compliance certifications',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      action: handleEnterpriseAction,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2" data-editable-id="text-0">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-editable-id="text-1">
            {title.split(' ').slice(0, -3).join(' ')}
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {title.split(' ').slice(-3).join(' ')}
            </span>
          </h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            data-editable-id="text-2"
          >
            {description}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button
              className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm"
              data-editable-id="text-3"
            >
              {billingToggleMonthly}
            </button>
            <button
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-editable-id="text-4"
            >
              {billingToggleAnnual}
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Growth' && (
                  <p className="text-center text-sm text-muted-foreground">
                    30-day free trial • No setup fees • Cancel anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4" data-editable-id="text-5">
            {needDifferentTitle}
          </h3>
          <p className="text-muted-foreground mb-6" data-editable-id="text-6">
            {needDifferentDescription}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleScheduleDemo}
            data-editable-id="text-7"
          >
            {scheduleDemoCTA}
          </Button>
        </div>
      </div>
    </section>
  );
}
