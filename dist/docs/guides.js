import { webGuides } from './web.js?v=90';
import { platformGuides } from './platform.js?v=91';
import { frameworkGuides } from './frameworks.js';

import { platformArticles } from './platform-more.js';
import { frameworkArticles } from './frameworks-more.js';
import { advancedPlatform } from './platform-advanced.js';
import { advancedFrameworks } from './frameworks-advanced.js';
import { learningPaths } from '../learning-paths.js';
import { webSecurityGuide } from './web-security.js';
import { gitGuide } from './git.js';
import { githubGuide } from './github.js';

const moreArticles = { ...platformArticles, ...frameworkArticles };
const advancedArticles = { ...advancedPlatform, ...advancedFrameworks };
export const guides = [...webGuides, ...platformGuides, ...frameworkGuides, webSecurityGuide].map(guide => {
  const pages = [...guide.pages, ...(moreArticles[guide.id] ?? []), ...(advancedArticles[guide.id] ?? [])];
  const path = learningPaths[guide.id] ?? guide.lessonOrder;
  if (!path) return { ...guide, pages };

  const byId = Object.fromEntries(pages.map(page => [page.id, page]));
  const groups = path.map(({ title, lessons }) => ({
    title,
    pages: Object.entries(lessons).map(([id, exercises]) => ({ ...byId[id], exercises })),
  }));
  return { ...guide, groups, pages: groups.flatMap(group => group.pages) };
});

export const developerGuides = [gitGuide, githubGuide];
