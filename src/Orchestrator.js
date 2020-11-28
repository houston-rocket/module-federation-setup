function inject(script) {
    return new Promise(resolve => {
        const s = document.createElement('script');
        s.src = script;
        s.onload = resolve;
        document.body.appendChild(s);
    })
}

async function App() {
    await Promise.all([
        inject('http://localhost:9501/remoteEntry.js'),
        inject('http://localhost:9502/remoteEntry.js')
    ]);

    const { salute1 } = await import('app1/App');
    const { salute2 } = await import('app2/App');

    console.log(salute1());
    console.log(salute2());
}

App();