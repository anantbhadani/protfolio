import { NextResponse } from 'next/server';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  created_at: string;
  topics: string[];
  private: boolean;
  default_branch: string;
}

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'anantbhadani';
  const token = process.env.GITHUB_TOKEN; // Optional, for higher rate limits

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
    };

    // Add token if available for higher rate limits
    if (token) {
      headers['Authorization'] = `token ${token}`;
    }

    // Fetch all repositories
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=all`,
      { headers, next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter and format repositories
    const formattedRepos = repos
      .filter(() => {
        // Optionally filter out forks or specific repos
        // return !repo.fork && repo.name !== 'protfolio';
        return true; // Include all repos for now
      })
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || 'No description available',
        url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
        createdAt: repo.created_at,
        topics: repo.topics || [],
        isPrivate: repo.private,
        defaultBranch: repo.default_branch,
      }))
      .sort((a, b) => {
        // Sort by updated date (most recent first)
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      });

    return NextResponse.json(formattedRepos, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    );
  }
}

