// Supabase project credentials. Anon keys are public (rotate via dashboard if needed).
// Routing rule: localhost / 127.0.0.1 / file:// → dev project; everything else → prod.
(function () {
  const PROJECTS = {
    prod: {
      url: 'https://niqiutliscrdipzjpmpo.supabase.co',
      anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pcWl1dGxpc2NyZGlwempwbXBvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1MDk0NDIsImV4cCI6MjA4ODA4NTQ0Mn0.aLeKcfNTYfP3APbMWiFd-tufmwpSUkjR2PeoMjrPQ2w',
    },
    dev: {
      url: 'https://jkeckmrqshjvgfdmcyrg.supabase.co',
      anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprZWNrbXJxc2hqdmdmZG1jeXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzOTI5OTEsImV4cCI6MjA5Mzk2ODk5MX0.f2abpEtBs9YNJB0C4e76WImo7L41zrMTaCqsOyg1tv0',
    },
  };

  const host = (typeof location !== 'undefined' && location.hostname) || '';
  const isLocal = host === '' || host === 'localhost' || host === '127.0.0.1' || host.endsWith('.local');
  const env = isLocal ? 'dev' : 'prod';

  window.CONFIG = {
    env,
    supabase: PROJECTS[env],
    PROTOCOL_VERSION: 1,
  };
})();
