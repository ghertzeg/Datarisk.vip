import type { Lang } from '@/lib/store'

export const langs: { code: Lang; label: string; native: string }[] = [
  { code: 'ro', label: 'Romanian', native: 'Română' },
  { code: 'ru', label: 'Russian', native: 'Русский' },
  { code: 'en', label: 'English', native: 'English' },
]

// Common types
type Dict = {
  brand: { name: string; tagline: string; country: string }
  nav: Record<string, string>
  cta: Record<string, string>
  // sections
  hero: {
    badge: string
    titleA: string
    titleB: string
    lead: string
    primaryCta: string
    secondaryCta: string
    trustNote: string
  }
  trust: {
    title: string
    lead: string
    disclaimer: string
    notCheck: { title: string; items: string[] }
    promiseTitle: string
    promise: string
  }
  services: {
    title: string
    lead: string
    cardsTitle: string
    items: {
      slug: string
      title: string
      short: string
      what: string
      how: string
      result: string
      duration: string
    }[]
    backToList: string
  }
  studio: {
    badge: string
    title: string
    lead: string
    webTitle: string
    webLead: string
    webFeatures: { title: string; desc: string }[]
    appsTitle: string
    appsLead: string
    appsFeatures: { title: string; desc: string }[]
    processTitle: string
    processLead: string
    steps: { n: string; title: string; desc: string }[]
    stackTitle: string
    stackLead: string
    capabilities: { title: string; desc: string }[]
    ndaTitle: string
    ndaLead: string
    ndaItems: { title: string; desc: string }[]
    statsTitle: string
    stats: { value: string; label: string }[]
    ctaTitle: string
    ctaText: string
    ctaButton: string
  }
  methodology: {
    title: string
    lead: string
    levels: {
      n: string
      title: string
      audience: string
      desc: string
    }[]
    example: {
      title: string
      text: string
    }
  }
  check: {
    title: string
    lead: string
    whatWeCheck: string
    whatWeCheckItems: string[]
    whatWeDont: string
    whatWeDontItems: string[]
    form: {
      site: string
      sitePh: string
      name: string
      email: string
      emailPh: string
      phone: string
      submit: string
      consent: string
      privacy: string
      success: string
    }
  }
  blog: {
    title: string
    lead: string
    readMore: string
    updated: string
    articles: {
      slug: string
      title: string
      excerpt: string
      date: string
      category: string
      body: string
    }[]
  }
  about: {
    title: string
    lead: string
    body: string
    status: { title: string; text: string }
    principles: { title: string; text: string }[]
  }
  contact: {
    title: string
    lead: string
    form: {
      name: string
      org: string
      email: string
      emailPh: string
      phone: string
      taskType: string
      taskTypes: string[]
      description: string
      descriptionPh: string
      consent: string
      privacy: string
      submit: string
      success: string
    }
    info: {
      emailLabel: string
      phoneLabel: string
      phone: string
      hoursLabel: string
      hours: string
      addressLabel: string
      address: string
      dpoLabel: string
      dpo: string
      responseLabel: string
      response: string
    }
  }
  faq: {
    title: string
    lead: string
    items: { q: string; a: string }[]
  }
  footer: {
    about: string
    navTitle: string
    legalTitle: string
    contactTitle: string
    rights: string
    versionLine: string
    cookieSettings: string
  }
  legal: {
    privacy: LegalPage
    cookies: LegalPage
    terms: LegalPage
    dpa: LegalPage
  }
  cookieBanner: {
    title: string
    text: string
    acceptAll: string
    necessary: string
    rejectAll: string
    settings: string
    privacy: string
  }
  cookieSettings: {
    title: string
    intro: string
    necessary: { title: string; desc: string }
    analytics: { title: string; desc: string }
    marketing: { title: string; desc: string }
    save: string
    acceptAll: string
    rejectAll: string
    close: string
  }
}

type LegalPage = {
  title: string
  updated: string
  intro: string
  sections: { h: string; p: string }[]
}

