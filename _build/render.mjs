import {createServer} from 'vite';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {readFile,writeFile} from 'node:fs/promises';
const server = await createServer({server:{middlewareMode:true},appType:'custom'});
try { const {default: Home} = await server.ssrLoadModule('/src/page.tsx'); const html=renderToString(React.createElement(Home)); const index=await readFile('index.html','utf8'); await writeFile('index.html',index.replace('<!-- SSR -->',html)); } finally {await server.close()}
