import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApplicationRoot } from './ApplicationRoot/ApplicationRoot';

export function ReactAppInit() {
    const root = createRoot(document.getElementById('react-app'));
    root.render(
        <ApplicationRoot />
    );
}