// ============ Romanian (primary) ============
const ro: Dict = {
  brand: {
    name: 'DATARISK',
    tagline: 'Cinematic studio · Compliance · Web · Apps',
    country: 'Republica Moldova · Legea 195/2024',
  },
  nav: {
    home: 'Acasă',
    services: 'GDPR',
    studio: 'Studio',
    methodology: 'Metodologie',
    check: 'Verificare',
    blog: 'Cunoștințe',
    about: 'Despre noi',
    contact: 'Contacte',
    faq: 'Întrebări',
  },
  cta: {
    checkSite: 'Verifică site-ul',
    contactUs: 'Solicită consultanță',
    viewServices: 'Vezi serviciile',
    readMore: 'Citește mai mult',
    startProject: 'Începe un proiect',
  },
  hero: {
    badge: 'CINEMATIC STUDIO · COMPLIANCE · WEB · APPS',
    titleA: ' Construim.',
    titleB: 'Asigurăm conformitatea.',
    lead:
      'Studio digital cinematic. Construim site-uri, aplicații și sisteme de conformitate pe Legea nr. 195/2024 — cu aceeași rigurozitate vizuală și tehnică.',
    primaryCta: 'Începe un proiect',
    secondaryCta: 'Verifică un site gratuit',
    trustNote:
      'Acest site trece propria noastră verificare. Niciun script terț nu se execută până nu oferi consimțământ.',
  },
  trust: {
    title: 'Evaluare a conformității, nu certificat',
    lead:
      'Lucrăm în spiritul legii: identificăm ce este demonstrat prin dovezi, formulăm concluzii clare și nu promitem ce nu putem onora. Această poziție este parte din rezultat, nu doar din metodă.',
    disclaimer:
      'Noi nu emitem certificate de conformitate și nu suntem o autoritate de supraveghere. Concluziile noastre au caracter de evaluare profesională și se bazează pe dovezi colectate în timpul misiunii.',
    notCheck: {
      title: 'Ce nu verificăm',
      items: [
        'Sistemul intern al autorităților de supraveghere și procedurile lor.',
        'Accesul fizic la date sau securitatea infrastructurii clientului în afara suprafeței publice.',
        'Aspecte de drept penal sau litigii care depășesc cadrul legislației privind datele.',
      ],
    },
    promiseTitle: 'Exemplu de formulare a unei concluzii',
    promise:
      '„Pe baza verificării efectuate, formularul de colectare a adresei de e-mail de pe pagina /contact transmite datele către un serviciu terț înainte de afișarea bannerului de consimțământ. Acest lucru reprezintă o lipsă de conformitate conform art. 7 alin. (3) din Legea nr. 195/2024. Planul de remediere: amâna încărcarea scriptului terț până la obținerea consimțământului.”',
  },
  services: {
    title: 'Servicii',
    lead:
      'Fiecare serviciu are un rezultat concret: un raport cu dovezi, un set de documente sau un mecanism funcțional. Alegeți ce se potrivește situației dumneavoastră.',
    cardsTitle: 'Serviciile noastre',
    items: [
      {
        slug: 'site-assessment',
        title: 'Evaluarea conformității site-ului',
        short:
          'Suprafața publică: politici, cookie, formulare, trackere, headere HTTP.',
        what:
          'Analizăm suprafața publică a site-ului: politicile, bannerul de cookie, formularele de colectare, trackerele încărcate, headerele HTTP și fluxul de consimțământ. Verificăm dacă scripturile terțe se încarcă înainte de consimțământ.',
        how:
          'Trecem prin site ca un vizitator real, în profil curat, fără stări salvate. Capturăm cererile de rețea, comparăm conținutul politicilor cu fluxul real și formulăm concluzii doar pe dovezi colectate.',
        result:
          'Raport cu dovezi (capture de ecran, listă de cereri, fragmente de cod), listă de abateri cu trimiteri la articolele legii și plan de remediere cu prioritate.',
        duration: '1 zi lucrătoare',
      },
      {
        slug: 'org-assessment',
        title: 'Evaluarea conformității organizației',
        short:
          'Documente și procese: evidența prelucrărilor, drepturile subiecților, scurgerile de date.',
        what:
          'Evaluăm documentele și procesele organizației: registrul prelucrărilor, modalitățile de reacție la cererile subiecților, procedura de notificare a scurgerilor, contractele cu procesatorii și desemnarea responsabilului cu protecția datelor.',
        how:
          'Interviuri cu persoanele-cheie, revizuirea documentelor, compararea cu cerințele legii. Identificăm golurile și le clasăm după gravitate și probabilitate.',
        result:
          'Raport de evaluare + registru al golurilor constatate, cu recomandări și termene realiste.',
        duration: 'Individual, în funcție de complexitate',
      },
      {
        slug: 'documents-pack',
        title: 'Pachet de documente',
        short:
          'Politica de confidențialitate, politica cookie, consimțăminte, registru, procedură de scurgere.',
        what:
          'Pregătim un set complet de documente necesare activității: politică de confidențialitate, politică cookie, formulare de consimțământ, registru al prelucrărilor, procedură de reacție la scurgeri de date.',
        how:
          'Pornim de la activitatea reală a clientului, nu de la un șablon generic. Fiecare document conține lista reală de prelucrări, destinatarii și temeiurile legale.',
        result:
          'Set de documente personalizat, gata pentru adoptare internă, cu instrucțiuni de utilizare.',
        duration: 'Individual, în funcție de complexitate',
      },
      {
        slug: 'cookie-consent',
        title: 'Contur de consimțământ și cookie',
        short:
          'Implementarea mecanismului de consimțământ, modul de consimțământ, verificarea blocării trackerelor.',
        what:
          'Implementăm un mecanism de consimțământ care funcționează cu adevărat: banner cu „Accept toate”, „Doar necesare”, „Respinge toate”, buton permanent de setări și stocarea alegerii.',
        how:
          'Configurăm modul de consimțământ (consent mode), verificăm că trackerele nu se încarcă înainte de consimțământ și că retragerea este la un singur clic.',
        result:
          'Contur funcțional cu verificare în profil curat; instrucțiuni pentru întreținere.',
        duration: 'Individual, în funcție de complexitate',
      },
      {
        slug: 'dpo-service',
        title: 'Responsabil cu protecția datelor (ca serviciu)',
        short:
          'Funcția de persoană responsabilă, conform contractului.',
        what:
          'Asigurăm funcția de responsabil cu protecția datelor (DPO) prin contract, în cazurile în care operatorul are această obligație sau dorește să o externalizeze.',
        how:
          'Lucrăm ca parte internă: consultanță, revizuirea documentelor, răspuns la cererile subiecților, interacțiunea cu autoritatea.',
        result:
          'Îndeplinirea obligațiilor de operator cu un punct de contact clar și termene de răspuns.',
        duration: 'Individual, în funcție de pregătirea clientului',
      },
      {
        slug: 'inspection-prep',
        title: 'Pregătire pentru control',
        short:
          'Repetiție, listă de dovezi, răspunsuri la cereri.',
        what:
          'Vă pregătim pentru o interacțiune reală cu Centrul Național pentru Protecția Datelor cu Caracter Personal: simulăm o cerere, punem la punct lista de dovezi și răspunsurile.',
        how:
          'Pornim de la un scenariu realist, parcurgem etapele și identificăm punctele slabe înainte de controlul efectiv.',
        result:
          'Mapă cu dovezi pregătite, răspunsuri formulate și o persoană de contact clară.',
        duration: 'Individual, în funcție de pregătirea clientului',
      },
      {
        slug: 'training',
        title: 'Instruirea angajaților',
        short:
          'Curs de bază privind prelucrarea datelor.',
        what:
          'Curs de bază pentru angajații care lucrează cu date cu caracter personal: ce sunt datele personale, ce înseamnă prelucrare, ce drepturi au subiecții, ce să facă în caz de scurgere.',
        how:
          'Sesiuni de lucru (online sau fizic), cu exemple din activitatea reală a clientului. Fără limbaj de specialitate inutil.',
        result:
          'Materiale de curs + confirmare a participării, pentru dosarul de conformitate.',
        duration: '1 zi (4 ore)',
      },
    ],
    backToList: '← Înapoi la lista serviciilor',
  },
  studio: {
    badge: 'STUDIO · WEB · APPS',
    title: 'Construim produse digitale cinematice',
    lead:
      'Ca agenție de consultanță executivă, preluăm orice proiect pe care clientul îl poate imagina — atâta timp cât bugetul este realist. Lucrăm cu tehnologii moderne, fără să le enumerăm ca pe un CV.',
    webTitle: 'Dezvoltare Web',
    webLead:
      'Site-uri, aplicații web, magazine online, portaluri corporative. De la broșură la SaaS — cu design cinematic și conformitate GDPR integrată.',
    webFeatures: [
      { title: 'Site-uri cinematice', desc: 'Design vizual puternic, animații fluide, tipografie atentă.' },
      { title: 'Aplicații web', desc: 'Dashboard-uri, portaluri, SaaS — cu autentificare și roluri.' },
      { title: 'E-commerce', desc: 'Magazine online rapide, integrări plăți și CRM.' },
      { title: 'Headless CMS', desc: 'Conținut editabil fără developer, cu preview în timp real.' },
    ],
    appsTitle: 'Aplicații Mobile',
    appsLead:
      'Aplicații native și cross-platform pentru iOS și Android. O bază de cod, experiență nativă pe fiecare platformă.',
    appsFeatures: [
      { title: 'Cross-platform', desc: 'O singură bază de cod pentru iOS și Android.' },
      { title: 'Offline-first', desc: 'Date locale sincronizate când reapare conexiunea.' },
      { title: 'Notificări push', desc: 'Comunicare cu utilizatorii, segmentare, automatizări.' },
      { title: 'Publicare', desc: 'Asistență completă pentru App Store și Google Play.' },
    ],
    processTitle: 'Procesul nostru',
    processLead: 'Cinci etape clare. Fără surprize.',
    steps: [
      { n: '01', title: 'Descoperire', desc: 'Întelegem obiectivul, audiența, constrângerile. Definim domeniul.' },
      { n: '02', title: 'Design', desc: 'Wireframes, prototype, design system. Aprobăm împreună.' },
      { n: '03', title: 'Build', desc: 'Sprinturi săptămânale cu demo. Cod testat, review-uri regulate.' },
      { n: '04', title: 'Compliance', desc: 'GDPR, cookie, formulare, politici — integrate, nu lipite.' },
      { n: '05', title: 'Lansare', desc: 'Publicare, monitorizare, suport. Iterăm pe baza datelor reale.' },
    ],
    stackTitle: 'Capabilități tehnice',
    stackLead: 'Nu enumerăm tehnologii ca pe un CV. Lucrăm cu stack-ul potrivit pentru fiecare proiect.',
    capabilities: [
      { title: 'Frontend modern', desc: 'Spa frameworks, SSR, animații, design systems.' },
      { title: 'Backend solid', desc: 'API-uri, baze de date, autentificare, integrări terțe.' },
      { title: 'Mobile', desc: 'Aplicații native și cross-platform pentru iOS și Android.' },
      { title: 'Infrastructură', desc: 'Cloud, CI/CD, monitorizare, backup, securitate.' },
    ],
    ndaTitle: 'Confidențialitate strictă',
    ndaLead:
      'Nu publicăm nume de clienți, logo-uri sau detalii despre proiecte. Politica noastră de NDA este parte din contractul cu fiecare client.',
    ndaItems: [
      { title: 'NDA cu fiecare client', desc: 'Semnat la începutul colaborației, fără excepții.' },
      { title: 'Fără logo-uri client', desc: 'Nu folosim identitatea clientului în marketing.' },
      { title: 'Date segregate', desc: 'Acces la datele clientului doar pentru echipa de proiect.' },
      { title: 'Ștergere la final', desc: 'La finalizarea colaborării, returnăm sau ștergem datele.' },
    ],
    statsTitle: 'Capacități',
    stats: [
      { value: 'de la 150€', label: 'Preț de pornire' },
      { value: '3 departe', label: 'Juridic · IT · PM' },
      { value: '99.5%', label: 'Uptime garantat' },
      { value: '3 zile', label: 'Pentru primul demo' },
    ],
    ctaTitle: 'Ai un proiect în minte?',
    ctaText: 'Discutăm despre obiective, constrângeri și buget. Prețurile pornesc de la 150€ și se adaptează cerințelor.',
    ctaButton: 'Începe un proiect',
  },
  methodology: {
    title: 'Metodologie',
    lead:
      'Lucrăm pe trei niveluri de concluzie, astfel încât fiecare persoană implicată — director, jurist, IT — să înțeleagă exact ce s-a constatat și ce urmează.',
    levels: [
      {
        n: '01',
        title: 'Concluzie pe înțelesul directorului',
        audience: 'Management',
        desc:
          'O frază clară: „Avem o abatere / nu avem o abatere”. Urmată de impactul estimat, fără să promitem sancțiuni.',
      },
      {
        n: '02',
        title: 'Concluzie pentru jurist',
        audience: 'Departament legal',
        desc:
          'Trimiterea exactă la articolul din Legea nr. 195/2024 și, dacă e cazul, la GDPR. Fără trimiteri la acte abrogate.',
      },
      {
        n: '03',
        title: 'Concluzie pentru IT',
        audience: 'Echipa tehnică',
        desc:
          'Identificatorul precis: URL, cerere, script, linie de cod. Plan de remediere cu pași verificabili.',
      },
    ],
    example: {
      title: 'Exemplu de constatare',
      text:
        '„Formularul de pe pagina /contact expune câmpul de telefon fără a-l marca ca obligatoriu/opțional în politica de confidențialitate. Datele sunt transmise către un serviciu terț (forms.example.com) înainte de afișarea bannerului de consimțământ. Art. 13 lit. e) din Legea nr. 195/2024 — informații la colectare. Prioritate: mare.”',
    },
  },
  check: {
    title: 'Verificare gratuită a site-ului',
    lead:
      'O primă verificare, fără obligații. Vă spunem ce am găsit pe suprafața publică a site-ului — fără să intrăm în sistemul dumneavoastră.',
    whatWeCheck: 'Ce verificăm',
    whatWeCheckItems: [
      'Prezența și calitatea politicii de confidențialitate și a politicii cookie.',
      'Funcționarea bannerului de consimțământ și a butoanelor de retragere.',
      'Dacă scripturile terțe se încarcă înainte de consimțământ.',
      'Headere HTTP relevante (CSP, HSTS, X-Content-Type-Options).',
    ],
    whatWeDont: 'Ce nu facem la verificarea gratuită',
    whatWeDontItems: [
      'Nu accesăm sistemul intern, bazele de date sau panoul de administrare.',
      'Nu emitem un raport complet — primim o scurtă notă cu concluziile principale.',
      'Nu oferim consultanță juridică formală în această etapă.',
    ],
    form: {
      site: 'Adresa site-ului',
      sitePh: 'https://exemplu.md',
      name: 'Nume',
      email: 'E-mail',
      emailPh: 'nume@organizatie.md',
      phone: 'Telefon (opțional)',
      submit: 'Trimite solicitarea',
      consent:
        'Sunt de acord ca datele mele să fie prelucrate pentru a primi o notă de verificare. Am citit politica de confidențialitate.',
      privacy: 'Vezi politica de confidențialitate',
      success:
        'Solicitarea a fost primită. Vom reveni cu o notă de verificare în 1 zi lucrătoare.',
    },
  },
  blog: {
    title: 'Cunoștințe',
    lead:
      'Articole despre Legea nr. 195/2024 și aplicarea ei practică. Fără să speriem cu sancțiuni.',
    readMore: 'Citește articolul',
    updated: 'Actualizat',
    articles: [
      {
        slug: 'ce-este-legea-195-2024',
        title: 'Ce este Legea nr. 195/2024 și ce presupune pentru operatori',
        excerpt:
          'O privire de ansamblu asupra noii legi: cine intră în câmpul de aplicare, ce obligații apar și ce înseamnă „operator” în practică.',
        date: '2026-08-12',
        category: 'Lege',
        body:
          'Legea nr. 195/2024 privind protecția datelor cu caracter personal intră în vigoare și aduce o serie de obligații noi pentru operatorii din Republica Moldova. Lucrarea se bazează pe principii similare cu GDPR, dar cu particularități locale pe care trebuie să le cunoaștem. În acest articol explicăm: cine este considerat operator, ce înseamnă „bază legală”, cum funcționează drepturile subiecților și ce trebuie să facă o organizație în primele 30 de zile de la intrarea în vigoare.',
      },
      {
        slug: 'consimtamant-vs-interes-legitim',
        title: 'Consimțământ sau interes legitim — cum alegi',
        excerpt:
          'Nu orice prelucrare se bazează pe consimțământ. Articolul explică când alegi fiecare temei legal și ce riscuri asumă fiecare variantă.',
        date: '2026-08-25',
        category: 'Practică',
        body:
          'Consimțământul nu este singura bază legală. Multe prelucrări se bazează pe interes legitim sau pe executarea unui contract. Alegerea greșită a temeiului duce la documente inutile și la expunere juridică. În acest articol: o listă de verificare pentru a decide care temei se potrivește fiecărui caz concret.',
      },
      {
        slug: 'banner-de-cookie-facut-bine',
        title: 'Banner de cookie făcut bine — 5 greșeli frecvente',
        excerpt:
          '„Accept toate” șters, lipsa butonului „Respinge toate”, retragerea grea — probleme pe care le vedem des.',
        date: '2026-09-02',
        category: 'Cookie',
        body:
          'Un banner corect trebuie să ofere opțiuni egale: să accepți sau să refuzi cu același număr de clicuri. În practică vedem des butonul „Accept” proeminent și „Refuz” ascuns. Acest articol enumeră cele 5 greșeli cele mai frecvente și arată cum arată un banner corect.',
      },
      {
        slug: 'registrul-prelucrarilor',
        title: 'Registrul prelucrărilor — cum îl începi de la zero',
        excerpt:
          'Registrul nu este un document de birou, ci o unealtă de lucru. Arătăm o structură simplă de pornire.',
        date: '2026-09-08',
        category: 'Documente',
        body:
          'Registrul prelucrărilor este obligatoriu pentru operatori și este primul lucru pe care îl cere o autoritate în timpul unui control. Arătăm o structură cu 8 coloane pe care o puteți începe astăzi, fără să fiți expert în protecția datelor.',
      },
      {
        slug: 'procedura-de-scurgere',
        title: 'Procedura de reacție la scurgerea de date',
        excerpt:
          'Ce faci în primele 72 de ore de la o scurgere. Cine notifică, ce spun, cui spun.',
        date: '2026-09-12',
        category: 'Incidente',
        body:
          'Legea nr. 195/2024 prevede notificarea autorității în 72 de ore de la constatarea scurgerii. Acest articol arată pașii concreți: cine decide, ce documentezi, cum comunici cu subiecții afectați.',
      },
    ],
  },
  about: {
    title: 'Despre noi',
    lead:
      'Agenție de consultanță executivă cu trei departamente: Juridic, IT și Project Management. Lucrăm cu organizații din Republica Moldova care au nevoie de evaluări serioase, implementări tehnice și asistență end-to-end.',
    body:
      'Am pornit DATARISK MOLDOVA ca agenție de consultanță executivă care preia orice proiect pe care clientul îl poate imagina — atâta timp cât bugetul și obiectivele sunt realiste. Structura noastră are trei departamente distincte: Juridic (conformitate, contracte, GDPR), IT (dezvoltare web, aplicații, integrări) și Project Management (planificare, livrare, controlul calității). Această separație ne permite să asigurăm că fiecare proiect este condus de specialiștii potriviți, fără să amestecăm rolurile și fără să promitem ce nu putem onora.',
    status: {
      title: 'Statutul nostru',
      text:
        'Nu suntem o autoritate de supraveghere și nu emitem certificate de conformitate. Lucrăm ca agenție de consultanță executivă, iar concluziile noastre au caracter de evaluare profesională.',
    },
    principles: [
      {
        title: 'Fără să speriem',
        text:
          'Nu folosim frica de sancțiuni ca instrument de vânzare. Propunerile noastre pleacă de la ce este demonstrat, nu de la ce s-ar putea întâmpla.',
      },
      {
        title: 'Fără promisiuni pe care nu le putem onora',
        text:
          'Nu promitem „zero sancțiuni” și nu emitem „certificate”. Promitem dovezi, planuri și răspunsuri clare.',
      },
      {
        title: 'Fără limbaj de specialitate inutil',
        text:
          'Directorul, juristul și specialistul IT primesc fiecare o concluzie pe înțelesul lor. Fără jargon doar pentru a părea experți.',
      },
    ],
  },
  contact: {
    title: 'Contacte',
    lead:
      'Scrieți-ne despre situația dumneavoastră. Vă răspundem în 1 zi lucrătoare cu o propunere clară.',
    form: {
      name: 'Nume',
      org: 'Organizație',
      email: 'E-mail',
      emailPh: 'nume@organizatie.md',
      phone: 'Telefon',
      taskType: 'Tipul solicitării',
      taskTypes: [
        'Evaluare site',
        'Evaluare organizație',
        'Pachet de documente',
        'Contur de consimțământ',
        'Responsabil DPO',
        'Pregătire pentru control',
        'Instruire',
        'Altceva',
      ],
      description: 'Descriere',
      descriptionPh:
        'Spuneți-ne pe scurt: ce organizație sunteți, ce vă îngrijorează, ce ați încercat deja.',
      consent:
        'Sunt de acord ca datele mele să fie prelucrate pentru a răspunde solicitării. Am citit politica de confidențialitate.',
      privacy: 'Vezi politica de confidențialitate',
      submit: 'Trimite',
      success:
        'Solicitarea a fost primită. Vom reveni cu un răspuns în 1 zi lucrătoare.',
    },
    info: {
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
      phone: '+373 7896 2932',
      hoursLabel: 'Program',
      hours: 'Luni–Vineri, 9:00–18:00 (Chișinău)',
      addressLabel: 'Locație',
      address: 'Ne deplasăm la sediul clientului — în întreaga Republică Moldova',
      dpoLabel: 'Responsabil cu protecția datelor',
      dpo: 'dpo@datarisk.md',
      responseLabel: 'Termen de răspuns',
      response: 'Pentru solicitări: 1 zi lucrătoare. Pentru drepturile subiecților: conform art. 19 din Legea nr. 195/2024.',
    },
  },
  faq: {
    title: 'Întrebări frecvente',
    lead:
      'Răspunsuri la întrebările pe care le primim des. Dacă nu găsiți răspunsul aici, scrieți-ne.',
    items: [
      {
        q: 'Cât costă o evaluare?',
        a: 'Costul depinde de mărimea organizației și de numărul de procese analizate. După prima discuție, primim o ofertă fermă, fără surprize. Verificarea gratuită a site-ului nu are cost.',
      },
      {
        q: 'Cât durează?',
        a: 'Evaluarea site-ului: 1 zi lucrătoare. Restul serviciilor — individual, în funcție de pregătirea clientului pentru a furniza datele necesare. Demourile sunt gata în 3 zile. Documentele și analizele se evaluează individual.',
      },
      {
        q: 'Avem deja o politică de confidențialitate. Ne ajută?',
        a: 'Da. Verificăm dacă politica corespunde activității reale și legislației în vigoare. Multe politici sunt copii ale unor șabloane care nu se potrivesc organizației.',
      },
      {
        q: 'Sunteți o autoritate sau o firmă de certificare?',
        a: 'Nu. Suntem o firmă de evaluare a conformității. Concluziile noastre au caracter profesional, dar nu sunt certificate emise de o autoritate.',
      },
      {
        q: 'Lucrăm cu organizații din afara Moldovei?',
        a: 'Lucrăm cu organizații care au clienți sau activitate în Republica Moldova și trebuie să se conformeze Legii nr. 195/2024.',
      },
      {
        q: 'Ce se întâmplă cu datele pe care ni le-ați trimis?',
        a: 'Le păstrăm doar pe durata necesară pentru a răspunde solicitării și a vă oferi un serviciu. Nu le transmitem terților. Puteți solicita ștergerea oricând.',
      },
    ],
  },
  footer: {
    about:
      'DATARISK MOLDOVA SRL — studio digital cinematic. Conformitate GDPR, dezvoltare web și aplicații mobile. Legea nr. 195/2024.',
    navTitle: 'Navigare',
    legalTitle: 'Documente legale',
    contactTitle: 'Contact',
    rights: 'Toate drepturile rezervate.',
    versionLine: 'v1.0 · 13.09.2026',
    cookieSettings: 'Setări cookie',
  },
  legal: {
    privacy: {
      title: 'Politica de confidențialitate',
      updated: '13 septembrie 2026',
      intro:
        'Această politică descrie cum DATARISK MOLDOVA prelucrează datele cu caracter personal colectate prin acest site. Politica respectă Legea nr. 195/2024 a Republicii Moldova.',
      sections: [
        {
          h: '1. Operatorul',
          p: 'Operatorul datelor este DATARISK MOLDOVA SRL, IDNO 1026023020925, IBAN MD47AG000000022597426741 (BC MAIB SA, SWIFT AGRNMD2X). Persoana de contact: dpo@datarisk.md, +373 7896 2932.',
        },
        {
          h: '2. Datele colectate',
          p: 'Colectăm numele, adresa de e-mail, numărul de telefon (dacă este furnizat) și descrierea solicitării. Pentru verificarea gratuită a site-ului, colectăm adresa site-ului indicat. Nu colectăm date sensibile.',
        },
        {
          h: '3. Temeiul legal',
          p: 'Temeiul prelucrării este consimțământul dumneavoastră (art. 6 alin. (1) lit. a) din Legea nr. 195/2024), exprimat în momentul completării formularului. Pentru răspuns la solicitări, temeiul este executarea măsurilor precontractuale (lit. b).',
        },
        {
          h: '4. Destinatarii',
          p: 'Datele nu sunt transmise unor destinatari terți, cu excepția cazului în care suntem obligați prin lege. Folosim un serviciu de e-mail pe propriul domeniu și un sistem intern de gestionare a solicitărilor.',
        },
        {
          h: '5. Durata de stocare',
          p: 'Datele solicitărilor fără contract sunt păstrate 12 luni de la ultima interacțiune. Datele din contractele semnate sunt păstrate pe durata contractului și 5 ani după.',
        },
        {
          h: '6. Drepturile dumneavoastră',
          p: 'Aveți dreptul de acces, rectificare, ștergere, restricționare, portabilitate și opoziție. Puteți retrage consimțământul oricând, cu efect pentru viitor. Pentru exercitarea drepturilor: dpo@datarisk.md. Termen de răspuns: 30 de zile conform art. 19.',
        },
        {
          h: '7. Locul de prelucrare',
          p: 'Datele sunt stocate pe servere în Uniunea Europeană sau în Republica Moldova. Nu transferăm date în țări terțe fără garanții adecvate.',
        },
        {
          h: '8. Securitate',
          p: 'Aplicăm măsuri tehnice și organizatorice: HTTPS cu HSTS, CSP, acces restricționat, autentificare cu mai mulți factori pentru sistemele interne.',
        },
      ],
    },
    cookies: {
      title: 'Politica de cookie',
      updated: '13 septembrie 2026',
      intro:
        'Această politică explică ce tipuri de cookie-uri și tehnologii similare folosim pe site-ul DATARISK MOLDOVA.',
      sections: [
        {
          h: '1. Cookie-uri necesare',
          p: 'Acestea asigură funcționarea de bază a site-ului (de exemplu, memorarea alegerii de limbă și a temei). Nu necesită consimțământ și nu pot fi dezactivate.',
        },
        {
          h: '2. Cookie-uri de analiză',
          p: 'Folosim o analiză fără cookie, bazată pe sesiuni scurte. Nu setăm identificatori persistenți. Această categorie se activează doar dacă ați dat consimțământ.',
        },
        {
          h: '3. Cookie-uri de marketing',
          p: 'Nu folosim cookie-uri de marketing și nici pixeli publicitari. Site-ul nostru nu afișează reclame terțe.',
        },
        {
          h: '4. Controlul',
          p: 'Puteți schimba alegerea oricând din butonul „Setări cookie” aflat în subsolul site-ului. Retragerea se face într-un singur clic.',
        },
      ],
    },
    terms: {
      title: 'Termeni și condiții',
      updated: '13 septembrie 2026',
      intro:
        'Acești termeni reglementează utilizarea site-ului DATARISK MOLDOVA și raporturile care decurg din aceasta.',
      sections: [
        {
          h: '1. Definiții',
          p: '„Site” — site-ul web datarisk.md. „Operator” — DATARISK MOLDOVA. „Utilizator” — orice persoană care accesează site-ul.',
        },
        {
          h: '2. Conținutul',
          p: 'Conținutul site-ului are caracter informativ. Concluziile din articolele de blog nu constituie consultanță juridică formală și nu țin loc de contract semnat.',
        },
        {
          h: '3. Evaluarea, nu certificarea',
          p: 'Serviciile oferite sunt evaluări de conformitate. Nu emitem certificate și nu garantăm absența sancțiunilor.',
        },
        {
          h: '4. Proprietatea intelectuală',
          p: 'Conținutul site-ului este proprietatea DATARISK MOLDOVA SRL. Nicio parte a site-ului nu poate fi reprodusă fără acordul scris al titularului drepturilor.',
        },
        {
          h: '5. Legea aplicabilă',
          p: 'Legea aplicabilă este Legea Republicii Moldova. Litigiile se soluționează la instanțele din Chișinău.',
        },
      ],
    },
    dpa: {
      title: 'Notă privind contractul de prelucrare a datelor',
      updated: '13 septembrie 2026',
      intro:
        'Pentru clienții cu care semnăm un contract de servicii, această notă descrie cum prelucrăm datele cu caracter personal în calitate de procesator, în numele și pe seama clientului-operator.',
      sections: [
        {
          h: '1. Rolul nostru',
          p: 'În cadrul misiunilor de evaluare, lucrăm ca procesator pentru datele pe care clientul ni le pune la dispoziție. Clientul rămâne operator.',
        },
        {
          h: '2. Date prelucrate',
          p: 'Datele necesare misiunii: documente ale clientului, liste de prelucrări, contacte interne. Nu prelucrăm datele subiecților clientului decât în formă anonimizată.',
        },
        {
          h: '3. Măsuri de securitate',
          p: 'HTTPS cu HSTS, CSP, autentificare cu mai mulți factori, acces restricționat, criptare în repaus pentru datele sensibile.',
        },
        {
          h: '4. Sub-procesatori',
          p: 'Folosim un serviciu de e-mail pe propriul domeniu și un sistem de gestionare internă a solicitărilor. Lista actualizată: dpo@datarisk.md.',
        },
        {
          h: '5. Ștergerea la finalul misiunii',
          p: 'La finalul misiunii, returnăm sau ștergem datele primite, la alegerea clientului, în termen de 30 de zile.',
        },
      ],
    },
  },
  cookieBanner: {
    title: 'Alegerea cookie-urilor',
    text:
      'Folosim doar cookie-uri necesare pentru funcționarea site-ului și o analiză fără cookie dacă alegeți să o permiteți. Niciun script terț nu se încarcă înainte de a vă alege.',
    acceptAll: 'Accept toate',
    necessary: 'Doar necesare',
    rejectAll: 'Respinge toate',
    settings: 'Setări',
    privacy: 'Politica cookie',
  },
  cookieSettings: {
    title: 'Setări cookie',
    intro:
      'Alegeți categoriile pe care le permiteți. Setarea se păstrează și o puteți schimba oricând din subsol.',
    necessary: {
      title: 'Necesare',
      desc:
        'Asigură funcționarea de bază: limbă, temă, memorarea alegerii. Nu pot fi dezactivate.',
    },
    analytics: {
      title: 'Analiză',
      desc:
        'Măsurători agregate, fără identificatori persistenți. Ne ajută să înțelegem ce pagini sunt utile.',
    },
    marketing: {
      title: 'Marketing',
      desc:
        'Nu folosim și nu vom folosi pixeli publicitari. Această categorie rămâne mereu inactivă.',
    },
    save: 'Salvează alegerea',
    acceptAll: 'Accept toate',
    rejectAll: 'Respinge toate',
    close: 'Închide',
  },
}

