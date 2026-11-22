import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

async function request(path, { method = 'GET', body, signal } = {}) {
  const response = await fetch('/api' + path, {
    method,
    credentials: 'same-origin',
    headers: body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal,
  });
  if (response.status === 204) return null;
  const payload = await response.json();
  if (!response.ok) {
    const message = Array.isArray(payload.message) ? payload.message.join(' ') : payload.message;
    throw Object.assign(new Error(message || 'Request failed.'), { status: response.status });
  }
  return payload;
}

function Login({ signedIn }) {
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  async function submit(event) {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    setError('');
    setPending(true);
    try { signedIn(await request('/session', { method: 'POST', body: fields })); }
    catch (error) { setError(error.message); }
    finally { setPending(false); }
  }
  return <form className="panel fields" onSubmit={submit}>
    <label>Email<input required type="email" name="email" autoComplete="username" /></label>
    <label>Password<input required type="password" name="password" autoComplete="current-password" maxLength="128" /></label>
    {error && <p role="alert">{error}</p>}
    <button disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</button>
  </form>;
}

function ProductRow({ product, editable, pending, save, remove }) {
  return <tr>
    <td>{product.sku}</td><td>{product.name}</td><td>{product.quantity}</td>
    {editable && <td><div className="actions">
      <form key={product.quantity} onSubmit={event => {
        event.preventDefault();
        save(product.id, Number(new FormData(event.currentTarget).get('quantity')));
      }}>
        <input type="number" name="quantity" min="0" max="1000000" required
          defaultValue={product.quantity} aria-label={'Quantity for ' + product.name} />
        <button disabled={pending}>Save</button>
      </form>
      <button disabled={pending} onClick={() => {
        if (window.confirm('Remove ' + product.name + '?')) remove(product.id);
      }}>Remove</button>
    </div></td>}
  </tr>;
}

function Inventory({ user, signedOut }) {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const editable = user.role === 'admin';
  function fail(error) {
    if (error.status === 401) signedOut();
    else if (error.name !== 'AbortError') setError(error.message);
  }
  useEffect(() => {
    const controller = new AbortController();
    request('/products', { signal: controller.signal }).then(setProducts).catch(fail);
    return () => controller.abort();
  }, [user.id]);
  async function change(action) {
    setError('');
    setPending(true);
    try { await action(); }
    catch (error) { fail(error); }
    finally { setPending(false); }
  }
  function add(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    change(async () => {
      const product = await request('/products', { method: 'POST', body: { ...fields, quantity: Number(fields.quantity) } });
      setProducts(rows => [...rows, product].sort((a, b) => a.sku.localeCompare(b.sku)));
      form.reset();
    });
  }
  return <>
    <div className="toolbar">
      <p>Signed in as {user.email} ({user.role})</p>
      <button disabled={pending} onClick={() => change(async () => {
        await request('/session/logout', { method: 'POST' });
        signedOut();
      })}>Sign out</button>
    </div>
    {error && <p role="alert">{error}</p>}
    {products === null ? (!error && <p role="status">Loading inventory…</p>) : <>
      {editable && <form className="panel add-form" onSubmit={add}>
        <label>SKU<input name="sku" maxLength="32" required /></label>
        <label>Name<input name="name" maxLength="100" required /></label>
        <label>Quantity<input name="quantity" type="number" min="0" max="1000000" defaultValue="0" required /></label>
        <button disabled={pending}>Add product</button>
      </form>}
      {products.length ? <div className="table-wrap"><table>
        <thead><tr><th scope="col">SKU</th><th scope="col">Product</th><th scope="col">Quantity</th>{editable && <th scope="col">Actions</th>}</tr></thead>
        <tbody>{products.map(product => <ProductRow key={product.id} product={product} editable={editable} pending={pending}
          save={(id, quantity) => change(async () => {
            const saved = await request('/products/' + id, { method: 'PATCH', body: { quantity } });
            setProducts(rows => rows.map(row => row.id === id ? saved : row));
          })}
          remove={id => change(async () => {
            await request('/products/' + id, { method: 'DELETE' });
            setProducts(rows => rows.filter(row => row.id !== id));
          })}
        />)}</tbody>
      </table></div> : <p>No products yet.</p>}
    </>}
  </>;
}

function App() {
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    request('/session', { signal: controller.signal }).then(setUser).catch(error => {
      if (error.name === 'AbortError') return;
      setUser(null);
      if (error.status !== 401) setError('Could not reach the API. You can try signing in again.');
    });
    return () => controller.abort();
  }, []);
  return <main>
    <h1>Café Inventory</h1>
    {error && <p role="alert">{error}</p>}
    {user === undefined ? <p role="status">Checking session…</p> :
      user ? <Inventory user={user} signedOut={() => setUser(null)} /> :
      <Login signedIn={viewer => { setError(''); setUser(viewer); }} />}
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
