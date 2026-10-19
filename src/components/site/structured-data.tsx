/**
 * Structured Data (Schema.org / JSON-LD) pentru DATARISK MOLDOVA SRL.
 *
 * Tip: ProfessionalService (subtip LocalBusiness) — mai precis decât LocalBusiness,
 * deoarece DATARISK oferă servicii de consultanță și IT.
 *
 * Sursa datelor — hardcoded în acest fișier. La modificarea contactelor/requisitelor
 * actualizați valorile aici.
 *
 * Validare: Google Rich Results Test + Schema.org Validator.
 */

const DOMAIN = 'https://datarisk.vip'

export function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${DOMAIN}/#business`,
    name: 'DATARISK MOLDOVA SRL',
    alternateName: 'DATARISK',
    description:
      'Studio digital cinematic. Conformitate GDPR (Legea nr. 195/2024), dezvoltare web și aplicații mobile. Agenție de consultanță executivă cu trei departamente: Juridic, IT și Project Management.',
    image: [`${DOMAIN}/logo.svg`],
    logo: `${DOMAIN}/logo.svg`,
    url: DOMAIN,
    telephone: '+37378962932',
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chișinău',
      addressRegion: 'Chișinău',
      addressCountry: 'MD',
    },
    // DATARISK se deplasează la client — indicăm zona de servire
    areaServed: {
      '@type': 'Country',
      name: 'Republica Moldova',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.010453,
      longitude: 28.863806,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    // Contact pentru solicitări și drepturile subiecților de date (GDPR)
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        telephone: '+37378962932',
        areaServed: 'MD',
        availableLanguage: ['Romanian', 'Russian', 'English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        telephone: '+37378962932',
        areaServed: 'MD',
        availableLanguage: ['Romanian', 'Russian', 'English'],
      },
    ],
    // DPO — responsabil cu protecția datelor (contact prin telefon)
    employee: [
      {
        '@type': 'EmployeeRole',
        roleName: 'Data Protection Officer (DPO)',
        telephone: '+37378962932',
      },
    ],
    knowsAbout: [
      'Legea nr. 195/2024 a Republicii Moldova',
      'GDPR compliance',
      'Protecția datelor cu caracter personal',
      'Audit de conformitate',
      'Web development',
      'Mobile app development',
      'Project Management',
    ],
    sameAs: [] as string[], // Nu folosim rețele sociale
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
