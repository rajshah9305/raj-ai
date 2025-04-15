import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import Editor from '../components/Editor';
import PreviewPane from '../components/PreviewPane';
import ProjectList from '../components/ProjectList';

export default function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [projects, setProjects] = useState<any[]>([]);
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if(token) {
      axios
        .get(`${process.env.BACKEND_URL}/api/projects`, { headers: { Authorization: `Bearer ${token}` }})
        .then(res => setProjects(res.data))
        .catch(err => console.error(err));
    }
  }, [token]);

  const handleGenerate = async () => {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/api/ai/generate`,
        { prompt },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setGeneratedCode(res.data.code);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <h2>Dashboard</h2>
      <div style={{ marginBottom: '1rem' }}>
        <textarea
          rows={4}
          cols={50}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your app description..."
        ></textarea>
        <br />
        <button onClick={handleGenerate}>Generate Code</button>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <Editor code={generatedCode} />
        <PreviewPane code={generatedCode} />
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h3>Your Projects</h3>
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
}