export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const authors: Record<string, Author> = {
  'algorithyum-systems-group': {
    id: 'algorithyum-systems-group',
    name: 'Algorithyum Systems Group',
    role: 'Senior Security & Search Infrastructure Pod',
    bio: 'An elite squad of systems engineers focused on technical SEO, zero-trust security architecture, database designs, and multi-cloud platforms.',
    avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=60',
    socials: {
      github: 'https://github.com/algorithyum',
      linkedin: 'https://linkedin.com/company/algorithyum'
    }
  },
  'algorithyum-ai-pod': {
    id: 'algorithyum-ai-pod',
    name: 'Algorithyum AI Pod',
    role: 'AI Research & LLM Optimization Lead',
    bio: 'Dedicated to implementing agentic workflows, custom retrieval-augmented generation pipelines, and latency tuning for enterprise models.',
    avatar: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=150&auto=format&fit=crop&q=60',
    socials: {
      github: 'https://github.com/algorithyum',
      linkedin: 'https://linkedin.com/company/algorithyum'
    }
  },
  'algorithyum-devops-group': {
    id: 'algorithyum-devops-group',
    name: 'Algorithyum DevOps Group',
    role: 'Infrastructure & Cloud Orchestration Architects',
    bio: 'Specializing in Horizontal Pod Autoscaling (HPA) protocols, cost-saving spot instance clusters, and Kubernetes ingress controllers.',
    avatar: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?w=150&auto=format&fit=crop&q=60',
    socials: {
      github: 'https://github.com/algorithyum',
      linkedin: 'https://linkedin.com/company/algorithyum'
    }
  }
};

/**
 * Resolves an author object from a given author name or string slug.
 */
export function resolveAuthor(authorName: string): Author {
  const normalizedKey = authorName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return authors[normalizedKey] || {
    id: normalizedKey,
    name: authorName,
    role: 'Contributor',
    bio: 'Technical contributor at Algorithyum, writing about enterprise engineering solutions.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60'
  };
}
