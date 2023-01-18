import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState(
    'https://www.example.com:1234/path/here?querystring=kvpairs&another=thing#anchor'
  );

  let data;
  let parsed;
  try {
    const parsed = new URL(url);

    const view = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      domains: parsed.hostname.split('.'),
      port: parsed.port,
      pathname: parsed.pathname,
      path: parsed.pathname.split('/').slice(1),
      hash: parsed.hash,
      searchParams: {},
    };

    parsed.searchParams.forEach((v, k) => (view.searchParams[k] = v));
    data = view;
  } catch (e) {}

  return (
    <div className="App">
      <textarea
        value={url}
        onChange={(e) => setUrl(e.target.value.replace(/\n/g, ''))}
        className="text-input"
      />
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'no data'}
    </div>
  );
}

export default App;