// ============ Russian ============
const ru: Dict = {
  brand: {
    name: 'DATARISK',
    tagline: 'Кинематографическая студия · Compliance · Web · Apps',
    country: 'Республика Молдова · Закон № 195/2024',
  },
  nav: {
    home: 'Главная',
    services: 'GDPR',
    studio: 'Студия',
    methodology: 'Методология',
    check: 'Проверка',
    blog: 'Знания',
    about: 'О нас',
    contact: 'Контакты',
    faq: 'FAQ',
  },
  cta: {
    checkSite: 'Проверить сайт',
    contactUs: 'Запросить консультацию',
    viewServices: 'Смотреть услуги',
    readMore: 'Читать далее',
    startProject: 'Начать проект',
  },
  hero: {
    badge: 'КИНЕМАТОГРАФИЧЕСКАЯ СТУДИЯ · COMPLIANCE · WEB · APPS',
    titleA: ' Создаём.',
    titleB: 'Обеспечиваем соответствие.',
    lead:
      'Кинематографическая digital-студия. Создаём сайты, приложения и системы соответствия Закону № 195/2024 — с одинаковой визуальной и технической строгостью.',
    primaryCta: 'Начать проект',
    secondaryCta: 'Проверить сайт бесплатно',
    trustNote:
      'Этот сайт проходит нашу собственную проверку. Сторонние скрипты не запускаются до вашего согласия.',
  },
  trust: {
    title: 'Оценка соответствия, а не сертификат',
    lead:
      'Работаем в духе закона: фиксируем то, что доказано, формулируем ясные выводы и не обещаем того, что не можем выполнить. Эта позиция — часть результата, а не только метода.',
    disclaimer:
      'Мы не выдаём сертификаты соответствия и не являемся надзорным органом. Наши выводы носят характер профессиональной оценки и основаны на доказательствах, собранных в ходе работы.',
    notCheck: {
      title: 'Что мы не проверяем',
      items: [
        'Внутреннюю систему надзорных органов и их процедуры.',
        'Физический доступ к данным или безопасность инфраструктуры клиента за пределами публичной поверхности.',
        'Уголовно-правовые аспекты или споры, выходящие за рамки законодательства о данных.',
      ],
    },
    promiseTitle: 'Пример формулировки вывода',
    promise:
      '«По результатам проверки форма сбора адреса e-mail на странице /contact передаёт данные стороннему сервису до показа баннера согласия. Это является несоответствием по ст. 7 п. (3) Закона № 195/2024. План исправления: отложить загрузку стороннего скрипта до получения согласия».',
  },
  services: {
    title: 'Услуги',
    lead:
      'Каждая услуга имеет конкретный результат: отчёт с доказательствами, комплект документов или работающий механизм. Выбирайте то, что подходит вашей ситуации.',
    cardsTitle: 'Наши услуги',
    items: [
      {
        slug: 'site-assessment',
        title: 'Оценка соответствия сайта',
        short:
          'Публичная поверхность: политики, cookie, формы, трекеры, HTTP-заголовки.',
        what:
          'Анализируем публичную поверхность сайта: политики, баннер cookie, формы сбора, загружаемые трекеры, HTTP-заголовки и поток согласия. Проверяем, загружаются ли сторонние скрипты до согласия.',
        how:
          'Проходим сайт как реальный посетитель — в чистом профиле, без сохранённых состояний. Фиксируем сетевые запросы, сравниваем содержание политик с реальным потоком и формулируем выводы только на собранных доказательствах.',
        result:
          'Отчёт с доказательствами (скриншоты, список запросов, фрагменты кода), список отклонений со ссылками на статьи закона и план исправления с приоритетом.',
        duration: '1 рабочий день',
      },
      {
        slug: 'org-assessment',
        title: 'Оценка соответствия организации',
        short:
          'Документы и процессы: учёт обработок, права субъектов, утечки данных.',
        what:
          'Оцениваем документы и процессы организации: реестр обработок, способы реагирования на запросы субъектов, процедуру уведомления об утечках, договоры с обработчиками и назначение ответственного за защиту данных.',
        how:
          'Интервью с ключевыми лицами, проверка документов, сравнение с требованиями закона. Выявляем пробелы и ранжируем их по тяжести и вероятности.',
        result:
          'Отчёт об оценке + перечень пробелов с рекомендациями и реалистичными сроками.',
        duration: 'Индивидуально, в зависимости от сложности',
      },
      {
        slug: 'documents-pack',
        title: 'Пакет документов',
        short:
          'Политика конфиденциальности, политика cookie, согласия, реестр, процедура утечек.',
        what:
          'Готовим полный комплект документов, необходимых для деятельности: политика конфиденциальности, политика cookie, формы согласия, реестр обработок, процедура реагирования на утечки данных.',
        how:
          'Отталкиваемся от реальной деятельности клиента, а не от шаблона. Каждый документ содержит реальный перечень обработок, получателей и правовые основания.',
        result:
          'Персонализированный комплект документов, готовый к внутреннему принятию, с инструкциями по использованию.',
        duration: 'Индивидуально, в зависимости от сложности',
      },
      {
        slug: 'cookie-consent',
        title: 'Контур согласия и cookie',
        short:
          'Внедрение механизма согласия, настройка режима согласия, проверка блокировки трекеров.',
        what:
          'Внедряем работающий механизм согласия: баннер с «Принять все», «Только необходимые», «Отклонить все», постоянная кнопка настроек и сохранение выбора.',
        how:
          'Настраиваем режим согласия (consent mode), проверяем, что трекеры не загружаются до согласия и что отзыв доступен в один клик.',
        result:
          'Работающий контур с проверкой в чистом профиле; инструкции по сопровождению.',
        duration: 'Индивидуально, в зависимости от сложности',
      },
      {
        slug: 'dpo-service',
        title: 'Ответственный за защиту данных (как услуга)',
        short:
          'Функция ответственного лица по договору.',
        what:
          'Обеспечиваем функцию ответственного за защиту данных (DPO) по договору — в случаях, когда оператор обязан или хочет передать её внешнему специалисту.',
        how:
          'Работаем как внутренняя сторона: консультации, проверка документов, ответ на запросы субъектов, взаимодействие с надзорным органом.',
        result:
          'Исполнение обязанностей оператора с ясной точкой контакта и сроками ответа.',
        duration: 'Индивидуально, в зависимости от готовности клиента',
      },
      {
        slug: 'inspection-prep',
        title: 'Подготовка к проверке',
        short:
          'Репетиция, перечень доказательств, ответы на запросы.',
        what:
          'Готовим вас к реальному взаимодействию с Национальным центром защиты персональных данных: симулируем запрос, готовим перечень доказательств и формулировки ответов.',
        how:
          'Отталкиваемся от реалистичного сценария, проходим этапы и выявляем слабые места до фактической проверки.',
        result:
          'Папка с готовыми доказательствами, сформулированные ответы и ясное контактное лицо.',
        duration: 'Индивидуально, в зависимости от готовности клиента',
      },
      {
        slug: 'training',
        title: 'Обучение сотрудников',
        short:
          'Базовый курс по обработке данных.',
        what:
          'Базовый курс для сотрудников, работающих с персональными данными: что такое персональные данные, что значит обработка, какие права у субъектов, что делать при утечке.',
        how:
          'Рабочие сессии (онлайн или офлайн) с примерами из реальной деятельности клиента. Без излишнего специального жаргона.',
        result:
          'Материалы курса + подтверждение проведения, для папки соответствия.',
        duration: '1 день (4 часа)',
      },
    ],
    backToList: '← Назад к списку услуг',
  },
  studio: {
    badge: 'СТУДИЯ · WEB · APPS',
    title: 'Создаём кинематографические цифровые продукты',
    lead:
      'Как исполнительное консалтинговое агентство мы берёмся за любой проект, который клиент может представить — при условии реалистичного бюджета. Работаем с современными технологиями, не перечисляя их как резюме.',
    webTitle: 'Веб-разработка',
    webLead:
      'Сайты, веб-приложения, интернет-магазины, корпоративные порталы. От визитки до SaaS — с кинематографическим дизайном и встроенным GDPR-соответствием.',
    webFeatures: [
      { title: 'Кинематографические сайты', desc: 'Сильный визуальный дизайн, плавные анимации, аккуратная типографика.' },
      { title: 'Веб-приложения', desc: 'Дашборды, порталы, SaaS — с авторизацией и ролями.' },
      { title: 'E-commerce', desc: 'Быстрые интернет-магазины, интеграции платежей и CRM.' },
      { title: 'Headless CMS', desc: 'Контент, редактируемый без разработчика, с preview в реальном времени.' },
    ],
    appsTitle: 'Мобильные приложения',
    appsLead:
      'Нативные и кросс-платформенные приложения для iOS и Android. Одна кодовая база, нативный опыт на каждой платформе.',
    appsFeatures: [
      { title: 'Cross-platform', desc: 'Единая база кода для iOS и Android.' },
      { title: 'Offline-first', desc: 'Локальные данные синхронизуются при появлении соединения.' },
      { title: 'Push-уведомления', desc: 'Коммуникация с пользователями, сегментация, автоматизации.' },
      { title: 'Публикация', desc: 'Полная поддержка для App Store и Google Play.' },
    ],
    processTitle: 'Наш процесс',
    processLead: 'Пять чётких этапов. Без сюрпризов.',
    steps: [
      { n: '01', title: 'Discovery', desc: 'Понимаем цель, аудиторию, ограничения. Определяем рамки.' },
      { n: '02', title: 'Дизайн', desc: 'Wireframes, прототип, дизайн-система. Утверждаем вместе.' },
      { n: '03', title: 'Разработка', desc: 'Еженедельные спринты с demo. Тестируемый код, регулярные ревью.' },
      { n: '04', title: 'Compliance', desc: 'GDPR, cookie, формы, политики — встроены, а не прилеплены.' },
      { n: '05', title: 'Запуск', desc: 'Публикация, мониторинг, поддержка. Итерируем по реальным данным.' },
    ],
    stackTitle: 'Технические возможности',
    stackLead: 'Не перечисляем технологии как резюме. Используем подходящий стек под каждый проект.',
    capabilities: [
      { title: 'Современный frontend', desc: 'SPA-фреймворки, SSR, анимации, дизайн-системы.' },
      { title: 'Надёжный backend', desc: 'API, базы данных, авторизация, сторонние интеграции.' },
      { title: 'Mobile', desc: 'Нативные и кросс-платформенные приложения для iOS и Android.' },
      { title: 'Инфраструктура', desc: 'Cloud, CI/CD, мониторинг, резервные копии, безопасность.' },
    ],
    ndaTitle: 'Строгая конфиденциальность',
    ndaLead:
      'Мы не публикуем имена клиентов, логотипы или детали проектов. Наша NDA-политика — часть договора с каждым клиентом.',
    ndaItems: [
      { title: 'NDA с каждым клиентом', desc: 'Подписывается в начале сотрудничества, без исключений.' },
      { title: 'Без логотипов клиентов', desc: 'Не используем идентичность клиента в маркетинге.' },
      { title: 'Разделение данных', desc: 'Доступ к данным клиента только у команды проекта.' },
      { title: 'Удаление по завершении', desc: 'По окончании сотрудничества возвращаем или удаляем данные.' },
    ],
    statsTitle: 'Возможности',
    stats: [
      { value: 'от 150€', label: 'Стартовая цена' },
      { value: '3 отдела', label: 'Юр · IT · PM' },
      { value: '99.5%', label: 'Гарантированный uptime' },
      { value: '3 дня', label: 'До первого демо' },
    ],
    ctaTitle: 'Есть проект на примете?',
    ctaText: 'Обсудим цели, ограничения и бюджет. Цены начинаются от 150€ и адаптируются под требования.',
    ctaButton: 'Начать проект',
  },
  methodology: {
    title: 'Методология',
    lead:
      'Работаем на трёх уровнях вывода, чтобы каждый участник — директор, юрист, IT — понимал точно, что установлено и что дальше.',
    levels: [
      {
        n: '01',
        title: 'Вывод для директора',
        audience: 'Руководство',
        desc:
          'Одна ясная фраза: «Есть отклонение / нет отклонения». С предполагаемым воздействием, без обещаний санкций.',
      },
      {
        n: '02',
        title: 'Вывод для юриста',
        audience: 'Юридический отдел',
        desc:
          'Точная ссылка на статью Закона № 195/2024 и, при необходимости, на GDPR. Без ссылок на отменённые акты.',
      },
      {
        n: '03',
        title: 'Вывод для IT',
        audience: 'Техническая команда',
        desc:
          'Точный идентификатор: URL, запрос, скрипт, строка кода. План исправления с проверяемыми шагами.',
      },
    ],
    example: {
      title: 'Пример вывода',
      text:
        '«Форма на странице /contact передаёт поле телефона, не маркируя его как обязательное/необязательное в политике конфиденциальности. Данные уходят на сторонний сервис (forms.example.com) до показа баннера согласия. Ст. 13 п. e) Закона № 195/2024 — информация при сборе. Приоритет: высокий».',
    },
  },
  check: {
    title: 'Бесплатная проверка сайта',
    lead:
      'Первая проверка, без обязательств. Сообщаем, что нашли на публичной поверхности сайта — без входа в вашу систему.',
    whatWeCheck: 'Что проверяем',
    whatWeCheckItems: [
      'Наличие и качество политики конфиденциальности и политики cookie.',
      'Работу баннера согласия и кнопок отзыва.',
      'Загрузку сторонних скриптов до согласия.',
      'Релевантные HTTP-заголовки (CSP, HSTS, X-Content-Type-Options).',
    ],
    whatWeDont: 'Чего не делаем при бесплатной проверке',
    whatWeDontItems: [
      'Не входим во внутреннюю систему, базы данных или админ-панель.',
      'Не выдаём полный отчёт — присылаем краткую заметку с основными выводами.',
      'Не даём формальной юридической консультации на этом этапе.',
    ],
    form: {
      site: 'Адрес сайта',
      sitePh: 'https://example.md',
      name: 'Имя',
      email: 'E-mail',
      emailPh: 'name@organization.md',
      phone: 'Телефон (необязательно)',
      submit: 'Отправить заявку',
      consent:
        'Я согласен на обработку моих данных, чтобы получить заметку с проверкой. Я прочитал политику конфиденциальности.',
      privacy: 'Смотреть политику конфиденциальности',
      success:
        'Заявка получена. Вернёмся с заметкой о проверке в течение 1 рабочего дня.',
    },
  },
  blog: {
    title: 'Знания',
    lead:
      'Статьи о Законе № 195/2024 и его практическом применении. Без запугивания санкциями.',
    readMore: 'Читать статью',
    updated: 'Обновлено',
    articles: [
      {
        slug: 'ce-este-legea-195-2024',
        title: 'Что такое Закон № 195/2024 и что он значит для операторов',
        excerpt:
          'Обзор нового закона: на кого распространяется, какие обязанности появляются и что значит «оператор» на практике.',
        date: '2026-08-12',
        category: 'Закон',
        body:
          'Закон № 195/2024 о защите персональных данных вступает в силу и приносит ряд новых обязанностей для операторов в Республике Молдова. Работа основана на принципах, схожих с GDPR, но с локальными особенностями, которые нужно знать. В этой статье объясняем: кто считается оператором, что значит «правовое основание», как работают права субъектов и что нужно сделать организации в первые 30 дней после вступления закона в силу.',
      },
      {
        slug: 'consimtamant-vs-interes-legitim',
        title: 'Согласие или законный интерес — как выбрать',
        excerpt:
          'Не каждая обработка основана на согласии. Статья объясняет, когда выбрать каждое правовое основание и какие риски несёт каждый вариант.',
        date: '2026-08-25',
        category: 'Практика',
        body:
          'Согласие — не единственное правовое основание. Многие обработки строятся на законном интересе или на исполнении договора. Ошибка в выборе основания приводит к ненужным документам и юридической уязвимости. В этой статье — чек-лист для решения, какое основание подходит каждому конкретному случаю.',
      },
      {
        slug: 'banner-de-cookie-facut-bine',
        title: 'Баннер cookie, сделанный правильно — 5 частых ошибок',
        excerpt:
          'Стерли «Принять все», нет кнопки «Отклонить», тяжёлый отзыв — проблемы, которые видим часто.',
        date: '2026-09-02',
        category: 'Cookie',
        body:
          'Правильный баннер должен давать равные опции: принять или отказаться тем же числом кликов. На практике видим часто заметную кнопку «Принять» и спрятанный «Отказ». Эта статья перечисляет 5 самых частых ошибок и показывает, как выглядит правильный баннер.',
      },
      {
        slug: 'registrul-prelucrarilor',
        title: 'Реестр обработок — как начать с нуля',
        excerpt:
          'Реестр — не канцелярский документ, а рабочий инструмент. Показываем простую стартовую структуру.',
        date: '2026-09-08',
        category: 'Документы',
        body:
          'Реестр обработок обязателен для операторов и это первое, что запрашивает надзорный орган при проверке. Показываем структуру из 8 колонок, которую можно начать сегодня, не будучи экспертом по защите данных.',
      },
      {
        slug: 'procedura-de-scurgere',
        title: 'Процедура реагирования на утечку данных',
        excerpt:
          'Что делать в первые 72 часа после утечки. Кто уведомляет, что говорит, кому сообщает.',
        date: '2026-09-12',
        category: 'Инциденты',
        body:
          'Закон № 195/2024 предусматривает уведомление надзорного органа в течение 72 часов с момента обнаружения утечки. Эта статья показывает конкретные шаги: кто принимает решение, что фиксировать, как общаться с затронутыми субъектами.',
      },
    ],
  },
  about: {
    title: 'О нас',
    lead:
      'Исполнительное консалтинговое агентство с тремя отделами: Юридический, IT и Project Management. Работаем с организациями Республики Молдовы, которым нужны серьёзные оценки, технические внедрения и end-to-end сопровождение.',
    body:
      'Мы запустили DATARISK MOLDOVA как исполнительное консалтинговое агентство, которое берётся за любой проект, который клиент может себе представить — при условии, что бюджет и цели реалистичны. Наша структура состоит из трёх отдельных отделов: Юридический (соответствие, договоры, GDPR), IT (веб-разработка, приложения, интеграции) и Project Management (планирование, сдача, контроль качества). Это разделение позволяет нам обеспечить, чтобы каждый проект вели подходящие специалисты, без смешивания ролей и без обещаний того, что мы не сможем выполнить.',
    status: {
      title: 'Наш статус',
      text:
        'Мы не надзорный орган и не выдаём сертификаты соответствия. Мы работаем как исполнительное консалтинговое агентство, и наши выводы носят характер профессиональной оценки.',
    },
    principles: [
      {
        title: 'Без запугивания',
        text:
          'Не используем страх санкций как инструмент продажи. Предложения идут от того, что доказано, а не от того, что может случиться.',
      },
      {
        title: 'Без обещаний, которые нельзя выполнить',
        text:
          'Не обещаем «ноль санкций» и не выдаём «сертификаты». Обещаем доказательства, планы и ясные ответы.',
      },
      {
        title: 'Без излишнего жаргона',
        text:
          'Директор, юрист и IT-специалист получают каждый вывод на своём языке. Без жаргона ради показной экспертности.',
      },
    ],
  },
  contact: {
    title: 'Контакты',
    lead:
      'Напишите о вашей ситуации. Ответим в 1 рабочий день с ясным предложением.',
    form: {
      name: 'Имя',
      org: 'Организация',
      email: 'E-mail',
      emailPh: 'name@organization.md',
      phone: 'Телефон',
      taskType: 'Тип заявки',
      taskTypes: [
        'Оценка сайта',
        'Оценка организации',
        'Пакет документов',
        'Контур согласия',
        'Ответственный DPO',
        'Подготовка к проверке',
        'Обучение',
        'Другое',
      ],
      description: 'Описание',
      descriptionPh:
        'Кратко расскажите: какая у вас организация, что беспокоит, что уже пробовали.',
      consent:
        'Я согласен на обработку моих данных, чтобы получить ответ на заявку. Я прочитал политику конфиденциальности.',
      privacy: 'Смотреть политику конфиденциальности',
      submit: 'Отправить',
      success:
        'Заявка получена. Вернёмся с ответом в течение 1 рабочего дня.',
    },
    info: {
      emailLabel: 'E-mail',
      phoneLabel: 'Телефон',
      phone: '+373 7896 2932',
      hoursLabel: 'Часы работы',
      hours: 'Понедельник–Пятница, 9:00–18:00 (Кишинёв)',
      addressLabel: 'Локация',
      address: 'Выезжаем на локацию к клиенту — по всей Республике Молдова',
      dpoLabel: 'Ответственный за защиту данных',
      dpo: 'dpo@datarisk.md',
      responseLabel: 'Срок ответа',
      response: 'На заявки: 1 рабочий день. На запросы субъектов: по ст. 19 Закона № 195/2024.',
    },
  },
  faq: {
    title: 'Частые вопросы',
    lead:
      'Ответы на вопросы, которые получаем часто. Если не нашли ответ, напишите нам.',
    items: [
      {
        q: 'Сколько стоит оценка?',
        a: 'Стоимость зависит от размера организации и числа анализируемых процессов. После первой беседы получаете твёрдую смету, без сюрпризов. Бесплатная проверка сайта бесплатна.',
      },
      {
        q: 'Сколько длится?',
        a: 'Оценка сайта: 1 рабочий день. Остальные услуги — индивидуально, в зависимости от готовности клиента предоставить нужные данные. Демо-версии готовы за 3 дня. Документы и анализы рассматриваются индивидуально.',
      },
      {
        q: 'У нас уже есть политика конфиденциальности. Это поможет?',
        a: 'Да. Проверим, соответствует ли политика реальной деятельности и действующему законодательству. Многие политики — копии шаблонов, которые не подходят организации.',
      },
      {
        q: 'Вы — надзорный орган или сертифицирующая компания?',
        a: 'Нет. Мы — фирма по оценке соответствия. Наши выводы носят профессиональный характер, но не являются сертификатами, выданными надзорным органом.',
      },
      {
        q: 'Работаете с организациями не из Молдовы?',
        a: 'Работаем с организациями, у которых есть клиенты или деятельность в Республике Молдова и которые должны соответствовать Закону № 195/2024.',
      },
      {
        q: 'Что произойдёт с данными, которые мы отправили?',
        a: 'Храним их только на протяжении срока, нужного для ответа на заявку и предоставления услуги. Не передаём третьим лицам. Можете запросить удаление в любой момент.',
      },
    ],
  },
  footer: {
    about:
      'DATARISK MOLDOVA SRL — кинематографическая digital-студия. GDPR-соответствие, веб-разработка и мобильные приложения. Закон № 195/2024.',
    navTitle: 'Навигация',
    legalTitle: 'Правовые документы',
    contactTitle: 'Контакты',
    rights: 'Все права защищены.',
    versionLine: 'v1.0 · 13.09.2026',
    cookieSettings: 'Настройки cookie',
  },
  legal: {
    privacy: {
      title: 'Политика конфиденциальности',
      updated: '13 сентября 2026',
      intro:
        'Эта политика описывает, как DATARISK MOLDOVA обрабатывает персональные данные, собранные через этот сайт. Политика соответствует Закону № 195/2024 Республики Молдовы.',
      sections: [
        {
          h: '1. Оператор',
          p: 'Оператор данных — DATARISK MOLDOVA SRL, IDNO 1026023020925, IBAN MD47AG000000022597426741 (BC MAIB SA, SWIFT AGRNMD2X). Контакт: dpo@datarisk.md, +373 7896 2932.',
        },
        {
          h: '2. Собираемые данные',
          p: 'Собираем имя, адрес e-mail, номер телефона (если предоставлен) и описание заявки. Для бесплатной проверки сайта — адрес указанного сайта. Не собираем чувствительные данные.',
        },
        {
          h: '3. Правовое основание',
          p: 'Основание обработки — ваше согласие (ст. 6 п. 1 пп. a Закона № 195/2024), выраженное при заполнении формы. Для ответа на заявки — принятие предварительных договорных мер (пп. b).',
        },
        {
          h: '4. Получатели',
          p: 'Данные не передаются третьим получателям, кроме случаев, обязанных законом. Используем почту на собственном домене и внутреннюю систему учёта заявок.',
        },
        {
          h: '5. Срок хранения',
          p: 'Данные заявок без договора хранятся 12 месяцев с момента последнего взаимодействия. Данные по подписанным договорам — на срок договора и 5 лет после.',
        },
        {
          h: '6. Ваши права',
          p: 'Вы имеете право доступа, исправления, удаления, ограничения, переносимости и возражения. Можете отозвать согласие в любой момент с действием на будущее. Для реализации прав: dpo@datarisk.md. Срок ответа: 30 дней по ст. 19.',
        },
        {
          h: '7. Место обработки',
          p: 'Данные хранятся на серверах в ЕС или Республике Молдове. Не передаём данные в третьи страны без адекватных гарантий.',
        },
        {
          h: '8. Безопасность',
          p: 'Применяем технические и организационные меры: HTTPS с HSTS, CSP, ограниченный доступ, многофакторная аутентификация для внутренних систем.',
        },
      ],
    },
    cookies: {
      title: 'Политика cookie',
      updated: '13 сентября 2026',
      intro:
        'Эта политика объясняет, какие типы cookie и подобных технологий мы используем на сайте DATARISK MOLDOVA.',
      sections: [
        {
          h: '1. Необходимые cookie',
          p: 'Обеспечивают базовую работу сайта (например, запоминание языка и темы). Не требуют согласия и не могут быть отключены.',
        },
        {
          h: '2. Аналитические cookie',
          p: 'Используем аналитику без cookie, на коротких сессиях. Не устанавливаем постоянные идентификаторы. Эта категория включается только если вы дали согласие.',
        },
        {
          h: '3. Маркетинговые cookie',
          p: 'Не используем маркетинговые cookie и рекламные пиксели. Наш сайт не показывает стороннюю рекламу.',
        },
        {
          h: '4. Управление',
          p: 'Можете изменить выбор в любой момент в кнопке «Настройки cookie» в подвале сайта. Отзыв — в один клик.',
        },
      ],
    },
    terms: {
      title: 'Условия и положения',
      updated: '13 сентября 2026',
      intro:
        'Эти условия регулируют использование сайта DATARISK MOLDOVA и вытекающие из него отношения.',
      sections: [
        {
          h: '1. Определения',
          p: '«Сайт» — сайт datarisk.md. «Оператор» — DATARISK MOLDOVA. «Пользователь» — любое лицо, заходящее на сайт.',
        },
        {
          h: '2. Содержание',
          p: 'Содержимое сайта носит информационный характер. Выводы в статьях блога не являются формальной юридической консультацией и не заменяют подписанный договор.',
        },
        {
          h: '3. Оценка, не сертификация',
          p: 'Предлагаемые услуги — это оценки соответствия. Мы не выдаём сертификаты и не гарантируем отсутствие санкций.',
        },
        {
          h: '4. Интеллектуальная собственность',
          p: 'Содержание сайта — собственность DATARISK MOLDOVA SRL. Никакая часть сайта не может быть воспроизведена без письменного согласия правообладателя.',
        },
        {
          h: '5. Применимое право',
          p: 'Применимое право — законы Республики Молдовы. Споры рассматриваются судами Кишинёва.',
        },
      ],
    },
    dpa: {
      title: 'Сведения о договоре обработки данных',
      updated: '13 сентября 2026',
      intro:
        'Для клиентов, с которыми мы подписываем договор услуг, эта заметка описывает, как мы обрабатываем персональные данные в качестве обработчика — от имени и по поручению клиента-оператора.',
      sections: [
        {
          h: '1. Наша роль',
          p: 'В рамках оценочных работ мы действуем как обработчик данных, предоставленных клиентом. Клиент остаётся оператором.',
        },
        {
          h: '2. Обрабатываемые данные',
          p: 'Данные, необходимые для работы: документы клиента, перечни обработок, внутренние контакты. Не обрабатываем данные субъектов клиента иначе как в анонимизированной форме.',
        },
        {
          h: '3. Меры безопасности',
          p: 'HTTPS с HSTS, CSP, многофакторная аутентификация, ограниченный доступ, шифрование при хранении для чувствительных данных.',
        },
        {
          h: '4. Субобработчики',
          p: 'Используем почту на собственном домене и внутреннюю систему учёта заявок. Актуальный список: dpo@datarisk.md.',
        },
        {
          h: '5. Удаление по завершении',
          p: 'По завершении работы возвращаем или удаляем полученные данные по выбору клиента в течение 30 дней.',
        },
      ],
    },
  },
  cookieBanner: {
    title: 'Выбор cookie',
    text:
      'Используем только необходимые cookie для работы сайта и аналитику без cookie, если вы разрешите. Сторонние скрипты не загружаются до вашего выбора.',
    acceptAll: 'Принять все',
    necessary: 'Только необходимые',
    rejectAll: 'Отклонить все',
    settings: 'Настройки',
    privacy: 'Политика cookie',
  },
  cookieSettings: {
    title: 'Настройки cookie',
    intro:
      'Выберите категории, которые разрешаете. Настройка сохраняется, и её можно изменить в подвале в любой момент.',
    necessary: {
      title: 'Необходимые',
      desc:
        'Обеспечивают базовую работу: язык, тема, запоминание выбора. Не могут быть отключены.',
    },
    analytics: {
      title: 'Аналитика',
      desc:
        'Агрегированные измерения без постоянных идентификаторов. Помогают понять, какие страницы полезны.',
    },
    marketing: {
      title: 'Маркетинг',
      desc:
        'Не используем и не будем использовать рекламные пиксели. Эта категория остаётся всегда неактивной.',
    },
    save: 'Сохранить выбор',
    acceptAll: 'Принять все',
    rejectAll: 'Отклонить все',
    close: 'Закрыть',
  },
}

