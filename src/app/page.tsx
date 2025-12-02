'use client';

import { useState } from 'react';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Estimate RFCI & SMP Scores{' '}
          <span className="gradient-text">Instantly with AI</span>
        </h1>
        <p className="hero-subtitle">
          Discover the Relative Frequency of Citation/Importance and Social Media Presence scores for any topic using advanced AI analysis.
        </p>

        <div className="glass-panel mt-10">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div>
              <input
                type="text"
                required
                className="input"
                placeholder="Enter a topic (e.g., 'Quantum Computing')"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? 'Analyzing...' : 'Calculate Score'}
            </button>
          </form>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {result && (
            <div className="animate-fade-in space-y-6" style={{ marginTop: '2rem' }}>
              <div className="score-grid">
                <div className="score-card">
                  <div className="score-label">RFCI Score</div>
                  <div className="score-value blue">{result.rfciScore}</div>
                </div>
                <div className="score-card">
                  <div className="score-label">SMP Score</div>
                  <div className="score-value purple">{result.smpScore}</div>
                </div>
              </div>
              <div className="analysis-box">
                <h3 className="analysis-title">Analysis</h3>
                <p className="analysis-text">{result.explanation}</p>
              </div>
              <div className="remaining-checks">
                Remaining free checks today: {result.remainingChecks}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
