import Link from 'next/link';

const posts = [
    {
        slug: 'rfci-score-explained',
        title: 'RFCI Score Explained',
        excerpt: 'Understand what the Relative Frequency of Citation/Importance score means and how it is calculated.',
        date: '2023-10-27',
    },
    {
        slug: 'maximizing-smp',
        title: 'Maximizing Your SMP Score',
        excerpt: 'Tips and strategies to increase your Social Media Presence score effectively.',
        date: '2023-11-15',
    },
    {
        slug: 'ai-powered-analysis',
        title: 'AI-Powered Topic Analysis',
        excerpt: 'How artificial intelligence revolutionizes the way we analyze and understand topic metrics.',
        date: '2023-12-01',
    },
];

export default function Blog() {
    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <h1 className="page-title">Latest Insights</h1>
            <div className="blog-grid">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="blog-card">
                            <div className="blog-date">{post.date}</div>
                            <h2 className="blog-title">{post.title}</h2>
                            <p className="blog-excerpt">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
