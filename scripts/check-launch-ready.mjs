import { existsSync, readFileSync } from 'node:fs';

// `prebuild` is a plain Node script, so load .env.local before Next runs.
if (existsSync('.env.local')) {
  for (const line of readFileSync('.env.local', 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match || match[1] in process.env) continue;
    const value = match[2].replace(/^(['"])(.*)\1$/, '$2').replace(/\s+#.*$/, '');
    process.env[match[1]] = value;
  }
}

const ready = process.env.NEXT_PUBLIC_PUBLICATION_READY === 'true';
if (!ready) {
  console.log('Prévia editorial: site será gerado sem indexação e sem anúncios.');
  process.exit(0);
}

const required = [
  'NEXT_PUBLIC_SITE_URL', 'NEXT_PUBLIC_EDITORIAL_OWNER', 'NEXT_PUBLIC_EDITORIAL_CONTACT_URL',
  'NEXT_PUBLIC_SANITY_PROJECT_ID', 'NEXT_PUBLIC_SANITY_DATASET',
  'NEXT_PUBLIC_EDITORIAL_POLICY_APPROVED', 'NEXT_PUBLIC_PRIVACY_POLICY_APPROVED', 'NEXT_PUBLIC_CORRECTIONS_POLICY_APPROVED',
];
const missing = required.filter((name) => !process.env[name]?.trim());
if (missing.length) {
  console.error(`Publicação bloqueada. Configure antes: ${missing.join(', ')}`);
  process.exit(1);
}
if (!/^https:\/\//.test(process.env.NEXT_PUBLIC_SITE_URL)) {
  console.error('Publicação bloqueada: NEXT_PUBLIC_SITE_URL precisa usar HTTPS.');
  process.exit(1);
}
if (!/^https:\/\//.test(process.env.NEXT_PUBLIC_EDITORIAL_CONTACT_URL)) {
  console.error('Publicação bloqueada: configure um canal público de contato por HTTPS (formulário, WhatsApp ou página social).');
  process.exit(1);
}
const policyApprovals = ['NEXT_PUBLIC_EDITORIAL_POLICY_APPROVED', 'NEXT_PUBLIC_PRIVACY_POLICY_APPROVED', 'NEXT_PUBLIC_CORRECTIONS_POLICY_APPROVED'];
const unapproved = policyApprovals.filter((name) => process.env[name] !== 'true');
if (unapproved.length) {
  console.error(`Publicação bloqueada. Revise e aprove as páginas editoriais antes de liberar: ${unapproved.join(', ')}`);
  process.exit(1);
}
if (process.env.NEXT_PUBLIC_ADSENSE_APPROVED === 'true') {
  const adFields = ['NEXT_PUBLIC_ADSENSE_CLIENT', 'NEXT_PUBLIC_ADSENSE_CONSENT_READY', 'NEXT_PUBLIC_ADSENSE_SLOT_HOME', 'NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE'];
  const missingAds = adFields.filter((name) => !process.env[name]?.trim());
  if (missingAds.length || process.env.NEXT_PUBLIC_ADSENSE_CONSENT_READY !== 'true') {
    console.error(`Ativação de anúncios bloqueada. Configure a aprovação e o consentimento antes: ${missingAds.join(', ')}`);
    process.exit(1);
  }
}
console.log('Configuração básica de publicação conferida. O build ainda valida as matérias aprovadas no CMS.');
