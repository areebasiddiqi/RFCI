import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const posts: Record<string, { title: string; lead: string; content: string[] }> = {
        'rfci-score-explained': {
            title: 'RFCI Score Explained',
            lead: 'The Relative Frequency of Citation/Importance (RFCI) score is a critical metric for understanding topic authority and academic relevance.',
            content: [
                'The RFCI score measures how frequently and importantly a topic is cited in academic literature and authoritative sources. A higher score indicates greater scholarly attention and recognition within the academic community.',
                'This metric is calculated by analyzing citation patterns, publication frequency, and the quality of sources discussing the topic. It provides valuable insights into the academic significance and research interest surrounding any given subject.',
                'Understanding your topic\'s RFCI score can help researchers, students, and professionals gauge the level of academic discourse and identify emerging trends in their field of interest.',
            ],
        },
        'maximizing-smp': {
            title: 'Maximizing Your SMP Score',
            lead: 'Social Media Presence (SMP) is more than just likes and shares; it\'s about impact, reach, and meaningful engagement across digital platforms.',
            content: [
                'The SMP score evaluates how well a topic performs across various social media platforms, measuring factors like engagement rate, viral potential, and audience reach. A strong SMP score indicates high public interest and active online discussion.',
                'To maximize your topic\'s SMP score, focus on creating shareable content, engaging with your audience authentically, and leveraging trending hashtags and discussions. Consistency and quality are key to building a strong social media presence.',
                'Monitor your metrics regularly and adapt your strategy based on what resonates with your audience. Remember that genuine engagement always outperforms artificial inflation tactics.',
            ],
        },
        'ai-powered-analysis': {
            title: 'AI-Powered Topic Analysis',
            lead: 'Artificial intelligence has revolutionized how we analyze and understand topic metrics, providing unprecedented insights with remarkable accuracy.',
            content: [
                'Modern AI systems can process vast amounts of data from academic databases, social media platforms, and online publications to generate comprehensive topic analyses in seconds. This capability has transformed research and content strategy.',
                'Machine learning algorithms can identify patterns and trends that would be impossible for humans to detect manually, offering deeper insights into topic relevance, audience sentiment, and future trajectory.',
                'As AI technology continues to evolve, we can expect even more sophisticated analysis tools that provide real-time insights and predictive analytics for topic performance across multiple dimensions.',
            ],
        },
    };

    const post = posts[slug] || posts['rfci-score-explained'];

    return (
        <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
            <Link href="/blog" className="back-link">
                ← Back to Blog
            </Link>

            <article className="article">
                <h1 className="article-title">{post.title}</h1>

                <div className="article-content">
                    <p className="article-lead">{post.lead}</p>

                    {post.content.map((paragraph, index) => (
                        <p key={index} className="article-paragraph">{paragraph}</p>
                    ))}
                </div>
            </article>
        </div>
    );
}
