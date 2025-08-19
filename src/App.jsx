import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// ... existing code ...
import { Counter, Button } from './components'

// ... existing code ...
function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Component Showcase</h1>
            <div className="card">
                <section style={{ display: 'grid', gap: '1rem' }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.1rem' }}>Counter</h2>
                        <Counter value={count} onChange={setCount} label="count is" />
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                            <Button onClick={() => setCount((c) => c + 1)}>Increment</Button>
                            <Button variant="ghost" onClick={() => setCount(0)}>Reset</Button>
                        </div>
                    </div>

                    <div>
                        <h2 style={{ margin: '1rem 0 0.25rem', fontSize: '1.1rem' }}>Buttons</h2>
                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                            <Button>Primary</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button disabled>Disabled</Button>
                        </div>
                    </div>
                </section>
                {/* ... existing code ... */}
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App