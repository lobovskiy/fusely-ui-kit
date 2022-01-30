// ======================= highlight.js =========================

import hljs from 'highlight.js/lib/core';

import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('xml', xml);

import scss from 'highlight.js/lib/languages/scss';
hljs.registerLanguage('scss', scss);

import 'highlight.js/styles/foundation.css';

hljs.highlightAll();

// ==============================================================