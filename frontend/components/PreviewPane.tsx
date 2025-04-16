import { useEffect, useRef } from 'react';

interface PreviewPaneProps {
  code: string;
}

export default function PreviewPane({ code }: PreviewPaneProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const document = iframeRef.current.contentDocument;
      if (document) {
        document.open();
        document.write(code);
        document.close();
      }
    }
  }, [code]);

  return (
    <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem' }}>
      <h4>Preview</h4>
      <iframe ref={iframeRef} style={{ width: '100%', height: '320px', border: 'none' }} />
    </div>
  );
}