// ============ English ============
const en: Dict = {
  brand: {
    name: 'DATARISK',
    tagline: 'Cinematic studio · Compliance · Web · Apps',
    country: 'Republic of Moldova · Law No. 195/2024',
  },
  nav: {
    home: 'Home',
    services: 'GDPR',
    studio: 'Studio',
    methodology: 'Methodology',
    check: 'Check',
    blog: 'Knowledge',
    about: 'About',
    contact: 'Contact',
    faq: 'FAQ',
  },
  cta: {
    checkSite: 'Check site',
    contactUs: 'Request consultation',
    viewServices: 'View services',
    readMore: 'Read more',
    startProject: 'Start a project',
  },
  hero: {
    badge: 'CINEMATIC STUDIO · COMPLIANCE · WEB · APPS',
    titleA: ' We build.',
    titleB: 'We make it compliant.',
    lead:
      'A cinematic digital studio. We build sites, apps and compliance systems under Law No. 195/2024 — with the same visual and technical rigor.',
    primaryCta: 'Start a project',
    secondaryCta: 'Check a site for free',
    trustNote:
      'This site passes our own audit. No third-party script runs until you give consent.',
  },
  trust: {
    title: 'Assessment, not a certificate',
    lead:
      'We work in the spirit of the law: we identify what is proven by evidence, formulate clear conclusions, and do not promise what we cannot deliver. This position is part of the result, not only of the method.',
    disclaimer:
      'We do not issue compliance certificates and we are not a supervisory authority. Our conclusions are professional assessments based on evidence collected during the engagement.',
    notCheck: {
      title: 'What we do not check',
      items: [
        'The internal system of supervisory authorities and their procedures.',
        'Physical access to data or security of the client’s infrastructure beyond the public surface.',
        'Criminal-law aspects or disputes outside the scope of data protection law.',
      ],
    },
    promiseTitle: 'Example of a conclusion formulation',
    promise:
      '“Based on the review, the e-mail collection form on the /contact page transmits data to a third-party service before the consent banner is shown. This constitutes a non-conformity under Article 7(3) of Law No. 195/2024. Remediation plan: defer the loading of the third-party script until consent is obtained.”',
  },
  services: {
    title: 'Services',
    lead:
      'Each service has a concrete outcome: an evidence-based report, a set of documents, or a working mechanism. Choose what fits your situation.',
    cardsTitle: 'Our services',
    items: [
      {
        slug: 'site-assessment',
        title: 'Website compliance assessment',
        short:
          'Public surface: policies, cookies, forms, trackers, HTTP headers.',
        what:
          'We analyse the public surface of the website: policies, the cookie banner, collection forms, loaded trackers, HTTP headers, and the consent flow. We check whether third-party scripts load before consent.',
        how:
          'We walk the site as a real visitor — in a clean profile, with no saved state. We capture network requests, compare policy contents with the actual flow, and formulate conclusions only on the evidence collected.',
        result:
          'A report with evidence (screenshots, list of requests, code snippets), a list of non-conformities with references to the law, and a prioritised remediation plan.',
        duration: '1 business day',
      },
      {
        slug: 'org-assessment',
        title: 'Organisation compliance assessment',
        short:
          'Documents and processes: processing records, subject rights, data breaches.',
        what:
          'We assess the organisation’s documents and processes: the processing register, response to subject requests, breach notification procedure, processor contracts and the designation of a data protection officer.',
        how:
          'Interviews with key people, document review, comparison with legal requirements. We identify gaps and rank them by severity and likelihood.',
        result:
          'Assessment report + register of identified gaps, with recommendations and realistic deadlines.',
        duration: 'Individual, depending on complexity',
      },
      {
        slug: 'documents-pack',
        title: 'Documents package',
        short:
          'Privacy policy, cookie policy, consents, register, breach procedure.',
        what:
          'We prepare a complete set of documents needed for activity: privacy policy, cookie policy, consent forms, processing register, breach response procedure.',
        how:
          'We start from the client’s actual activity, not from a generic template. Each document contains the actual list of processing operations, recipients and legal bases.',
        result:
          'A personalised document set, ready for internal adoption, with usage instructions.',
        duration: 'Individual, depending on complexity',
      },
      {
        slug: 'cookie-consent',
        title: 'Consent and cookie framework',
        short:
          'Implementing the consent mechanism, configuring consent mode, verifying tracker blocking.',
        what:
          'We implement a consent mechanism that actually works: a banner with “Accept all”, “Necessary only”, “Reject all”, a persistent settings button and stored choice.',
        how:
          'We configure consent mode, verify that trackers do not load before consent and that withdrawal is one click away.',
        result:
          'A working framework verified in a clean profile; maintenance instructions.',
        duration: 'Individual, depending on complexity',
      },
      {
        slug: 'dpo-service',
        title: 'Data protection officer (as a service)',
        short:
          'The DPO function, under contract.',
        what:
          'We provide the data protection officer (DPO) function under contract — where the controller has this obligation or chooses to outsource it.',
        how:
          'We act as an internal party: advisory, document review, response to subject requests, interaction with the supervisory authority.',
        result:
          'Fulfilment of controller obligations with a clear point of contact and response deadlines.',
        duration: 'Individual, depending on client readiness',
      },
      {
        slug: 'inspection-prep',
        title: 'Inspection preparation',
        short:
          'Rehearsal, evidence list, response formulation.',
        what:
          'We prepare you for an actual interaction with the National Centre for Personal Data Protection: we simulate a request, prepare the evidence list and formulate responses.',
        how:
          'We start from a realistic scenario, walk through the stages and identify weak points before the actual inspection.',
        result:
          'A folder with prepared evidence, formulated responses and a clear point of contact.',
        duration: 'Individual, depending on client readiness',
      },
      {
        slug: 'training',
        title: 'Employee training',
        short:
          'Basic course on data processing.',
        what:
          'A basic course for employees handling personal data: what personal data is, what processing means, what rights subjects have, what to do in a breach.',
        how:
          'Working sessions (online or in person) with examples from the client’s real activity. No unnecessary jargon.',
        result:
          'Course materials + confirmation of delivery, for the compliance file.',
        duration: '1 day (4 hours)',
      },
    ],
    backToList: '← Back to service list',
  },
  studio: {
    badge: 'STUDIO · WEB · APPS',
    title: 'We build cinematic digital products',
    lead:
      'As an executive consulting agency, we take on any project the client can imagine — as long as the budget is realistic. We work with modern technologies without listing them like a CV.',
    webTitle: 'Web Development',
    webLead:
      'Sites, web apps, online stores, corporate portals. From brochure to SaaS — with cinematic design and integrated GDPR compliance.',
    webFeatures: [
      { title: 'Cinematic sites', desc: 'Strong visual design, fluid animations, careful typography.' },
      { title: 'Web apps', desc: 'Dashboards, portals, SaaS — with authentication and roles.' },
      { title: 'E-commerce', desc: 'Fast online stores, payment and CRM integrations.' },
      { title: 'Headless CMS', desc: 'Content editable without a developer, with real-time preview.' },
    ],
    appsTitle: 'Mobile Apps',
    appsLead:
      'Native and cross-platform apps for iOS and Android. One codebase, native experience on each platform.',
    appsFeatures: [
      { title: 'Cross-platform', desc: 'One codebase for iOS and Android.' },
      { title: 'Offline-first', desc: 'Local data synced when the connection comes back.' },
      { title: 'Push notifications', desc: 'User communication, segmentation, automations.' },
      { title: 'Publishing', desc: 'Full assistance for App Store and Google Play.' },
    ],
    processTitle: 'Our process',
    processLead: 'Five clear stages. No surprises.',
    steps: [
      { n: '01', title: 'Discovery', desc: 'We understand the goal, audience, constraints. We define the scope.' },
      { n: '02', title: 'Design', desc: 'Wireframes, prototype, design system. We approve together.' },
      { n: '03', title: 'Build', desc: 'Weekly sprints with demos. Tested code, regular reviews.' },
      { n: '04', title: 'Compliance', desc: 'GDPR, cookie, forms, policies — integrated, not bolted on.' },
      { n: '05', title: 'Launch', desc: 'Release, monitoring, support. We iterate on real data.' },
    ],
    stackTitle: 'Technical capabilities',
    stackLead: 'We do not list technologies like a CV. We use the right stack for each project.',
    capabilities: [
      { title: 'Modern frontend', desc: 'SPA frameworks, SSR, animations, design systems.' },
      { title: 'Solid backend', desc: 'APIs, databases, authentication, third-party integrations.' },
      { title: 'Mobile', desc: 'Native and cross-platform apps for iOS and Android.' },
      { title: 'Infrastructure', desc: 'Cloud, CI/CD, monitoring, backups, security.' },
    ],
    ndaTitle: 'Strict confidentiality',
    ndaLead:
      'We do not publish client names, logos or project details. Our NDA policy is part of the contract with every client.',
    ndaItems: [
      { title: 'NDA with every client', desc: 'Signed at the start of the collaboration, no exceptions.' },
      { title: 'No client logos', desc: 'We do not use the client’s identity in marketing.' },
      { title: 'Segregated data', desc: 'Access to client data only for the project team.' },
      { title: 'Erasure on completion', desc: 'At the end of the collaboration we return or delete the data.' },
    ],
    statsTitle: 'Capabilities',
    stats: [
      { value: 'from 150€', label: 'Starting price' },
      { value: '3 depts', label: 'Legal · IT · PM' },
      { value: '99.5%', label: 'Guaranteed uptime' },
      { value: '3 days', label: 'To first demo' },
    ],
    ctaTitle: 'Got a project in mind?',
    ctaText: 'We discuss goals, constraints and budget. Prices start from 150€ and adapt to requirements.',
    ctaButton: 'Start a project',
  },
  methodology: {
    title: 'Methodology',
    lead:
      'We work on three levels of conclusion, so every person involved — executive, lawyer, IT — understands exactly what was found and what comes next.',
    levels: [
      {
        n: '01',
        title: 'Conclusion for the executive',
        audience: 'Management',
        desc:
          'One clear sentence: “We have a non-conformity / we do not have a non-conformity.” With estimated impact, without promising penalties.',
      },
      {
        n: '02',
        title: 'Conclusion for the lawyer',
        audience: 'Legal department',
        desc:
          'Precise reference to the article of Law No. 195/2024 and, where relevant, GDPR. No references to repealed acts.',
      },
      {
        n: '03',
        title: 'Conclusion for IT',
        audience: 'Technical team',
        desc:
          'Precise identifier: URL, request, script, line of code. A remediation plan with verifiable steps.',
      },
    ],
    example: {
      title: 'Example finding',
      text:
        '“The form on /contact submits the phone field without marking it as mandatory/optional in the privacy policy. The data is sent to a third-party service (forms.example.com) before the consent banner appears. Article 13(e) of Law No. 195/2024 — information at collection. Priority: high.”',
    },
  },
  check: {
    title: 'Free site check',
    lead:
      'A first check, with no obligation. We tell you what we found on the public surface of the site — without entering your system.',
    whatWeCheck: 'What we check',
    whatWeCheckItems: [
      'Presence and quality of the privacy policy and cookie policy.',
      'Operation of the consent banner and withdrawal buttons.',
      'Loading of third-party scripts before consent.',
      'Relevant HTTP headers (CSP, HSTS, X-Content-Type-Options).',
    ],
    whatWeDont: 'What we do not do in the free check',
    whatWeDontItems: [
      'No access to your internal system, databases or admin panel.',
      'No full report — you get a short note with the main conclusions.',
      'No formal legal advice at this stage.',
    ],
    form: {
      site: 'Site address',
      sitePh: 'https://example.md',
      name: 'Name',
      email: 'E-mail',
      emailPh: 'name@organization.md',
      phone: 'Phone (optional)',
      submit: 'Submit request',
      consent:
        'I agree that my data may be processed in order to receive the check note. I have read the privacy policy.',
      privacy: 'View privacy policy',
      success:
        'Request received. We will get back with a check note within 1 business day.',
    },
  },
  blog: {
    title: 'Knowledge',
    lead:
      'Articles about Law No. 195/2024 and its practical application. Without fear-mongering about penalties.',
    readMore: 'Read article',
    updated: 'Updated',
    articles: [
      {
        slug: 'ce-este-legea-195-2024',
        title: 'What Law No. 195/2024 is and what it means for controllers',
        excerpt:
          'An overview of the new law: who falls in scope, what obligations appear and what “controller” means in practice.',
        date: '2026-08-12',
        category: 'Law',
        body:
          'Law No. 195/2024 on the protection of personal data enters into force and brings a number of new obligations for controllers in the Republic of Moldova. The work is based on principles similar to GDPR, but with local particularities we need to know. In this article we explain: who counts as a controller, what “legal basis” means, how subject rights work and what an organisation should do in the first 30 days after the law enters into force.',
      },
      {
        slug: 'consimtamant-vs-interes-legitim',
        title: 'Consent or legitimate interest — how to choose',
        excerpt:
          'Not every processing is based on consent. The article explains when to choose each legal basis and the risks each option carries.',
        date: '2026-08-25',
        category: 'Practice',
        body:
          'Consent is not the only legal basis. Many processing operations rely on legitimate interest or on contract performance. Choosing the wrong basis leads to unnecessary documents and legal exposure. In this article: a checklist to decide which basis fits each concrete case.',
      },
      {
        slug: 'banner-de-cookie-facut-bine',
        title: 'A cookie banner done right — 5 common mistakes',
        excerpt:
          'Hidden “Accept all”, missing “Reject all”, hard withdrawal — problems we see often.',
        date: '2026-09-02',
        category: 'Cookies',
        body:
          'A correct banner must offer equal options: accept or reject with the same number of clicks. In practice we often see a prominent “Accept” button and a hidden “Reject”. This article lists the 5 most common mistakes and shows what a correct banner looks like.',
      },
      {
        slug: 'registrul-prelucrarilor',
        title: 'The processing register — how to start from zero',
        excerpt:
          'The register is not a clerical document, it is a working tool. We show a simple starting structure.',
        date: '2026-09-08',
        category: 'Documents',
        body:
          'The processing register is mandatory for controllers and is the first thing a supervisory authority asks for during an inspection. We show an 8-column structure you can start today without being a data protection expert.',
      },
      {
        slug: 'procedura-de-scurgere',
        title: 'Data breach response procedure',
        excerpt:
          'What to do in the first 72 hours of a breach. Who notifies, what they say, who they tell.',
        date: '2026-09-12',
        category: 'Incidents',
        body:
          'Law No. 195/2024 requires notification of the supervisory authority within 72 hours of detecting a breach. This article shows the concrete steps: who decides, what you document, how you communicate with affected subjects.',
      },
    ],
  },
  about: {
    title: 'About us',
    lead:
      'An executive consulting agency with three departments: Legal, IT, and Project Management. We work with organisations in the Republic of Moldova that need serious assessments, technical implementations and end-to-end support.',
    body:
      'We started DATARISK MOLDOVA as an executive consulting agency that takes on any project the client can imagine — as long as the budget and objectives are realistic. Our structure has three distinct departments: Legal (compliance, contracts, GDPR), IT (web development, apps, integrations) and Project Management (planning, delivery, quality control). This separation allows us to ensure that each project is led by the right specialists, without mixing roles and without promising what we cannot deliver.',
    status: {
      title: 'Our status',
      text:
        'We are not a supervisory authority and we do not issue compliance certificates. We work as an executive consulting agency, and our conclusions are professional assessments.',
    },
    principles: [
      {
        title: 'No fear-mongering',
        text:
          'We do not use the fear of penalties as a sales tool. Our proposals start from what is proven, not from what might happen.',
      },
      {
        title: 'No promises we cannot deliver',
        text:
          'We do not promise “zero penalties” and do not issue “certificates”. We promise evidence, plans and clear answers.',
      },
      {
        title: 'No unnecessary jargon',
        text:
          'The executive, the lawyer and the IT specialist each receive a conclusion in their language. No jargon just to look expert.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    lead:
      'Tell us about your situation. We reply within 1 business day with a clear proposal.',
    form: {
      name: 'Name',
      org: 'Organisation',
      email: 'E-mail',
      emailPh: 'name@organization.md',
      phone: 'Phone',
      taskType: 'Request type',
      taskTypes: [
        'Site assessment',
        'Organisation assessment',
        'Documents package',
        'Consent framework',
        'DPO',
        'Inspection preparation',
        'Training',
        'Other',
      ],
      description: 'Description',
      descriptionPh:
        'Briefly tell us: what kind of organisation you are, what worries you, what you have already tried.',
      consent:
        'I agree that my data may be processed to respond to the request. I have read the privacy policy.',
      privacy: 'View privacy policy',
      submit: 'Submit',
      success:
        'Request received. We will reply within 1 business day.',
    },
    info: {
      emailLabel: 'E-mail',
      phoneLabel: 'Phone',
      phone: '+373 7896 2932',
      hoursLabel: 'Hours',
      hours: 'Monday–Friday, 9:00–18:00 (Chișinău)',
      addressLabel: 'Location',
      address: 'We travel to the client’s premises — anywhere in the Republic of Moldova',
      dpoLabel: 'Data protection officer',
      dpo: 'dpo@datarisk.md',
      responseLabel: 'Response time',
      response: 'Requests: 1 business day. Subject rights: under Article 19 of Law No. 195/2024.',
    },
  },
  faq: {
    title: 'Frequently asked questions',
    lead:
      'Answers to questions we receive often. If you do not find the answer here, write to us.',
    items: [
      {
        q: 'How much does an assessment cost?',
        a: 'The cost depends on the size of the organisation and the number of processes analysed. After the first conversation you receive a firm quote, with no surprises. The free site check is free.',
      },
      {
        q: 'How long does it take?',
        a: 'Site assessment: 1 business day. Other services — individual, depending on the client’s readiness to provide the necessary data. Demos are ready in 3 days. Documents and analyses are evaluated individually.',
      },
      {
        q: 'We already have a privacy policy. Does it help?',
        a: 'Yes. We check whether the policy matches the actual activity and the legislation in force. Many policies are copies of templates that do not fit the organisation.',
      },
      {
        q: 'Are you an authority or a certification body?',
        a: 'No. We are a compliance assessment firm. Our conclusions are professional in nature but are not certificates issued by an authority.',
      },
      {
        q: 'Do you work with organisations outside Moldova?',
        a: 'We work with organisations that have customers or activity in the Republic of Moldova and must comply with Law No. 195/2024.',
      },
      {
        q: 'What happens to the data we sent you?',
        a: 'We keep it only for as long as needed to respond to the request and provide the service. We do not transfer it to third parties. You can request deletion at any time.',
      },
    ],
  },
  footer: {
    about:
      'DATARISK MOLDOVA SRL — cinematic digital studio. GDPR compliance, web development and mobile apps. Law No. 195/2024.',
    navTitle: 'Navigation',
    legalTitle: 'Legal documents',
    contactTitle: 'Contact',
    rights: 'All rights reserved.',
    versionLine: 'v1.0 · 13.09.2026',
    cookieSettings: 'Cookie settings',
  },
  legal: {
    privacy: {
      title: 'Privacy policy',
      updated: '13 September 2026',
      intro:
        'This policy describes how DATARISK MOLDOVA processes personal data collected through this site. The policy complies with Law No. 195/2024 of the Republic of Moldova.',
      sections: [
        {
          h: '1. The controller',
          p: 'The data controller is DATARISK MOLDOVA SRL, IDNO 1026023020925, IBAN MD47AG000000022597426741 (BC MAIB SA, SWIFT AGRNMD2X). Contact: dpo@datarisk.md, +373 7896 2932.',
        },
        {
          h: '2. Data collected',
          p: 'We collect the name, e-mail address, phone number (if provided) and the description of the request. For the free site check, we collect the address of the indicated site. We do not collect sensitive data.',
        },
        {
          h: '3. Legal basis',
          p: 'The basis for processing is your consent (Article 6(1)(a) of Law No. 195/2024), expressed when filling in the form. To respond to requests, the basis is taking pre-contractual steps (b).',
        },
        {
          h: '4. Recipients',
          p: 'Data is not transferred to third-party recipients, except where required by law. We use e-mail on our own domain and an internal request management system.',
        },
        {
          h: '5. Retention period',
          p: 'Data of requests without a contract is kept for 12 months from the last interaction. Data from signed contracts is kept for the duration of the contract and 5 years after.',
        },
        {
          h: '6. Your rights',
          p: 'You have the right of access, rectification, erasure, restriction, portability and objection. You may withdraw consent at any time, with effect for the future. To exercise your rights: dpo@datarisk.md. Response time: 30 days under Article 19.',
        },
        {
          h: '7. Place of processing',
          p: 'Data is stored on servers in the European Union or in the Republic of Moldova. We do not transfer data to third countries without adequate safeguards.',
        },
        {
          h: '8. Security',
          p: 'We apply technical and organisational measures: HTTPS with HSTS, CSP, restricted access, multi-factor authentication for internal systems.',
        },
      ],
    },
    cookies: {
      title: 'Cookie policy',
      updated: '13 September 2026',
      intro:
        'This policy explains what types of cookies and similar technologies we use on the DATARISK MOLDOVA site.',
      sections: [
        {
          h: '1. Necessary cookies',
          p: 'These ensure the basic functioning of the site (for example, remembering the language choice and the theme). They do not require consent and cannot be disabled.',
        },
        {
          h: '2. Analytics cookies',
          p: 'We use cookieless analytics, based on short sessions. We do not set persistent identifiers. This category is only enabled if you have given consent.',
        },
        {
          h: '3. Marketing cookies',
          p: 'We do not use marketing cookies or advertising pixels. Our site does not show third-party ads.',
        },
        {
          h: '4. Control',
          p: 'You can change your choice at any time from the “Cookie settings” button at the bottom of the site. Withdrawal is one click away.',
        },
      ],
    },
    terms: {
      title: 'Terms and conditions',
      updated: '13 September 2026',
      intro:
        'These terms govern the use of the DATARISK MOLDOVA site and the relationships arising from it.',
      sections: [
        {
          h: '1. Definitions',
          p: '“Site” means the website datarisk.md. “Controller” means DATARISK MOLDOVA. “User” means any person accessing the site.',
        },
        {
          h: '2. Content',
          p: 'The content of the site is informational. Conclusions in blog articles do not constitute formal legal advice and do not replace a signed contract.',
        },
        {
          h: '3. Assessment, not certification',
          p: 'The services offered are compliance assessments. We do not issue certificates and do not guarantee the absence of penalties.',
        },
        {
          h: '4. Intellectual property',
          p: 'The content of the site is the property of DATARISK MOLDOVA SRL. No part of the site may be reproduced without the written consent of the rights holder.',
        },
        {
          h: '5. Applicable law',
          p: 'The applicable law is the law of the Republic of Moldova. Disputes are resolved in the courts of Chișinău.',
        },
      ],
    },
    dpa: {
      title: 'Note on the data processing agreement',
      updated: '13 September 2026',
      intro:
        'For clients with whom we sign a services contract, this note describes how we process personal data as a processor — on behalf of and on the instructions of the client-controller.',
      sections: [
        {
          h: '1. Our role',
          p: 'During assessment engagements we act as a processor for the data the client makes available. The client remains the controller.',
        },
        {
          h: '2. Data processed',
          p: 'Data needed for the engagement: client documents, lists of processing operations, internal contacts. We do not process the client’s subjects’ data other than in anonymised form.',
        },
        {
          h: '3. Security measures',
          p: 'HTTPS with HSTS, CSP, multi-factor authentication, restricted access, encryption at rest for sensitive data.',
        },
        {
          h: '4. Sub-processors',
          p: 'We use e-mail on our own domain and an internal request management system. Updated list: dpo@datarisk.md.',
        },
        {
          h: '5. Erasure at end of engagement',
          p: 'At the end of the engagement we return or delete the received data, at the client’s choice, within 30 days.',
        },
      ],
    },
  },
  cookieBanner: {
    title: 'Cookie choice',
    text:
      'We only use necessary cookies for the site to function and cookieless analytics if you opt in. No third-party script loads before you choose.',
    acceptAll: 'Accept all',
    necessary: 'Necessary only',
    rejectAll: 'Reject all',
    settings: 'Settings',
    privacy: 'Cookie policy',
  },
  cookieSettings: {
    title: 'Cookie settings',
    intro:
      'Choose the categories you allow. The setting is stored and you can change it from the footer at any time.',
    necessary: {
      title: 'Necessary',
      desc:
        'Ensure basic functioning: language, theme, remembering the choice. Cannot be disabled.',
    },
    analytics: {
      title: 'Analytics',
      desc:
        'Aggregate measurements without persistent identifiers. Help us understand which pages are useful.',
    },
    marketing: {
      title: 'Marketing',
      desc:
        'We do not and will not use advertising pixels. This category remains always inactive.',
    },
    save: 'Save choice',
    acceptAll: 'Accept all',
    rejectAll: 'Reject all',
    close: 'Close',
  },
}

export const dictionaries: Record<Lang, Dict> = { ro, ru, en }
export type { Dict }
