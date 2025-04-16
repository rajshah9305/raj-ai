import { useState, useEffect } from 'react';

interface EditorProps {
  code: string;
}

export default function Editor({ code }: EditorProps) {
  const [text, setText] = useState(code);

  useEffect(() => {
    setText(code);
  }, [code]);

  return (
    <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem' }}>
      <h4>Editor</h4>
      <textarea
        style={{ width: '100%', height: '300px' }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
}